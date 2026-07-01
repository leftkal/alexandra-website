const STATE_COOKIE = "decap_github_oauth_state";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return corsResponse(env);
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return new Response("OK", { headers: corsHeaders(env) });
    }

    if (request.method === "GET" && url.pathname === "/auth") {
      const configError = validateEnv(env);
      if (configError) return textError(configError, 500, env);

      const state = createState();
      const callbackUrl = new URL("/callback", url.origin).toString();
      const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
      authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      authorizeUrl.searchParams.set("redirect_uri", callbackUrl);
      authorizeUrl.searchParams.set("scope", env.GITHUB_SCOPE || "public_repo");
      authorizeUrl.searchParams.set("state", state);

      return new Response(null, {
        status: 302,
        headers: {
          Location: authorizeUrl.toString(),
          "Set-Cookie": `${STATE_COOKIE}=${state}; Path=/; Max-Age=600; HttpOnly; Secure; SameSite=Lax`,
          ...corsHeaders(env),
        },
      });
    }

    if (request.method === "GET" && url.pathname === "/callback") {
      const configError = validateEnv(env);
      if (configError) return callbackHtml({ error: configError }, env);

      const cookieState = getCookie(request.headers.get("Cookie"), STATE_COOKIE);
      const queryState = url.searchParams.get("state");
      const code = url.searchParams.get("code");
      const oauthError = url.searchParams.get("error_description") || url.searchParams.get("error");

      if (oauthError) return callbackHtml({ error: oauthError }, env);
      if (!code) return callbackHtml({ error: "Missing GitHub OAuth code." }, env);
      if (!cookieState || !queryState || cookieState !== queryState) {
        return callbackHtml({ error: "Invalid OAuth state." }, env);
      }

      try {
        const callbackUrl = new URL("/callback", url.origin).toString();
        const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "decap-cms-cloudflare-oauth-proxy",
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: callbackUrl,
            state: queryState,
          }),
        });

        const data = await tokenResponse.json();
        if (!tokenResponse.ok || data.error || !data.access_token) {
          return callbackHtml({ error: data.error_description || data.error || "GitHub token exchange failed." }, env);
        }

        return callbackHtml({ token: data.access_token }, env);
      } catch (error) {
        return callbackHtml({ error: error.message || "GitHub token exchange failed." }, env);
      }
    }

    return textError("Not found", 404, env);
  },
};

function validateEnv(env) {
  if (!env.GITHUB_CLIENT_ID) return "Missing GITHUB_CLIENT_ID.";
  if (!env.GITHUB_CLIENT_SECRET) return "Missing GITHUB_CLIENT_SECRET.";
  if (!env.ALLOWED_ORIGIN) return "Missing ALLOWED_ORIGIN.";
  return null;
}

function createState() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return base64Url(bytes);
}

function base64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function getCookie(cookieHeader, name) {
  if (!cookieHeader) return null;
  const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function callbackHtml({ token, error }, env) {
  const allowedOrigin = env.ALLOWED_ORIGIN || "";
  const message = token
    ? `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`
    : `authorization:github:error:${JSON.stringify({ message: error || "Authentication failed." })}`;

  return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>GitHub Authorization</title>
  </head>
  <body>
    <p>Completing GitHub authorization…</p>
    <script>
      (function () {
        var allowedOrigin = ${JSON.stringify(allowedOrigin)};
        var finalMessage = ${JSON.stringify(message)};
        var target = window.opener || window.parent;

        function sendFinalMessage() {
          if (target && allowedOrigin) target.postMessage(finalMessage, allowedOrigin);
        }

        if (target) target.postMessage("authorizing:github", "*");

        window.addEventListener("message", function (event) {
          if (event.origin !== allowedOrigin) return;
          if (event.data === "authorizing:github") sendFinalMessage();
        });

        setTimeout(sendFinalMessage, 1000);
      })();
    </script>
  </body>
</html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Set-Cookie": `${STATE_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
      ...corsHeaders(env),
    },
  });
}

function corsResponse(env) {
  return new Response(null, { status: 204, headers: corsHeaders(env) });
}

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function textError(message, status, env) {
  return new Response(message, { status, headers: corsHeaders(env) });
}

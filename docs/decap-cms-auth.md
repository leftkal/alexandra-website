# Decap CMS GitHub OAuth via Cloudflare Worker

This project can use `workers/decap-github-auth.js` as a small GitHub OAuth proxy for Decap CMS.

## GitHub OAuth App

Create a GitHub OAuth App and set the callback URL to:

```text
https://<your-worker-domain>/callback
```

Use the Worker URL as the Decap CMS auth base URL.

## Required Worker secrets / variables

Set these in Cloudflare Workers:

```text
GITHUB_CLIENT_ID=<github-oauth-client-id>
GITHUB_CLIENT_SECRET=<github-oauth-client-secret>
ALLOWED_ORIGIN=https://<your-site-domain>
GITHUB_SCOPE=public_repo
```

`GITHUB_SCOPE` is optional and defaults to `public_repo`.

## Decap config snippet

In the Decap CMS config, point `base_url` at the Worker origin:

```yaml
backend:
  name: github
  repo: <owner>/<repo>
  branch: main
  base_url: https://<your-worker-domain>
  auth_endpoint: auth
```

## Scope notes

- Use `public_repo` for public repositories. This is the least-privileged default for publishing to public repos.
- Use `repo` only when the site repository is private, because it grants broader access to private repositories.
- Never hardcode the GitHub client secret in the repository; keep it as a Cloudflare Worker secret.

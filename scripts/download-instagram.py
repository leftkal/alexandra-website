#!/usr/bin/env python3
"""Download Instagram profile media with Instaloader.

Usage:
  python scripts/download-instagram.py daleria_xplorelens
  python scripts/download-instagram.py daleria_xplorelens --login your_username
"""

from __future__ import annotations

import argparse
import http.cookiejar
import sys
from pathlib import Path

import instaloader


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Download all media from an Instagram profile."
    )
    parser.add_argument("profile", help="Instagram profile username, without @")
    parser.add_argument(
        "--output",
        default="assets/source/instagram",
        help="Base output directory. Defaults to assets/source/instagram",
    )
    parser.add_argument(
        "--login",
        help="Optional Instagram username. Reuses/saves an Instaloader session.",
    )
    parser.add_argument(
        "--cookies",
        help="Optional Netscape-format cookies.txt exported from a logged-in browser session.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    profile_name = args.profile.lstrip("@")
    output_dir = Path(args.output) / profile_name
    output_dir.mkdir(parents=True, exist_ok=True)

    loader = instaloader.Instaloader(
        dirname_pattern=str(output_dir),
        download_pictures=True,
        download_videos=True,
        download_video_thumbnails=True,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        compress_json=False,
        post_metadata_txt_pattern="",
        max_connection_attempts=3,
    )

    if args.login:
        try:
            loader.load_session_from_file(args.login)
        except FileNotFoundError:
            loader.interactive_login(args.login)
            loader.save_session_to_file()

    if args.cookies:
        cookie_jar = http.cookiejar.MozillaCookieJar(args.cookies)
        cookie_jar.load(ignore_discard=True, ignore_expires=True)
        loader.context._session.cookies.update(cookie_jar)

    try:
        profile = instaloader.Profile.from_username(loader.context, profile_name)
        for post in profile.get_posts():
            loader.download_post(post, target=profile_name)
    except instaloader.exceptions.InstaloaderException as error:
        print(f"Instagram download failed: {error}", file=sys.stderr)
        print(
            "If this happens for every profile, Instagram is rejecting the current "
            "Instaloader session/API access. Open Instagram in a browser, resolve any "
            "security prompts, then retry with --login or --cookies.",
            file=sys.stderr,
        )
        raise SystemExit(1) from error

    print(f"Downloaded media to {output_dir}")


if __name__ == "__main__":
    main()

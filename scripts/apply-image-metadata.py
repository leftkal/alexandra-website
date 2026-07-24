#!/usr/bin/env python3
"""Embed simple XMP copyright metadata into CMS-managed JPEG images.

This script is intentionally dependency-free so it can run locally and in
GitHub Actions. It writes an XMP APP1 segment to JPEG/JPG files under the
given folder and replaces any previous XMP packet written in the same place.
"""

from __future__ import annotations

import argparse
import html
from pathlib import Path


XMP_IDENTIFIER = b"http://ns.adobe.com/xap/1.0/\x00"
CREATOR = "Alexandra Maria Deli"
SITE_URL = "https://alexandra-maria-deli.gr/"
COPYRIGHT_NOTICE = "© Alexandra Maria Deli. All rights reserved."
USAGE_TERMS = (
    "All rights reserved. No copying, reposting, editing, selling, publishing, "
    "commercial use, editorial use, promotional use, or AI-training use is "
    "permitted without prior written permission."
)
WEB_STATEMENT = "https://alexandra-maria-deli.gr/copyright/"


def build_xmp_packet() -> bytes:
    creator = html.escape(CREATOR)
    copyright_notice = html.escape(COPYRIGHT_NOTICE)
    usage_terms = html.escape(USAGE_TERMS)
    site_url = html.escape(SITE_URL)
    web_statement = html.escape(WEB_STATEMENT)

    packet = f'''<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="alexandra-website-metadata-script">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:xmp="http://ns.adobe.com/xap/1.0/"
      xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"
      xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/">
      <dc:creator>
        <rdf:Seq>
          <rdf:li>{creator}</rdf:li>
        </rdf:Seq>
      </dc:creator>
      <dc:rights>
        <rdf:Alt>
          <rdf:li xml:lang="x-default">{copyright_notice}</rdf:li>
        </rdf:Alt>
      </dc:rights>
      <xmp:CreatorTool>{site_url}</xmp:CreatorTool>
      <xmpRights:Marked>True</xmpRights:Marked>
      <xmpRights:WebStatement>{web_statement}</xmpRights:WebStatement>
      <xmpRights:UsageTerms>
        <rdf:Alt>
          <rdf:li xml:lang="x-default">{usage_terms}</rdf:li>
        </rdf:Alt>
      </xmpRights:UsageTerms>
      <photoshop:Credit>{creator}</photoshop:Credit>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>'''

    return XMP_IDENTIFIER + packet.encode("utf-8")


def app1_segment(payload: bytes) -> bytes:
    length = len(payload) + 2
    if length > 65535:
        raise ValueError("XMP payload is too large for a JPEG APP1 segment")

    return b"\xff\xe1" + length.to_bytes(2, "big") + payload


def strip_leading_xmp_segments(data: bytes) -> tuple[bytes, int]:
    """Return copied leading metadata without XMP and current offset.

    We preserve APP/COM metadata at the beginning of the JPEG, except existing
    XMP APP1 segments, then insert our canonical XMP packet before image data.
    """

    if not data.startswith(b"\xff\xd8"):
        return data, len(data)

    out = bytearray(data[:2])
    offset = 2
    size = len(data)

    while offset + 4 <= size and data[offset] == 0xFF:
        marker = data[offset + 1]

        # Preserve only leading APP0-APP15 and COM blocks before inserting XMP.
        if not (0xE0 <= marker <= 0xEF or marker == 0xFE):
            break

        segment_length = int.from_bytes(data[offset + 2:offset + 4], "big")
        segment_end = offset + 2 + segment_length
        if segment_length < 2 or segment_end > size:
            break

        payload = data[offset + 4:segment_end]
        is_xmp = marker == 0xE1 and payload.startswith(XMP_IDENTIFIER)
        if not is_xmp:
            out.extend(data[offset:segment_end])

        offset = segment_end

    return bytes(out), offset


def apply_metadata(path: Path, xmp: bytes) -> bool:
    original = path.read_bytes()
    if not original.startswith(b"\xff\xd8"):
        return False

    leading, offset = strip_leading_xmp_segments(original)
    updated = leading + app1_segment(xmp) + original[offset:]
    if updated == original:
        return False

    path.write_bytes(updated)
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description="Embed Alexandra Maria Deli copyright metadata into CMS images.")
    parser.add_argument("folder", nargs="?", default="public/images/cms", help="Folder containing CMS-managed images")
    args = parser.parse_args()

    folder = Path(args.folder)
    xmp = build_xmp_packet()
    changed = 0
    scanned = 0

    for path in sorted(folder.glob("*")):
        if not path.is_file() or path.suffix.lower() not in {".jpg", ".jpeg"}:
            continue
        scanned += 1
        if apply_metadata(path, xmp):
            changed += 1

    print(f"Scanned {scanned} JPEG image(s); updated {changed} file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

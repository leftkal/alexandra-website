# SEO Landing Pages

## Architecture

The SEO landing page system adds static, content-driven pages alongside the existing single-page portfolio without modifying the homepage. Each landing page targets a specific search keyword with unique metadata, FAQ content, and structured data.

### Directory Structure

```
src/
├── components/
│   ├── Schema.astro      # JSON-LD structured data (Person + WebPage + BreadcrumbList)
│   ├── Hero.astro        # Landing page hero section (H1, intro, keyword eyebrow)
│   ├── FAQ.astro         # FAQ accordion with FAQPage schema markup
│   ├── Gallery.astro     # Gallery section linking back to main portfolio
│   └── CTA.astro         # Call-to-action section
├── layouts/
│   ├── BaseLayout.astro  # Root HTML shell (meta, OG, Twitter card, canonical, CSS)
│   └── LandingPageLayout.astro  # Landing page layout (header, footer, Schema)
├── content/
│   └── landing-pages.ts  # Typed content source for all landing pages
└── pages/
    ├── index.astro       # Existing homepage (untouched)
    └── [slug].astro      # Dynamic route: generates one static page per landing page
```

### Data Flow

1. `src/content/landing-pages.ts` exports a typed `LandingPage[]` array and a `getLandingPage(slug)` helper.
2. `src/pages/[slug].astro` implements `getStaticPaths()` to iterate over all landing pages and generate static HTML at build time.
3. Each route passes its `LandingPage` object as props to the layout and components.
4. `LandingPageLayout` injects Schema JSON-LD into the `<head>`.
5. Components render the SEO-optimised body content.
6. `@astrojs/sitemap` automatically discovers all generated routes and includes them in the sitemap.

## Generated Routes

| Slug | URL | Meta Title | Keyword |
|---|---|---|---|
| `photographer-athens` | `/photographer-athens/` | Athens Photographer \| Alexandra Maria Deli | photographer athens |
| `portrait-photographer-athens` | `/portrait-photographer-athens/` | Portrait Photographer Athens \| Alexandra Maria Deli | portrait photographer athens |
| `personal-branding-photographer-athens` | `/personal-branding-photographer-athens/` | Personal Branding Photographer Athens \| Alexandra Maria Deli | personal branding photographer athens |
| `editorial-photographer-athens` | `/editorial-photographer-athens/` | Editorial Photographer Athens \| Alexandra Maria Deli | editorial photographer athens |
| `photoshoot-athens` | `/photoshoot-athens/` | Photoshoot in Athens \| Alexandra Maria Deli | photoshoot athens |
| `acropolis-photoshoot` | `/acropolis-photoshoot/` | Acropolis Photoshoot Athens \| Alexandra Maria Deli | acropolis photoshoot athens |
| `plaka-photoshoot` | `/plaka-photoshoot/` | Plaka Photoshoot Athens \| Alexandra Maria Deli | plaka photoshoot athens |
| `photographer-athens-prices` | `/photographer-athens-prices/` | Photographer Athens Prices \| Alexandra Maria Deli | photographer athens prices |

## How to Add a New Landing Page

1. Open `src/content/landing-pages.ts`.
2. Add a new entry to the `landingPages` array matching the `LandingPage` interface:

```typescript
{
  slug: 'your-new-slug',
  title: 'Page Title',
  metaTitle: 'Meta Title for SEO | Alexandra Maria Deli',
  metaDescription: 'Unique meta description under 160 characters.',
  h1: 'Main Heading',
  introduction: 'A paragraph introducing the topic.',
  keyword: 'target keyword phrase',
  faq: [
    { question: 'First question?', answer: 'Answer text.' },
    { question: 'Second question?', answer: 'Answer text.' },
  ],
  schemaType: 'Photographer', // or 'LocalBusiness'
}
```

3. Run `npm run build`. The new page will be:
   - Generated as `/your-new-slug/index.html`
   - Added to `sitemap-0.xml` automatically
   - Available at `https://alexandra-maria-deli.gr/your-new-slug/`

## SEO Rationale

Each landing page is designed to rank for a specific local keyword related to photography services in Athens.

### On-Page Elements

- **Unique `<title>`** per page — primary keyword near the beginning, brand name after the pipe.
- **Unique `<meta name="description">`** — 150–160 characters, includes keyword call to action.
- **Canonical URL** — each page self-references its canonical to prevent duplicate content issues.
- **`<h1>`** — matches the primary keyword phrase.
- **Keyword eyebrow** — displayed above the h1 as a visual keyword signal.
- **FAQ section** — maps to `FAQPage` + `Question` + `Answer` schema for rich snippet eligibility.
- **Internal links** — every page links back to the homepage (`/`), portfolio (`/#work`), and contact section (`/#contact`).

### Structured Data

Each page injects three JSON-LD blocks:

1. **Person (Photographer)** — `schema.org/Photographer` with name, description, URL, email, phone, address, `sameAs`, `knowsAbout`.
2. **WebPage** — `schema.org/WebPage` with `@id`, name, description, `isPartOf`, `about`, `keywords`.
3. **BreadcrumbList** — Home > Page Name (only on landing pages, not the homepage).

### Sitemap

`@astrojs/sitemap` automatically includes all landing pages. The sitemap is referenced in `/robots.txt`. No manual sitemap updates are needed when adding new pages.

### Image / OG

All pages share the same fallback OG image (the hero shot from the portfolio). Can be customised per page by passing an `image` prop if needed.

## Verification

After building:

```bash
npm run build
# Check generated files:
ls dist/*/index.html
# Verify sitemap coverage:
grep -oP '(?<=<loc>)[^<]+' dist/sitemap-0.xml
# Verify metadata on a page:
grep -E '(title|canonical|description|ld\+json|h1)' dist/photographer-athens/index.html
```

## Constraints

- The existing homepage (`index.astro`) is completely untouched.
- No visual design changes to the portfolio.
- All landing pages use a simple, clean layout consistent with the site's palette but visually distinct from the portfolio page.
- Pages are static — no client-side JavaScript required for core content display.

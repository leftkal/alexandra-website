# Blog — Adding a New Post

## Quick Start

1. Copy the template file:
   ```bash
   cp src/content/blog/example-post.md src/content/blog/<your-slug>.md
   ```

2. Edit the frontmatter fields (YAML between the `---` lines):
   - `title` — Post title
   - `description` — Meta description for SEO/previews (1–2 sentences)
   - `date` — Publication date (YYYY-MM-DD, without quotes)
   - `image` — Hero image path relative to `public/` (optional)
   - `category` — One of: `Athens Photography`, `Portrait Tips`, `Behind the Lens`, `Location Guides`, `Client Stories`, `Photography Gear`
   - `tags` — Array of lowercase tag strings (optional)
   - `author` — Usually `"Alexandra Maria Deli"`
   - `readingTime` — e.g., `"5 min read"`
   - `draft` — Set to `true` to exclude from production builds
   - `canonical` — Custom canonical URL (optional; omit for auto-generated)

3. Write the post body in Markdown below the frontmatter.

## Conventions

- **File name determines the URL slug** (e.g., `my-post.md` → `/blog/my-post/`). Keep the filename and the `title` field consistent.
- **Drafts**: Set `draft: true` to keep a post visible in dev but hidden in production (`astro build`).
- **Images**: Store in `public/images/blog/` and reference as `images/blog/your-image.jpg` in the `image` frontmatter.
- **Categories**: Stick to the predefined list above for proper filtering on the blog index.
- **Date format**: Use `YYYY-MM-DD` in YAML (without surrounding quotes). Latest posts appear first on the index.
- **Build**: Run `astro build` to generate static pages. The blog index and individual post pages are generated automatically.

## File Locations

| Purpose | Path |
|---|---|
| Blog post content | `src/content/blog/*.md` |
| Content collection config | `src/content.config.ts` |
| Blog types & helpers | `src/content/blog/config.ts` |
| Blog post layout | `src/layouts/BlogLayout.astro` |
| Blog index page | `src/pages/blog/index.astro` |
| Blog post page | `src/pages/blog/[slug].astro` |

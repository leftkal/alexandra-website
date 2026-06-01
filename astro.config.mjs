import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leftkal.github.io',
  base: '/alexandra-website',
  integrations: [sitemap()],
});

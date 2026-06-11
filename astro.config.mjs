import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexandra-maria-deli.gr',
  integrations: [sitemap()],
});

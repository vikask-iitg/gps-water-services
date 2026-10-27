import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gpswater.in',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});

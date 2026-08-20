// @ts-check
import { defineConfig } from 'astro/config';

/* Domain situs ini. Dipakai untuk canonical, sitemap, dan data terstruktur.
   WAJIB berbeda dari situs sales lain — dua domain dgn identitas terstruktur
   yang sama akan dibaca Google sebagai satu entitas. */
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL ?? 'https://omodajaecoosemarang.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});

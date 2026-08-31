// @ts-check
import { defineConfig } from 'astro/config';

/* Domain situs ini. Dipakai untuk canonical, sitemap, dan data terstruktur.
   WAJIB berbeda dari situs sales lain — dua domain dgn identitas terstruktur
   yang sama akan dibaca Google sebagai satu entitas. */
import sitemap from '@astrojs/sitemap';

/* Pakai host www. Vercel mengalihkan domain utama ke www dengan 308, jadi
   canonical, sitemap, dan data terstruktur harus menunjuk host yang benar-benar
   melayani. Menunjuk versi tanpa www membuat setiap URL yang diberikan ke
   Google adalah URL yang dialihkan — sinyal yang saling bertentangan. */

const SITE_URL = process.env.SITE_URL ?? 'https://www.omodajaecoosemarang.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});

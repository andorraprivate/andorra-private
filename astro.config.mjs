// @ts-check
import { defineConfig } from 'astro/config';

// Static HTML only. Do not add a sitemap.xml.ts endpoint — Vercel
// treats that as a serverless function and /sitemap.xml 500s.
// https://astro.build/config
export default defineConfig({
  site: 'https://www.privateandorra.com',
  output: 'static',
  trailingSlash: 'never',
  // Keep spaces around inline <a> in running prose. compressHTML
  // otherwise turns `on\n<a>` into `on<a>` (theofficial, onbecome).
  compressHTML: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'ca'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

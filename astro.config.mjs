// @ts-check
import { defineConfig } from 'astro/config';

// Static HTML only. Do not add a sitemap.xml.ts endpoint — Vercel
// treats that as a serverless function and /sitemap.xml 500s.
// https://astro.build/config
export default defineConfig({
  site: 'https://www.privateandorra.com',
  output: 'static',
  trailingSlash: 'never',
});

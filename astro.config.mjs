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
  redirects: {
    "/residence-without-work": "/passive-residency",
    "/self-employed-residence": "/company-active-residency",
    "/company-formation": "/company-active-residency",
    "/opening-a-bank-account": "/the-file",
    "/parishes": "/where-to-live",
    "/parishes/andorra-la-vella": "/where-to-live",
    "/parishes/escaldes-engordany": "/where-to-live",
    "/parishes/encamp": "/where-to-live",
    "/parishes/canillo": "/where-to-live",
    "/parishes/ordino": "/where-to-live",
    "/parishes/la-massana": "/where-to-live",
    "/parishes/sant-julia-de-loria": "/where-to-live",
  },
});

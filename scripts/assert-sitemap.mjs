/**
 * Fail the build if the sitemap is missing, is a Vercel function route,
 * or omits a live public path. Does not invent directory listings.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

if (existsSync(join(root, "src/pages/sitemap.xml.ts"))) {
  throw new Error(
    "src/pages/sitemap.xml.ts must not exist — Vercel treats it as a function and 500s.",
  );
}
if (existsSync(join(root, "src/pages/sitemap.xml.js"))) {
  throw new Error("Do not add a generated sitemap endpoint.");
}

const sitemapPath = join(root, "dist/sitemap.xml");
if (!existsSync(sitemapPath)) {
  throw new Error("dist/sitemap.xml is missing. Keep public/sitemap.xml as a static file.");
}

const xml = readFileSync(sitemapPath, "utf8");
if (!xml.startsWith("<?xml")) {
  throw new Error("dist/sitemap.xml is not XML.");
}
if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
  throw new Error("dist/sitemap.xml is not a urlset sitemap.");
}

const required = [
  "https://www.privateandorra.com/",
  "https://www.privateandorra.com/become-a-resident",
  "https://www.privateandorra.com/directory",
  "https://www.privateandorra.com/directory/jane-whittaker",
  "https://www.privateandorra.com/practitioner-map",
  "https://www.privateandorra.com/living-in-andorra",
  "https://www.privateandorra.com/parishes",
  "https://www.privateandorra.com/moving-to-andorra",
  "https://www.privateandorra.com/opening-a-bank-account",
  "https://www.privateandorra.com/buying-property",
  "https://www.privateandorra.com/company-formation",
  "https://www.privateandorra.com/digital-nomad",
  "https://www.privateandorra.com/residence-without-work",
  "https://www.privateandorra.com/family-reunification",
  "https://www.privateandorra.com/self-employed-residence",
  "https://www.privateandorra.com/entrepreneur-residence",
  "https://www.privateandorra.com/tax-residence",
  "https://www.privateandorra.com/residency-vs-tax",
  "https://www.privateandorra.com/passive-residency",
  "https://www.privateandorra.com/company-active-residency",
  "https://www.privateandorra.com/the-file",
  "https://www.privateandorra.com/where-to-live",
  "https://www.privateandorra.com/shortlist",
  "https://www.privateandorra.com/buying-property-in-2026",
  "https://www.privateandorra.com/official-sources",
  "https://www.privateandorra.com/education",
  "https://www.privateandorra.com/healthcare",
  "https://www.privateandorra.com/robots.txt",
  "https://www.privateandorra.com/fr",
  "https://www.privateandorra.com/es",
  "https://www.privateandorra.com/ca",
  "https://www.privateandorra.com/fr/become-a-resident",
  "https://www.privateandorra.com/es/become-a-resident",
  "https://www.privateandorra.com/ca/become-a-resident",
  "https://www.privateandorra.com/fr/residency-vs-tax",
  "https://www.privateandorra.com/es/residency-vs-tax",
  "https://www.privateandorra.com/ca/residency-vs-tax",
  "https://www.privateandorra.com/fr/directory",
  "https://www.privateandorra.com/es/directory",
  "https://www.privateandorra.com/ca/directory",
  "https://www.privateandorra.com/fr/living-in-andorra",
  "https://www.privateandorra.com/es/living-in-andorra",
  "https://www.privateandorra.com/ca/living-in-andorra",
  "https://www.privateandorra.com/fr/parishes",
  "https://www.privateandorra.com/es/parishes",
  "https://www.privateandorra.com/ca/parishes",
  "https://www.privateandorra.com/fr/properties",
  "https://www.privateandorra.com/es/properties",
  "https://www.privateandorra.com/ca/properties",
  "https://www.privateandorra.com/fr/moving-to-andorra",
  "https://www.privateandorra.com/es/moving-to-andorra",
  "https://www.privateandorra.com/ca/moving-to-andorra",
  "https://www.privateandorra.com/fr/residence-without-work",
  "https://www.privateandorra.com/es/residence-without-work",
  "https://www.privateandorra.com/ca/residence-without-work",
  "https://www.privateandorra.com/fr/digital-nomad",
  "https://www.privateandorra.com/es/digital-nomad",
  "https://www.privateandorra.com/ca/digital-nomad",
  "https://www.privateandorra.com/fr/family-reunification",
  "https://www.privateandorra.com/es/family-reunification",
  "https://www.privateandorra.com/ca/family-reunification",
  "https://www.privateandorra.com/fr/tax-residence",
  "https://www.privateandorra.com/es/tax-residence",
  "https://www.privateandorra.com/ca/tax-residence",
  "https://www.privateandorra.com/fr/self-employed-residence",
  "https://www.privateandorra.com/es/self-employed-residence",
  "https://www.privateandorra.com/ca/self-employed-residence",
  "https://www.privateandorra.com/fr/entrepreneur-residence",
  "https://www.privateandorra.com/es/entrepreneur-residence",
  "https://www.privateandorra.com/ca/entrepreneur-residence",
  "https://www.privateandorra.com/fr/the-file",
  "https://www.privateandorra.com/es/the-file",
  "https://www.privateandorra.com/ca/the-file",
  "https://www.privateandorra.com/fr/opening-a-bank-account",
  "https://www.privateandorra.com/es/opening-a-bank-account",
  "https://www.privateandorra.com/ca/opening-a-bank-account",
  "https://www.privateandorra.com/fr/buying-property",
  "https://www.privateandorra.com/es/buying-property",
  "https://www.privateandorra.com/ca/buying-property",
];

const missing = required.filter((url) => !xml.includes(`<loc>${url}</loc>`));
if (missing.length) {
  throw new Error(`Sitemap is missing live routes:\n${missing.join("\n")}`);
}

if (!existsSync(join(root, "dist/google1dc06f863aa0062d.html"))) {
  throw new Error("GSC verification file missing from dist.");
}

const locCount = (xml.match(/<loc>/g) || []).length;
console.log(`Sitemap assertion passed (${locCount} loc entries).`);

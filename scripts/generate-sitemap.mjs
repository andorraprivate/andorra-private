/**
 * Writes public/sitemap.xml as a static urlset.
 * Do not add src/pages/sitemap.xml.ts — Vercel treats that as a function and 500s.
 * Directory and parish slugs come only from src/data. No invented listings.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://www.privateandorra.com";
const lastmod = new Date().toISOString().slice(0, 10);

const priorities = {
  "/": "1.0",
  "/become-a-resident": "0.9",
  "/properties": "0.9",
  "/moving-to-andorra": "0.85",
  "/moving-to-andorra-from-the-uk": "0.85",
  "/moving-to-andorra-from-spain": "0.85",
  "/moving-to-andorra-from-france": "0.85",
  "/opening-a-bank-account": "0.85",
  "/buying-property": "0.85",
  "/company-formation": "0.85",
  "/digital-nomad": "0.85",
  "/residence-without-work": "0.85",
  "/tax-residence": "0.85",
  "/family-reunification": "0.85",
  "/self-employed-residence": "0.85",
  "/entrepreneur-residence": "0.85",
  "/living-in-andorra": "0.8",
  "/parishes": "0.8",
  "/directory": "0.8",
  "/practitioner-map": "0.8",
  "/official-sources": "0.7",
  "/education": "0.7",
  "/healthcare": "0.7",
  "/privacy": "0.5",
  "/robots.txt": "0.3",
};

function walkPages(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walkPages(path, acc);
    else if (entry.name.endsWith(".astro")) acc.push(path);
  }
  return acc;
}

function pageToRoute(file) {
  const rel = relative(join(root, "src/pages"), file).replaceAll("\\", "/");
  if (rel === "404.astro" || rel.includes("[")) return null;
  const withoutExt = rel.replace(/\.astro$/, "");
  if (withoutExt === "index") return "/";
  if (withoutExt.endsWith("/index")) return `/${withoutExt.slice(0, -"/index".length)}`;
  return `/${withoutExt}`;
}

function slugsFrom(file) {
  const text = readFileSync(file, "utf8");
  const slugs = [];
  const re = /^\s+slug:\s*"([^"]+)"/gm;
  let match;
  while ((match = re.exec(text))) slugs.push(match[1]);
  return slugs;
}

function loc(path) {
  return `${origin}${path === "/" ? "/" : path}`;
}

function urlEntry(path, priority) {
  return `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
}

const pageRoutes = walkPages(join(root, "src/pages"))
  .map(pageToRoute)
  .filter(Boolean)
  .sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

const parishRoutes = slugsFrom(join(root, "src/data/parishes.ts")).map(
  (slug) => `/parishes/${slug}`,
);
const directoryRoutes = slugsFrom(join(root, "src/data/directory.ts")).map(
  (slug) => `/directory/${slug}`,
);

const extraStatic = ["/robots.txt"];
const routes = [...pageRoutes, ...extraStatic, ...parishRoutes, ...directoryRoutes];
const unique = [...new Set(routes)];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map((path) => {
    const priority =
      priorities[path] ??
      (path.startsWith("/parishes/")
        ? "0.7"
        : path.startsWith("/directory/")
          ? "0.6"
          : "0.5");
    return urlEntry(path, priority);
  })
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf8");
console.log(`Wrote public/sitemap.xml with ${unique.length} URLs`);

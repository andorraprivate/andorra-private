import type { APIRoute } from "astro";
import { listings } from "../data/directory";
import { parishes } from "../data/parishes";

const lastmod = "2026-08-29";
const origin = "https://privateandorra.com";

const staticRoutes: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/become-a-resident", priority: "0.9" },
  { path: "/properties", priority: "0.9" },
  { path: "/living-in-andorra", priority: "0.8" },
  { path: "/parishes", priority: "0.8" },
  { path: "/directory", priority: "0.8" },
  { path: "/privacy", priority: "0.5" },
];

function loc(path: string) {
  return `${origin}${path === "/" ? "" : path}`;
}

function url(path: string, priority: string) {
  return `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map((route) => url(route.path, route.priority)).join("\n")}
${parishes.map((parish) => url(`/parishes/${parish.slug}`, "0.7")).join("\n")}
${listings.map((item) => url(`/directory/${item.slug}`, "0.6")).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

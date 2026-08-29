/**
 * Fail if built HTML jams a word against an inline <a>.
 * Astro compressHTML was collapsing `on\n<a>` into `on<a>`.
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, acc);
    else if (entry.name.endsWith(".html")) acc.push(path);
  }
  return acc;
}

const before = /[A-Za-z0-9]<a\b/g;
const after = /<\/a>[A-Za-z0-9]/g;
const problems = [];

for (const file of walk(dist)) {
  const html = readFileSync(file, "utf8").replace(
    /<script[\s\S]*?<\/script>/g,
    "",
  );
  for (const re of [before, after]) {
    re.lastIndex = 0;
    let match;
    while ((match = re.exec(html))) {
      const start = Math.max(0, match.index - 30);
      problems.push(
        `${file.replace(root + "/", "")}: …${html
          .slice(start, match.index + 40)
          .replace(/\s+/g, " ")}…`,
      );
    }
  }
}

if (problems.length) {
  throw new Error(
    `Jammed link spacing in built HTML (${problems.length}):\n${problems
      .slice(0, 40)
      .join("\n")}`,
  );
}

console.log("Link-spacing assertion passed.");

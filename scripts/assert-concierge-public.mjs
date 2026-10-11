/**
 * The public concierge HTML stays free of prices, founder contact,
 * and commercial-referral language. Paid amounts live in api/offers.mjs.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = [
  "concierge/index.html",
  "plan/index.html",
  "newsletter/index.html",
  "partners/index.html",
  "es/concierge/index.html",
  "es/plan/index.html",
  "es/newsletter/index.html",
  "es/partners/index.html",
  "privacy/index.html",
  "es/privacy/index.html",
  "llms.txt",
];

const banned = [
  /WhatsApp/i,
  /wa\.me/i,
  /tel:/i,
  /€\s?49\b/,
  /€\s?290\b/,
  /€\s?450\b/,
  /€\s?4[,.]900/,
  /4\.900\s?€/,
  /Setup introduction/,
  /Puesta en marcha/,
  /Introducción para la instalación/,
  /\bRob\b/,
  /referral/i,
  /commission/i,
  /founder/i,
  /\bcall\b/i,
  /consultation/i,
  /MONETISATION_ENABLED/,
  /STRIPE_SECRET/,
];

const problems = [];
for (const page of pages) {
  const path = join(root, "dist", page);
  if (!existsSync(path)) {
    problems.push(`missing ${page}`);
    continue;
  }
  const html = readFileSync(path, "utf8");
  for (const pattern of banned) {
    if (pattern.test(html)) problems.push(`${page} matches ${pattern}`);
  }
}

const llms = readFileSync(join(root, "dist/llms.txt"), "utf8");
if (!llms.includes("Llei 29/2021")) problems.push("llms.txt missing LQPD");
if (!llms.includes("2026-10-11")) problems.push("llms.txt missing access date");
if (!llms.includes("information, not advice") && !llms.includes("Information, not advice")) {
  problems.push("llms.txt missing disclaimer");
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("assert-concierge-public: ok");

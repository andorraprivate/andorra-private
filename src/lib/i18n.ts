export const locales = ["en", "fr", "es", "ca"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const i18nSlugs = [
  "/",
  "/become-a-resident",
  "/residency-vs-tax",
  "/directory",
  "/living-in-andorra",
  "/parishes",
  "/properties",
  "/moving-to-andorra",
  "/residence-without-work",
  "/digital-nomad",
  "/family-reunification",
  "/tax-residence",
  "/self-employed-residence",
  "/entrepreneur-residence",
  "/the-file",
  "/opening-a-bank-account",
  "/buying-property",
] as const;

export type I18nSlug = (typeof i18nSlugs)[number];

export const htmlLang: Record<Locale, string> = {
  en: "en-GB",
  fr: "fr",
  es: "es",
  ca: "ca",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_GB",
  fr: "fr_FR",
  es: "es_ES",
  ca: "ca_ES",
};

export const localeLabel: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  ca: "CA",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isI18nSlug(path: string): path is I18nSlug {
  return (i18nSlugs as readonly string[]).includes(path);
}

/** Prefixed path for a locale. English stays unprefixed. */
export function localePath(locale: Locale, slug: string): string {
  const path = slug === "/" ? "/" : slug.startsWith("/") ? slug : `/${slug}`;
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strip /fr|/es|/ca prefix. */
export function slugFromPath(path: string): string {
  if (path === "/fr" || path === "/es" || path === "/ca") return "/";
  const match = path.match(/^\/(fr|es|ca)(\/.*)$/);
  if (match) return match[2] || "/";
  return path || "/";
}

export function localeFromPath(path: string): Locale {
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  if (path === "/es" || path.startsWith("/es/")) return "es";
  if (path === "/ca" || path.startsWith("/ca/")) return "ca";
  return "en";
}

export function switchLocalePath(currentPath: string, next: Locale): string {
  const slug = slugFromPath(currentPath);
  if (isI18nSlug(slug)) return localePath(next, slug);
  return localePath(next, "/");
}

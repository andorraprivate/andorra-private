# Andorra Private

Marketing site for https://privateandorra.com — privacy, residency, and properties in Andorra.

## Stack

- Astro 7, GitHub `andorraprivate/andorra-private`, Vercel project, Porkbun domain
- Forms: Formspree `https://formspree.io/f/xkjwaqan` (Become a Resident + Properties)
- Contact: `hello@privateandorra.com`

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/become-a-resident` | `src/pages/become-a-resident.astro` |
| `/properties` | `src/pages/properties.astro` |
| `/living-in-andorra` | `src/pages/living-in-andorra.astro` |
| `/parishes` | `src/pages/parishes/index.astro` |
| `/parishes/[slug]` | `src/pages/parishes/[slug].astro` |
| `/directory` | `src/pages/directory/index.astro` |
| `/directory/[slug]` | `src/pages/directory/[slug].astro` |
| `/privacy` | `src/pages/privacy.astro` (LQPD) |
| `/official-sources` | `src/pages/official-sources.astro` |
| `/education` | `src/pages/education.astro` |
| `/healthcare` | `src/pages/healthcare.astro` |
| `/moving-to-andorra` | `src/pages/moving-to-andorra.astro` |
| `/moving-to-andorra-from-the-uk` | `src/pages/moving-to-andorra-from-the-uk.astro` |
| `/moving-to-andorra-from-spain` | `src/pages/moving-to-andorra-from-spain.astro` |
| `/moving-to-andorra-from-france` | `src/pages/moving-to-andorra-from-france.astro` |
| `/opening-a-bank-account` | `src/pages/opening-a-bank-account.astro` |
| `/buying-property` | `src/pages/buying-property.astro` |
| `/digital-nomad` | `src/pages/digital-nomad.astro` |
| `/residence-without-work` | `src/pages/residence-without-work.astro` |
| `/tax-residence` | `src/pages/tax-residence.astro` |
| `/family-reunification` | `src/pages/family-reunification.astro` |
| `/self-employed-residence` | `src/pages/self-employed-residence.astro` |
| `/entrepreneur-residence` | `src/pages/entrepreneur-residence.astro` |

Shared chrome lives in `src/layouts/Base.astro`, `src/components/Header.astro` and `src/components/Footer.astro`. Directory and parish copy is in `src/data/`.

Keep `public/sitemap.xml` as a static file (do not add `src/pages/sitemap.xml.ts` — a generated route has 500’d on Vercel). List every public route. Canonical host is `https://www.privateandorra.com`. Keep `public/robots.txt` pointing at that sitemap.

## Commands (always from this directory)

```sh
npm run dev       # astro dev
npm run build     # astro build
npm run deploy    # vercel --prod (requires `npx vercel login` once)
```

When starting the dev server from an agent, use background mode:

```
astro dev --background
```

Manage with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Conventions

- Edit in this repo and push to `main`. Do not type production changes into github.dev.
- Visual language: forest `#1A2F23`, stone `#E8E0D5`, off-white `#F7F4EF`, charcoal, brass `#B08D57`. Cormorant Garamond + Inter.
- Do not invent firms, telephone numbers, law figures or property listings. Link official sites.
- Do not commit `.env` or Formspree secrets.
- Browser dashboards (Vercel / GitHub / Formspree / Porkbun): Chrome via Browser Use. Stop at passwords, MFA, and payments.

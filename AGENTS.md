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
| `/privacy` | `src/pages/privacy.astro` (LQPD) |

Keep `public/sitemap.xml` and `public/robots.txt` in sync with routes. Canonical host is `privateandorra.com`.

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
- Do not commit `.env` or Formspree secrets.
- Browser dashboards (Vercel / GitHub / Formspree / Porkbun): Chrome via Browser Use. Stop at passwords, MFA, and payments.

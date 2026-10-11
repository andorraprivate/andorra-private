/**
 * Paid catalogue. Read only by /api/config and /api/checkout.
 * Do not import this file from a page or a client script.
 * Public pages stay free until MONETISATION_ENABLED=true.
 *
 * Customer checkout is the guide and the automated plan only.
 * Partner introductions and newsletter sponsorship are email arrangements.
 * They have no euro amount and no checkout session.
 */

export function monetisationEnabled() {
  return String(process.env.MONETISATION_ENABLED || "").toLowerCase() === "true";
}

export const OFFERS = [
  {
    id: "guide",
    amountCents: 4900,
    currency: "eur",
    from: false,
    stripePriceEnv: "STRIPE_PRICE_GUIDE",
    name: { en: "Moving guide", es: "Guía de la mudanza" },
  },
  {
    id: "plan",
    amountCents: 29000,
    currency: "eur",
    from: false,
    stripePriceEnv: "STRIPE_PRICE_PLAN",
    name: { en: "Personalised relocation plan", es: "Plan de traslado personalizado" },
  },
];

/** Email-only. Never returned by /api/config and never accepted by /api/checkout. */
export const OTHER_REVENUE = [
  {
    id: "partner-referral",
    checkout: false,
    summary: "Partner introduction by email. The professional writes to the person who asked.",
  },
  {
    id: "newsletter-sponsorship",
    checkout: false,
    summary: "Sponsorship of the monthly letter, arranged by email. No card checkout.",
  },
];

export function offerById(id) {
  return OFFERS.find((offer) => offer.id === id) || null;
}

export function publicOffer(offer, locale) {
  const lang = locale === "es" ? "es" : "en";
  const formatted = new Intl.NumberFormat(lang === "es" ? "es-ES" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(offer.amountCents / 100);
  return {
    id: offer.id,
    name: offer.name[lang],
    priceLabel: formatted,
    from: false,
    checkoutLabel: lang === "es" ? "Continuar al pago" : "Continue to payment",
  };
}

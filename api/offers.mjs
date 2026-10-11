/**
 * Paid catalogue. Read only by /api/config and /api/checkout.
 * Do not import this file from a page or a client script.
 * There is no founder session and no telephone product in this list.
 * Public pages stay free until MONETISATION_ENABLED=true.
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
  {
    id: "concierge",
    amountCents: 490000,
    currency: "eur",
    from: true,
    stripePriceEnv: "STRIPE_PRICE_CONCIERGE",
    name: { en: "Concierge setup", es: "Puesta en marcha" },
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
  const priceLabel = offer.from
    ? lang === "es"
      ? `desde ${formatted}`
      : `from ${formatted}`
    : formatted;
  return {
    id: offer.id,
    name: offer.name[lang],
    priceLabel,
    from: offer.from,
    checkoutLabel: lang === "es" ? "Continuar al pago" : "Continue to payment",
  };
}

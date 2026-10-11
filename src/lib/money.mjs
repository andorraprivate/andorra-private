/** Euro formatting for quotes. Whole euros drop the cents; tariffs such as 190.96 keep two. */
export function formatEur(amount, locale = "en") {
  const negative = amount < 0;
  const abs = Math.abs(amount);
  const cents = Math.round(abs * 100);
  const digits = cents % 100 === 0 ? 0 : 2;
  const formatted = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(abs);
  return negative ? `−${formatted}` : formatted;
}

export function toCents(amount) {
  return Math.round(Number(amount) * 100);
}

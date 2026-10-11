import { toCents } from "./money.mjs";

const ROUTES = new Set(["d1", "j1", "d3", "b1"]);

function clampInt(value, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.min(max, Math.max(0, Math.trunc(n)));
}

function line(key, amount, kind, source) {
  return { key, amount, kind, source };
}

/**
 * Official-amount quote. Capital the person still owns is separate from
 * charges. Secondary figures in facts.excluded are returned, never summed.
 */
export function quote(input, facts) {
  const route = input?.route;
  if (!ROUTES.has(route)) {
    throw new Error(`Unknown route: ${route}`);
  }

  const dependants = clampInt(input.dependants, 12);
  const figures = facts.figures;
  const housingFund = Boolean(input.housingFund) && route === "d1";
  const price = Number(input.property?.priceEur);
  const property =
    Number.isFinite(price) && price > 0
      ? {
          priceEur: Math.min(price, 100_000_000),
          band: input.property?.band === "further" ? "further" : "first",
        }
      : null;

  const lines = [];
  const warnings = [];

  if (route === "d1") {
    lines.push(
      line(
        housingFund ? "d1.housingFund" : "d1.investment",
        housingFund ? figures.d1HousingFund : figures.d1Investment,
        "capital",
        "bopa-2-2026",
      ),
    );
    lines.push(
      line(
        "d1.afa",
        figures.d1AfaPrincipal + figures.d1AfaDependant * dependants,
        "charge",
        "bopa-2-2026",
      ),
    );
    lines.push(
      line(
        "d1.tariff",
        figures.d1TariffPrincipal + figures.d1TariffDependant * dependants,
        "charge",
        "govern-tariffs",
      ),
    );
    lines.push(line("d1.renewal", figures.d1Renewal, "later", "govern-tariffs"));
    if (housingFund) warnings.push("housing-fund-caveat");
    if (property && property.priceEur <= figures.d1PropertyUnitFloorExclusive) {
      warnings.push("unit-floor");
    } else if (
      property &&
      !housingFund &&
      property.priceEur < figures.d1Investment
    ) {
      warnings.push("investment-balance");
    }
    if (housingFund && property) warnings.push("housing-and-property");
  }

  if (route === "j1") {
    lines.push(line("j1.afa", figures.j1Afa, "charge", "bopa-2-2026"));
    lines.push(line("j1.tariff", figures.j1Tariff, "charge", "govern-tariffs"));
    lines.push(
      line("j1.receipt", figures.applicationReceipt, "charge", "govern-tariffs"),
    );
    lines.push(line("j1.capital", figures.slCapital, "capital", "govern-company"));
    if (dependants > 0) warnings.push("joining-family");
  }

  if (route === "d3") {
    lines.push(line("d3.means", null, "note", "govern-d3"));
    lines.push(line("d3.days", figures.presenceDays, "note", "govern-d3"));
    if (dependants > 0) warnings.push("joining-family");
  }

  if (route === "b1") {
    lines.push(line("b1.tariff", figures.b1Tariff, "charge", "govern-tariffs"));
    lines.push(line("b1.means", null, "note", "govern-d1"));
  }

  if (property && (route === "d1" || route === "j1" || route === "d3" || route === "b1")) {
    const iieiRate = property.band === "further" ? figures.iieiFurther : figures.iieiFirst;
    lines.push(
      line("property.itp", property.priceEur * figures.itpRate, "tax", "itp"),
    );
    lines.push(
      line(
        property.band === "further" ? "property.iieiFurther" : "property.iieiFirst",
        property.priceEur * iieiRate,
        "tax",
        "govern-iiei",
      ),
    );
  }

  const chargesCents = lines
    .filter((entry) => entry.kind === "charge" || entry.kind === "tax")
    .reduce((sum, entry) => sum + toCents(entry.amount), 0);
  const capitalCents = lines
    .filter((entry) => entry.kind === "capital")
    .reduce((sum, entry) => sum + toCents(entry.amount), 0);

  const excluded = (facts.excluded || []).filter((item) =>
    item.routes.includes(route),
  );

  return {
    route,
    dependants,
    housingFund,
    property,
    lines,
    warnings,
    excluded,
    chargesTotal: chargesCents / 100,
    capitalTotal: capitalCents / 100,
    asOf: facts.asOf,
  };
}

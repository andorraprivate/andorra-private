import assert from "node:assert/strict";
import facts from "../src/data/facts.json" with { type: "json" };
import { quote } from "../src/lib/relocation-cost.mjs";
import { suggest, scoreLead } from "../src/lib/plan.mjs";
import { monetisationEnabled, OFFERS, OTHER_REVENUE, offerById } from "../api/offers.mjs";
import { validateSubmission } from "../api/store.mjs";

const d1 = quote({ route: "d1", dependants: 0 }, facts);
assert.equal(d1.chargesTotal, 53000);
assert.equal(d1.capitalTotal, 1000000);
assert.equal(d1.lines.find((line) => line.key === "d1.tariff").amount, 3000);
assert.ok(d1.excluded.some((item) => item.id === "wit-passive-charge"));
assert.ok(!d1.lines.some((line) => line.amount === 2500 || line.amount === 224.61));

const family = quote({ route: "d1", dependants: 2 }, facts);
assert.equal(family.lines.find((line) => line.key === "d1.afa").amount, 74000);
assert.equal(family.lines.find((line) => line.key === "d1.tariff").amount, 5000);
assert.equal(family.chargesTotal, 79000);

const fund = quote({ route: "d1", dependants: 0, housingFund: true }, facts);
assert.equal(fund.capitalTotal, 400000);
assert.equal(fund.chargesTotal, 53000);
assert.ok(fund.warnings.includes("housing-fund-caveat"));

const purchase = quote(
  {
    route: "d1",
    dependants: 0,
    property: { priceEur: 1000000, band: "first" },
  },
  facts,
);
assert.equal(purchase.lines.find((line) => line.key === "property.itp").amount, 40000);
assert.equal(
  purchase.lines.find((line) => line.key === "property.iieiFirst").amount,
  60000,
);
assert.equal(purchase.chargesTotal, 153000);

const lowUnit = quote(
  { route: "d1", property: { priceEur: 800000, band: "first" } },
  facts,
);
assert.ok(lowUnit.warnings.includes("unit-floor"));

const j1 = quote({ route: "j1", dependants: 1 }, facts);
assert.equal(j1.chargesTotal, 50196.69);
assert.equal(j1.capitalTotal, 3000);
assert.ok(j1.warnings.includes("joining-family"));

const d3 = quote({ route: "d3", dependants: 0 }, facts);
assert.equal(d3.chargesTotal, 0);
assert.equal(d3.capitalTotal, 0);
assert.ok(d3.excluded.some((item) => item.id === "wit-nomad"));

const b1 = quote({ route: "b1" }, facts);
assert.equal(b1.chargesTotal, 22.61);

assert.equal(suggest({ intent: "no-work", days: "90", localWork: "no", capital: "1000-plus" }).id, "d1");
assert.equal(suggest({ intent: "remote", days: "90", localWork: "remote-foreign" }).id, "d3");
assert.equal(suggest({ intent: "own-account", days: "183", localWork: "yes" }).id, "j1");
assert.equal(suggest({ intent: "family", days: "90" }).id, "b1");
assert.equal(suggest({ intent: "no-work", days: "under-90" }).id, "none");
assert.equal(scoreLead({ intent: "family", days: "90", timeline: "under-6", dependants: 1 }, true), 6);

assert.equal(OFFERS.some((offer) => offer.id === "call" || offer.id === "concierge"), false);
assert.equal(offerById("call"), null);
assert.equal(offerById("concierge"), null);
assert.equal(OFFERS.map((offer) => offer.id).join(","), "guide,plan");
assert.equal(OFFERS.some((offer) => offer.amountCents === 490000), false);
assert.deepEqual(
  OTHER_REVENUE.map((item) => item.id),
  ["partner-referral", "newsletter-sponsorship"],
);
assert.equal(OTHER_REVENUE.every((item) => item.checkout === false && item.amountCents == null), true);
assert.equal(monetisationEnabled(), false);

const rejected = validateSubmission(
  { email: "a@b.co", consent_contact: true, offer: "call" },
  "lead",
);
assert.equal(rejected.ok, false);
const rejectedSetup = validateSubmission(
  { email: "a@b.co", consent_contact: true, offer: "concierge" },
  "lead",
);
assert.equal(rejectedSetup.ok, false);

const missingConsent = validateSubmission({ email: "a@b.co", offer: "plan" }, "lead");
assert.equal(missingConsent.ok, false);

const accepted = validateSubmission(
  {
    email: "Ada@Example.com",
    consent_contact: "on",
    consent_partners: "on",
    offer: "plan",
    name: "Ada",
    locale: "es",
    intent: "no-work",
    days: "90",
    timeline: "under-6",
    company_website: "",
  },
  "lead",
);
assert.equal(accepted.ok, true);
assert.equal(accepted.value.email, "ada@example.com");
assert.equal(accepted.value.consent_partners, true);
assert.equal(accepted.value.offer, "plan");

const newsletter = validateSubmission(
  { email: "ada@example.com", consent_contact: true },
  "newsletter",
);
assert.equal(newsletter.ok, true);
assert.equal(newsletter.value.kind, "newsletter");

console.log("assert-costs: ok");

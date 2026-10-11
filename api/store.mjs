import { scoreLead } from "../src/lib/plan.mjs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEAD_OFFERS = new Set(["guide", "plan", "partner", "general"]);
const MAX_PLAN = 20_000;

let schemaReady = null;

export function databaseUrl() {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.NEON_DATABASE_URL ||
    ""
  );
}

export function validateSubmission(body, kind) {
  const source = body && typeof body === "object" ? body : {};
  if (String(source.company_website || "").trim()) {
    return { ok: false, status: 400, error: "rejected" };
  }

  const email = String(source.email || "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 200) {
    return { ok: false, status: 400, error: "email" };
  }

  const consentContact =
    source.consent_contact === true ||
    source.consent_contact === "true" ||
    source.consent_contact === "on";
  if (!consentContact) {
    return { ok: false, status: 400, error: "consent" };
  }

  const consentPartners =
    source.consent_partners === true ||
    source.consent_partners === "true" ||
    source.consent_partners === "on";

  const locale = source.locale === "es" ? "es" : "en";
  const name = String(source.name || "").trim().slice(0, 120);
  const message = String(source.message || "").trim().slice(0, 4000);
  const page = String(source.source || "").trim().slice(0, 160);

  if (kind === "newsletter") {
    return {
      ok: true,
      value: {
        kind: "newsletter",
        email,
        name,
        locale,
        source: page || "newsletter",
        offer: "newsletter",
        route: "",
        timeline: "",
        dependants: null,
        message,
        consent_contact: true,
        consent_partners: false,
        score: null,
        payload: {},
      },
    };
  }

  if (
    source.offer === "call" ||
    source.offer === "consultation" ||
    source.offer === "concierge"
  ) {
    return { ok: false, status: 400, error: "offer" };
  }
  const offer = LEAD_OFFERS.has(source.offer) ? source.offer : "general";
  const route = String(source.route || "").trim().slice(0, 40);
  const timeline = String(source.timeline || "").trim().slice(0, 40);
  const dependantsRaw = source.dependants;
  const dependants =
    dependantsRaw === "" || dependantsRaw === undefined || dependantsRaw === null
      ? null
      : Math.min(12, Math.max(0, Math.trunc(Number(dependantsRaw)) || 0));

  const answers = {
    intent: source.intent,
    days: source.days,
    localWork: source.local_work || source.localWork,
    capital: source.capital,
    timeline: source.timeline,
    dependants: dependants ?? 0,
  };

  const payload = {
    intent: String(source.intent || "").slice(0, 40),
    days: String(source.days || "").slice(0, 40),
    localWork: String(answers.localWork || "").slice(0, 40),
    capital: String(source.capital || "").slice(0, 40),
    planText: String(source.plan_text || source.planText || "").slice(0, MAX_PLAN),
  };

  return {
    ok: true,
    value: {
      kind: "lead",
      email,
      name,
      locale,
      source: page || "concierge",
      offer,
      route,
      timeline,
      dependants,
      message,
      consent_contact: true,
      consent_partners: consentPartners,
      score: scoreLead(answers, consentPartners),
      payload,
    },
  };
}

async function sqlClient() {
  const url = databaseUrl();
  if (!url) return null;
  const { neon } = await import("@neondatabase/serverless");
  return neon(url);
}

async function ensureSchema(sql) {
  if (!schemaReady) {
    schemaReady = sql`
      CREATE TABLE IF NOT EXISTS concierge_leads (
        id bigserial PRIMARY KEY,
        created_at timestamptz NOT NULL DEFAULT now(),
        kind text NOT NULL,
        email text NOT NULL,
        name text,
        locale text,
        source text,
        offer text,
        route text,
        timeline text,
        dependants integer,
        message text,
        consent_contact boolean NOT NULL,
        consent_partners boolean NOT NULL DEFAULT false,
        score integer,
        payload jsonb
      )
    `;
  }
  await schemaReady;
}

export async function saveSubmission(value) {
  const url = databaseUrl();
  if (!url) {
    console.log(
      JSON.stringify({
        todo: "Set DATABASE_URL (or POSTGRES_URL or NEON_DATABASE_URL) to store concierge leads in Neon. Submission accepted and not stored.",
        notify: "TODO: deliver to the bot inbox hello@privateandorra.com — no mail transport configured.",
        kind: value.kind,
        offer: value.offer,
        locale: value.locale,
        email: value.email,
      }),
    );
    return { stored: false };
  }

  const sql = await sqlClient();
  await ensureSchema(sql);
  await sql`
    INSERT INTO concierge_leads (
      kind, email, name, locale, source, offer, route, timeline, dependants,
      message, consent_contact, consent_partners, score, payload
    ) VALUES (
      ${value.kind},
      ${value.email},
      ${value.name},
      ${value.locale},
      ${value.source},
      ${value.offer},
      ${value.route},
      ${value.timeline},
      ${value.dependants},
      ${value.message},
      ${value.consent_contact},
      ${value.consent_partners},
      ${value.score},
      ${JSON.stringify(value.payload)}::jsonb
    )
  `;

  await notifyInbox(value);
  return { stored: true };
}

async function notifyInbox(value) {
  const hook = process.env.INBOX_WEBHOOK_URL || "";
  if (!hook) {
    console.log(
      JSON.stringify({
        todo: "TODO: deliver to the bot inbox hello@privateandorra.com — set INBOX_WEBHOOK_URL or another mail transport. No founder telephone.",
        kind: value.kind,
        offer: value.offer,
        email: value.email,
        stored: true,
      }),
    );
    return;
  }
  await fetch(hook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: "hello@privateandorra.com",
      kind: value.kind,
      offer: value.offer,
      email: value.email,
      name: value.name,
      locale: value.locale,
      consent_partners: value.consent_partners,
      route: value.route,
      timeline: value.timeline,
    }),
  });
}

export function safeReturnTo(value) {
  const path = String(value || "");
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return "/concierge";
  }
  return path.split("#")[0];
}

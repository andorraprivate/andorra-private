import { monetisationEnabled, offerById } from "./offers.mjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method" });
  }

  if (!monetisationEnabled()) {
    return res.status(403).json({ ok: false, error: "checkout_disabled" });
  }

  const offer = offerById(req.body?.offerId);
  if (!offer) {
    return res.status(400).json({ ok: false, error: "offer" });
  }

  const secret = process.env.STRIPE_SECRET_KEY || "";
  if (!secret) {
    console.log(
      JSON.stringify({
        todo: "Set STRIPE_SECRET_KEY before taking a card. Checkout hook is wired and refused this request.",
        offer: offer.id,
      }),
    );
    return res.status(503).json({ ok: false, error: "stripe_not_configured" });
  }

  const origin = String(req.headers.origin || "https://www.privateandorra.com").replace(
    /\/$/,
    "",
  );
  const priceId = process.env[offer.stripePriceEnv] || "";
  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("success_url", `${origin}/concierge?paid=1`);
  params.set("cancel_url", `${origin}/concierge?paid=0`);
  params.set("line_items[0][quantity]", "1");
  if (priceId) {
    params.set("line_items[0][price]", priceId);
  } else {
    params.set("line_items[0][price_data][currency]", offer.currency);
    params.set("line_items[0][price_data][unit_amount]", String(offer.amountCents));
    params.set(
      "line_items[0][price_data][product_data][name]",
      offer.name.en,
    );
  }

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
  const payload = await response.json();
  if (!response.ok || !payload.url) {
    console.error(
      JSON.stringify({
        todo: "Stripe session was refused. Check the secret and the price.",
        status: response.status,
      }),
    );
    return res.status(502).json({ ok: false, error: "stripe_error" });
  }

  return res.status(200).json({ ok: true, url: payload.url });
}

import { monetisationEnabled, OFFERS, publicOffer } from "./offers.mjs";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method" });
  }

  res.setHeader("Cache-Control", "no-store");
  const enabled = monetisationEnabled();
  if (!enabled) {
    return res.status(200).json({ monetisationEnabled: false, offers: [] });
  }

  const locale = req.query?.locale === "es" ? "es" : "en";
  return res.status(200).json({
    monetisationEnabled: true,
    paidNote:
      locale === "es"
        ? "El precio figura en la petición. El formulario sigue enviando una petición por escrito."
        : "The price is shown on the request. The form still sends a written request.",
    offers: OFFERS.map((offer) => publicOffer(offer, locale)),
  });
}

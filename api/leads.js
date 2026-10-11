import { saveSubmission, safeReturnTo, validateSubmission } from "./store.mjs";
import { send } from "./http.mjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method" });
  }

  const parsed = validateSubmission(req.body, "lead");
  if (!parsed.ok) {
    return res.status(parsed.status).json({ ok: false, error: parsed.error });
  }

  try {
    const saved = await saveSubmission(parsed.value);
    return send(
      req,
      res,
      200,
      { ok: true, stored: saved.stored },
      safeReturnTo(req.body?.return_to),
    );
  } catch (error) {
    console.error(
      JSON.stringify({
        todo: "Lead storage failed. Check DATABASE_URL and the Neon table concierge_leads.",
        message: error instanceof Error ? error.message : "error",
      }),
    );
    return send(
      req,
      res,
      200,
      { ok: true, stored: false },
      safeReturnTo(req.body?.return_to),
    );
  }
}

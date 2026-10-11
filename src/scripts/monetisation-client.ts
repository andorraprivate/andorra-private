export async function bootMonetisation(locale: string) {
  if (!document.querySelector("[data-paid-slot], [data-checkout]")) return;
  let payload: { monetisationEnabled?: boolean; offers?: PaidOffer[]; paidNote?: string };
  try {
    const response = await fetch(`/api/config?locale=${locale === "es" ? "es" : "en"}`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return;
    payload = await response.json();
  } catch {
    return;
  }
  if (!payload.monetisationEnabled || !payload.offers?.length) return;

  document.documentElement.classList.add("is-paid");
  if (payload.paidNote) {
    document.querySelectorAll("[data-paid-note]").forEach((node) => {
      node.textContent = payload.paidNote || "";
      node.removeAttribute("hidden");
    });
  }
  for (const offer of payload.offers) {
    document.querySelectorAll(`[data-paid-slot="${offer.id}"]`).forEach((node) => {
      node.textContent = `${offer.name} — ${offer.priceLabel}`;
      node.removeAttribute("hidden");
    });
    document.querySelectorAll(`[data-checkout="${offer.id}"]`).forEach((node) => {
      if (!(node instanceof HTMLButtonElement)) return;
      node.textContent = offer.checkoutLabel;
      node.hidden = false;
      node.addEventListener("click", () => startCheckout(node, offer.id));
    });
  }
}

type PaidOffer = { id: string; name: string; priceLabel: string; checkoutLabel: string };

async function startCheckout(button: HTMLButtonElement, offerId: string) {
  const status = button.closest("article, .lead-card, section")?.querySelector("[data-checkout-status]");
  button.disabled = true;
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ offerId }),
    });
    const payload = await response.json().catch(() => ({}));
    if (payload.url) {
      window.location.href = payload.url;
      return;
    }
  } catch {
    /* The hook is optional until a secret is set. */
  }
  if (status instanceof HTMLElement) {
    status.hidden = false;
    status.textContent = status.dataset.message || "";
  }
  button.disabled = false;
}

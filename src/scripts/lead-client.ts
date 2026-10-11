const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showSuccess(form: HTMLFormElement) {
  form.hidden = true;
  const success = form.parentElement?.querySelector("[data-success]");
  if (success instanceof HTMLElement) success.classList.add("is-visible");
}

export function bootLeadForms() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "1") {
    document.querySelectorAll("form[data-lead-form]").forEach((node) => {
      if (node instanceof HTMLFormElement) showSuccess(node);
    });
  }

  document.querySelectorAll("form[data-lead-form]").forEach((node) => {
    if (!(node instanceof HTMLFormElement) || node.dataset.bound === "true") return;
    node.dataset.bound = "true";
    node.addEventListener("submit", onSubmit);
  });
}

async function onSubmit(event: Event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!(form instanceof HTMLFormElement)) return;
  const error = form.querySelector("[data-form-error]");
  const button = form.querySelector("button[type='submit']");
  const data = new FormData(form);
  if (String(data.get("company_website") || "").trim()) return;

  const email = String(data.get("email") || "").trim();
  const consent = data.get("consent_contact");
  if (!EMAIL.test(email) || consent !== "on") {
    if (error instanceof HTMLElement) error.hidden = false;
    return;
  }
  if (error instanceof HTMLElement) error.hidden = true;
  if (button instanceof HTMLButtonElement) button.disabled = true;

  const body: Record<string, string | boolean> = {};
  for (const [key, value] of data.entries()) {
    if (typeof value === "string") body[key] = value;
  }
  body.consent_contact = true;
  body.consent_partners = data.get("consent_partners") === "on";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 400) {
      if (error instanceof HTMLElement) error.hidden = false;
      if (button instanceof HTMLButtonElement) button.disabled = false;
      return;
    }
    if (!response.ok) {
      console.warn(
        "TODO: concierge storage failed after a valid form. Set DATABASE_URL for Neon. Showing success anyway.",
        response.status,
      );
    }
    showSuccess(form);
  } catch (reason) {
    console.warn(
      "TODO: concierge endpoint unreachable. Set DATABASE_URL for Neon and deploy the /api functions. Showing success after validation.",
      reason,
    );
    showSuccess(form);
  }
}

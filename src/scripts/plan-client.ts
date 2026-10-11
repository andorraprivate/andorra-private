import facts from "../data/facts.json";
import { conciergeCopy, type ConciergeLocale } from "../data/concierge-copy";
import { formatEur } from "../lib/money.mjs";
import { suggest } from "../lib/plan.mjs";
import { quote } from "../lib/relocation-cost.mjs";

const ROUTES = ["d1", "j1", "d3", "b1"] as const;
const READS: Record<string, string> = {
  d1: "/residence-without-work",
  j1: "/self-employed-residence",
  d3: "/digital-nomad",
  b1: "/family-reunification",
};

type Answers = Record<string, string>;

export function bootPlanner(root: HTMLElement) {
  const locale: ConciergeLocale = root.dataset.locale === "es" ? "es" : "en";
  const t = conciergeCopy[locale].quiz;
  const prefix = root.dataset.prefix || "";
  const stepNode = root.querySelector("[data-quiz-step]");
  const progress = root.querySelector("[data-quiz-progress]");
  const back = root.querySelector("[data-quiz-back]");
  const result = root.querySelector("[data-plan-result]");
  const output = root.querySelector("[data-calc-output]");
  const routeSelect = root.querySelector("[data-route]");
  const dependantsInput = root.querySelector("[data-dependants]");
  const housingInput = root.querySelector("[data-housing]");
  const priceInput = root.querySelector("[data-price]");
  const bandInputs = root.querySelectorAll("[data-band]");
  const update = root.querySelector("[data-calc-update]");

  if (
    !(stepNode instanceof HTMLElement) ||
    !(progress instanceof HTMLElement) ||
    !(back instanceof HTMLButtonElement) ||
    !(result instanceof HTMLElement) ||
    !(output instanceof HTMLElement) ||
    !(routeSelect instanceof HTMLSelectElement) ||
    !(dependantsInput instanceof HTMLInputElement) ||
    !(housingInput instanceof HTMLInputElement) ||
    !(priceInput instanceof HTMLInputElement) ||
    !(update instanceof HTMLButtonElement)
  ) {
    return;
  }

  const answers: Answers = {};
  let step = 0;

  function renderStep() {
    const question = t.questions[step];
    progress.textContent = t.progress
      .replace("{n}", String(step + 1))
      .replace("{total}", String(t.questions.length));
    back.hidden = step === 0;
    stepNode.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = question.prompt;
    const list = document.createElement("div");
    list.className = "quiz-options";
    for (const option of question.options) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option.label;
      button.setAttribute("aria-pressed", answers[question.id] === option.value ? "true" : "false");
      button.addEventListener("click", () => {
        answers[question.id] = option.value;
        if (step < t.questions.length - 1) {
          step += 1;
          renderStep();
        } else {
          finish();
        }
      });
      list.append(button);
    }
    stepNode.append(heading, list);
  }

  back.addEventListener("click", () => {
    if (step === 0) return;
    step -= 1;
    result.hidden = true;
    renderStep();
  });

  function finish() {
    const suggestion = suggest({
      intent: answers.intent,
      days: answers.days,
      localWork: answers.localWork,
      capital: answers.capital,
      timeline: answers.timeline,
      dependants: Number(answers.dependants || 0),
    });
    renderResult(suggestion.id, suggestion.reasonKeys);
    if (ROUTES.includes(suggestion.id as (typeof ROUTES)[number])) {
      routeSelect.value = suggestion.id;
      dependantsInput.value = answers.dependants || "0";
      housingInput.checked = false;
      renderQuote();
    } else {
      output.replaceChildren();
      const note = document.createElement("p");
      note.textContent = t.empty;
      output.append(note);
    }
    syncPlanForm(suggestion.id);
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderResult(id: string, reasonKeys: string[]) {
    result.replaceChildren();
    const label = document.createElement("p");
    label.className = "result-label";
    label.textContent = t.resultLabel;
    const heading = document.createElement("h3");
    heading.textContent = t.routes[id] || id;
    const list = document.createElement("ul");
    for (const key of reasonKeys) {
      const item = document.createElement("li");
      item.textContent = t.reasons[key] || "";
      list.append(item);
    }
    result.append(label, heading, list);
    const read = READS[id];
    if (read) {
      const link = document.createElement("a");
      link.href = `${prefix}${read}`;
      link.textContent = t.routes[id];
      result.append(link);
    }
    const again = document.createElement("button");
    again.type = "button";
    again.className = "text-button";
    again.textContent = t.again;
    again.addEventListener("click", () => {
      step = 0;
      for (const key of Object.keys(answers)) delete answers[key];
      result.hidden = true;
      renderStep();
    });
    result.append(again);
  }

  function selectedBand() {
    let band = "first";
    bandInputs.forEach((node) => {
      if (node instanceof HTMLInputElement && node.checked) band = node.value;
    });
    return band === "further" ? "further" : "first";
  }

  function renderQuote() {
    const route = routeSelect.value;
    if (!ROUTES.includes(route as (typeof ROUTES)[number])) return;
    housingInput.disabled = route !== "d1";
    if (route !== "d1") housingInput.checked = false;
    const price = Number(priceInput.value);
    const resultQuote = quote(
      {
        route,
        dependants: dependantsInput.value,
        housingFund: housingInput.checked,
        property:
          Number.isFinite(price) && price > 0
            ? { priceEur: price, band: selectedBand() }
            : null,
      },
      facts,
    );

    output.replaceChildren();
    const table = document.createElement("table");
    const body = document.createElement("tbody");
    for (const line of resultQuote.lines) {
      const row = document.createElement("tr");
      const labelCell = document.createElement("td");
      labelCell.textContent = t.lines[line.key] || line.key;
      const amountCell = document.createElement("td");
      if (line.key === "d3.days") amountCell.textContent = String(line.amount);
      else if (line.amount === null) amountCell.textContent = "—";
      else amountCell.textContent = formatEur(line.amount, locale);
      row.append(labelCell, amountCell);
      body.append(row);
    }
    table.append(body);

    const totals = document.createElement("div");
    totals.className = "quote-totals";
    totals.append(
      totalLine(t.charges, formatEur(resultQuote.chargesTotal, locale)),
      totalLine(t.capital, formatEur(resultQuote.capitalTotal, locale)),
    );

    const warnings = document.createElement("ul");
    warnings.className = "quote-warnings";
    for (const key of resultQuote.warnings) {
      const item = document.createElement("li");
      item.textContent = t.warnings[key] || "";
      warnings.append(item);
    }

    output.append(table, totals, warnings);

    if (resultQuote.excluded.length) {
      const excludedTitle = document.createElement("h3");
      excludedTitle.textContent = t.excludedTitle;
      const excluded = document.createElement("ul");
      for (const item of resultQuote.excluded) {
        const li = document.createElement("li");
        const claim = item.claim[locale];
        const why = item.why[locale];
        li.textContent = `${claim} ${why}`;
        excluded.append(li);
      }
      output.append(excludedTitle, excluded);
    }

    const sourceTitle = document.createElement("h3");
    sourceTitle.textContent = t.sourcesTitle;
    const sources = document.createElement("ul");
    sources.className = "source-list";
    const used = new Set(resultQuote.lines.map((line) => line.source));
    for (const id of used) {
      const source = facts.sources[id as keyof typeof facts.sources];
      if (!source) continue;
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = source.title;
      const date = document.createElement("span");
      date.textContent = ` (${source.accessed})`;
      li.append(link, date);
      sources.append(li);
    }
    output.append(sourceTitle, sources);
    syncPlanForm(route);
  }

  function totalLine(label: string, amount: string) {
    const row = document.createElement("p");
    const name = document.createElement("span");
    name.textContent = label;
    const value = document.createElement("strong");
    value.textContent = amount;
    row.append(name, value);
    return row;
  }

  function syncPlanForm(route: string) {
    const form = document.querySelector("form[data-plan-fields]");
    if (!(form instanceof HTMLFormElement)) return;
    setField(form, "intent", answers.intent || "");
    setField(form, "days", answers.days || "");
    setField(form, "local_work", answers.localWork || "");
    setField(form, "dependants", dependantsInput.value);
    setField(form, "capital", answers.capital || "");
    setField(form, "timeline", answers.timeline || "");
    setField(form, "route", route);
    const plan = result.hidden ? "" : `${result.innerText}\n\n${output.innerText}`;
    setField(form, "plan_text", plan.slice(0, 20000));
  }

  update.addEventListener("click", renderQuote);
  routeSelect.addEventListener("change", renderQuote);
  housingInput.addEventListener("change", renderQuote);
  bandInputs.forEach((node) => node.addEventListener("change", renderQuote));
  renderStep();
}

function setField(form: HTMLFormElement, name: string, value: string) {
  const field = form.elements.namedItem(name);
  if (field instanceof HTMLInputElement) field.value = value;
}

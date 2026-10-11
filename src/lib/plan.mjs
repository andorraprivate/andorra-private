/** Route suggestion from quiz answers. Wording lives in the page copy, not here. */

const INTENTS = new Set(["no-work", "own-account", "remote", "family", "unsure"]);

export function suggest(answers) {
  const intent = INTENTS.has(answers?.intent) ? answers.intent : "unsure";
  const days = answers?.days;
  const localWork = answers?.localWork;
  const capital = answers?.capital;
  const reasonKeys = [];

  if (days === "under-90") {
    return {
      id: "none",
      reasonKeys: ["days-short"],
    };
  }

  if (intent === "family") {
    reasonKeys.push("family");
    if (days === "183") reasonKeys.push("days-183-tax");
    return { id: "b1", reasonKeys };
  }

  if (intent === "own-account" || localWork === "yes") {
    reasonKeys.push("own-account");
    if (days === "183") reasonKeys.push("days-183-tax");
    else reasonKeys.push("days-90-j1");
    return { id: "j1", reasonKeys };
  }

  if (intent === "remote" || localWork === "remote-foreign") {
    reasonKeys.push("remote");
    if (days === "183") reasonKeys.push("days-183-tax");
    return { id: "d3", reasonKeys };
  }

  if (intent === "no-work" || localWork === "no") {
    reasonKeys.push("no-work");
    if (capital === "under-400") reasonKeys.push("capital-short");
    else if (capital === "400-999") reasonKeys.push("capital-mid");
    else if (capital === "1000-plus") reasonKeys.push("capital-met");
    else reasonKeys.push("capital-unstated");
    if (days === "183") reasonKeys.push("days-183-tax");
    return { id: "d1", reasonKeys };
  }

  return { id: "compare", reasonKeys: ["unsure"] };
}

/** Internal ranking for the inbox. Not shown on the page. */
export function scoreLead(answers, consentPartners) {
  const route = suggest(answers);
  let score = 0;
  if (route.id !== "none" && route.id !== "compare") score += 2;
  if (answers?.timeline === "here" || answers?.timeline === "under-6") score += 2;
  else if (answers?.timeline === "6-18") score += 1;
  if (answers?.capital === "1000-plus" || answers?.capital === "400-999") score += 1;
  if (Number(answers?.dependants) >= 0) score += 1;
  if (consentPartners) score += 1;
  return score;
}

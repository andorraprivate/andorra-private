export function wantsJson(req) {
  const accept = String(req.headers.accept || "");
  const type = String(req.headers["content-type"] || "");
  return accept.includes("application/json") || type.includes("application/json");
}

export function send(req, res, status, body, returnTo) {
  if (!wantsJson(req) && status < 400 && returnTo) {
    const join = returnTo.includes("?") ? "&" : "?";
    res.writeHead(303, { Location: `${returnTo}${join}submitted=1` });
    res.end();
    return;
  }
  res.status(status).json(body);
}

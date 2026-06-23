/** Encode email for static HTML so Cloudflare email obfuscation skips it. */
export function encodeEmailEntities(email: string) {
  return email.replace(/@/g, "&#64;").replace(/\./g, "&#46;");
}

export function staticMailtoAnchor(email: string, className: string) {
  const encoded = encodeEmailEntities(email);
  return `<!--email_off--><a href="mailto:${encoded}" class="${className}">${encoded}</a><!--/email_off-->`;
}
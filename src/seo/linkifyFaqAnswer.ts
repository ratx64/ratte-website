import { encodeEmailEntities } from "./emailLink";

const FAQ_LINK_PATTERN =
  /(?:https?:\/\/)?(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s—,.;]*)?|[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi;

function toHref(match: string) {
  if (match.includes("@")) {
    return `mailto:${match}`;
  }
  if (match.startsWith("http://") || match.startsWith("https://")) {
    return match;
  }
  return `https://${match}`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function linkifyFaqAnswerHtml(text: string) {
  let result = "";
  let lastIndex = 0;

  for (const match of text.matchAll(FAQ_LINK_PATTERN)) {
    const token = match[0];
    const index = match.index ?? 0;

    result += escapeHtml(text.slice(lastIndex, index));

    const isEmail = token.includes("@");
    const href = isEmail ? `mailto:${encodeEmailEntities(token)}` : escapeHtml(toHref(token));
    const label = isEmail ? encodeEmailEntities(token) : escapeHtml(token);
    const target = isEmail ? "" : ' target="_blank"';
    const rel = isEmail ? "" : ' rel="noopener noreferrer"';
    const wrap = isEmail ? "<!--email_off-->" : "";
    const wrapEnd = isEmail ? "<!--/email_off-->" : "";

    result += `${wrap}<a href="${href}" class="simplink-faq-link"${target}${rel}>${label}</a>${wrapEnd}`;
    lastIndex = index + token.length;
  }

  result += escapeHtml(text.slice(lastIndex));
  return result;
}
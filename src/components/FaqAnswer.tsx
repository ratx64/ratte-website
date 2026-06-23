import React from "react";

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

const FaqAnswer: React.FC<{ text: string }> = ({ text }) => {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(FAQ_LINK_PATTERN)) {
    const token = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    const isExternal = !token.includes("@");
    nodes.push(
      <a
        key={`${index}-${token}`}
        href={toHref(token)}
        className="simplink-faq-link"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {token}
      </a>,
    );

    lastIndex = index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
};

export default FaqAnswer;
import React from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What's on this website?",
      answer:
        "Links to all my socials (Twitch, YouTube, TikTok, Kick, Discord), my CS2 settings, Steam trading links, and partner links like CSFloat. All my links in one place.",
    },
    {
      question: "Do I pay more when using your links?",
      answer:
        "No. Using my partner links doesn't increase the price you pay. I may get a small commission; you pay the same. Win-win.",
    },
    {
      question: "How can I support you?",
      answer:
        "Use my partner links when you buy stuff (e.g. CSFloat for skins). Following on Twitch, YouTube, or Discord and sharing the stream also helps.",
    },
    {
      question: "Where can I find you?",
      answer:
        "Twitch and Kick for live streams, YouTube for longer videos, TikTok for clips, Discord to chat, and X (Twitter) for updates. All links are on this page.",
    },
    {
      question: "How do I know if a link is a partner link?",
      answer:
        "Partner links live in the 'Partners' section, and the featured partner shows an affiliate disclosure right on the card. I keep it transparent so you know when you're using one.",
    },
    {
      question: "How can I contact you?",
      answer:
        "Email biz@ratte.xyz for business, partnerships, or questions. I reply when I can; response may be slower when I'm streaming or busy.",
    },
  ];

  return (
    <section
      id="faq"
      className="max-w-3xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4 pb-8 sm:pb-12"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-4 sm:mb-5 text-center"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-2" role="list">
        {faqs.map((faq, index) => (
          <details
            key={index}
        className="group bg-black/[0.03] dark:bg-white/[0.04] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden transition-colors hover:border-accent-pink/30 open:border-accent-pink/40"
            // First item open by default for fast scanning.
            {...(index === 0 ? { open: true } : {})}
            itemScope
            itemType="https://schema.org/Question"
            role="listitem"
          >
            <summary
          className="flex items-center justify-between gap-4 cursor-pointer list-none p-4 sm:p-5 text-sm sm:text-base font-medium text-black dark:text-white select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink rounded-xl"
              itemProp="name"
            >
              <span className="text-left">{faq.question}</span>
              <svg
                className="shrink-0 h-4 w-4 text-black/45 dark:text-white/45 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
              className="px-4 sm:px-5 pb-4 sm:pb-5"
            >
              <p
                className="text-sm text-black/65 dark:text-white/65 leading-relaxed"
                itemProp="text"
              >
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

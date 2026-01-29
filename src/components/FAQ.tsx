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
        "Partner links are marked with a 'Redirect' label. I keep it transparent so you know when you're using one.",
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
      className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 sm:mb-8 text-center sm:text-left">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6" role="list">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="bg-white/5 dark:bg-background rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 p-4 sm:p-6"
            itemScope
            itemType="https://schema.org/Question"
            role="listitem"
          >
            <h3 
              className="text-base sm:text-lg font-medium text-black dark:text-white mb-2 text-center sm:text-left"
              itemProp="name"
            >
              {faq.question}
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p 
                className="text-sm sm:text-base text-black/70 dark:text-white/70 text-center sm:text-left"
                itemProp="text"
              >
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

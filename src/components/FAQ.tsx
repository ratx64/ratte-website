import React from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who is Ratte?",
      answer:
        "I'm a CS2 streamer and content creator. I share my settings, stream gameplay, and test gaming gear. Been playing competitive games for 15+ years.",
    },
    {
      question: "What's on this website?",
      answer:
        "Links to all my socials (Twitch, YouTube, TikTok, Discord), discount codes for gaming gear, my CS2 settings, Steam trading links, and affiliate links to gaming stores.",
    },
    {
      question: "How can I support you?",
      answer:
        "Use my affiliate links or discount codes when you're buying gaming gear. The code 'ratte' works at Gamerbulk, Acezone, SkinVault, and a few other places. You get a discount, I get a small commission. Win-win.",
    },
    {
      question: "Where can I find you?",
      answer:
        "Twitch for live streams, YouTube for longer videos, TikTok for clips, Discord to chat with the community, and X (Twitter) for random posts. All the links are on this site.",
    },
    {
      question: "What gaming gear do you recommend?",
      answer:
        "I've tested most of the gear I link to. Mice, keyboards, headsets, the usual stuff. Check the peripherals section for what I'm actually using. Everything there has discount codes if I have them.",
    },
    {
      question: "How do I use your discount codes?",
      answer:
        'Just enter "ratte" at checkout on Gamerbulk, Acezone, SkinVault, or wherever I have codes. The discount applies automatically if the code is still valid.',
    },
    {
      question: "How can I contact you?",
      answer:
        "Email me at biz@ratte.xyz for business stuff, partnerships, or questions. I try to respond, but it might take a bit if I'm streaming or busy.",
    },
  ];

  return (
    <section 
      id="faq"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-2xl font-bold text-black dark:text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6" role="list">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="bg-white/5 dark:bg-background rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 p-6"
            itemScope
            itemType="https://schema.org/Question"
            role="listitem"
          >
            <h3 
              className="text-lg font-medium text-black dark:text-white mb-2"
              itemProp="name"
            >
              {faq.question}
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p 
                className="text-black/70 dark:text-white/70"
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

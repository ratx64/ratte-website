export type FaqItem = {
  question: string;
  answer: string;
};

export const VISIBLE_FAQ_COUNT = 5;

export const SITE_FAQS: FaqItem[] = [
  {
    question: "where's the stream?",
    answer: "twitch.tv/rattecs for live. kick.com/rattecs when twitch is being twitch.",
  },
  {
    question: "what's the code?",
    answer:
      "RATTE. 10% off wallhack gear at wallhack.com/RATTE, 2% off mice at wlmouse.com/discount/ratte.",
  },
  {
    question: "discord?",
    answer: "discord.gg/gc2epPGDKP — chat, clips, and the usual chaos.",
  },
  {
    question: "biz inquiries?",
    answer: "biz@ratte.xyz. partnerships and anything that isn't a shitpost.",
  },
  {
    question: "is this your real links page?",
    answer: "yeah. ratte.xyz is the only official one. if it's not here, it's not me.",
  },
];

export const VISIBLE_FAQS = SITE_FAQS.slice(0, VISIBLE_FAQ_COUNT);
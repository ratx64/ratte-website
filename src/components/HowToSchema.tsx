import React from "react";

/**
 * HowTo schema for using partner links on RatteCS
 * Optimizes for AEO (Answer Engine Optimization) and featured snippets
 */
const HowToSchema: React.FC = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use RatteCS Partner Links",
    description:
      "Step-by-step guide on how to use partner links from the RatteCS link hub (e.g. CSFloat for CS2 skins).",
    image: "https://ratte.xyz/assets/og-image.webp",
    totalTime: "PT1M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    tool: [
      {
        "@type": "HowToTool",
        name: "Web browser",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open RatteCS Links",
        text: "Go to ratte.xyz and scroll to the Partners section.",
        image: "https://ratte.xyz/assets/og-image.webp",
        url: "https://ratte.xyz/#affiliate",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Click a Partner Link",
        text: "Click the partner link you want to use (e.g. CSFloat for buying or selling CS2 skins). Links marked 'Redirect' are partner links.",
        image: "https://ratte.xyz/assets/og-image.webp",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Use the Partner Site",
        text: "You'll be taken to the partner site. Use it as usual; you pay the same price, and I may get a small commission. Win-win.",
        image: "https://ratte.xyz/assets/og-image.webp",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
};

export default HowToSchema;

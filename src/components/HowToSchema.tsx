import React from "react";

/**
 * HowTo schema component for discount code usage
 * Optimizes for AEO (Answer Engine Optimization) and featured snippets
 */
const HowToSchema: React.FC = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use RatteCS Discount Codes",
    description:
      "Step-by-step guide on how to use RatteCS discount codes to get exclusive discounts on gaming gear from Gamerbulk, Acezone, SkinVault, and other partners.",
    image: "https://ratte.xyz/assets/og-image.webp",
    totalTime: "PT2M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "RatteCS discount code",
      },
      {
        "@type": "HowToSupply",
        name: "Account on partner website (Gamerbulk, Acezone, or SkinVault)",
      },
    ],
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
        name: "Visit Partner Website",
        text: "Click on the affiliate link for your desired partner (Gamerbulk, Acezone, SkinVault, etc.) from the RatteCS website.",
        image: "https://ratte.xyz/assets/og-image.webp",
        url: "https://ratte.xyz/#affiliate",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Browse and Add Items",
        text: "Browse the partner website and add your desired gaming gear items to your shopping cart.",
        image: "https://ratte.xyz/assets/og-image.webp",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Proceed to Checkout",
        text: "When ready, proceed to checkout and review your cart items.",
        image: "https://ratte.xyz/assets/og-image.webp",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Enter Discount Code",
        text: 'In the checkout page, locate the discount code or coupon code field and enter "ratte" (all lowercase).',
        image: "https://ratte.xyz/assets/og-image.webp",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Apply Discount",
        text: "Click the 'Apply' or 'Redeem' button to apply the discount code. The discount will be automatically calculated and applied to your order.",
        image: "https://ratte.xyz/assets/og-image.webp",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Complete Purchase",
        text: "Review your order total with the discount applied, then complete your purchase. You'll receive the discount and support RatteCS content creation at the same time!",
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

import React from "react";

interface StructuredDataProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  title,
  description,
  url,
  image = "../../assets/og-image.webp",
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: url,
    image: image,
    author: {
      "@type": "Person",
      name: "Ratte",
      url: "https://ratte.seweraim.com",
    },
    publisher: {
      "@type": "Organization",
      name: "RatteCS",
      logo: {
        "@type": "ImageObject",
        url: "../../assets/pfp.webp",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

import { allLinks } from "../data/links";
import { SITE } from "../data/site";
import { SITE_FAQS } from "./faqs";
import { LinkData } from "../types";

const IDS = {
  website: `${SITE.url}#website`,
  organization: `${SITE.url}#organization`,
  person: `${SITE.url}#person`,
  profilePage: `${SITE.url}#profilepage`,
  webpage: `${SITE.url}#webpage`,
  links: `${SITE.url}#links`,
  faq: `${SITE.url}#faq`,
  howTo: `${SITE.url}#howto`,
} as const;

function listItem(link: LinkData, position: number) {
  const description = link.couponCode
    ? `${link.description || link.title}${link.discountPercentage ? ` — ${link.discountPercentage}% off with code ${link.couponCode}` : ` — code ${link.couponCode}`}`
    : link.description;

  return {
    "@type": "ListItem",
    position,
    name: link.title,
    description,
    url: link.url,
    item: {
      "@type": "WebPage",
      "@id": link.url,
      name: link.title,
      description,
      url: link.url,
    },
  };
}

export function buildSchemaGraph(dateModified = SITE.dateModified) {
  const sortedLinks = [...allLinks].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0) || (b.clickCount || 0) - (a.clickCount || 0),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": IDS.website,
        name: SITE.name,
        alternateName: SITE.personName,
        url: SITE.url,
        description: SITE.description,
        image: SITE.image,
        inLanguage: SITE.inLanguage,
        datePublished: SITE.datePublished,
        dateModified,
        publisher: { "@id": IDS.organization },
        author: { "@id": IDS.person },
      },
      {
        "@type": "Organization",
        "@id": IDS.organization,
        name: SITE.name,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: SITE.logo,
          width: 512,
          height: 512,
        },
        sameAs: SITE.sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.email,
          contactType: "business inquiries",
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "Person",
        "@id": IDS.person,
        name: SITE.personName,
        alternateName: SITE.name,
        url: SITE.url,
        image: SITE.logo,
        jobTitle: "CS2 Content Creator & Streamer",
        description: "cs2 streamer and content creator. streams, socials, and partner links.",
        knowsAbout: [
          "Counter-Strike 2",
          "Live Streaming",
          "Content Creation",
          "Esports",
          "Gaming Community",
        ],
        sameAs: SITE.sameAs,
        worksFor: { "@id": IDS.organization },
      },
      {
        "@type": "WebPage",
        "@id": IDS.webpage,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        inLanguage: SITE.inLanguage,
        datePublished: SITE.datePublished,
        dateModified,
        isPartOf: { "@id": IDS.website },
        about: { "@id": IDS.person },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE.image,
          width: 1200,
          height: 630,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            ".simplink-name",
            ".simplink-bio",
            ".simplink-section-label",
            ".simplink-row-title",
            ".simplink-faq-q",
            ".simplink-faq-a",
          ],
        },
        mainEntity: [{ "@id": IDS.links }, { "@id": IDS.faq }],
      },
      {
        "@type": "ProfilePage",
        "@id": IDS.profilePage,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        inLanguage: SITE.inLanguage,
        datePublished: SITE.datePublished,
        dateModified,
        isPartOf: { "@id": IDS.website },
        mainEntity: { "@id": IDS.person },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE.image,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "ItemList",
        "@id": IDS.links,
        name: "RatteCS official links",
        description: SITE.description,
        numberOfItems: sortedLinks.length,
        itemListOrder: "https://schema.org/ItemListUnordered",
        itemListElement: sortedLinks.map((link, index) => listItem(link, index + 1)),
      },
      {
        "@type": "FAQPage",
        "@id": IDS.faq,
        mainEntity: SITE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "HowTo",
        "@id": IDS.howTo,
        name: "How to use RatteCS partner links",
        description:
          "Use partner links and discount codes from the official RatteCS link hub without paying extra.",
        image: SITE.imageWebp,
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open ratte.xyz",
            text: "Go to https://ratte.xyz/ and find the partners section.",
            url: `${SITE.url}#partners`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Copy the code",
            text: "Tap the code pill on a partner row to copy RATTE or open the partner site.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Check out on the partner site",
            text: "Apply the code at checkout if needed. You pay the same price; Ratte may earn a small commission.",
          },
        ],
      },
    ],
  };
}
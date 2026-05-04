/// <reference path="./types/global.d.ts" />
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";
import HowToSchema from "./components/HowToSchema";
import { initAnalytics } from "./utils/analytics";
import Favicon from "./assets/favicon.ico";

/**
 * The main application component that structures the page with enhanced SEO.
 */
const App: React.FC = () => {
  useEffect(() => {
    // Initialize analytics
    initAnalytics();

    // Ratte's visual system is intentionally dark-first.
    document.documentElement.classList.add("dark");
  }, []);

  const siteData = {
    title: "RatteCS - Links",
    description:
      "RatteCS link hub: CS2 streamer social profiles, CS2 settings, partner links, and all my links in one place.",
    // Embed-tuned variants used for og:* / twitter:* (shorter, creator-style,
    // optimized for Discord / Slack / iMessage previews). Document <title>
    // and meta description above stay SEO-rich for search engines.
    embedTitle: "Ratte — CS2 Streamer",
    embedDescription:
      "Twitch, YouTube, TikTok, Kick, Discord — plus my CS2 settings and partner links. All my links in one place.",
    url: "https://ratte.xyz/",
    image: "https://ratte.xyz/assets/og-image.jpg",
    imageWebp: "https://ratte.xyz/assets/og-image.webp",
    imageAlt: "Ratte — CS2 streamer and content creator",
    // Bumped on each meaningful content change; surfaced to crawlers and
    // AI answer engines as a freshness signal.
    dateModified: "2026-04-29",
    datePublished: "2024-01-01",
    inLanguage: "en",
  };

  return (
    <HelmetProvider>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Helmet>
        {/* Font Optimization - Non-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Non-blocking font loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={(e) => {
            (e.target as HTMLLinkElement).media = "all";
          }}
        />
        <noscript>
          {`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />`}
        </noscript>

        {/* Primary Meta Tags */}
        <title>{siteData.title}</title>
        <meta name="title" content={siteData.title} />
        <meta name="description" content={siteData.description} />
        <meta
          name="keywords"
          content="rattecs, cs2, counter-strike, gaming, streamer, content creator, links"
        />
        <meta name="author" content="RatteCS" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0C0C0C" />
        <link rel="canonical" href={siteData.url} />
        <link rel="icon" type="image/x-icon" href={Favicon} />

        {/* Open Graph / Facebook — tuned for link embeds. JPG primary for
            scraper compatibility; WebP listed second as fallback. */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteData.url} />
        <meta property="og:title" content={siteData.embedTitle} />
        <meta property="og:description" content={siteData.embedDescription} />
        <meta property="og:image" content={siteData.image} />
        <meta property="og:image:secure_url" content={siteData.image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={siteData.imageAlt} />
        <meta property="og:image" content={siteData.imageWebp} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="RatteCS" />
        <meta property="og:updated_time" content={siteData.dateModified} />

        {/* Twitter / X */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteData.url} />
        <meta property="twitter:title" content={siteData.embedTitle} />
        <meta property="twitter:description" content={siteData.embedDescription} />
        <meta property="twitter:image" content={siteData.image} />
        <meta property="twitter:image:alt" content={siteData.imageAlt} />
        <meta property="twitter:creator" content="@rattecs" />
        <meta property="twitter:site" content="@rattecs" />

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://ratte.xyz/#website",
            name: "RatteCS",
            description: siteData.description,
            url: siteData.url,
            image: siteData.image,
            inLanguage: siteData.inLanguage,
            datePublished: siteData.datePublished,
            dateModified: siteData.dateModified,
            author: {
              "@type": "Person",
              "@id": "https://ratte.xyz/#person",
            },
            publisher: {
              "@type": "Organization",
              name: "RatteCS",
              url: "https://ratte.xyz/",
              logo: {
                "@type": "ImageObject",
                url: "https://ratte.xyz/assets/pfp.webp",
                width: 512,
                height: 512,
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://ratte.xyz/?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        {/* Structured Data - ProfilePage (recommended type for creator/link-hub pages) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://ratte.xyz/#profilepage",
            url: siteData.url,
            name: siteData.title,
            description: siteData.description,
            inLanguage: siteData.inLanguage,
            dateModified: siteData.dateModified,
            datePublished: siteData.datePublished,
            isPartOf: { "@id": "https://ratte.xyz/#website" },
            mainEntity: { "@id": "https://ratte.xyz/#person" },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: siteData.image,
              width: 1200,
              height: 630,
            },
          })}
        </script>

        {/* Structured Data - Person (EEAT) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://ratte.xyz/#person",
            name: "Ratte",
            alternateName: "RatteCS",
            url: "https://ratte.xyz/",
                image: "https://ratte.xyz/assets/pfp.webp",
            jobTitle: "CS2 Content Creator & Streamer | Competitive Gamer | Social Media & Content Strategist",
            knowsAbout: [
              "Counter-Strike 2",
              "Competitive Gaming",
              "Content Creation",
              "Gaming Peripherals",
              "Streaming",
              "Gaming Content Creation",
              "CS2 Settings Configuration",
              "Social Media Strategy",
              "Esports",
              "Fitness & Nutrition",
              "PC Building",
            ],
            award: [
              "Faceit Level 10+ (Counter-Strike)",
              "Grandmaster (Overwatch)",
              "Immortal (Valorant)",
              "Apex Predator (Apex Legends)",
            ],
            sameAs: [
              "https://discord.gg/gc2epPGDKP",
              "https://instagram.com/cs_ratte",
              "https://www.youtube.com/@rattecs",
              "https://www.tiktok.com/@rattecs",
              "https://kick.com/rattecs",
              "https://twitch.tv/rattecs",
            ],
            description: "CS2 content creator and streamer sharing gaming content, settings, and partner links.",
          })}
        </script>

      </Helmet>

      {/* HowTo Schema for AEO - Outside Helmet to avoid nesting */}
      <HowToSchema />

      <div className="min-h-screen text-black dark:text-white">
        <main id="main-content" role="main">
          <LinkList />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;

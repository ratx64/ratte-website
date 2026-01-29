/// <reference path="./images.d.ts" />
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LinkList from "./components/LinkList";
import FAQ from "./components/FAQ";
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

    // Check if dark mode is preferred
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const siteData = {
    title: "RatteCS - Links",
    description:
      "RatteCS link hub: CS2 streamer social profiles, CS2 settings, partner links, and all my links in one place.",
    url: "https://ratte.xyz/",
    image: "https://ratte.xyz/assets/og-image.webp",
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
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={siteData.url} />
        <link rel="icon" type="image/x-icon" href={Favicon} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteData.url} />
        <meta property="og:title" content={siteData.title} />
        <meta property="og:description" content={siteData.description} />
        <meta property="og:image" content={siteData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="RatteCS - CS2 Streamer Links" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="RatteCS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteData.url} />
        <meta property="twitter:title" content={siteData.title} />
        <meta property="twitter:description" content={siteData.description} />
        <meta property="twitter:image" content={siteData.image} />
        <meta property="twitter:creator" content="@rattecs" />
        <meta property="twitter:site" content="@rattecs" />

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "RatteCS",
            description: siteData.description,
            url: siteData.url,
            image: siteData.image,
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

        {/* FAQ Schema - must match visible FAQ content for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's on this website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Links to all my socials (Twitch, YouTube, TikTok, Kick, Discord), my CS2 settings, Steam trading links, and partner links like CSFloat. All my links in one place.",
                },
              },
              {
                "@type": "Question",
                name: "Do I pay more when using your links?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Using my partner links doesn't increase the price you pay. I may get a small commission; you pay the same. Win-win.",
                },
              },
              {
                "@type": "Question",
                name: "How can I support you?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use my partner links when you buy stuff (e.g. CSFloat for skins). Following on Twitch, YouTube, or Discord and sharing the stream also helps.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I find you?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Twitch and Kick for live streams, YouTube for longer videos, TikTok for clips, Discord to chat, and X (Twitter) for updates. All links are on this page.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if a link is a partner link?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Partner links are marked with a 'Redirect' label. I keep it transparent so you know when you're using one.",
                },
              },
              {
                "@type": "Question",
                name: "How can I contact you?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Email biz@ratte.xyz for business, partnerships, or questions. I reply when I can; response may be slower when I'm streaming or busy.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HowTo Schema for AEO - Outside Helmet to avoid nesting */}
      <HowToSchema />

      <div className="min-h-screen bg-white dark:bg-background text-black dark:text-white transition-colors duration-300">
        <main id="main-content" role="main">
          <LinkList />
          <FAQ />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;

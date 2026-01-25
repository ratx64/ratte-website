import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LinkList from "./components/LinkList";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import About from "./components/About";
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
    title: "RatteCS - Links & Codes",
    description:
      "RatteCS link hub: CS2 streamer social profiles, gaming gear discount codes, CS2 settings, and affiliate links. Save on Gamerbulk, Acezone, SkinVault, and more.",
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
          onLoad="this.media='all'"
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
          content="rattecs, cs2, counter-strike, gaming, streamer, content creator, affiliate codes, discount codes"
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
        <meta property="og:image:alt" content="RatteCS - CS2 Streamer Links and Affiliate Codes" />
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
            description: "CS2 content creator and streamer sharing gaming content, settings, and exclusive discount codes for gaming gear.",
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are affiliate links and how do they work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Affiliate links are special URLs that track when visitors make purchases. When you click an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. This helps support our content creation.",
                },
              },
              {
                "@type": "Question",
                name: "How do I use the discount codes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Simply click on the affiliate link, add items to your cart, and enter the provided discount code at checkout. The discount will be automatically applied to your order.",
                },
              },
              {
                "@type": "Question",
                name: "Are the discount codes always valid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most discount codes have a long validity period, but some may expire. We try to keep all codes up to date. If you encounter an expired code, please let us know.",
                },
              },
              {
                "@type": "Question",
                name: "Do I pay more when using affiliate links?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, using our affiliate links does not increase the price you pay. In fact, you often get exclusive discounts not available elsewhere.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if a link is an affiliate link?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All affiliate links on our site are clearly marked with a 'Redirect' label and may include discount codes. We believe in transparency with our community.",
                },
              },
              {
                "@type": "Question",
                name: "What are the benefits of using your affiliate links?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Using our affiliate links not only supports our content creation but also gives you access to exclusive discounts, verified deals, and special promotions that aren't available elsewhere.",
                },
              },
              {
                "@type": "Question",
                name: "How do I track my savings and rewards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can track your savings and rewards through our gamification system. Each purchase earns you points, and you can see your streak, rank, and next reward on the link cards.",
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
          <About />
          <FAQ />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;

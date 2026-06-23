/// <reference path="./types/global.d.ts" />
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LinkList from "./components/LinkList";

import { SITE } from "./data/site";
import { initAnalytics } from "./utils/analytics";
import Favicon from "./assets/favicon.ico";

const App: React.FC = () => {
  useEffect(() => {
    initAnalytics();
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <HelmetProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Helmet>
        <html lang={SITE.inLanguage} />
        <title>{SITE.title}</title>
        <meta name="title" content={SITE.title} />
        <meta name="description" content={SITE.description} />
        <meta name="keywords" content={SITE.keywords.join(", ")} />
        <meta name="author" content={SITE.name} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0C" />
        <meta name="application-name" content={SITE.name} />
        <meta property="article:modified_time" content={SITE.dateModified} />
        {SITE.googleSiteVerification && (
          <meta name="google-site-verification" content={SITE.googleSiteVerification} />
        )}
        <link rel="canonical" href={SITE.url} />
        <link rel="icon" type="image/x-icon" href={Favicon} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site context" />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:title" content={SITE.embedTitle} />
        <meta property="og:description" content={SITE.embedDescription} />
        <meta property="og:image" content={SITE.image} />
        <meta property="og:image:secure_url" content={SITE.image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SITE.imageAlt} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:updated_time" content={SITE.dateModified} />
        <meta property="profile:username" content="rattecs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE.url} />
        <meta name="twitter:title" content={SITE.embedTitle} />
        <meta name="twitter:description" content={SITE.embedDescription} />
        <meta name="twitter:image" content={SITE.image} />
        <meta name="twitter:image:alt" content={SITE.imageAlt} />
        <meta name="twitter:creator" content={SITE.handle} />
        <meta name="twitter:site" content={SITE.handle} />
      </Helmet>

      <main id="main-content" role="main" className="min-h-screen">
        <LinkList />
      </main>
    </HelmetProvider>
  );
};

export default App;
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
// Import postcss plugins if needed, though Rsbuild often includes defaults
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');

const pageTitle = "RatteCS - Links";
const pageDescription =
  "Your central hub for RatteCS social media profiles (Twitch, Discord, YouTube, etc.), partner links, and CS2 config.";
const pageKeywords =
  "rattecs, counter-strike, cs2, twitch, discord, youtube, kick, steam, csfloat, settings, peripherals";
const canonicalUrl = "https://ratte.xyz/";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/index.tsx",
    },
    // Define environment variables for client-side code
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.REACT_APP_GA_MEASUREMENT_ID': JSON.stringify(process.env.REACT_APP_GA_MEASUREMENT_ID || ''),
    },
  },
  output: {
    distPath: {
      root: "dist",
      js: "static/js",
      css: "static/css",
      image: "static/image",
      media: "static/media",
    },
    // Optimize assets
    assetPrefix: "",
    filename: {
      js: "[name].[contenthash:8].js",
      css: "[name].[contenthash:8].css",
    },
  },
  performance: {
    chunkSplit: {
      strategy: "split-by-size",
      minSize: 20000,
      maxSize: 244000,
    },
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    rspack: {
      optimization: {
        minimize: true,
      },
    },
  },
  html: {
    template: "./public/index.html",
    title: pageTitle,
    tags: [
      { tag: "meta", attrs: { name: "description", content: pageDescription } },
      { tag: "meta", attrs: { name: "keywords", content: pageKeywords } },
      { tag: "meta", attrs: { name: "author", content: "RatteCS" } },
      // Canonical URL handled by react-helmet-async in App.tsx
      { tag: "meta", attrs: { property: "og:title", content: pageTitle } },
      {
        tag: "meta",
        attrs: { property: "og:description", content: pageDescription },
      },
      { tag: "meta", attrs: { property: "og:type", content: "website" } },
      { tag: "meta", attrs: { property: "og:url", content: canonicalUrl } },
      {
        tag: "meta",
        attrs: { property: "og:site_name", content: "RatteCS" },
      },
      { tag: "meta", attrs: { name: "twitter:card", content: "summary" } },
      { tag: "meta", attrs: { name: "twitter:title", content: pageTitle } },
      {
        tag: "meta",
        attrs: { name: "twitter:description", content: pageDescription },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      },
      // Font stylesheet loaded non-blocking via App.tsx
    ],
  },
  // Rsbuild usually detects Tailwind automatically.
  // If not, we might need to add tools.tailwindcss: {}
});

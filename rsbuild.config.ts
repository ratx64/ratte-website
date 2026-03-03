import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
// Import postcss plugins if needed, though Rsbuild often includes defaults
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');

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
  },
  // Rsbuild usually detects Tailwind automatically.
  // If not, we might need to add tools.tailwindcss: {}
});

import React from "react";
import { allLinks } from "../data/links";

/**
 * Footer component displaying contact information and copyright.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Derive "last updated" from the most recent lastUpdated field across links.
  // This stays accurate as content changes — no manual bumping required.
  const lastUpdated = React.useMemo(() => {
    const dates = allLinks
      .map((l) => l.lastUpdated)
      .filter((d): d is string => Boolean(d))
      .sort();
    const newest = dates[dates.length - 1];
    if (!newest) return null;
    try {
      return new Date(newest).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return newest;
    }
  }, []);

  return (
    <footer className="bg-transparent dark:bg-dark/30 backdrop-blur-sm text-dark/60 dark:text-light/60 p-4 sm:p-8 mt-8 sm:mt-12 border-t border-light/20 dark:border-steel/20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start text-xs sm:text-sm text-center md:text-left">
            <div className="mb-3">
          <h2 className="text-base sm:text-lg font-semibold text-accent-pink">
                Ratte
              </h2>
              <p className="text-xs text-dark/50 dark:text-light/50">
                @rattecs
              </p>
            </div>
            <p>
              <a
                href="#"
            className="hover:underline text-deep dark:text-accent-pink transition-colors hover:text-primary dark:hover:text-accent-pink hover-lift inline-flex items-center min-h-[44px] px-2"
                onClick={(e) => {
                  e.preventDefault();
                  const email = 'biz' + '@' + 'ratte.xyz';
                  window.location.href = 'mailto:' + email;
                }}
                aria-label="Email contact"
              >
                <span className="notranslate">biz[at]ratte[dot]xyz</span>
              </a>
            </p>
          </div>
        </div>

        <div className="w-full border-t border-light/10 dark:border-light/5 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-dark/40 dark:text-light/40 text-center md:text-left">
            © {currentYear} All rights reserved.
            {lastUpdated && (
              <>
                {" "}
                <span className="opacity-70">·</span>{" "}
                <span className="opacity-70">Last updated {lastUpdated}</span>
              </>
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#faq"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-accent-pink transition-colors inline-flex items-center min-h-[44px] px-2"
              aria-label="Frequently Asked Questions"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-accent-pink transition-colors inline-flex items-center min-h-[44px] px-2"
              aria-label="Contact for partner inquiries"
              onClick={(e) => {
                e.preventDefault();
                const email = 'biz' + '@' + 'ratte.xyz';
                window.location.href = 'mailto:' + email + '?subject=Partner%20Inquiry';
              }}
            >
              Partners
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

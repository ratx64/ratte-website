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
    <footer
      className="bg-transparent dark:bg-dark/25 text-dark/60 dark:text-light/60 p-4 sm:p-8 mt-10 sm:mt-14 border-t border-black/10 dark:border-white/10 motion-safe:animate-[section-load-in_560ms_cubic-bezier(0.16,1,0.3,1)_both]"
      style={{ animationDelay: "460ms" }}
    >
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start text-[0.8125rem] sm:text-[0.875rem] font-medium text-center md:text-left">
            <div className="mb-3">
              <h2 className="text-[1.0625rem] sm:text-[1.1875rem] font-extrabold leading-tight text-accent-pink">
                Ratte
              </h2>
              <p className="text-[0.75rem] font-semibold leading-snug text-dark/52 dark:text-light/52">
                @rattecs
              </p>
            </div>
            <p>
              <a
                href="#"
                className="text-deep dark:text-accent-pink transition-[transform,color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-primary dark:hover:text-accent-pink inline-flex items-center min-h-[44px] px-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none motion-reduce:transform-none"
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

        <div className="w-full border-t border-black/10 dark:border-white/10 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[0.75rem] sm:text-[0.8125rem] font-medium leading-snug text-dark/44 dark:text-light/44 text-center md:text-left">
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
              href="#"
              className="text-[0.8125rem] font-semibold leading-none text-dark/48 dark:text-light/48 hover:-translate-y-px hover:text-primary dark:hover:text-accent-pink transition-[transform,color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] inline-flex items-center min-h-[44px] px-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none motion-reduce:transform-none"
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

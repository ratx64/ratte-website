import React, { useEffect, useState } from "react";
import { allLinks } from "../data/links";
import csfloatIcon from "../assets/csfloat.webp";
import wallhackIcon from "../assets/wallhack.webp";

const iconMap: Record<string, string> = {
  csfloat: csfloatIcon,
  wallhack: wallhackIcon,
};

const FEATURED_PARTNER_ID = "12";
const featuredPartner = allLinks.find((link) => link.id === FEATURED_PARTNER_ID);

/**
 * Current main sponsor / partner config.
 *
 * To swap the partner: update FEATURED_PARTNER_ID to another partner link id.
 * To disable entirely: set `enabled: false`.
 */
export const sponsor = {
  enabled: true,
  link: featuredPartner,
  disclosure: "Affiliate / Partner link - I may earn a commission at no extra cost to you.",
};

// Storage key shared with TopBar so the two banners never both render at once.
export const SPONSOR_STICKY_STORAGE_KEY = "rattecs:sponsor-sticky-dismissed";

/**
 * Returns true if the sticky sponsor banner is currently visible, i.e. the
 * sponsor is enabled and the user hasn't dismissed it.
 */
export function isStickySponsorVisible(): boolean {
  if (!sponsor.enabled || !sponsor.link) return false;
  try {
    return localStorage.getItem(SPONSOR_STICKY_STORAGE_KEY) !== "1";
  } catch {
    return sponsor.enabled;
  }
}

interface SponsorBannerProps {
  variant?: "sticky" | "inline";
}

const SponsorBanner: React.FC<SponsorBannerProps> = ({ variant = "inline" }) => {
  const [dismissed, setDismissed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (variant !== "sticky") return;
    try {
      setDismissed(localStorage.getItem(SPONSOR_STICKY_STORAGE_KEY) === "1");
    } catch {
      // localStorage may be blocked; treat as not dismissed.
    }
    setHydrated(true);
  }, [variant]);

  const partner = sponsor.link;
  if (!sponsor.enabled || !partner) return null;
  const sponsorCode = partner.couponCode || partner.affiliateCode;
  const sponsorTagline = partner.description || "";
  const sponsorAnalyticsId = partner.analyticsId || partner.title.toLowerCase();

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(SPONSOR_STICKY_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent("rattecs:sponsor-dismissed"));
  };

  // Sticky pill (top of page)
  if (variant === "sticky") {
    if (!hydrated || dismissed) return null;

    return (
      <div
        role="region"
        aria-label="Partner banner"
        className="sticky top-0 z-30 w-full bg-light/95 dark:bg-background/95 border-b border-black/10 dark:border-white/10"
      >
        <div className="max-w-3xl mx-auto px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
          <span
            className="shrink-0 px-1.5 py-0.5 rounded text-[0.625rem] font-bold leading-none tracking-[0.08em] uppercase bg-accent-pink/10 text-accent-pink border border-accent-pink/20"
            title={sponsor.disclosure}
          >
            Partner
          </span>
          <p className="text-[0.8125rem] sm:text-[0.9375rem] font-medium leading-snug text-black/80 dark:text-white/85 truncate flex-1 min-w-0">
            <span className="font-semibold text-black dark:text-white">
              {partner.title}
            </span>
            <span className="hidden sm:inline">
              {" "}
              {sponsorTagline}
            </span>
            {sponsorCode && (
              <span className="ml-2 inline-flex items-center gap-1 align-middle">
                <span className="opacity-60">code</span>
                <code className="px-1.5 py-0.5 rounded bg-primary/10 dark:bg-accent-pink/10 text-primary dark:text-accent-pink font-mono text-[0.6875rem] sm:text-[0.75rem] font-bold">
                  {sponsorCode}
                </code>
              </span>
            )}
          </p>
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            data-analytics-id={`sponsor-sticky-${sponsorAnalyticsId}`}
            className="shrink-0 inline-flex items-center justify-center min-h-[44px] px-3 py-1.5 rounded-lg bg-accent-pink text-background text-[0.8125rem] sm:text-[0.875rem] leading-none font-bold hover:opacity-90 hover:-translate-y-px active:scale-95 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none"
          >
            Use code
            <svg
              className="ml-1 h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M11 3a1 1 0 100 2h2.586L7.293 11.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss partner banner"
            className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Inline Featured Partner card
  const iconSrc = partner.icon ? iconMap[partner.icon] : undefined;
  return (
    <aside
      aria-label={`Featured partner: ${partner.title}`}
      className="relative mb-6 sm:mb-7 group"
    >
      <div className="absolute -top-2 left-3 z-10 px-2 py-0.5 rounded-full bg-accent-pink/15 dark:bg-accent-pink/20 border border-accent-pink/30 text-[0.625rem] font-bold leading-none tracking-[0.08em] uppercase text-accent-pink">
        Featured Partner
      </div>
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        data-analytics-id={`sponsor-inline-${sponsorAnalyticsId}`}
        className="featured-signal block rounded-xl border border-accent-pink/35 dark:border-accent-pink/40 bg-black/[0.045] dark:bg-white/[0.055] p-4 sm:p-5 transition-[transform,border-color,background-color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.006] hover:border-accent-pink/70 hover:bg-black/[0.065] dark:hover:bg-white/[0.085] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none motion-reduce:transform-none"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {iconSrc && (
            <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent-pink/30 group-hover:ring-accent-pink/60 transition-[transform,box-shadow] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:transform-none">
              <img
                src={iconSrc}
                alt={`${partner.title} logo`}
                className="w-full h-full object-cover"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-[1.0625rem] sm:text-[1.1875rem] font-extrabold leading-tight text-black dark:text-white">
              {partner.title}
            </h3>
            <p className="text-[0.8125rem] sm:text-[0.9375rem] font-medium leading-snug text-black/66 dark:text-white/68 line-clamp-2 mt-0.5">
              {sponsorTagline}
            </p>
          </div>
          <div className="hidden min-[421px]:flex shrink-0 flex-col items-end gap-1">
            {sponsorCode && (
              <span className="px-2 py-1 rounded-md bg-accent-pink/10 dark:bg-accent-pink/15 text-accent-pink text-[0.75rem] leading-none font-mono font-bold">
                {sponsorCode}
              </span>
            )}
            <span className="text-[0.625rem] uppercase tracking-[0.08em] font-bold leading-none text-black/46 dark:text-white/48 transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none">
              Visit &gt;
            </span>
          </div>
        </div>
        <p className="mt-3 text-[0.75rem] font-medium text-black/52 dark:text-white/54 leading-snug">
          {sponsor.disclosure}
        </p>
      </a>
    </aside>
  );
};

export default SponsorBanner;

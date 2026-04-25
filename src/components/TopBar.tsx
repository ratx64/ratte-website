import React, { useEffect, useState } from "react";
import { isStickySponsorVisible } from "./SponsorBanner";

const STORAGE_KEY = "rattecs:topbar-dismissed";
// Bump this when the message materially changes — old dismissals will be ignored.
const VERSION = "v1";
// Don't peep until the user shows engagement.
const DELAY_MS = 2000;
const SCROLL_THRESHOLD = 120;

/**
 * Dismissible "Support RatteCS" toast — bottom-anchored across all viewports.
 *
 * Anti-pushiness rules:
 *  - Never renders while the sticky sponsor banner is on screen.
 *  - Waits until the user has either scrolled >120px OR 2s have elapsed
 *    without movement — whichever comes first signals engagement.
 *  - Dismissal persists per-version via localStorage.
 *  - Auto-dismisses when the user clicks the CTA (less nagging).
 */
const TopBar: React.FC = () => {
  // null = undecided (don't render to avoid flash / CLS).
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === VERSION;
    } catch {
      /* ignore */
    }
    if (dismissed) {
      setVisible(false);
      return;
    }

    let revealTimer: number | null = null;
    let cancelled = false;

    const tryReveal = () => {
      if (cancelled) return;
      // Defer if the sticky sponsor is currently shouting.
      if (isStickySponsorVisible()) return;
      setVisible(true);
    };

    const onScroll = () => {
      if (window.scrollY >= SCROLL_THRESHOLD) {
        tryReveal();
      }
    };

    const onSponsorDismissed = () => tryReveal();

    revealTimer = window.setTimeout(tryReveal, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener(
      "rattecs:sponsor-dismissed" as keyof WindowEventMap,
      onSponsorDismissed as EventListener
    );

    return () => {
      cancelled = true;
      if (revealTimer !== null) window.clearTimeout(revealTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(
        "rattecs:sponsor-dismissed" as keyof WindowEventMap,
        onSponsorDismissed as EventListener
      );
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, VERSION);
    } catch {
      /* ignore */
    }
  };

  if (visible !== true) return null;

  return (
    <div
      role="region"
      aria-label="Support RatteCS"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[env(safe-area-inset-bottom)] pointer-events-none motion-safe:animate-[topbar-in_280ms_ease-out_both]"
    >
      <div className="pointer-events-auto mx-auto max-w-md mb-3 flex items-center gap-2 sm:gap-3 rounded-2xl border border-accent-gray/15 dark:border-accent-gray/25 bg-white/85 dark:bg-ratteDarkGray/95 backdrop-blur-lg shadow-xl shadow-black/15 dark:shadow-black/50 px-3 sm:px-4 py-2.5 sm:py-3">
        <span
          aria-hidden="true"
          className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-pink/15 text-accent-pink"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7.5-4.6-9.6-9.1C1 8.5 3.4 5 6.6 5c1.9 0 3.5 1 4.4 2.4C12 6 13.6 5 15.4 5c3.2 0 5.6 3.5 4.2 6.9C19.5 16.4 12 21 12 21z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1 text-[12.5px] sm:text-sm leading-snug text-black/85 dark:text-white/90">
          <strong className="font-semibold text-black dark:text-white">
            Support RatteCS
          </strong>{" "}
          <span className="opacity-80">— use my links &amp; codes.</span>
        </div>
        <a
          href="#partners"
          onClick={() => {
            dismiss();
          }}
              className="shrink-0 inline-flex items-center justify-center min-h-[40px] px-3 sm:px-4 rounded-full bg-primary text-white dark:bg-accent-pink dark:text-white text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-95 transition"
        >
          See codes
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
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
};

export default TopBar;

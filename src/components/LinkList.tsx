import React, { useMemo, useState } from "react";
import { FaTwitch } from "react-icons/fa";
import LinkCard from "./LinkCard"; // Import the card component
import TwitchEmbed from "./TwitchEmbed";
import SponsorBanner from "./SponsorBanner";
import { LinkData } from "../types"; // Import the shared type
import { allLinks } from "../data/links"; // Import the actual link data
import pfpImage from "../assets/pfp2.webp";

/**
 * Hero CTA buttons (Twitch + E-Mail) — matches the Linx-style two-button row
 * under the profile description. Twitch opens the live channel; E-Mail copies
 * the address to clipboard with brief visual feedback.
 */
const HeroCTAs: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "biz" + "@" + "ratte.xyz";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked; fall back to mailto so the click isn't a dead end.
      window.location.href = "mailto:" + email;
    }
  };

  const baseBtn =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-black dark:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:border-accent-pink/40 dark:hover:border-accent-pink/40 transition-[background-color,border-color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] min-h-[44px] min-w-[120px]";

  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href="https://twitch.tv/rattecs"
        target="_blank"
        rel="noopener noreferrer"
        className={baseBtn}
        data-analytics-id="hero-cta-twitch"
        aria-label="Watch Ratte live on Twitch"
      >
        <FaTwitch className="h-4 w-4" aria-hidden="true" />
        <span>Twitch</span>
      </a>
      <button
        type="button"
        onClick={handleCopyEmail}
        className={baseBtn}
        data-analytics-id="hero-cta-email"
        aria-label={copied ? "Email address copied" : "Copy email address"}
      >
        {copied ? (
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        )}
        <span>{copied ? "Copied" : "E-Mail"}</span>
      </button>
    </div>
  );
};

/**
 * Component to display a list of links using LinkCard components with enhanced organization and SEO.
 */
const LinkList: React.FC = () => {
  // Organize links by category and priority
  const organizedLinks = useMemo(() => {
    const categories = {
      social: allLinks.filter((link) => link.category === "social"),
      steam: allLinks.filter((link) => link.category === "steam"),
      partner: allLinks.filter((link) => link.category === "partner"),
      config: allLinks.filter((link) => link.category === "config"),
    };

    // Sort each category by priority (descending) and then by clickCount (descending)
    Object.keys(categories).forEach((category) => {
      categories[category as keyof typeof categories].sort((a, b) => {
        const priorityA = a.priority || 0;
        const priorityB = b.priority || 0;
        if (priorityA !== priorityB) return priorityB - priorityA;
        return (b.clickCount || 0) - (a.clickCount || 0);
      });
    });

    return categories;
  }, []);

  // Section render helper with enhanced SEO and visual hierarchy
  const renderSection = (
    sectionId: string,
    title: string,
    links: LinkData[],
    description?: string,
  ) => {
    if (links.length === 0) return null;

    return (
      <section
        id={sectionId}
        className="mb-5 sm:mb-6"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="numberOfItems" content={links.length.toString()} />
        <div className="mb-3 sm:mb-4 text-center">
          <h2
            className="text-lg sm:text-xl font-semibold text-black dark:text-white"
            itemProp="name"
          >
            {title}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm text-black/50 dark:text-white/50 mt-0.5">
              {description}
            </p>
          )}
        </div>
        <div
          className="grid gap-2.5 sm:gap-3 grid-cols-1" // Always 1 column on mobile, implicit on larger
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          {links.map((link, index) => (
            <div
              key={link.id}
              itemProp="item"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <LinkCard
                link={link}
                whiteIcon={
                  link.title === "TikTok" ||
                  link.title === "X (Twitter)" ||
                  link.title === "Steam" ||
                  link.title === "Trade Link"
                }
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 max-[360px]:px-2 sm:px-4 md:px-6 pt-10 pb-4 sm:py-8 sm:mt-12">
      {/* Profile Section with enhanced visual appeal */}
      <div className="mb-4 sm:mb-6 flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3 sm:mb-4">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30 dark:border-primary/20 bg-white dark:bg-background">
            <img
              src={pfpImage}
              alt="RatteCS CS2 streamer and gaming content creator profile photo"
              className="w-full h-full object-cover"
              width={128}
              height={128}
              loading="eager"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 blur-xl -z-10" />
        </div>

        <div className="text-center max-w-2xl flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mb-3 sm:mb-4">
            Ratte
          </h1>
          <p className="text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed px-2 sm:px-0 mb-4 sm:mb-5 max-w-md">
            All my links in one place. Thanks for the support!
          </p>
          <HeroCTAs />
        </div>
      </div>

      {/* Twitch first — most important destination for the audience */}
      <TwitchEmbed channel="rattecs" parent={["ratte.xyz", "localhost"]} />

      {/* Main platforms (where to find me) */}
      {renderSection(
        "social",
        "Social Profiles",
        organizedLinks.social,
        "Where to find me online",
      )}

      {/* Partners — featured first via inline SponsorBanner card, then full list */}
      <div id="partners" className="scroll-mt-20 mt-8 sm:mt-10">
        <SponsorBanner variant="inline" />
      </div>
      {renderSection(
        "partners-list",
        "Partners",
        organizedLinks.partner,
        "Partner links",
      )}

      {renderSection("steam", "Steam", organizedLinks.steam, "Steam stuff")}

      {renderSection(
        "config",
        "Config & Settings",
        organizedLinks.config,
        "My CS2 settings and gear",
      )}
    </div>
  );
};

export default LinkList;

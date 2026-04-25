import React, { useMemo, useState, useEffect } from "react";
import LinkCard from "./LinkCard"; // Import the card component
import TwitchEmbed from "./TwitchEmbed";
import SponsorBanner from "./SponsorBanner";
import { LinkData } from "../types"; // Import the shared type
import { allLinks } from "../data/links"; // Import the actual link data
import pfpImage from "../assets/pfp2.webp";
import SocialIcons from "./SocialIcons";

/**
 * Component to display a list of links using LinkCard components with enhanced organization and SEO.
 */
const LinkList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    icon: React.ReactNode,
    description?: string
  ) => {
    if (links.length === 0) return null;

    return (
      <section
        id={sectionId}
        className="mb-8 sm:mb-12"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="numberOfItems" content={links.length.toString()} />
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6 text-center sm:text-left">
          <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5 dark:bg-background border border-accent-gray/10 dark:border-accent-gray/20">
            {icon}
          </div>
          <div className="min-w-0">
            <h2
              className="text-xl sm:text-2xl font-bold text-black dark:text-white"
              itemProp="name"
            >
              {title}
            </h2>
            {description && (
              <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 mt-0.5 sm:mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        <div
          className="grid gap-3 sm:gap-4 grid-cols-1" // Always 1 column on mobile, implicit on larger
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

  // Mobile category navigation with enhanced features
  const renderMobileNav = () => {
    if (!isMobile) return null;

    return (
      <div className="sticky top-0 z-20 bg-white/5 dark:bg-background backdrop-blur-sm border-b border-accent-gray/10 dark:border-accent-gray/20 mb-6 sm:mb-8">
        <div className="container mx-auto px-2 sm:px-4 py-2">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {Object.entries(organizedLinks).map(([category, links]) => {
              if (links.length === 0) return null;
              return (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(activeCategory === category ? null : category)
                  }
                  className={`px-2.5 max-[360px]:px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] max-[360px]:text-[10px] sm:text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300"
                      : "bg-white/5 dark:bg-background text-black/60 dark:text-white/60 hover:bg-white/10 dark:hover:bg-background/50"
                  }`}
                  aria-label={`${category} links`}
                  aria-pressed={activeCategory === category}
                  aria-expanded={activeCategory === category}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  {links.length > 0 && (
                    <span className="ml-1 inline-flex items-center rounded-full bg-white/10 dark:bg-background/50 px-1.5 py-0.5 text-[10px] sm:text-xs">
                      {links.length}
                    </span>
                  )}
                </button>
              );
            })}
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="p-2 rounded-full bg-white/5 dark:bg-background hover:bg-white/10 dark:hover:bg-background/50 transition-colors flex items-center justify-center"
                aria-label="Clear filter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 text-black/60 dark:text-white/60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 max-[360px]:px-2 sm:px-4 md:px-6 py-4 sm:py-8">
      {/* Mobile Navigation */}
      {renderMobileNav()}

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
              {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 blur-xl -z-10" />
        </div>

        <div className="text-center max-w-2xl flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2 sm:mb-3">
            Ratte
          </h1>
          <div className="mb-3 sm:mb-4">
            <SocialIcons />
          </div>
          <p className="text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed px-2 sm:px-0">
            All my links in one place. Thanks for the support!
          </p>
        </div>
      </div>

      {/* Twitch first — most important destination for the audience */}
      <TwitchEmbed channel="rattecs" parent={["ratte.xyz", "localhost"]} />

      {/* Main platforms (where to find me) */}
      {(!isMobile || activeCategory === null || activeCategory === "social") &&
        renderSection(
          "social",
          "Social Profiles",
          organizedLinks.social,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>,
          "Where to find me online"
        )}

      {/* Partners — featured first via inline SponsorBanner card, then full list */}
      {(!isMobile || activeCategory === null || activeCategory === "partner") && (
        <>
          <div id="partners" className="scroll-mt-20">
            <SponsorBanner variant="inline" />
          </div>
          {renderSection(
            "partners-list",
            "Partners",
            organizedLinks.partner,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-accent dark:text-accent"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>,
            "Partner links"
          )}
        </>
      )}

      {(!isMobile || activeCategory === null || activeCategory === "steam") &&
        renderSection(
          "steam",
          "Steam",
          organizedLinks.steam,
          <svg
            xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>,
          "Steam stuff"
        )}

      {(!isMobile || activeCategory === null || activeCategory === "config") &&
        renderSection(
          "config",
          "Config & Settings",
          organizedLinks.config,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-primary-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>,
          "My CS2 settings and gear"
        )}
    </div>
  );
};

export default LinkList;

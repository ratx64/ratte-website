import React from "react";
import { LinkData } from "../types";
import AffiliateBadge from "./AffiliateBadge";
import GamificationBadge from "./GamificationBadge";
import {
  DiscordIcon,
  KickIcon,
  SteamIcon,
  TikTokIcon,
  TwitchIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";

// Import all images
import gearzggIcon from "../assets/gearzgg.webp";
import skinportIcon from "../assets/skinport.webp";
import csfloatIcon from "../assets/csfloat.webp";
import eliteklanIcon from "../assets/eliteklan.webp";
import acezoneIcon from "../assets/acezone.webp";
import gamerbulkIcon from "../assets/gamerbulk.webp";
import skinvaultIcon from "../assets/skinvault.webp";
import pfpIcon from "../assets/pfp.webp";
import wallhackIcon from "../assets/wallhack.webp";
import protonvpnIcon from "../assets/protonvpn.webp";
import wlmouseIcon from "../assets/wlmouse.webp";

// Create a mapping of icon identifiers to actual images
const iconMap: Record<string, string> = {
  peripherals: gearzggIcon,
  skinport: skinportIcon,
  csfloat: csfloatIcon,
  eliteklan: eliteklanIcon,
  acezone: acezoneIcon,
  gamerbulk: gamerbulkIcon,
  skinvault: skinvaultIcon,
  pfp: pfpIcon,
  wallhack: wallhackIcon,
  protonvpn: protonvpnIcon,
  wlmouse: wlmouseIcon,
};

// Default icons for different types of links
const defaultIcons: Record<string, React.ReactNode> = {
  // Social Media Icons
  "x.com": <XIcon className="h-6 w-6 text-ratteDarkGray dark:text-white" />,
  "twitter.com": <XIcon className="h-6 w-6 text-ratteDarkGray dark:text-white" />,
  "steamcommunity.com": <SteamIcon className="h-6 w-6 text-[#1B2838]" />,
  "steamcommunity.com/tradeoffer": (
    <SteamIcon className="h-6 w-6 text-[#1B2838]" />
  ),
  "discord.com": <DiscordIcon className="h-6 w-6 text-[#5865F2]" />,
  "discord.gg": <DiscordIcon className="h-6 w-6 text-[#5865F2]" />,
  "twitch.tv": <TwitchIcon className="h-6 w-6 text-[#9146FF]" />,
  "youtube.com": <YouTubeIcon className="h-6 w-6 text-[#FF0000]" />,
  "tiktok.com": <TikTokIcon className="h-6 w-6 text-ratteDarkGray dark:text-white" />,
  "kick.com": <KickIcon className="h-6 w-6 text-[#00FF47]" />,

  // Trading/Skin Sites
  "csfloat.com": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-primary-300"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "skinport.com": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "skinvault.gg": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  // Default icons for categories
  social: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-primary-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  ),
  affiliate: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
  community: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-primary-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  partner: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
  ),
  config: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black/55 dark:text-white/55"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  default: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent-gray dark:text-accent-gray"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

interface LinkCardProps {
  link: LinkData;
  whiteIcon?: boolean;
}

/**
 * Component for individual link cards with enhanced SEO and schema.org support.
 */
const LinkCard: React.FC<LinkCardProps> = ({ link, whiteIcon = false }) => {
  const {
    title,
    url,
    icon,
    clickCount,
    description,
    couponCode,
    seoKeywords,
    schemaType,
    analyticsId,
    isVerified,
    lastUpdated,
    discountPercentage,
    productDetails,
    category,
    affiliateCode,
    priority,
    successRate,
    isLimitedTime,
    remainingCodes,
    streakCount,
    pointsEarned,
    nextReward,
    isDealOfTheDay,
    rank,
  } = link;

  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked by browser permissions. Keep the code visible for manual copy.
    }
  };

  // Generate enhanced schema.org JSON-LD
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType || "WebPage",
      name: title,
      url: url,
      description: description,
      dateModified: lastUpdated,
      keywords: seoKeywords?.join(", "),
      isAccessibleForFree: true,
    };

    if (schemaType === "Product" && productDetails) {
      return {
        ...baseSchema,
        "@type": "Product",
        brand: {
          "@type": "Brand",
          name: productDetails.brand,
        },
        category: productDetails.category,
        offers: {
          "@type": "Offer",
          price: productDetails.offers.price,
          priceCurrency: productDetails.offers.priceCurrency,
          priceValidUntil: productDetails.offers.priceValidUntil,
          availability: `https://schema.org/${productDetails.offers.availability}`,
          url: productDetails.offers.url,
          seller: {
            "@type": "Organization",
            name: productDetails.offers.seller.name,
            url: productDetails.offers.seller.url,
          },
          // Add coupon information if available
          ...(couponCode && {
            discountCode: couponCode,
            discount: {
              "@type": "MonetaryAmount",
              currency: productDetails.offers.priceCurrency,
              value: (
                (productDetails.offers.price * (discountPercentage || 0)) /
                100
              ).toFixed(2),
            },
          }),
        },
        aggregateRating: productDetails.aggregateRating
          ? {
              "@type": "AggregateRating",
              ratingValue: productDetails.aggregateRating.ratingValue,
              reviewCount: productDetails.aggregateRating.reviewCount,
            }
          : undefined,
        // Add additional product details
        ...(isLimitedTime && {
          availabilityStarts: new Date().toISOString(),
          availabilityEnds: productDetails.offers.priceValidUntil,
        }),
        ...(remainingCodes && {
          inventoryLevel: {
            "@type": "QuantitativeValue",
            value: remainingCodes,
          },
        }),
        ...(successRate && {
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: successRate,
              bestRating: 100,
            },
          },
        }),
      };
    }

    return baseSchema;
  };

  // Select the icon
  let selectedIcon = Object.keys(defaultIcons).find((key) => url.includes(key))
    ? defaultIcons[Object.keys(defaultIcons).find((key) => url.includes(key))!]
    : category && defaultIcons[category]
    ? defaultIcons[category]
    : defaultIcons.default;

  // Override className if whiteIcon is true
  let iconElement: React.ReactNode = selectedIcon;
  if (whiteIcon && React.isValidElement(selectedIcon)) {
    iconElement = React.cloneElement(selectedIcon as React.ReactElement, {
      className: "h-6 w-6 text-black dark:text-white",
    });
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
      />

      <div className="block group">
        <div
          className={`signal-card relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.05] transition-[transform,border-color,background-color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.006] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:border-accent-pink/45 dark:hover:border-accent-pink/50 active:scale-[0.985] motion-reduce:transition-none motion-reduce:transform-none ${
            priority === 1 ? "ring-1 ring-accent-pink/40" : ""
          }`}
        >
          <a
            href={url}
            target="_blank"
            rel={`noopener noreferrer${category === "affiliate" || category === "partner" ? " sponsored" : ""}`}
            className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-pink"
            data-analytics-id={analyticsId}
            aria-label={`Visit ${title}${description ? ` - ${description}` : ""}`}
          />
          <div className="relative z-10 flex items-center gap-3 sm:gap-4 p-3 sm:p-4 pointer-events-none">
            {/* Uniform icon container — 44/48px rounded square */}
            <div className="shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-black/[0.04] dark:bg-white/[0.06] border border-black/5 dark:border-white/5 flex items-center justify-center transition-[transform,border-color,background-color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:border-accent-pink/20 group-hover:bg-accent-pink/[0.035] motion-reduce:transition-none motion-reduce:transform-none">
                {icon && iconMap[icon] ? (
                  <img
                    src={iconMap[icon]}
                    alt={`${title} ${category === "affiliate" ? "affiliate link" : "link"} icon`}
                    className="w-full h-full object-cover transition-transform duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:transform-none"
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    sizes="48px"
                  />
                ) : (
                  iconElement
                )}
              </div>
            </div>

            {/* Title + description */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <h3 className="text-[0.9375rem] sm:text-[1.0625rem] font-bold leading-tight text-black dark:text-white truncate group-hover:text-accent-pink/90 dark:group-hover:text-accent-pink transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  {title}
                </h3>
                {isVerified && (
                  <span
                    className="shrink-0 inline-flex items-center align-middle leading-none"
                    title="Verified Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-black/44 dark:text-white/50 group-hover:text-accent-pink/80 transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </div>
              {description && (
                <p className="text-[0.8125rem] sm:text-[0.9375rem] font-medium leading-snug text-black/62 dark:text-white/64 truncate mt-1">
                  {description}
                </p>
              )}
              {productDetails?.aggregateRating && (
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i <
                          Math.floor(
                            productDetails.aggregateRating?.ratingValue || 0,
                          )
                            ? "text-accent-pink"
                            : "text-black/15 dark:text-white/15"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[0.75rem] font-medium text-black/46 dark:text-white/46">
                    (
                    {productDetails.aggregateRating?.reviewCount?.toLocaleString() ||
                      "0"}{" "}
                    reviews)
                  </span>
                </div>
              )}
              {/* Optional meta badges — render inline & small to fit the new clean layout. */}
              <AffiliateBadge
                discountPercentage={discountPercentage}
                isVerified={isVerified}
                clickCount={clickCount}
                lastUpdated={lastUpdated}
                successRate={successRate}
                isLimitedTime={isLimitedTime}
                remainingCodes={remainingCodes}
              />
              <GamificationBadge
                streakCount={streakCount}
                pointsEarned={pointsEarned}
                nextReward={nextReward}
                isDealOfTheDay={isDealOfTheDay}
                rank={rank}
              />
            </div>

            {/* Right-side action: optional coupon pill + arrow button */}
            <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 pointer-events-none">
              {couponCode && (
                <button
                  type="button"
                  onClick={() => handleCopyCode(couponCode)}
                  className="pointer-events-auto hidden min-[421px]:inline-flex min-h-[36px] items-center gap-1 px-2 py-1 rounded-md bg-accent-pink/10 dark:bg-accent-pink/15 text-accent-pink text-[0.6875rem] sm:text-[0.75rem] leading-none font-mono font-bold hover:bg-accent-pink/20 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-[transform,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none"
                  aria-label={`Copy code ${couponCode}`}
                  aria-pressed={isCopied}
                >
                  {isCopied ? "Copied" : couponCode}
                </button>
              )}
              <span
                aria-hidden="true"
                className="hidden min-[421px]:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-black/55 dark:text-white/55 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-accent-pink/40 group-hover:text-accent-pink hover:bg-black/[0.04] dark:hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-[transform,color,border-color,background-color] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M11 3a1 1 0 100 2h2.586L7.293 11.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkCard;

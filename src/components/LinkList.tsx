import React, { useMemo, useState } from "react";
import { LinkData } from "../types";
import pfpImage from "../assets/pfp2.webp";
import {
  DiscordIcon,
  KickIcon,
  SteamIcon,
  TikTokIcon,
  TwitchIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";

import skinportIcon from "../assets/skinport.webp";
import csfloatIcon from "../assets/csfloat.webp";
import wallhackIcon from "../assets/wallhack.webp";
import protonvpnIcon from "../assets/protonvpn.webp";
import wlmouseIcon from "../assets/wlmouse.webp";

import { SITE } from "../data/site";
import { groupLinks } from "../seo/groupLinks";
import FaqSection from "./FaqSection";

const email = SITE.email;

const iconMap: Record<string, string> = {
  skinport: skinportIcon,
  csfloat: csfloatIcon,
  wallhack: wallhackIcon,
  protonvpn: protonvpnIcon,
  wlmouse: wlmouseIcon,
};

type CopyState = "idle" | "copied" | "manual";

function VerifiedBadge() {
  return (
    <span aria-label="Verified" className="simplink-verified">
      <svg viewBox="0 0 20 20" className="h-[70%] w-[70%]" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M14.8 6.6a1 1 0 0 1 0 1.4l-5.3 5.3a1 1 0 0 1-1.4 0L5.3 10.5a1 1 0 0 1 1.4-1.4l2.1 2.1 4.6-4.6a1 1 0 0 1 1.4 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function LinkIcon({ link }: { link: LinkData }) {
  if (link.icon && iconMap[link.icon]) {
    return (
      <img
        src={iconMap[link.icon]}
        alt=""
        className="h-full w-full rounded-[0.375rem] object-cover"
        loading="lazy"
        decoding="async"
      />
    );
  }

  if (link.url.includes("discord")) return <DiscordIcon className="text-x-discord" />;
  if (link.url.includes("twitch")) return <TwitchIcon className="text-x-twitch" />;
  if (link.url.includes("kick")) return <KickIcon className="text-x-kick" />;
  if (link.url.includes("youtube")) return <YouTubeIcon className="text-x-youtube" />;
  if (link.url.includes("tiktok")) return <TikTokIcon className="text-simplink-text" />;
  if (link.url.includes("x.com")) return <XIcon className="text-simplink-text" />;
  if (link.url.includes("steam")) return <SteamIcon className="text-simplink-soft" />;

  return (
    <svg className="text-simplink-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </svg>
  );
}

function CopyCodeButton({ code }: { code: string }) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const copyCode = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("manual");
      window.setTimeout(() => setCopyState("idle"), 2800);
    }
  };

  return (
    <button
      type="button"
      onClick={copyCode}
      className="simplink-code-btn"
      aria-label={copyState === "manual" ? `Code ${code} is visible for manual copy` : `Copy code ${code}`}
      aria-pressed={copyState === "copied"}
    >
      {copyState === "copied" ? "copied" : copyState === "manual" ? "copy" : code}
    </button>
  );
}

function SimplinkRow({ link }: { link: LinkData }) {
  const code = link.couponCode || link.affiliateCode;
  const isPartner = link.category === "partner" || link.category === "affiliate";

  return (
    <a
      href={link.url}
      target="_blank"
      rel={`noopener noreferrer${isPartner ? " sponsored" : ""}`}
      className="simplink-row"
      data-analytics-id={link.analyticsId}
      aria-label={`Open ${link.title}${link.description ? `: ${link.description}` : ""}`}
    >
      <div className="simplink-row-icon">
        <LinkIcon link={link} />
      </div>
      <div className="simplink-row-copy">
        <span className="simplink-row-title">{link.title}</span>
        {link.description && <span className="simplink-row-desc">{link.description}</span>}
      </div>
      {code && <CopyCodeButton code={code} />}
      <svg className="simplink-row-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M4 10h10.6l-3.3-3.3L12.7 5 18 10l-5.3 5-1.4-1.4 3.3-3.3H4v-1.4z" />
      </svg>
    </a>
  );
}

function SocialRow({ links }: { links: LinkData[] }) {
  if (links.length === 0) return null;

  return (
    <nav aria-label="Social profiles" className="simplink-social-row">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="simplink-social-btn"
          data-analytics-id={`social-${link.analyticsId}`}
          aria-label={link.title}
        >
          <LinkIcon link={link} />
        </a>
      ))}
    </nav>
  );
}

function ProfileHeader({ socialLinks }: { socialLinks: LinkData[] }) {
  return (
    <header className="simplink-profile">
      <img
        src={pfpImage}
        alt="ratte cs2 streamer profile photo"
        className="simplink-avatar"
        width={88}
        height={88}
        loading="eager"
        decoding="async"
        {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
      />

      <div className="simplink-name-row">
        <h1 className="simplink-name">ratte</h1>
        <VerifiedBadge />
      </div>
      <p className="simplink-handle">@rattecs</p>
      <p className="simplink-bio">cs2 player. chief memetic strategist.</p>

      <SocialRow links={socialLinks} />
    </header>
  );
}

function SimplinkSection({
  id,
  label,
  links,
  footer,
}: {
  id: string;
  label: string;
  links: LinkData[];
  footer?: string;
}) {
  if (links.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id}-label`} className="simplink-section">
      <h2 id={`${id}-label`} className="simplink-section-label">
        {label}
      </h2>
      <div className="simplink-links">
        {links.map((link) => (
          <SimplinkRow key={link.id} link={link} />
        ))}
      </div>
      {footer && <p className="simplink-section-foot">{footer}</p>}
    </section>
  );
}

const LinkList: React.FC = () => {
  const grouped = useMemo(() => groupLinks(), []);

  return (
    <div id="top" className="simplink-hub min-h-screen text-simplink-text">
      <div className="simplink-backdrop" aria-hidden="true" />
      <div className="simplink-frame">
        <div className="simplink-panel">
          <ProfileHeader socialLinks={grouped.quickSocial} />

          <SimplinkSection id="top-links" label="top links" links={grouped.topLinks} />

          {grouped.featuredPartner && (
            <SimplinkSection id="featured" label="featured" links={[grouped.featuredPartner]} />
          )}

          <SimplinkSection id="social" label="social" links={grouped.socialLinks} />

          <SimplinkSection
            id="partners"
            label="partners"
            links={grouped.partnerLinks}
            footer="partner links may earn a cut. same price for you."
          />

          <SimplinkSection id="steam" label="steam" links={grouped.setupLinks} />

          <FaqSection />

          <p className="simplink-disclosure">
            <a href={`mailto:${email}`} className="simplink-inline-link">
              {email}
            </a>
          </p>

          <footer className="simplink-footer">
            <a href="https://ratte.xyz/" className="simplink-footer-link">
              ratte.xyz
            </a>
            <span className="simplink-footer-dot" aria-hidden="true">
              ·
            </span>
            <a
              href="https://x.com/rattecs"
              target="_blank"
              rel="noopener noreferrer"
              className="simplink-footer-link"
            >
              @rattecs
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LinkList;
---
name: RatteCS X Profile Link Hub
description: An X.com-style creator profile shell for RatteCS official links, partner codes, streams, and setup.
colors:
  x-bg: "#000000"
  x-card: "#050505"
  x-hover: "#080808"
  x-icon: "#16181C"
  x-border: "#2F3336"
  x-border-strong: "#536471"
  x-text: "#E7E9EA"
  x-muted: "#71767B"
  x-soft: "#8B98A5"
  x-accent: "#7856FF"
  x-verified: "#1D9BF0"
  x-verified-text: "#F7FBFF"
  x-button: "#EFF3F4"
  x-button-text: "#0F1419"
  ratte-red: "#FC0C3C"
  banner-purple: "#7856FF"
  banner-red: "#FC0C3C"
  discord: "#5865F2"
  twitch: "#9146FF"
  kick: "#53FC18"
  youtube: "#FF0033"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "0"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "8px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  rail: "32px"
components:
  shell:
    backgroundColor: "{colors.x-bg}"
    textColor: "{colors.x-text}"
    width: "100vw"
    height: "100vh"
  timeline-row:
    backgroundColor: "{colors.x-bg}"
    textColor: "{colors.x-text}"
    padding: "12px 16px"
  right-rail-card:
    backgroundColor: "{colors.x-bg}"
    textColor: "{colors.x-text}"
    rounded: "{rounded.xl}"
    padding: "16px"
  primary-button:
    backgroundColor: "{colors.x-button}"
    textColor: "{colors.x-button-text}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  code-button:
    backgroundColor: "{colors.x-bg}"
    textColor: "{colors.x-text}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 12px"
---

# Design System: RatteCS X Profile Link Hub

## Overview

**Creative North Star: "The Creator Profile Control Room"**

The interface is a creator link hub wearing an X.com profile shell. It should feel instantly familiar to anyone who knows X: left navigation, center profile timeline, right contextual rail, pure black chrome, thin dividers, rounded pills, verified marks, and a scroll model where only the middle column moves.

This is still RatteCS, not a generic social clone. The avatar, red and purple profile-banner atmosphere, partner transparency, and compact link rows keep the creator identity present. The X structure is an interaction model and visual discipline, not permission to add fake platform features or bury the useful links.

**Key Characteristics:**
- Pure black viewport shell with fixed side rails and a single center scroll column.
- 600px profile timeline rhythm, bordered by X-style dividers.
- Link rows are flat timeline entries, not card grids and not nested containers.
- Typography is compact but high-contrast: 26px profile display, 22px section heads, 15px row titles, 16px body copy.
- Partner codes are visible beside relevant links with explicit disclosure.
- Purple is the active section signal; verified blue is reserved for verification.

## Colors

The palette is X.com black restraint with RatteCS atmosphere reserved for the profile banner and partner context.

### Primary
- **X Black Shell**: The page floor, fixed rails, center timeline, and browser background. It must stay pure black to match X.com.
- **X Text**: The main readable text color for names, headings, descriptions, and button text on dark surfaces.
- **Ratte Purple Active**: The only section-navigation accent. Use it for active tab underlines and selected profile-section cues.

### Secondary
- **Verified Blue**: Verification badges only. Do not use it as a general CTA color.
- **Ratte Banner Red**: Environmental color in the profile banner and rare partner atmosphere only.
- **Platform Accents**: Discord, Twitch, Kick, YouTube, and similar brand colors belong only on their icons.

### Tertiary
- **X Hover Black**: The subtle hover fill for rows, rails, tabs, and ghost actions.
- **X Icon Well**: Circular icon tile background for link rows and generic link icons.

### Neutral
- **X Border**: The 1px structural divider for the timeline, rails, section breaks, and right rail cards.
- **X Strong Border**: Coupon pills and stronger ghost buttons.
- **X Muted**: Handles, metadata, timestamps, secondary nav labels, and low-priority support text.
- **X Soft**: Descriptions and disclosures when the text should recede but remain readable.
- **X Button White**: Filled action pills such as Watch.

### Named Rules

**The X Black Rule.** The profile shell background is `#000000`. Do not tint, gradient, or texture the page floor.

**The One Accent Rule.** Purple marks active navigation. Verified blue marks verified identity. Red belongs to Ratte atmosphere and partner context. Do not let these roles bleed into each other.

**The Divider Rule.** Borders are 1px structural lines. Never use side-stripe accents or colored border-left treatments.

## Typography

**Display Font:** Inter, with sans-serif fallback  
**Body Font:** Inter, with sans-serif fallback  
**Label/Mono Font:** Inter for labels; system monospace only when a literal code needs monospace treatment.

**Character:** The type system is compact, creator-native, and X-adjacent. It should read fast in a dense profile column, with hierarchy coming from weight, line-height, and placement rather than oversized marketing type.

### Hierarchy
- **Display** (800, 1.625rem, 1 line): The visible profile name in the bio block.
- **Headline** (800, 1.375rem, 1.15 line-height): Section headings such as Top links, Partner codes, and Steam and setup.
- **Title** (800, 0.9375rem, 1.25 line-height): Link row titles, tab labels, rail nav labels, and compact content titles.
- **Body** (400, 1rem, 1.5 line-height): Bio copy, link descriptions, right rail explanatory copy, and section descriptions.
- **Label** (700, 0.8125rem, 1.25 line-height): Metadata, pinned labels, disclosure text, coupon states, and small utility copy.

### Named Rules

**The Profile Scale Rule.** Ratte is the largest text in the profile body. Section heads are second. Link titles are dense and bold, never hero-sized.

**The Dark Readability Rule.** Body copy on black gets 1.5 line-height and a 54ch to 62ch max width where paragraphs can run long.

**The No Marketing Hero Rule.** Do not introduce oversized slogans. The banner copy is short, right-weighted, and subordinate to the profile identity.

## Elevation

Depth is almost entirely tonal and structural: pure black surfaces, 1px borders, hover fills, avatar border, sticky header blur, and restrained red-purple banner atmosphere. The system is flat by default because the X profile metaphor depends on a continuous timeline rather than floating cards.

### Shadow Vocabulary
- **Sticky Header Blur** (`backdrop-blur-md` over `rgba(0, 0, 0, 0.8)`): Keeps profile context readable while the center column scrolls.
- **Banner Atmosphere** (radial red and purple over black): Used only in the profile banner behind text and avatar.
- **Focus Ring** (`2px` verified-blue ring): Keyboard focus on links and buttons.

### Named Rules

**The Flat Timeline Rule.** Link rows do not cast shadows and do not lift. State is shown through hover fill, underline, focus ring, and active tab underline.

**The Banner-Only Atmosphere Rule.** Red and purple light live in the banner. The timeline and rails stay black.

## Components

### Buttons
- **Shape:** Rounded-full pills for all primary actions, contact actions, coupon actions, and rail actions.
- **Primary:** X white fill with dark text for the Watch action, 44px minimum height.
- **Hover / Focus:** Hover is opacity or black hover fill. Focus uses a 2px verified-blue ring.
- **Secondary / Ghost:** Transparent black surface with X Strong Border and X Text, used for Contact and code copy actions.

### Chips
- **Style:** Coupon chips are rounded-full bordered pills. They display the literal code or a clear copied/manual state.
- **State:** `Copied` and `Manual` states are text-based. Do not rely on color alone.

### Cards / Containers
- **Corner Style:** Right rail cards use 16px radius. Timeline rows use no card radius at the section level.
- **Background:** Cards and rows sit on X Black Shell. Hover uses X Hover Black.
- **Shadow Strategy:** No shadows for timeline content. Right rail cards separate with border only.
- **Border:** X Border for structure, X Strong Border for code/contact affordances.
- **Internal Padding:** Timeline rows use 12px vertical and 16px horizontal padding. Right rail cards use 16px padding.

### Inputs / Fields
- **Style:** There are no conventional form fields in the current interface.
- **Focus:** If fields are added later, use X Black Shell, X Border, rounded-full or 16px radius depending on shape, and a verified-blue focus ring.
- **Error / Disabled:** Use clear text and border changes. Do not rely on red alone.

### Navigation
- **Left rail:** 275px desktop rail, 20px labels, 28px icons, rounded-full hover zones, and a white Watch pill.
- **Profile tabs:** Four equal tabs, 52px tall, 15px extra-bold labels, purple active underline.
- **Right rail quick jump:** 350px rail with 16px cards and active hover-fill pills.
- **Mobile treatment:** Hide side rails and keep the center profile column as the sole scrollable surface.

### Signature Component: X Profile Shell

The shell is fixed to the viewport (`100vh`) with overflow hidden. The center profile column is the only vertical scroll container. Side rails stay still while the timeline scrolls, matching X.com behavior.

### Signature Component: Timeline Link Row

The link row is the core unit. It combines a 44px icon well, bold title, muted description, optional verification mark, optional partner label, optional code pill, and a quiet Open affordance. It must remain flat and scan-first.

### Signature Component: Pinned Partner

The pinned partner uses the timeline-post pattern, not a promotional card grid. It may include disclosure copy and a code button, but it must remain transparent about affiliate context.

## Do's and Don'ts

### Do:
- **Do** keep the page background exactly black like X.com.
- **Do** keep the left and right columns still while only the center column scrolls.
- **Do** use flat timeline rows for link content.
- **Do** make partner disclosures visible wherever a partner link is promoted.
- **Do** keep row titles bold and descriptions readable at 16px body rhythm.
- **Do** use purple only as the active section signal.
- **Do** preserve visible keyboard focus and 44px touch targets.
- **Do** keep Ratte atmosphere in the profile banner, behind content.

### Don't:
- **Don't** make this a generic Linktree clone.
- **Don't** add loud esports neon clutter.
- **Don't** push it toward over-polished SaaS marketing.
- **Don't** use crypto-style glow overload.
- **Don't** turn the page into a broad landing page instead of a focused creator hub.
- **Don't** erase the current vibe, make the page too bright, bury partner disclosures, or make affiliate links feel deceptive or spammy.
- **Don't** use gradient text, side-stripe card accents, nested cards, or decorative glassmorphism.
- **Don't** put cards inside cards in Top links or any link section.
- **Don't** invent fake X surfaces like search, trends, or recommendations unless they directly serve the link hub.

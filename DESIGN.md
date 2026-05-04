---
name: RatteCS Link Hub
description: A moody, compact creator link hub for RatteCS socials, CS2 settings, partner links, and affiliate codes.
colors:
  void-black: "#0C0C0C"
  near-black: "#0D0D0D"
  pure-black: "#000000"
  white: "#FFFFFF"
  paper-white: "#FCFCFC"
  cream-glow: "#FCFCE4"
  blush-glow: "#FCE4E4"
  steel-blush: "#FCCCCC"
  ratte-red: "#FC0C3C"
  deep-red: "#6C0C0C"
  ratte-blue: "#243C6C"
  bright-blue: "#3C6CB4"
  deep-blue: "#0C2454"
  ratte-purple: "#242454"
  bright-purple: "#3C54B4"
  night-purple: "#0C0C3C"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.75
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  section: "32px"
components:
  hero-cta:
    backgroundColor: "{colors.pure-black}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    height: "44px"
  link-card:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  partner-chip:
    backgroundColor: "{colors.ratte-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  icon-tile:
    backgroundColor: "{colors.pure-black}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    width: "48px"
    height: "48px"
---

# Design System: RatteCS Link Hub

## Overview

**Creative North Star: "The After-Stream Control Room"**

This system should feel like the current RatteCS page with the craft turned up: dark, compact, personal, and lightly atmospheric. The user should land, recognize Ratte immediately, and move through socials, partners, Steam links, and settings without feeling sold to or slowed down.

The page is a focused creator hub, not a generic landing page. Red and blue ambience may shape the surface, but the content stays disciplined: profile first, links in stable rows, partner disclosure visible, and no decorative flourish that competes with the next click.

**Key Characteristics:**
- Compact centered column with generous breathing room around sections.
- Dark surface with red and blue environmental glow.
- Soft translucent cards with precise borders instead of heavy shadows.
- Small but clear text hierarchy, optimized for scanning.
- Affiliate moments are visible and transparent, never spammy.

## Colors

The palette is a night-mode creator palette: blackened surfaces, cold blue depth, red signal accents, and pale blush highlights.

### Primary
- **Ratte Red**: the only hot action color. Use it for partner emphasis, hover borders, badges, discount codes, and active signals. It should feel rare enough to matter.
- **Ratte Blue**: the structural brand color. Use it for primary dark buttons in light contexts, subtle code pills, and the cool half of the backdrop.

### Secondary
- **Ratte Purple**: a supporting depth color for the blue side of the atmosphere. Use it in gradients and environmental layers, not as a competing CTA color.
- **Bright Blue**: a highlight tint for atmospheric depth and occasional icon or state support.

### Tertiary
- **Blush Glow**: a pale glow color used for soft highlights, neon-like text shadows, and low-intensity borders. It should read as reflected light, not as a surface color.
- **Cream Glow**: a warmer pale neutral reserved for tiny ambient accents and scrollbar tracks.

### Neutral
- **Void Black**: the primary dark UI floor. Use it for page background, dark cards, and the footer.
- **Near Black**: the default dark surface color when a card needs separation from the page.
- **Paper White**: the light-mode base surface. Use sparingly because the primary experience is dark.
- **White**: currently used for pure text and icons. When polishing, consider tinting this slightly toward blush to avoid stark white glare.

### Named Rules

**The Red Signal Rule.** Ratte Red is a signal, not wallpaper. Use it for actions, verified partner emphasis, and meaningful hover states only.

**The Atmosphere Behind Content Rule.** Red and blue gradients belong behind the interface. They must never reduce text contrast or make cards harder to scan.

## Typography

**Display Font:** Inter, with sans-serif fallback  
**Body Font:** Inter, with sans-serif fallback  
**Label/Mono Font:** Inter for labels; monospace only for coupon codes

**Character:** The type system is plain, compact, and functional. It should feel creator-native and direct, with hierarchy coming from weight, spacing, and placement rather than oversized marketing type.

### Hierarchy
- **Display** (700, 2.25rem desktop, 1 line): Profile name and only true identity headline.
- **Headline** (600, 1.125rem to 1.25rem, relaxed line-height): Section titles such as Social Profiles, Partners, Steam, and Config & Settings.
- **Title** (600, 0.875rem to 1rem, 1.5 line-height): Link titles, partner names, CTA labels, and compact actions.
- **Body** (400, 0.75rem to 0.875rem, 1.75 line-height): Link descriptions, disclosure copy, and contextual support.
- **Label** (600, 0.625rem to 0.75rem, uppercase with wider tracking): Partner tags, disclosure badges, tiny status labels, and compact metadata.

### Named Rules

**The Scan First Rule.** Link titles must win over descriptions. Descriptions support the click, they do not compete with it.

**The No Hero Bloat Rule.** Do not turn this into a landing page with oversized slogans. Ratte is the headline; everything else supports navigation.

## Elevation

Depth is created with tonal layering, translucent surfaces, borders, blur, and atmospheric background light. Shadows are secondary and should stay soft. Cards are mostly flat at rest, then lift by a half step on hover with a small translate and brighter border.

### Shadow Vocabulary
- **Profile Glow** (`blur-xl` on a red-to-blue gradient halo): Used only behind the profile image to make the creator identity feel anchored.
- **Neon Text Shadow** (`0 0 5px #FCE4E4, 0 0 10px #FC0C3C`): Available as a rare emphasis utility. Do not use it on body text.
- **Toast Shadow** (`shadow-xl shadow-black/15` in light mode, `shadow-black/50` in dark mode): Used for bottom support prompts where the surface must float above content.

### Named Rules

**The Flat At Rest Rule.** Link cards stay close to the surface at rest. Hover may lift and brighten; idle cards should not look like floating glass panels.

## Components

### Buttons
- **Shape:** Gently squared buttons with an 8px radius for hero CTAs and rounded-full pills for bottom prompts.
- **Primary:** Dark or red filled actions with white text, 44px minimum height, and compact horizontal padding.
- **Hover / Focus:** Hover changes background and border color. Focus uses a visible 2px outline in the primary or glow color.
- **Secondary / Ghost:** Translucent black or white surfaces with low-opacity borders, used for Twitch and email actions.

### Chips
- **Style:** Compact red or red-tinted pills for partner labels, coupon codes, and disclosure markers.
- **State:** Coupon chips may copy codes. Their copied state should be text-clear and brief, not animated heavily.

### Cards / Containers
- **Corner Style:** Rounded but controlled, usually 12px. Avoid softer, pill-like cards for link rows.
- **Background:** Dark cards use low-opacity white over the black surface. Light cards use low-opacity black over paper white.
- **Shadow Strategy:** Border and tonal separation first, shadow only for toasts or rare floating UI.
- **Border:** 1px translucent border by default, red-tinted border for featured partner emphasis or hover.
- **Internal Padding:** Link rows use 12px to 16px. Featured partner cards can use 16px to 20px.

### Inputs / Fields
- **Style:** There are no conventional form fields in the current interface.
- **Focus:** If fields are added later, use the same translucent surface, 12px radius, 1px border, and visible 2px focus outline.
- **Error / Disabled:** Use clear text and border changes. Do not rely on red alone.

### Navigation
- **Style, typography, default/hover/active states, mobile treatment.** Navigation is mostly section flow, not a full nav system. Footer links stay quiet. Anchor-style actions should preserve 44px touch targets when interactive.

### Signature Component: Link Card

The link card is the core unit. It combines a 44px to 48px icon tile, a bold title, a muted one-line description, optional verification badge, optional coupon chip, and a right-side external-link affordance. The card must remain a stable row on mobile and desktop, with truncation protecting layout.

### Signature Component: Featured Partner

The featured partner is allowed to be more assertive than normal cards, but it must stay transparent. It uses a red label, red-tinted border, partner icon, code pill, action hint, and disclosure copy. This component exists to build trust as much as to drive clicks.

## Do's and Don'ts

### Do:
- **Do** keep the current moody red and blue atmosphere, but keep it behind content.
- **Do** preserve the compact centered link-hub structure.
- **Do** make partner disclosures visible wherever a partner link is promoted.
- **Do** keep links scannable with strong titles, muted descriptions, and stable icon tiles.
- **Do** maintain WCAG 2.1 AA contrast, especially on tiny partner metadata and muted copy.
- **Do** use red for meaningful signals: partner emphasis, hover borders, coupon chips, and important action states.
- **Do** honor reduced-motion preferences and keep transitions short, around 220ms to 260ms.

### Don't:
- **Don't** make this a generic Linktree clone.
- **Don't** add loud esports neon clutter.
- **Don't** push it toward over-polished SaaS marketing.
- **Don't** use crypto-style glow overload.
- **Don't** turn the page into a broad landing page instead of a focused creator hub.
- **Don't** erase the current vibe, make the page too bright, bury partner disclosures, or make affiliate links feel deceptive or spammy.
- **Don't** use gradient text, side-stripe card accents, nested cards, or decorative glassmorphism.
- **Don't** use oversized hero slogans, hero metrics, or repeated generic icon-card grids.

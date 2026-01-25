# Branding Guidelines - RatteCS Website

This document outlines the consistent branding standards used across the RatteCS website.

## Brand Identity

### Primary Brand Name
- **"RatteCS"** - Used for:
  - SEO titles and meta tags
  - Social media handles (@rattecs)
  - Organization/brand references
  - Structured data (Organization schema)
  - Domain: ratte.xyz

### Personal Name
- **"Ratte"** - Used for:
  - Personal introductions
  - About section headings
  - User-facing content
  - Person schema (name field)
  - Display name in UI

### Usage Rules
- **RatteCS** = Brand/Organization (for SEO, social, business)
- **Ratte** = Personal name (for content, about section, user-facing)
- **@rattecs** = Social media handle (always lowercase with @)

## Typography

### Brand Name Display
- **Header:** "Ratte" (title case)
- **Footer:** "Ratte" (title case)
- **LinkList Profile:** "Ratte" (title case)
- **Social Handle:** "@rattecs" (lowercase with @)

### Font
- Primary: Inter (Google Fonts)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Color Scheme

### Primary Colors
- **Primary Blue:** `#0ea5e9` (primary-500)
- **Accent Pink:** `#E33BE3` (accent-pink)
- **Glow Blue:** `#4AC3F7` (glow)

### Brand Colors (Tailwind)
- `primary` = Blue gradient
- `accent` = Purple/pink gradient
- `glow` = Cyan blue (#4AC3F7)
- `accent-pink` = Magenta (#E33BE3)
- `accent-blue` = Cyan (#4AC3F7)

### Usage
- Primary blue for main CTAs and links
- Accent pink for highlights and hover states
- Glow blue for dark mode accents

## URLs & Domains

### Primary Domain
- **Production:** `https://ratte.xyz/`
- **Canonical:** Always use `https://ratte.xyz/`
- **No www:** Always redirect www to non-www

### Old Domain (Deprecated)
- ~~ratte.seweraim.com~~ - Do not use
- All references should point to ratte.xyz

## Contact Information

### Email
- **Format:** biz@ratte.xyz
- **Display:** biz[at]ratte[dot]xyz (obfuscated for spam protection)
- **Usage:** Business inquiries, partnerships, general contact

## Social Media Handles

### Consistent Format
- All handles: **@rattecs** (lowercase)
- Platforms:
  - Twitch: twitch.tv/rattecs
  - YouTube: youtube.com/@rattecs
  - TikTok: tiktok.com/@rattecs
  - X (Twitter): x.com/rattecs
  - Kick: kick.com/rattecs
  - Discord: discord.gg/gc2epPGDKP
  - Instagram: instagram.com/cs_ratte

## Discount Code

### Brand Code
- **Code:** "ratte" (all lowercase)
- **Usage:** Gaming gear discount codes
- **Partners:** Gamerbulk, Acezone, SkinVault, etc.

## Logo & Images

### Profile Picture
- **Path:** `/assets/pfp.webp` or `/assets/pfp2.webp`
- **Alt Text:** "RatteCS CS2 streamer and gaming content creator profile photo"

### OG Image
- **Path:** `/assets/og-image.webp`
- **Dimensions:** 1200x630px (recommended)
- **Alt:** "RatteCS - CS2 Streamer Links and Affiliate Codes"

## Taglines & Descriptions

### Primary Tagline
- "All my links in one place. Thanks for the support!"

### SEO Description
- "RatteCS link hub: CS2 streamer social profiles, gaming gear discount codes, CS2 settings, and affiliate links. Save on Gamerbulk, Acezone, SkinVault, and more."

### Browser Tab Title
- **Format:** "RatteCS - CS2 Links & Codes" (30 characters)
- **Purpose:** Concise, brand-first, SEO-friendly
- **Best Practice:** Keep under 60 characters for full browser tab display

### About Description
- Personal, first-person tone
- Focus on competitive gaming and content creation
- Mention 15+ years experience

## Brand Voice

### Tone
- **Personal & Authentic:** First-person ("I", "my")
- **Casual but Professional:** Not overly formal
- **Gaming-Focused:** CS2, competitive gaming emphasis
- **Transparent:** Clear about affiliate links

### Writing Style
- Avoid AI-sounding language
- Use contractions naturally
- Be specific about achievements
- Show personality

## Consistency Checklist

- [x] All URLs use ratte.xyz (no old domains)
- [x] Brand name "RatteCS" for SEO/branding
- [x] Personal name "Ratte" for content
- [x] Consistent capitalization (title case for display)
- [x] Social handle @rattecs (lowercase)
- [x] Email format consistent (biz@ratte.xyz)
- [x] Discount code "ratte" (lowercase)
- [x] Color scheme consistent across components
- [x] Typography consistent (Inter font family)

## Files to Check for Branding

1. `src/App.tsx` - Meta tags, structured data
2. `src/components/Header.tsx` - Header branding
3. `src/components/Footer.tsx` - Footer branding
4. `src/components/LinkList.tsx` - Profile section
5. `src/components/About.tsx` - About section
6. `src/components/FAQ.tsx` - FAQ content
7. `src/components/SocialIcons.tsx` - Social links
8. `rsbuild.config.ts` - Build config meta tags
9. `public/sitemap.xml` - Sitemap branding
10. `README.md` - Project documentation

---

**Last Updated:** January 27, 2025

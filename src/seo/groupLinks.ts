import { allLinks } from "../data/links";
import { LinkData } from "../types";

export const TOP_LINK_IDS = ["1", "3", "14"];
export const QUICK_SOCIAL_IDS = ["1", "3", "6", "4", "2", "5", "15"];
export const FEATURED_PARTNER_ID = "12";

export type GroupedLinks = {
  topLinks: LinkData[];
  featuredPartner?: LinkData;
  socialLinks: LinkData[];
  partnerLinks: LinkData[];
  setupLinks: LinkData[];
  quickSocial: LinkData[];
};

export type LinkSection = {
  id: string;
  label: string;
  links: LinkData[];
  footer?: string;
};

function byId(ids: string[]) {
  return ids
    .map((id) => allLinks.find((link) => link.id === id))
    .filter((link): link is LinkData => Boolean(link));
}

function sortLinks(links: LinkData[]) {
  return [...links].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0) || (b.clickCount || 0) - (a.clickCount || 0),
  );
}

export function groupLinks(): GroupedLinks {
  const social = sortLinks(allLinks.filter((link) => link.category === "social"));
  const partner = sortLinks(allLinks.filter((link) => link.category === "partner" || link.category === "affiliate"));
  const setup = sortLinks(allLinks.filter((link) => link.category === "steam" || link.category === "config"));

  const featuredPartner = partner.find((link) => link.id === FEATURED_PARTNER_ID) || partner[0];
  const topLinks = byId(TOP_LINK_IDS);
  const quickSocial = byId(QUICK_SOCIAL_IDS);

  const usedIds = new Set([
    ...topLinks.map((link) => link.id),
    ...(featuredPartner ? [featuredPartner.id] : []),
  ]);

  const socialLinks = social.filter((link) => !usedIds.has(link.id));
  socialLinks.forEach((link) => usedIds.add(link.id));

  const partnerLinks = partner.filter((link) => !usedIds.has(link.id));
  partnerLinks.forEach((link) => usedIds.add(link.id));

  const setupLinks = setup.filter((link) => !usedIds.has(link.id));

  return { topLinks, featuredPartner, socialLinks, partnerLinks, setupLinks, quickSocial };
}

export function getLinkSections(grouped: GroupedLinks): LinkSection[] {
  const sections: LinkSection[] = [{ id: "top-links", label: "top links", links: grouped.topLinks }];

  if (grouped.featuredPartner) {
    sections.push({ id: "featured", label: "featured", links: [grouped.featuredPartner] });
  }

  sections.push({ id: "social", label: "social", links: grouped.socialLinks });
  sections.push({
    id: "partners",
    label: "partners",
    links: grouped.partnerLinks,
    footer: "partner links may earn a cut. same price for you.",
  });
  sections.push({ id: "steam", label: "steam", links: grouped.setupLinks });

  return sections.filter((section) => section.links.length > 0);
}
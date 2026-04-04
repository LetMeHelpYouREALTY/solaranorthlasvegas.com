/**
 * Git-tracked marketing images under `/public` (sync from GitHub).
 * Prefer URL-safe filenames when adding new assets; these match current repo names.
 */
export const SITE_IMAGE_PATHS = {
  /** Community / hero — North Las Vegas area (Del Webb North Ranch area reference in filename). */
  homeHeroCommunity: "/images/hero/del_webb_north_ranch_oeVPr2W - Copy.jfif",
  /** About / team — agent photo. */
  aboutAgentPhoto: "/images/team/design 04_new 2.jpg",
  /** Optional partner mark — use only where disclosure/copy allows. */
  zillowMark: "/trademarks/zillowDr Jan new.jpg",
} as const;

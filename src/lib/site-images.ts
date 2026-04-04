/**
 * Git-tracked marketing images under `/public` (sync from GitHub).
 * Prefer URL-safe filenames when adding new assets; these match current repo names.
 */
export const SITE_IMAGE_PATHS = {
  /** Dr. Jan Duffy — primary portrait (hero + about). Spaces in path require encoding for reliable loads. */
  homeHeroAgent: "/images/team/design 04_new 2.jpg",
  /** Legacy community shot — optional sections; `.jfif` + spaces can break `next/image` optimizer. */
  homeHeroCommunity: "/images/hero/del_webb_north_ranch_oeVPr2W - Copy.jfif",
  /** About / team — same file as homeHeroAgent. */
  aboutAgentPhoto: "/images/team/design 04_new 2.jpg",
  /** Optional partner mark — use only where disclosure/copy allows. */
  zillowMark: "/trademarks/zillowDr Jan new.jpg",
} as const;

/** Encode each path segment so spaces/special chars work with `<img src>` and CSS `url()`. */
export function publicImageSrc(path: string): string {
  return path
    .split("/")
    .map((segment) => (segment === "" ? "" : encodeURIComponent(segment)))
    .join("/");
}

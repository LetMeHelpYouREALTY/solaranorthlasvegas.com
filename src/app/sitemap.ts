import { getCanonicalUrl } from "@/lib/metadata";
import { getAllNeighborhoodSlugs } from "@/lib/neighborhoods-data";
import type { MetadataRoute } from "next";

const STATIC_PATHS: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/solara", changeFrequency: "weekly", priority: 0.95 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/buyers", changeFrequency: "weekly", priority: 0.85 },
  { path: "/sellers", changeFrequency: "weekly", priority: 0.85 },
  { path: "/neighborhoods", changeFrequency: "weekly", priority: 0.88 },
  { path: "/search", changeFrequency: "monthly", priority: 0.75 },
  { path: "/home-value", changeFrequency: "monthly", priority: 0.75 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.35 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((item) => ({
    url: getCanonicalUrl(item.path),
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const neighborhoodEntries: MetadataRoute.Sitemap = getAllNeighborhoodSlugs().map((slug) => ({
    url: getCanonicalUrl(`/neighborhoods/${slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    // Slightly higher for Solara-adjacent hub (Lennar / North Las Vegas intent clustering with /solara).
    priority: slug === "north-las-vegas" ? 0.87 : 0.8,
  }));

  return [...staticEntries, ...neighborhoodEntries];
}

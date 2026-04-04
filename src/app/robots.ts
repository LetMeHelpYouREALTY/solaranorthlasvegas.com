import { getCanonicalUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

/**
 * Production robots — keep `Allow: /` and do not block `/_next/static`.
 * Staging: use `Disallow: /` or auth; do not copy staging rules to prod.
 */
export default function robots(): MetadataRoute.Robots {
  const origin = getCanonicalUrl("/").replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}

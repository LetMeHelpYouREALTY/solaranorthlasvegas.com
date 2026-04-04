import { SITE_HOSTNAME, SITE_NAME, SITE_NAME_SHORT, SITE_ORIGIN } from "@/lib/site-contact";
import type { Metadata } from "next";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

const PNG = "image/png" as const;

/**
 * Classic multi-size favicons + Apple touch icons under `/public/icons/`
 * (generated via `node scripts/generate-favicons.mjs`), plus SVG fallback and MS tile tags.
 */
const siteFaviconMetadata: Pick<Metadata, "icons" | "other"> = {
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: PNG },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: PNG },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: PNG },
      { url: "/icons/android-icon-192x192.png", sizes: "192x192", type: PNG },
      { url: "/trademarks/icon-dark.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-icon-57x57.png", sizes: "57x57", type: PNG },
      { url: "/icons/apple-icon-60x60.png", sizes: "60x60", type: PNG },
      { url: "/icons/apple-icon-72x72.png", sizes: "72x72", type: PNG },
      { url: "/icons/apple-icon-76x76.png", sizes: "76x76", type: PNG },
      { url: "/icons/apple-icon-114x114.png", sizes: "114x114", type: PNG },
      { url: "/icons/apple-icon-120x120.png", sizes: "120x120", type: PNG },
      { url: "/icons/apple-icon-144x144.png", sizes: "144x144", type: PNG },
      { url: "/icons/apple-icon-152x152.png", sizes: "152x152", type: PNG },
      { url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: PNG },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/icons/ms-icon-144x144.png",
  },
};

/** Canonical absolute URL — use for sitemap, JSON-LD, and `rel=canonical` parity. */
export function getCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE_ORIGIN).toString();
}

/**
 * Root / home metadata for Google Search + social previews.
 * Uses metadataBase so relative OG paths resolve when you add raster images under /public.
 */
export function buildHomeMetadata(input: {
  title: string;
  description: string;
  path: string;
  /** e.g. /images/og/home.jpg — omit until the file exists (avoid 404 previews) */
  ogImagePath?: string;
}): Metadata {
  const canonical = getCanonicalUrl(input.path);
  const ogAbsolute = input.ogImagePath
    ? new URL(input.ogImagePath, SITE_ORIGIN).toString()
    : undefined;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: input.title,
      template: `%s | ${SITE_NAME_SHORT}`,
    },
    description: input.description,
    applicationName: SITE_NAME_SHORT,
    authors: [{ name: "Dr. Jan Duffy", url: SITE_ORIGIN }],
    publisher: SITE_NAME_SHORT,
    creator: "Dr. Jan Duffy",
    alternates: {
      canonical,
      languages: {
        "en-US": canonical,
        "x-default": canonical,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME_SHORT,
      countryName: "United States",
      title: input.title,
      description: input.description,
      ...(ogAbsolute
        ? {
            images: [
              {
                url: ogAbsolute,
                alt: `${SITE_NAME_SHORT} — North Las Vegas real estate`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: ogAbsolute ? "summary_large_image" : "summary",
      title: input.title,
      description: input.description,
      ...(ogAbsolute ? { images: [ogAbsolute] } : {}),
    },
    ...siteFaviconMetadata,
    verification: googleVerification ? { google: googleVerification } : undefined,
    keywords: [
      "North Las Vegas real estate",
      "North Las Vegas homes for sale",
      SITE_NAME_SHORT,
      SITE_NAME,
      "Homes By Dr. Jan Duffy",
      "Dr. Jan Duffy REALTOR",
      SITE_HOSTNAME,
    ],
    category: "real estate",
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
  };
}

/**
 * Inner routes (e.g. /solara) — use `title.absolute` so the root title template does not stack.
 */
export function buildSubpageMetadata(input: {
  titleAbsolute: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = getCanonicalUrl(input.path);
  const keywords = input.keywords ?? [
    SITE_NAME_SHORT,
    SITE_NAME,
    "Dr. Jan Duffy REALTOR",
    "North Las Vegas real estate",
    "new construction North Las Vegas",
    "North Las Vegas townhomes",
    SITE_HOSTNAME,
  ];

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: { absolute: input.titleAbsolute },
    description: input.description,
    applicationName: SITE_NAME_SHORT,
    authors: [{ name: "Dr. Jan Duffy", url: SITE_ORIGIN }],
    publisher: SITE_NAME_SHORT,
    creator: "Dr. Jan Duffy",
    alternates: {
      canonical,
      languages: {
        "en-US": canonical,
        "x-default": canonical,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME_SHORT,
      countryName: "United States",
      title: input.titleAbsolute,
      description: input.description,
    },
    twitter: {
      card: "summary_large_image",
      title: input.titleAbsolute,
      description: input.description,
    },
    ...siteFaviconMetadata,
    verification: googleVerification ? { google: googleVerification } : undefined,
    keywords,
    category: "real estate",
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
  };
}

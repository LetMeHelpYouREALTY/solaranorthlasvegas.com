import { SITE_HOSTNAME, SITE_NAME, SITE_ORIGIN } from "@/lib/site-contact";
import type { Metadata } from "next";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

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
      template: `%s | ${SITE_NAME}`,
    },
    description: input.description,
    applicationName: SITE_NAME,
    authors: [{ name: "Dr. Jan Duffy", url: SITE_ORIGIN }],
    publisher: SITE_NAME,
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
      siteName: SITE_NAME,
      countryName: "United States",
      title: input.title,
      description: input.description,
      ...(ogAbsolute
        ? {
            images: [
              {
                url: ogAbsolute,
                alt: `${SITE_NAME} — North Las Vegas real estate`,
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
    icons: {
      icon: [{ url: "/trademarks/icon-dark.svg", type: "image/svg+xml" }],
      apple: [{ url: "/trademarks/icon-dark.svg" }],
    },
    verification: googleVerification ? { google: googleVerification } : undefined,
    keywords: [
      "North Las Vegas real estate",
      "North Las Vegas homes for sale",
      "Solara North Las Vegas",
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
    "Solara North Las Vegas",
    "Lennar Solara",
    "new construction North Las Vegas",
    "North Las Vegas townhomes",
    SITE_HOSTNAME,
  ];

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: { absolute: input.titleAbsolute },
    description: input.description,
    applicationName: SITE_NAME,
    authors: [{ name: "Dr. Jan Duffy", url: SITE_ORIGIN }],
    publisher: SITE_NAME,
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
      siteName: SITE_NAME,
      countryName: "United States",
      title: input.titleAbsolute,
      description: input.description,
    },
    twitter: {
      card: "summary_large_image",
      title: input.titleAbsolute,
      description: input.description,
    },
    icons: {
      icon: [{ url: "/trademarks/icon-dark.svg", type: "image/svg+xml" }],
      apple: [{ url: "/trademarks/icon-dark.svg" }],
    },
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

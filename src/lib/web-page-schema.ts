import { SITE_NAME_SHORT } from "@/lib/site-contact";
import { getNeighborhoodBySlug } from "@/lib/neighborhoods-data";
import { SOLARA_SCHEMA_DESCRIPTION, SOLARA_SCHEMA_TITLE } from "@/lib/solara-page";
import { meta } from "@/resources/once-ui.config";

/** Fields for Once UI `Schema` WebPage — keep aligned with visible H1 + meta for each route. */
export type WebPageSchemaFields = {
  title: string;
  description: string;
  path: string;
};

const HOME: WebPageSchemaFields = {
  title: meta.home.title,
  description: meta.home.description,
  path: "/",
};

const STATIC_ROUTES: Record<string, WebPageSchemaFields> = {
  "/": HOME,
  "/solara": {
    title: SOLARA_SCHEMA_TITLE,
    description: SOLARA_SCHEMA_DESCRIPTION,
    path: "/solara",
  },
  "/about": {
    title: `About Dr. Jan Duffy | ${SITE_NAME_SHORT}`,
    description:
      "Meet Dr. Jan Duffy, Nevada REALTOR with Berkshire Hathaway HomeServices Nevada Properties, serving North Las Vegas and the Las Vegas Valley.",
    path: "/about",
  },
  "/contact": {
    title: `Contact Dr. Jan Duffy | ${SITE_NAME_SHORT}`,
    description:
      "Contact Dr. Jan Duffy for North Las Vegas and Las Vegas Valley real estate—buying, selling, and new construction questions.",
    path: "/contact",
  },
  "/buyers": {
    title: `Home buyers — North Las Vegas & valley | ${SITE_NAME_SHORT}`,
    description:
      "Buyer roadmap for North Las Vegas and the Las Vegas Valley: financing prep, tours, offers, and closing—with independent REALTOR guidance.",
    path: "/buyers",
  },
  "/sellers": {
    title: `Home sellers — North Las Vegas & valley | ${SITE_NAME_SHORT}`,
    description:
      "Seller guide for North Las Vegas and the Las Vegas Valley: pricing, prep, marketing, and contract timeline with Dr. Jan Duffy.",
    path: "/sellers",
  },
  "/privacy": {
    title: `Privacy policy | ${SITE_NAME_SHORT}`,
    description:
      "Privacy policy for SolaraNorthLasVegas.com — how contact and site information are handled.",
    path: "/privacy",
  },
  "/disclaimer": {
    title: `Real estate disclaimer | ${SITE_NAME_SHORT}`,
    description:
      `Listing information, brokerage, and general real estate disclaimers for ${SITE_NAME_SHORT} and Dr. Jan Duffy.`,
    path: "/disclaimer",
  },
  "/search": {
    title: `Search homes — Dr. Jan Duffy | ${SITE_NAME_SHORT}`,
    description:
      "Get help finding homes in North Las Vegas and the Las Vegas Valley—email Dr. Jan Duffy with your criteria.",
    path: "/search",
  },
  "/home-value": {
    title: `Home value consultation | ${SITE_NAME_SHORT}`,
    description:
      "What a home valuation conversation covers—and what it is not—in North Las Vegas and the Las Vegas Valley.",
    path: "/home-value",
  },
  "/neighborhoods": {
    title: `Neighborhoods — Las Vegas Valley | ${SITE_NAME_SHORT}`,
    description:
      "Explore Las Vegas Valley neighborhood guides for buyers and sellers working with Dr. Jan Duffy.",
    path: "/neighborhoods",
  },
};

export function getWebPageSchemaForPath(pathname: string): WebPageSchemaFields {
  const normalized = pathname === "" ? "/" : pathname;
  const direct = STATIC_ROUTES[normalized];
  if (direct) {
    return direct;
  }
  if (normalized.startsWith("/neighborhoods/")) {
    const slug = normalized.replace("/neighborhoods/", "").split("/")[0] ?? "";
    const n = getNeighborhoodBySlug(slug);
    if (n) {
      return {
        title: n.schemaTitle,
        description: n.schemaDescription,
        path: `/neighborhoods/${n.slug}`,
      };
    }
  }
  return HOME;
}

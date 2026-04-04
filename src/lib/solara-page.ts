import { SITE_NAME } from "@/lib/site-contact";

/** Lennar’s official Solara (North Las Vegas) community page — verify builder hours, pricing, and inventory */
export const LENNAR_SOLARA_OFFICIAL_URL =
  "https://www.lennar.com/new-homes/nevada/las-vegas/north-las-vegas/solara" as const;

/** Dr. Jan Duffy — client home search (preview in an incognito window for the new-client experience) */
export const DR_JAN_CLIENT_SEARCH_URL = "https://drjanduffy.realscout.com/" as const;

/** Prospect onboarding — invite to create their own search */
export const DR_JAN_CLIENT_ONBOARDING_URL = "https://drjanduffy.realscout.com/onboarding" as const;

/**
 * Dr. Jan Duffy Solara North Las Vegas office address — same street as Lennar’s listed welcome center.
 * Builder sets welcome-center hours; confirm on Lennar’s official Solara page before new-home visits.
 */
export const SOLARA_WELCOME_ADDRESS = {
  streetAddress: "212 Summer Park Ave",
  addressLocality: "North Las Vegas",
  addressRegion: "NV",
  postalCode: "89031",
  addressCountry: "US",
} as const;

export function formatSolaraWelcomeAddressLine(): string {
  const a = SOLARA_WELCOME_ADDRESS;
  return `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`;
}

/** When community/pricing copy was last reviewed (update when you refresh facts). */
export const SOLARA_CONTENT_REVIEWED_ON = "2026-04-04" as const;

export const SOLARA_PAGE_TITLE_ABSOLUTE =
  `Lennar Solara North Las Vegas — new homes & REALTOR® help | ${SITE_NAME}` as const;

export const SOLARA_PAGE_DESCRIPTION =
  "Lennar Solara: gated Lennar townhomes in North Las Vegas. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, offers independent buyer/seller guidance—not the builder sales office. Browse homes on her client search; verify pricing, hours, and promotions on Lennar’s official Solara page.";

export const SOLARA_SCHEMA_TITLE =
  "Lennar Solara North Las Vegas — new homes & independent REALTOR® guidance | Dr. Jan Duffy";

export const SOLARA_SCHEMA_DESCRIPTION =
  "Gated Lennar Solara townhomes in North Las Vegas: Dr. Jan Duffy (BHHS Nevada Properties) provides independent REALTOR® guidance. Search homes via her client search; confirm builder details on Lennar’s official Solara page.";

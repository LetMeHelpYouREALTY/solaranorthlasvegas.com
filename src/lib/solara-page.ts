import { SITE_NAME } from "@/lib/site-contact";

/** Dr. Jan Duffy — client home search (preview in an incognito window for the new-client experience) */
export const DR_JAN_CLIENT_SEARCH_URL = "https://drjanduffy.realscout.com/" as const;

/** Prospect onboarding — invite to create their own search */
export const DR_JAN_CLIENT_ONBOARDING_URL = "https://drjanduffy.realscout.com/onboarding" as const;

/** Builder welcome center (public hours/visits: by appointment per builder) */
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
export const SOLARA_CONTENT_REVIEWED_ON = "2026-04-03" as const;

export const SOLARA_PAGE_TITLE_ABSOLUTE =
  `Dr. Jan Duffy — New construction & North Las Vegas homes (Solara) | ${SITE_NAME}` as const;

export const SOLARA_PAGE_DESCRIPTION =
  "Work with Dr. Jan Duffy, REALTOR®, for buyer and seller guidance in North Las Vegas—including the Solara townhome area. Search homes on her client search page or start onboarding to build your own search. Berkshire Hathaway HomeServices Nevada Properties.";

export const SOLARA_SCHEMA_TITLE = "Dr. Jan Duffy — New construction guidance (Solara area, North Las Vegas)";

export const SOLARA_SCHEMA_DESCRIPTION =
  "Independent real estate services from Dr. Jan Duffy in North Las Vegas. Solara is a local new-build community; search homes via her client search page.";

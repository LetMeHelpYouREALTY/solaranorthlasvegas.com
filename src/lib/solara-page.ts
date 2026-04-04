import { SITE_NAME } from "@/lib/site-contact";

/** Official Lennar listing — source of truth for pricing, hours, inventory */
export const LENNAR_SOLARA_OFFICIAL_URL =
  "https://www.lennar.com/new-homes/nevada/las-vegas/north-las-vegas/solara" as const;

/** Lennar welcome center (public hours/visits: by appointment per builder) */
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
  `Solara New Construction Townhomes, North Las Vegas | ${SITE_NAME}` as const;

export const SOLARA_PAGE_DESCRIPTION =
  "Solara is a Lennar new-home community of gated townhomes in North Las Vegas, NV. Confirm current pricing, floorplans, and tours on Lennar’s official page. Dr. Jan Duffy can advise buyers and sellers independently.";

export const SOLARA_SCHEMA_TITLE = "Solara new construction in North Las Vegas";

export const SOLARA_SCHEMA_DESCRIPTION =
  "Lennar new-home community in North Las Vegas. Independent real estate guidance from Dr. Jan Duffy; verify builder pricing and availability on Lennar.com.";

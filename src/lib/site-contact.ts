/**
 * Single source of truth for Solara North Las Vegas contact and entity fields.
 * Keep visible NAP, JSON-LD, and GBP aligned when phone or address are finalized.
 */
export const SITE_NAME = "Solara North Las Vegas" as const;

export const SITE_HOSTNAME = "solaranorthlasvegas.com" as const;

export const SITE_ORIGIN = `https://www.${SITE_HOSTNAME}` as const;

/** Public tel: value when set (E.164 or digits); omit from UI/schema until it matches GBP */
export function getPublicPhoneE164(): string | undefined {
  const v = process.env.NEXT_PUBLIC_AGENT_PHONE?.trim();
  return v || undefined;
}

/** USPS-style parts — only when every field is set (matches GBP) for NAP + LocalBusiness */
export type PostalAddressParts = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

/**
 * Returns a full postal address when all required env vars are set.
 * Use the same values as Google Business Profile (street, city, state, ZIP).
 */
export function getOptionalPostalAddress(): PostalAddressParts | null {
  const streetAddress = process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS?.trim();
  const addressLocality = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY?.trim();
  const addressRegion = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_REGION?.trim();
  const postalCode = process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE?.trim();
  const addressCountry = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY?.trim() || "US";
  if (!streetAddress || !addressLocality || !addressRegion || !postalCode) {
    return null;
  }
  return {
    streetAddress,
    addressLocality,
    addressRegion,
    postalCode,
    addressCountry,
  };
}

/** Single-line address for visible footer — same data as JSON-LD PostalAddress */
export function formatPostalAddressLine(parts: PostalAddressParts): string {
  return `${parts.streetAddress}, ${parts.addressLocality}, ${parts.addressRegion} ${parts.postalCode}`;
}

/** Profile URLs for Organization `sameAs` (GBP maps link, social) — must be real, public URLs */
export function getSameAsProfileUrls(): string[] {
  const candidates = [
    process.env.NEXT_PUBLIC_GBP_MAPS_URL,
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
  ];
  return candidates.map((u) => u?.trim()).filter(Boolean) as string[];
}

export const CONTACT_EMAILS = {
  /** Primary — Dr. Jan Duffy */
  drDuffy: "DrDuffy@SolaraNorthLasVegas.com",
  drDuffySells: "DrDuffySells@SolaraNorthLasVegas.com",
  chancSsells: "ChancSsells@SolaraNorthLasVegas.com",
} as const;

/** Default mailbox for Organization / LocalBusiness schema and general inquiries */
export const PRIMARY_CONTACT_EMAIL = CONTACT_EMAILS.drDuffy;

export const ALL_CONTACT_EMAILS = Object.freeze([
  CONTACT_EMAILS.drDuffy,
  CONTACT_EMAILS.drDuffySells,
  CONTACT_EMAILS.chancSsells,
]);

/** Verifiable professional identifiers (Nevada license + brokerage) */
export const AGENT = {
  fullName: "Dr. Jan Duffy",
  licenseNumber: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
} as const;

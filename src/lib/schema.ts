import type { HomeFaqItem } from "@/lib/home-faq";
import { getCanonicalUrl } from "@/lib/metadata";
import {
  AGENT,
  CONTACT_EMAILS,
  PRIMARY_CONTACT_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
  getOptionalPostalAddress,
  getPublicPhoneE164,
  getSameAsProfileUrls,
} from "@/lib/site-contact";
import {
  LENNAR_SOLARA_OFFICIAL_URL,
  SOLARA_SCHEMA_DESCRIPTION,
  SOLARA_SCHEMA_TITLE,
  SOLARA_WELCOME_ADDRESS,
} from "@/lib/solara-page";

function postalToSchemaAddress(parts: NonNullable<ReturnType<typeof getOptionalPostalAddress>>) {
  return {
    "@type": "PostalAddress",
    streetAddress: parts.streetAddress,
    addressLocality: parts.addressLocality,
    addressRegion: parts.addressRegion,
    postalCode: parts.postalCode,
    addressCountry: parts.addressCountry,
  };
}

/** Root JSON-LD graph — keep NAP/email aligned with visible copy and GBP. */
export function buildRootJsonLdGraph(): Record<string, unknown>[] {
  const phone = getPublicPhoneE164();
  const logoUrl = `${SITE_ORIGIN}/trademarks/icon-dark.svg`;
  const sameAs = getSameAsProfileUrls();
  const postal = getOptionalPostalAddress();
  const addressBlock = postal ? postalToSchemaAddress(postal) : null;

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    email: PRIMARY_CONTACT_EMAIL,
    logo: { "@type": "ImageObject", url: logoUrl },
    ...(phone ? { telephone: phone } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(addressBlock ? { address: addressBlock } : {}),
  };

  const localBusiness: Record<string, unknown> | null = postal
    ? {
        "@type": "LocalBusiness",
        "@id": `${SITE_ORIGIN}/#localbusiness`,
        name: SITE_NAME,
        url: SITE_ORIGIN,
        email: PRIMARY_CONTACT_EMAIL,
        image: logoUrl,
        address: addressBlock,
        ...(phone ? { telephone: phone } : {}),
        ...(sameAs.length ? { sameAs } : {}),
        parentOrganization: { "@id": `${SITE_ORIGIN}/#organization` },
      }
    : null;

  return [
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: SITE_NAME,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
    organization,
    ...(localBusiness ? [localBusiness] : []),
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_ORIGIN}/#agent`,
      name: AGENT.fullName,
      email: PRIMARY_CONTACT_EMAIL,
      url: SITE_ORIGIN,
      image: logoUrl,
      jobTitle: "REALTOR®",
      worksFor: {
        "@type": "Organization",
        name: AGENT.brokerage,
      },
      ...(postal ? { workLocation: { "@id": `${SITE_ORIGIN}/#localbusiness` } } : {}),
      areaServed: [
        {
          "@type": "City",
          name: "North Las Vegas",
          containedInPlace: { "@type": "State", name: "Nevada" },
        },
        {
          "@type": "AdministrativeArea",
          name: "Las Vegas Valley",
        },
      ],
      identifier: {
        "@type": "PropertyValue",
        name: "Nevada real estate license number",
        value: AGENT.licenseNumber,
      },
      ...(phone ? { telephone: phone } : {}),
    },
    {
      "@type": "ContactPoint",
      "@id": `${SITE_ORIGIN}/#contact-sales`,
      contactType: "sales",
      email: CONTACT_EMAILS.drDuffySells,
      areaServed: "US-NV",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      "@id": `${SITE_ORIGIN}/#contact-chance`,
      contactType: "sales",
      email: CONTACT_EMAILS.chancSsells,
      areaServed: "US-NV",
      availableLanguage: ["English"],
    },
  ];
}

/** FAQPage entity — only include on URLs that render the same visible Q&A. */
export function buildFaqPageJsonLd(
  items: HomeFaqItem[],
  pagePath: string,
): Record<string, unknown> {
  const pageUrl = getCanonicalUrl(pagePath);
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLdGraph(graph: Record<string, unknown>[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

export function serializeFaqPageLd(items: HomeFaqItem[], pagePath: string): string {
  const body = buildFaqPageJsonLd(items, pagePath);
  return JSON.stringify({
    "@context": "https://schema.org",
    ...body,
  });
}

const SOLARA_PATH = "/solara" as const;

/** WebPage, Place (community), BreadcrumbList for /solara — complements global graph in layout. */
export function buildSolaraSupplementaryGraph(): Record<string, unknown>[] {
  const pageUrl = getCanonicalUrl(SOLARA_PATH);
  const homeUrl = getCanonicalUrl("/");
  const placeId = `${pageUrl}#solara-community`;

  return [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: SOLARA_SCHEMA_TITLE,
      description: SOLARA_SCHEMA_DESCRIPTION,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": placeId },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "Place",
      "@id": placeId,
      name: "Solara (Lennar) — North Las Vegas, NV",
      description:
        "Lennar new-home community. Builder details, pricing, and availability are authoritative on Lennar.com.",
      address: {
        "@type": "PostalAddress",
        streetAddress: SOLARA_WELCOME_ADDRESS.streetAddress,
        addressLocality: SOLARA_WELCOME_ADDRESS.addressLocality,
        addressRegion: SOLARA_WELCOME_ADDRESS.addressRegion,
        postalCode: SOLARA_WELCOME_ADDRESS.postalCode,
        addressCountry: SOLARA_WELCOME_ADDRESS.addressCountry,
      },
      sameAs: LENNAR_SOLARA_OFFICIAL_URL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: SITE_NAME,
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solara new construction",
          item: pageUrl,
        },
      ],
    },
  ];
}

export function serializeSolaraSupplementaryLd(): string {
  return serializeJsonLdGraph(buildSolaraSupplementaryGraph());
}

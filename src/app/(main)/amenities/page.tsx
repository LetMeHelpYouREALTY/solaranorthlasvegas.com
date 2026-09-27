import { CalendlyShellStrip } from "@/components/calendly/CalendlyShellStrip";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AmenitiesPageContent } from "@/components/sections/AmenitiesPageContent";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { AmenitiesSupplementaryJsonLd } from "@/components/seo/AmenitiesSupplementaryJsonLd";
import { AMENITIES_PAGE_DESCRIPTION, AMENITIES_PAGE_TITLE_ABSOLUTE } from "@/lib/amenities-page";
import { buildSubpageMetadata } from "@/lib/metadata";
import { COMMUNITY_DISPLAY_NAME, COMMUNITY_CITY_LABEL } from "@/lib/community-amenities-config";
import { SITE_HOSTNAME, SITE_NAME_SHORT } from "@/lib/site-contact";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: AMENITIES_PAGE_TITLE_ABSOLUTE,
    description: AMENITIES_PAGE_DESCRIPTION,
    path: "/amenities",
    keywords: [
      `${COMMUNITY_DISPLAY_NAME} amenities`,
      `nearby amenities ${COMMUNITY_CITY_LABEL}`,
      "Lennar Solara North Las Vegas",
      "North Las Vegas grocery parks hospitals",
      SITE_NAME_SHORT,
      SITE_HOSTNAME,
    ],
  });
}

export default function AmenitiesPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SiteHeader />
      <AmenitiesSupplementaryJsonLd />
      <AmenitiesPageContent />
      <CalendlyShellStrip />
      <SiteFooter />
    </div>
  );
}

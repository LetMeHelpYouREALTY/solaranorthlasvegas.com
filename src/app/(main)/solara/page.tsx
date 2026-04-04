import { CalendlyShellStrip } from "@/components/calendly/CalendlyShellStrip";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SolaraFaq } from "@/components/sections/SolaraFaq";
import { SolaraPageContent } from "@/components/sections/SolaraPageContent";
import { SolaraFaqJsonLd } from "@/components/seo/SolaraFaqJsonLd";
import { SolaraSupplementaryJsonLd } from "@/components/seo/SolaraSupplementaryJsonLd";
import { buildSubpageMetadata } from "@/lib/metadata";
import { SITE_HOSTNAME } from "@/lib/site-contact";
import { SOLARA_PAGE_DESCRIPTION, SOLARA_PAGE_TITLE_ABSOLUTE } from "@/lib/solara-page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: SOLARA_PAGE_TITLE_ABSOLUTE,
    description: SOLARA_PAGE_DESCRIPTION,
    path: "/solara",
    keywords: [
      "Lennar Solara North Las Vegas",
      "Lennar new homes Las Vegas",
      "Lennar North Las Vegas",
      "Solara townhomes North Las Vegas",
      "Solara or Solera",
      SITE_HOSTNAME,
    ],
  });
}

export default function SolaraPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SiteHeader />
      <SolaraSupplementaryJsonLd />
      <SolaraFaqJsonLd />
      <SolaraPageContent />
      <SolaraFaq />
      <CalendlyShellStrip />
      <SiteFooter />
    </div>
  );
}

import { SiteFooter } from "@/components/sections/SiteFooter";
import { SolaraFaq } from "@/components/sections/SolaraFaq";
import { SolaraPageContent } from "@/components/sections/SolaraPageContent";
import { SolaraFaqJsonLd } from "@/components/seo/SolaraFaqJsonLd";
import { SolaraSupplementaryJsonLd } from "@/components/seo/SolaraSupplementaryJsonLd";
import { buildSubpageMetadata } from "@/lib/metadata";
import { SOLARA_PAGE_DESCRIPTION, SOLARA_PAGE_TITLE_ABSOLUTE } from "@/lib/solara-page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: SOLARA_PAGE_TITLE_ABSOLUTE,
    description: SOLARA_PAGE_DESCRIPTION,
    path: "/solara",
  });
}

export default function SolaraPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SolaraSupplementaryJsonLd />
      <SolaraFaqJsonLd />
      <SolaraPageContent />
      <SolaraFaq />
      <SiteFooter />
    </div>
  );
}

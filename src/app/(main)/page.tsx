import { CalendlyShellStrip } from "@/components/calendly/CalendlyShellStrip";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { AmenityMapSection } from "@/components/maps/AmenityMapSection";
import { RealScoutOfficeListingsSection } from "@/components/widgets/RealScoutOfficeListingsSection";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { buildHomeMetadata } from "@/lib/metadata";
import { meta } from "@/resources/once-ui.config";
import type { Metadata } from "next";
import { HomeHero } from "./HomeHero";

export async function generateMetadata(): Promise<Metadata> {
  return buildHomeMetadata({
    title: meta.home.title,
    description: meta.home.description,
    path: meta.home.path,
    ogImagePath: meta.home.image,
  });
}

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HomeFaqJsonLd />
      <HomeHero />
      <RealScoutOfficeListingsSection compactTop />
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <AmenityMapSection
          heading="Life near Solara"
          headingId="home-nearby-heading"
          lead="Explore groceries, parks, healthcare, and more around Lennar Solara in North Las Vegas."
          showStaticList={false}
        />
      </div>
      <HomeFaq />
      <CalendlyShellStrip />
      <SiteFooter />
    </div>
  );
}

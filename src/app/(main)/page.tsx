import { HomeFaq } from "@/components/sections/HomeFaq";
import { SiteFooter } from "@/components/sections/SiteFooter";
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
  });
}

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HomeFaqJsonLd />
      <HomeHero />
      <RealScoutOfficeListingsSection compactTop />
      <HomeFaq />
      <SiteFooter />
    </div>
  );
}

import { HomeFaq } from "@/components/sections/HomeFaq";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { HomeHero } from "./HomeHero";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HomeFaqJsonLd />
      <HomeHero />
      <HomeFaq />
      <SiteFooter />
    </div>
  );
}

import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { NeighborhoodsHubContent } from "@/components/sections/NeighborhoodsHubContent";
import { buildSubpageMetadata } from "@/lib/metadata";
import { SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Neighborhood guides — Las Vegas Valley",
    description:
      "Neighborhood guides for North Las Vegas, Henderson, Summerlin, and more—buyer and seller context with Dr. Jan Duffy.",
    path: "/neighborhoods",
    keywords: [
      "Las Vegas Valley neighborhoods",
      "North Las Vegas areas",
      "Summerlin vs Henderson",
      SITE_HOSTNAME,
    ],
  });
}

export default function NeighborhoodsHubPage() {
  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="Neighborhoods"
        h1="Neighborhood guides"
        lead="Explore area-by-area context across the Las Vegas Valley. When you are ready to narrow options, email for a conversation tailored to your commute, schools, and budget."
      >
        <NeighborhoodsHubContent />
        <section className="marketing-cta-band" aria-labelledby="n-hub-cta">
          <h2 id="n-hub-cta">Next step</h2>
          <p>
            <Link href="/buyers">Buyer roadmap</Link>
            {" · "}
            <Link href="/contact">Contact</Link>
            {" · "}
            <Link href="/solara">Dr. Jan — new construction (Solara)</Link>
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}

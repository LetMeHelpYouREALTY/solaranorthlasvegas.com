import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { AGENT, SITE_HOSTNAME, SITE_NAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Real estate disclaimer",
    description: `MLS, brokerage, and general disclaimers for ${SITE_NAME} and ${AGENT.fullName}.`,
    path: "/disclaimer",
    keywords: ["real estate disclaimer", "MLS disclaimer", SITE_HOSTNAME],
  });
}

export default function DisclaimerPage() {
  return (
    <MarketingShell>
      <MarketingArticle
        contentTone="legal"
        breadcrumbCurrent="Disclaimer"
        h1="Real estate disclaimer"
        lead="Please read the following disclosures. They supplement—not replace—documents you receive in a transaction."
      >
        <section aria-labelledby="general-heading">
          <h2 id="general-heading">General information</h2>
          <p>
            Content on this website is for general education about real estate in North Las Vegas
            and the Las Vegas Valley. It is not legal, tax, or investment advice. Consult qualified
            professionals for advice tailored to your situation.
          </p>
        </section>
        <section aria-labelledby="mls-heading">
          <h2 id="mls-heading">MLS and listing data</h2>
          <p>
            Listing information may come from IDX feeds or third parties and may change without
            notice. Photos, square footage, HOA fees, and status should be verified. The listing
            broker/brokerage and MLS attribution shown on IDX pages govern display of MLS data—see
            your MLS provider’s rules and the disclaimer on search results where IDX is enabled.
          </p>
        </section>
        <section aria-labelledby="agency-heading">
          <h2 id="agency-heading">Agency in Nevada</h2>
          <p>
            Nevada requires agency disclosures. {AGENT.fullName} ({AGENT.licenseNumber}) is
            affiliated with {AGENT.brokerage}. Your relationship and duties are defined by Nevada
            law and the agreements you sign.
          </p>
        </section>
        <section aria-labelledby="builder-heading">
          <h2 id="builder-heading">New construction</h2>
          <p>
            Builder communities (including <Link href="/solara">Solara / Lennar</Link>) are
            described for orientation only. Builder pricing, incentives, and availability are
            controlled by the builder.
          </p>
        </section>
        <section aria-labelledby="fair-heading">
          <h2 id="fair-heading">Fair housing</h2>
          <p>
            {SITE_NAME} supports equal housing opportunity and complies with applicable fair housing
            laws.
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}

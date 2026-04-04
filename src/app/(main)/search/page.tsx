import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Search homes — request MLS support",
    description:
      "Request a curated home search in the Las Vegas Valley. MLS-powered search widgets can be added later; for now, connect by email for listing support.",
    path: "/search",
    keywords: ["Las Vegas Valley home search", "MLS search help", SITE_HOSTNAME],
  });
}

export default function SearchPage() {
  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="Search homes"
        h1="Find homes in the Las Vegas Valley"
        lead="Tell me your must-haves and I will help you focus on listings that fit your budget, commute, and timeline. A compliant MLS search experience can be connected here when you are ready to add a widget provider."
      >
        <section aria-labelledby="how-heading">
          <h2 id="how-heading">How search support works</h2>
          <p>
            Share price range, preferred cities or neighborhoods, beds/baths, HOA tolerance, and
            your target move date. I will reply with next steps and—where appropriate—saved searches
            or tour planning.
          </p>
        </section>
        <section aria-labelledby="email-search-heading">
          <h2 id="email-search-heading">Start by email</h2>
          <p>
            <a href={`mailto:${PRIMARY_CONTACT_EMAIL}?subject=Home%20search%20request`}>
              Email your search criteria
            </a>
          </p>
        </section>
        <section aria-labelledby="browse-heading">
          <h2 id="browse-heading">Browse while you decide</h2>
          <p>
            <Link href="/neighborhoods">Neighborhood guides</Link>
            {" · "}
            <Link href="/buyers">Buyer roadmap</Link>
            {" · "}
            <Link href="/solara">Solara new construction</Link>
          </p>
        </section>
        <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
          MLS data display requires brokerage compliance and IDX rules. This page is intentionally
          lightweight until an approved widget and CSP configuration are in place.
        </p>
      </MarketingArticle>
    </MarketingShell>
  );
}

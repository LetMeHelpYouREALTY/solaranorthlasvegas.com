import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Search homes — get help from Dr. Jan Duffy",
    description:
      "Tell Dr. Jan Duffy what you need in the Las Vegas Valley. She can help you focus on homes that fit your budget, commute, and timeline—starting with email and conversation.",
    path: "/search",
    keywords: ["Las Vegas Valley home search", "North Las Vegas homes", SITE_HOSTNAME],
  });
}

export default function SearchPage() {
  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="Search homes"
        h1="Find homes in the Las Vegas Valley"
        lead="Share your must-haves and I will help you narrow choices that fit your budget, commute, and timeline. We can start with email and go from there—saved searches and tours when you are ready."
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
              Email your search criteria to Dr. Jan Duffy
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
            <Link href="/solara">New construction (Solara area)</Link>
          </p>
        </section>
        <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
          Showing homes for sale on a website must follow brokerage rules. This page stays simple
          until any on-site search tool is approved and configured for this site.
        </p>
      </MarketingArticle>
    </MarketingShell>
  );
}

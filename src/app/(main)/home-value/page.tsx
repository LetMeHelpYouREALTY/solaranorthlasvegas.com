import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Home value conversation — not an appraisal",
    description:
      "What a listing pricing conversation covers in North Las Vegas and the Las Vegas Valley—with Dr. Jan Duffy. Not a guarantee of value or appraisal.",
    path: "/home-value",
    keywords: ["home value North Las Vegas", "list price consultation", SITE_HOSTNAME],
  });
}

export default function HomeValuePage() {
  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="Home value"
        h1="Home value: what a conversation covers"
        lead="Online estimates are starting points—not substitutes for market evidence, property condition, or an appraisal. Here is how I approach pricing and equity questions with sellers (and curious owners) in Nevada."
      >
        <section aria-labelledby="not-heading">
          <h2 id="not-heading">What this is not</h2>
          <p>
            This page does not provide a guaranteed sales price, investment advice, or an appraisal.
            Appraisals are performed by licensed appraisers under separate standards.
          </p>
        </section>
        <section aria-labelledby="is-heading">
          <h2 id="is-heading">What we do review together</h2>
          <ul>
            <li>Recent comparable sales near your home and active competition</li>
            <li>Condition, upgrades, and maintenance items buyers notice</li>
            <li>HOA fees and community context</li>
            <li>Your timeline and negotiation flexibility</li>
          </ul>
        </section>
        <section className="marketing-cta-band" aria-labelledby="hv-cta">
          <h2 id="hv-cta">Request a pricing conversation</h2>
          <p>
            <a
              href={`mailto:${PRIMARY_CONTACT_EMAIL}?subject=Home%20value%20%2F%20pricing%20question`}
            >
              Email {PRIMARY_CONTACT_EMAIL}
            </a>
            {" · "}
            <Link href="/sellers">Seller roadmap</Link>
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}

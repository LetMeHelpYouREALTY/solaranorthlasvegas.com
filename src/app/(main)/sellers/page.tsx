import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { MarketingFaq } from "@/components/sections/MarketingFaq";
import { MarketingFaqJsonLd } from "@/components/seo/MarketingFaqJsonLd";
import { buildSubpageMetadata } from "@/lib/metadata";
import { SELLERS_FAQ_ITEMS } from "@/lib/sellers-faq";
import { AGENT, PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Home sellers — North Las Vegas & Las Vegas Valley",
    description:
      "Seller roadmap: pricing, prep, marketing, and contract milestones for North Las Vegas and the Las Vegas Valley with Dr. Jan Duffy.",
    path: "/sellers",
    keywords: ["sell home North Las Vegas", "Las Vegas Valley listing agent", SITE_HOSTNAME],
  });
}

export default function SellersPage() {
  return (
    <MarketingShell>
      <MarketingFaqJsonLd items={SELLERS_FAQ_ITEMS} pagePath="/sellers" />
      <MarketingArticle
        breadcrumbCurrent="Sellers"
        h1="Selling your home in North Las Vegas & the valley"
        lead="A practical sequence from pricing through closing—focused on disclosure discipline, buyer-ready presentation, and negotiation that protects your goals."
      >
        <section aria-labelledby="seller-steps-heading">
          <h2 id="seller-steps-heading">Selling roadmap</h2>
          <ol className="buyer-step-list">
            <li className="buyer-step-item">
              <span className="buyer-step-num" aria-hidden="true">
                1
              </span>
              <div>
                <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>Price from evidence</h3>
                <p style={{ margin: 0, lineHeight: 1.65 }}>
                  Start with comparable sales and active competition near your home. Adjust for
                  condition, upgrades, and HOA context—not headlines alone.
                </p>
              </div>
            </li>
            <li className="buyer-step-item">
              <span className="buyer-step-num" aria-hidden="true">
                2
              </span>
              <div>
                <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>
                  Prepare and disclose accurately
                </h3>
                <p style={{ margin: 0, lineHeight: 1.65 }}>
                  Nevada disclosures exist to reduce surprises. Accuracy builds buyer trust and
                  helps prevent renegotiation late in escrow.
                </p>
              </div>
            </li>
            <li className="buyer-step-item">
              <span className="buyer-step-num" aria-hidden="true">
                3
              </span>
              <div>
                <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>
                  Market for serious buyers
                </h3>
                <p style={{ margin: 0, lineHeight: 1.65 }}>
                  Strong photos, clear facts, and responsive showing windows matter. Most buyers
                  compare many listings online before they tour.
                </p>
              </div>
            </li>
            <li className="buyer-step-item">
              <span className="buyer-step-num" aria-hidden="true">
                4
              </span>
              <div>
                <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>
                  Navigate contract to close
                </h3>
                <p style={{ margin: 0, lineHeight: 1.65 }}>
                  Buyers may request repairs or credits. Appraisal and buyer financing conditions
                  can affect timing—plan for alternatives before deadlines hit.
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section className="marketing-cta-band" aria-labelledby="sellers-cta-heading">
          <h2 id="sellers-cta-heading">Talk about your timeline</h2>
          <p>
            Email <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
            {" · "}
            <Link href="/home-value">Home value conversation</Link>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </section>
        <p style={{ lineHeight: 1.65 }}>
          {AGENT.fullName} · {AGENT.licenseNumber} · {AGENT.brokerage}
        </p>
      </MarketingArticle>
      <MarketingFaq
        items={SELLERS_FAQ_ITEMS}
        sectionTitle="Seller questions"
        sectionId="sellers-faq"
        headingId="sellers-faq-heading"
      />
    </MarketingShell>
  );
}

import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { MarketingFaq } from "@/components/sections/MarketingFaq";
import { MarketingFaqJsonLd } from "@/components/seo/MarketingFaqJsonLd";
import { BUYERS_FAQ_ITEMS } from "@/lib/buyers-faq";
import { buildSubpageMetadata } from "@/lib/metadata";
import { AGENT, CONTACT_EMAILS, PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Home buyers — North Las Vegas & Las Vegas Valley",
    description:
      "Step-by-step buyer roadmap for North Las Vegas and the valley: budget, tours, offers, and closing—with REALTOR guidance from Dr. Jan Duffy.",
    path: "/buyers",
    keywords: [
      "North Las Vegas home buyers",
      "first time buyer Las Vegas Valley",
      AGENT.fullName,
      SITE_HOSTNAME,
    ],
  });
}

const STEPS = [
  {
    title: "Clarify budget and timeline",
    body: "Align on monthly payment, down payment, and move date. A lender conversation turns those goals into a realistic price range.",
  },
  {
    title: "Tour with a plan",
    body: "Compare neighborhoods for commute, schools, HOA rules, and resale trends. For new construction, confirm what is standard vs upgrade with the builder.",
  },
  {
    title: "Make a clean, competitive offer",
    body: "Your offer reflects price, timelines, and contingencies. In fast markets, preparation beats rushing—know your walk-away points before you write.",
  },
  {
    title: "Close with confidence",
    body: "Inspections, appraisal, title work, and final walkthrough protect you. Ask questions until you understand what you are signing.",
  },
];

export default function BuyersPage() {
  return (
    <MarketingShell>
      <MarketingFaqJsonLd items={BUYERS_FAQ_ITEMS} pagePath="/buyers" />
      <MarketingArticle
        breadcrumbCurrent="Buyers"
        h1="Buying a home in North Las Vegas & the valley"
        lead="A calm, step-by-step path from first search to keys—with independent guidance from a Nevada REALTOR who knows local neighborhoods and new construction."
      >
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading">Your buying roadmap</h2>
          <ol className="buyer-step-list">
            {STEPS.map((step, i) => (
              <li key={step.title} className="buyer-step-item">
                <span className="buyer-step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>{step.title}</h3>
                  <p style={{ margin: 0, lineHeight: 1.65 }}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="marketing-cta-band" aria-labelledby="buyers-cta-heading">
          <h2 id="buyers-cta-heading">Ready to talk next steps?</h2>
          <p>
            Email <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
            {" · "}
            <Link href="/search">Request a curated search</Link>
            {" · "}
            <Link href="/neighborhoods">Browse neighborhoods</Link>
          </p>
        </section>
        <section aria-labelledby="listings-email-heading">
          <h2 id="listings-email-heading">New listings and tours</h2>
          <p>
            For active inventory questions, you can also reach{" "}
            <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>{CONTACT_EMAILS.drDuffySells}</a>.
          </p>
        </section>
      </MarketingArticle>
      <MarketingFaq
        items={BUYERS_FAQ_ITEMS}
        sectionTitle="Buyer questions"
        sectionId="buyers-faq"
        headingId="buyers-faq-heading"
      />
    </MarketingShell>
  );
}

import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { SITE_IMAGE_PATHS } from "@/lib/site-images";
import { AGENT, CONTACT_EMAILS, PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "About Dr. Jan Duffy — Nevada REALTOR",
    description:
      "Dr. Jan Duffy provides North Las Vegas and Las Vegas Valley real estate guidance with Berkshire Hathaway HomeServices Nevada Properties.",
    path: "/about",
    keywords: [
      "Dr. Jan Duffy REALTOR",
      "North Las Vegas real estate agent",
      AGENT.brokerage,
      SITE_HOSTNAME,
    ],
  });
}

export default function AboutPage() {
  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="About"
        h1="About Dr. Jan Duffy"
        lead={`${AGENT.fullName} is a Nevada real estate licensee (${AGENT.licenseNumber}) with ${AGENT.brokerage}, focused on helping buyers and sellers make clear decisions in North Las Vegas and across the Las Vegas Valley.`}
      >
        <section className="about-agent-photo-section" aria-label="Dr. Jan Duffy">
          <Image
            src={SITE_IMAGE_PATHS.aboutAgentPhoto}
            alt={`${AGENT.fullName}, Nevada REALTOR with ${AGENT.brokerage}`}
            width={480}
            height={480}
            sizes="(max-width: 640px) 100vw, 360px"
            className="about-agent-photo"
            priority={false}
          />
        </section>
        <section aria-labelledby="approach-heading">
          <h2 id="approach-heading">How I work with clients</h2>
          <p>
            Real estate decisions are personal and financial at the same time. My role is to help
            you understand the tradeoffs—neighborhood fit, monthly payment, contract timelines, and
            disclosure expectations—so you can move forward with confidence.
          </p>
        </section>
        <section aria-labelledby="solara-heading">
          <h2 id="solara-heading">New construction (Solara area)</h2>
          <p>
            I help buyers and sellers think through new construction—not just resale. If you are
            looking at the{" "}
            <Link href="/solara">Solara</Link> area in North Las Vegas, I can explain how independent
            representation works alongside the builder’s process. Official pricing and availability
            always come from the builder’s website.
          </p>
        </section>
        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading">Get in touch</h2>
          <p>
            Email <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
            {" · "}
            <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>listings mailbox</a>
            {" · "}
            <Link href="/contact">Contact page</Link>
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}

import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import {
  AGENT,
  CONTACT_EMAILS,
  PRIMARY_CONTACT_EMAIL,
  SITE_HOSTNAME,
  formatPostalAddressLine,
  getOptionalPostalAddress,
  getPublicPhoneE164,
} from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Contact Dr. Jan Duffy",
    description:
      "Email Dr. Jan Duffy for North Las Vegas and Las Vegas Valley real estate—buying, selling, and Solara new construction questions.",
    path: "/contact",
    keywords: ["contact North Las Vegas REALTOR", PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME],
  });
}

export default function ContactPage() {
  const phone = getPublicPhoneE164();
  const postal = getOptionalPostalAddress();

  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="Contact"
        h1="Contact Dr. Jan Duffy"
        lead="Reach out by email for buying, selling, or new construction questions in North Las Vegas and the Las Vegas Valley."
      >
        <section className="content-panel" aria-labelledby="email-heading">
          <h2 id="email-heading">Email</h2>
          <p>
            <strong>Primary:</strong>{" "}
            <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
          </p>
          <p>
            <strong>Listings:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>{CONTACT_EMAILS.drDuffySells}</a>
          </p>
          <p>
            <strong>Team:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAILS.chancSsells}`}>{CONTACT_EMAILS.chancSsells}</a>
          </p>
        </section>
        {phone ? (
          <section className="content-panel" aria-labelledby="phone-heading">
            <h2 id="phone-heading">Phone</h2>
            <p>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            </p>
          </section>
        ) : null}
        {postal ? (
          <section className="content-panel" aria-labelledby="office-heading">
            <h2 id="office-heading">Office mailing address</h2>
            <p>{formatPostalAddressLine(postal)}</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
              Address shown matches Google Business Profile configuration for this site.
            </p>
          </section>
        ) : null}
        <section className="content-panel" aria-labelledby="license-heading">
          <h2 id="license-heading">License</h2>
          <p>
            {AGENT.fullName} · Nevada license {AGENT.licenseNumber} · {AGENT.brokerage}
          </p>
        </section>
        <section className="marketing-cta-band" aria-labelledby="next-heading">
          <h2 id="next-heading">Explore next</h2>
          <p>
            <Link href="/buyers">Buyer roadmap</Link>
            {" · "}
            <Link href="/neighborhoods">Neighborhood guides</Link>
            {" · "}
            <Link href="/solara">Solara overview</Link>
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}

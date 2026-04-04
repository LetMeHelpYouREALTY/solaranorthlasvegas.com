import { RealScoutOfficeListingsSection } from "@/components/widgets/RealScoutOfficeListingsSection";
import { AGENT, CONTACT_EMAILS, PRIMARY_CONTACT_EMAIL, SITE_NAME } from "@/lib/site-contact";
import {
  LENNAR_SOLARA_OFFICIAL_URL,
  SOLARA_CONTENT_REVIEWED_ON,
  formatSolaraWelcomeAddressLine,
} from "@/lib/solara-page";
import Link from "next/link";

export function SolaraPageContent() {
  const mapsQuery = encodeURIComponent(formatSolaraWelcomeAddressLine());

  return (
    <main id="page-top" className="solara-page-main marketing-prose">
      <div className="marketing-intro-band">
        <nav className="marketing-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">{SITE_NAME}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>Solara new construction</li>
          </ol>
        </nav>

        <h1 className="marketing-page-h1">
          Solara — Lennar new-home townhomes in North Las Vegas
        </h1>

        <p className="marketing-lead">
          <strong>Updated {SOLARA_CONTENT_REVIEWED_ON}.</strong> Solara is a <strong>Lennar</strong>{" "}
          community of gated townhomes in North Las Vegas, Nevada. Builder pricing, promotions,
          floorplans, and inventory change often — use Lennar’s official page as the source of truth.
        </p>

        <p style={{ margin: "0 0 0", lineHeight: 1.65 }}>
          <a href={LENNAR_SOLARA_OFFICIAL_URL} rel="noopener noreferrer" target="_blank">
            View Solara on Lennar.com (official pricing &amp; availability)
          </a>
        </p>
      </div>

      <RealScoutOfficeListingsSection />

      <section className="content-panel" aria-labelledby="visit-heading">
        <h2 id="visit-heading">Plan your visit (Lennar)</h2>
        <p>
          Welcome center address listed by Lennar:{" "}
          <strong>{formatSolaraWelcomeAddressLine()}</strong>. Appointments and hours are set by the
          builder — confirm on Lennar’s site before you go.
        </p>
        <p style={{ marginBottom: 0 }}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open directions in Google Maps
          </a>
        </p>
      </section>

      <section className="content-panel" aria-labelledby="agent-heading">
        <h2 id="agent-heading">Independent real estate guidance</h2>
        <p>
          <strong>{AGENT.fullName}</strong> is a Nevada real estate licensee ({AGENT.licenseNumber})
          affiliated with <strong>{AGENT.brokerage}</strong>. This page is for education and outreach —
          it does not replace Lennar contracts, HOA documents, lender disclosures, or Nevada agency
          forms.
        </p>
        <p style={{ marginBottom: 0 }}>
          Email <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
          {" · "}
          <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>listings mailbox</a>
          {" · "}
          <Link href="/">Back to home</Link>
        </p>
      </section>
    </main>
  );
}

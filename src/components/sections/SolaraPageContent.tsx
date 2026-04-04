import { RealScoutOfficeListingsSection } from "@/components/widgets/RealScoutOfficeListingsSection";
import { AGENT, CONTACT_EMAILS, PRIMARY_CONTACT_EMAIL, SITE_NAME } from "@/lib/site-contact";
import {
  DR_JAN_CLIENT_ONBOARDING_URL,
  DR_JAN_CLIENT_SEARCH_URL,
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
            <li>New construction (Solara)</li>
          </ol>
        </nav>

        <h1 className="marketing-page-h1">
          Dr. Jan Duffy — REALTOR® help with new construction &amp; homes in North Las Vegas
        </h1>

        <p className="marketing-lead">
          <strong>Updated {SOLARA_CONTENT_REVIEWED_ON}.</strong> This page is about{" "}
          <strong>how to reach Dr. Jan Duffy</strong> if you are buying or selling in North Las
          Vegas—including around the <strong>Solara</strong> townhome community. She is not the
          builder’s sales office; she offers independent guidance as a Nevada licensee with{" "}
          <strong>{AGENT.brokerage}</strong>.
        </p>

        <p style={{ margin: "0 0 1rem", lineHeight: 1.65 }}>
          <strong>Start here:</strong>{" "}
          <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
          {" · "}
          <Link href="/contact">Contact page</Link>
          {" · "}
          <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>Listings mailbox</a>
        </p>

        <p style={{ margin: "0 0 0.75rem", lineHeight: 1.65 }}>
          <strong>Search homes (client experience):</strong>{" "}
          <a href={DR_JAN_CLIENT_SEARCH_URL} rel="noopener noreferrer" target="_blank">
            Open Dr. Jan Duffy’s home search
          </a>
          . For a preview of what a new visitor sees, try an incognito/private browser window.
        </p>

        <p style={{ margin: 0, lineHeight: 1.65 }}>
          <strong>Set up your own search:</strong>{" "}
          <a href={DR_JAN_CLIENT_ONBOARDING_URL} rel="noopener noreferrer" target="_blank">
            Create your search (onboarding)
          </a>
          .
        </p>
      </div>

      <RealScoutOfficeListingsSection />

      <section className="content-panel" aria-labelledby="community-heading">
        <h2 id="community-heading">About the Solara area (facts only)</h2>
        <p>
          Solara is a gated townhome community in North Las Vegas, Nevada, built by Lennar.
          Promotions, floorplans, inventory, and sales office hours are set by the builder—confirm
          those details with the builder’s team when you visit or call their office.
        </p>
        <p style={{ marginBottom: 0 }}>
          <a href={DR_JAN_CLIENT_SEARCH_URL} rel="noopener noreferrer" target="_blank">
            Search homes for sale with Dr. Jan Duffy
          </a>
          {" · "}
          <a href={DR_JAN_CLIENT_ONBOARDING_URL} rel="noopener noreferrer" target="_blank">
            Onboarding — build your search
          </a>
        </p>
      </section>

      <section className="content-panel" aria-labelledby="visit-heading">
        <h2 id="visit-heading">Sales office location (builder-managed)</h2>
        <p>
          The builder lists this welcome center address:{" "}
          <strong>{formatSolaraWelcomeAddressLine()}</strong>. Appointments and hours are set by the
          builder — confirm on their site before you visit.
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
        <h2 id="agent-heading">Independent real estate representation</h2>
        <p>
          <strong>{AGENT.fullName}</strong> is a Nevada real estate licensee ({AGENT.licenseNumber})
          affiliated with <strong>{AGENT.brokerage}</strong>. This page supports education and
          outreach — it does not replace builder contracts, HOA documents, lender disclosures, or
          Nevada agency forms.
        </p>
        <p style={{ marginBottom: 0 }}>
          <Link href="/">Back to home</Link>
          {" · "}
          <Link href="/buyers">Buyer roadmap</Link>
          {" · "}
          <Link href="/contact">Contact</Link>
        </p>
      </section>
    </main>
  );
}

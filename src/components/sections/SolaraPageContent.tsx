import { RealScoutOfficeListingsSection } from "@/components/widgets/RealScoutOfficeListingsSection";
import {
  AGENT,
  CONTACT_EMAILS,
  PRIMARY_CONTACT_EMAIL,
  SITE_NAME,
  SITE_NAME_SHORT,
} from "@/lib/site-contact";
import {
  DR_JAN_CLIENT_ONBOARDING_URL,
  DR_JAN_CLIENT_SEARCH_URL,
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
            <li>New construction (Solara)</li>
          </ol>
        </nav>

        <h1 className="marketing-page-h1">
          Lennar Solara, North Las Vegas — new homes & independent REALTOR® help
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
          those details with the builder’s team when you visit or call their office. For
          first-party builder listings and hours, see{" "}
          <a href={LENNAR_SOLARA_OFFICIAL_URL} rel="noopener noreferrer" target="_blank">
            Lennar’s official Solara new homes page — North Las Vegas
          </a>
          .
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
        <h2 id="visit-heading">Office location (212 Summer Park Ave)</h2>
        <p>
          <strong>{formatSolaraWelcomeAddressLine()}</strong> is Dr. Jan Duffy’s{" "}
          <strong>{SITE_NAME_SHORT} office</strong> for real estate client correspondence.
          Lennar lists the same location as the community welcome center —{" "}
          <strong>appointments and builder sales hours are set by the builder</strong>. Confirm on{" "}
          <a href={LENNAR_SOLARA_OFFICIAL_URL} rel="noopener noreferrer" target="_blank">
            Lennar’s official Solara new homes page — North Las Vegas
          </a>{" "}
          before you visit for new-home sales.
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

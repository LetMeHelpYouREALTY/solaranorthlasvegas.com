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
    <main id="page-top" style={{ maxWidth: "42rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        <ol
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
          }}
        >
          <li>
            <Link href="/">{SITE_NAME}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>Solara new construction</li>
        </ol>
      </nav>

      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          margin: "0 0 1rem",
        }}
      >
        Solara — Lennar new-home townhomes in North Las Vegas
      </h1>

      <p style={{ margin: "0 0 1rem", lineHeight: 1.65 }}>
        <strong>Updated {SOLARA_CONTENT_REVIEWED_ON}.</strong> Solara is a <strong>Lennar</strong>{" "}
        community of gated townhomes in North Las Vegas, Nevada. Builder pricing, promotions,
        floorplans, and inventory change often — use Lennar’s official page as the source of truth.
      </p>

      <p style={{ margin: "0 0 1.5rem", lineHeight: 1.65 }}>
        <a href={LENNAR_SOLARA_OFFICIAL_URL} rel="noopener noreferrer" target="_blank">
          View Solara on Lennar.com (official pricing &amp; availability)
        </a>
      </p>

      <RealScoutOfficeListingsSection />

      <section aria-labelledby="visit-heading" style={{ marginBottom: "1.75rem" }}>
        <h2
          id="visit-heading"
          style={{ fontSize: "1.125rem", fontWeight: 600, margin: "0 0 0.5rem" }}
        >
          Plan your visit (Lennar)
        </h2>
        <p style={{ margin: "0 0 0.5rem", lineHeight: 1.65 }}>
          Welcome center address listed by Lennar:{" "}
          <strong>{formatSolaraWelcomeAddressLine()}</strong>. Appointments and hours are set by the
          builder — confirm on Lennar’s site before you go.
        </p>
        <p style={{ margin: 0 }}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open directions in Google Maps
          </a>
        </p>
      </section>

      <section aria-labelledby="agent-heading" style={{ marginBottom: "1.75rem" }}>
        <h2
          id="agent-heading"
          style={{ fontSize: "1.125rem", fontWeight: 600, margin: "0 0 0.5rem" }}
        >
          Independent real estate guidance
        </h2>
        <p style={{ margin: "0 0 0.75rem", lineHeight: 1.65 }}>
          <strong>{AGENT.fullName}</strong> is a Nevada real estate licensee ({AGENT.licenseNumber})
          affiliated with <strong>{AGENT.brokerage}</strong>. This page is for education and
          outreach — it does not replace Lennar contracts, HOA documents, lender disclosures, or
          Nevada agency forms.
        </p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>
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

import { AmenityMapSection } from "@/components/maps/AmenityMapSection";
import { MarketingFaq } from "@/components/sections/MarketingFaq";
import { AMENITIES_FAQ_ITEMS } from "@/lib/amenities-faq";
import {
  COMMUNITY_CITY_LABEL,
  COMMUNITY_DISPLAY_NAME,
  CURATED_AMENITIES,
  formatCuratedAddress,
} from "@/lib/community-amenities-config";
import {
  AGENT,
  CONTACT_EMAILS,
  PRIMARY_CONTACT_EMAIL,
  SITE_NAME,
  getPublicPhoneE164,
} from "@/lib/site-contact";
import Link from "next/link";

export function AmenitiesPageContent() {
  const phone = getPublicPhoneE164();

  return (
    <main id="page-top" className="marketing-prose amenities-page-main">
      <div className="marketing-intro-band">
        <nav className="marketing-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">{SITE_NAME}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>Nearby amenities</li>
          </ol>
        </nav>

        <h1 className="marketing-page-h1">
          Nearby Amenities in {COMMUNITY_DISPLAY_NAME}, {COMMUNITY_CITY_LABEL}
        </h1>

        <p className="marketing-lead">
          Lennar <strong>{COMMUNITY_DISPLAY_NAME}</strong> sits in North Las Vegas with everyday
          errands, parks, and healthcare a short drive away. Use the map to explore by category, then
          read the hyperlocal notes below—distances are approximate and traffic-dependent.
        </p>
      </div>

      <AmenityMapSection
        heading="Interactive amenity map"
        headingId="amenity-map-heading"
        showStaticList={false}
        showFullPageLink={false}
        className="content-panel amenity-map-section amenity-map-section--full"
      />

      <section className="content-panel" aria-labelledby="grocery-heading">
        <h2 id="grocery-heading">Grocery & errands</h2>
        <p>
          North Las Vegas buyers from Solara often shop along Ann Road and Camino Al Norte. Verified
          options include Albertsons at 3010 W Ann Rd, Walmart Neighborhood Market at 5545 Simmons
          St, and Smith&apos;s at 5564 Camino Al Norte—all in the 89031 area.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="parks-heading">
        <h2 id="parks-heading">Parks & recreation</h2>
        <p>
          Craig Ranch Regional Park (628 W Craig Rd, North Las Vegas) is a 170-acre city park with
          trails, sports fields, and community events. It is one of the most common weekend
          destinations for families in the north valley.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="golf-heading">
        <h2 id="golf-heading">Golf</h2>
        <p>
          Painted Desert Golf Club (5555 Painted Mirage Rd, Las Vegas) offers a championship layout
          and the Rockwall Grille for dining. Confirm tee times and hours with the club before you
          visit—schedules can change seasonally.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="healthcare-heading">
        <h2 id="healthcare-heading">Healthcare</h2>
        <p>
          North Vista Hospital (1409 E Lake Mead Blvd, North Las Vegas) serves the city, while
          Centennial Hills Hospital Medical Center (6900 N Durango Dr, Las Vegas) is a northwest
          valley option many north-end buyers ask about. Choose providers based on your insurance and
          specialty needs.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="shopping-heading">
        <h2 id="shopping-heading">Shopping & dining</h2>
        <p>
          The Aliante area—including Aliante Casino + Hotel at 7300 Aliante Pkwy—adds dining,
          entertainment, and retail north of the 215 belt. Restaurant rows along Craig Road and Ann
          Road fill in quick casual options for weeknights.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="schools-heading">
        <h2 id="schools-heading">Schools</h2>
        <p>
          School assignments and ratings change. Shadow Ridge High School (5050 Brent Ln, Las Vegas)
          is one campus north-valley families research alongside Solara. Verify current zoning with
          the Clark County School District before you buy.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="commute-heading">
        <h2 id="commute-heading">Commute & regional destinations (approximate)</h2>
        <ul style={{ lineHeight: 1.65 }}>
          <li>
            <strong>Las Vegas Strip:</strong> often an approximate 25–40 minute drive via I-15 or
            US-95, depending on traffic.
          </li>
          <li>
            <strong>Harry Reid International Airport:</strong> often an approximate 25–40 minute
            drive; use live navigation for flights.
          </li>
          <li>
            <strong>Downtown Summerlin / Summerlin:</strong> often an approximate 20–35 minutes
            west via Craig Rd and the 215 belt.
          </li>
          <li>
            <strong>Downtown Las Vegas / Fremont:</strong> often an approximate 20–30 minutes south
            on I-15 or local connectors.
          </li>
        </ul>
        <p style={{ marginBottom: 0, fontSize: "0.9rem", opacity: 0.9 }}>
          All drive times are approximate and not guarantees—check maps at the time you plan to
          travel.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="featured-heading">
        <h2 id="featured-heading">Featured places (verified addresses)</h2>
        <ul style={{ lineHeight: 1.65 }}>
          {CURATED_AMENITIES.map((place) => (
            <li key={`${place.name}-${place.streetAddress}`}>
              <strong>{place.name}</strong> — {formatCuratedAddress(place)}
            </li>
          ))}
        </ul>
      </section>

      <MarketingFaq
        items={AMENITIES_FAQ_ITEMS}
        sectionTitle="Nearby amenities FAQ"
        sectionId="amenities-faq"
        headingId="amenities-faq-heading"
      />

      <section className="marketing-cta-band content-panel" aria-labelledby="agent-cta-heading">
        <h2 id="agent-cta-heading">Local REALTOR guidance for {COMMUNITY_DISPLAY_NAME}</h2>
        <p style={{ lineHeight: 1.65 }}>
          <strong>{AGENT.fullName}</strong> (Nevada license {AGENT.licenseNumber}) with{" "}
          <strong>{AGENT.brokerage}</strong> offers independent buyer and seller guidance around
          Lennar Solara—not the builder sales office.
        </p>
        <p style={{ margin: 0 }}>
          <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
          {phone ? (
            <>
              {" · "}
              <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            </>
          ) : null}
          {" · "}
          <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>Listings mailbox</a>
          {" · "}
          <Link href="/contact">Contact page</Link>
          {" · "}
          <Link href="/solara">Solara community page</Link>
        </p>
      </section>
    </main>
  );
}

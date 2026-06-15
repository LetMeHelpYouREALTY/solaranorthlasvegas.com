import { CalendlyPopupLink } from "@/components/calendly/CalendlyPopupLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_IMAGE_PATHS } from "@/lib/site-images";
import { AGENT, CONTACT_EMAILS, SITE_NAME, getOptionalGbpMapsUrl } from "@/lib/site-contact";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  const mailPrimary = `mailto:${CONTACT_EMAILS.drDuffy}`;
  const gbpMapsUrl = getOptionalGbpMapsUrl();

  return (
    <main id="page-top" className="home-hero-stack">
      <SiteHeader />
      <div className="home-hero-backdrop" style={{ flex: 1, display: "flex", justifyContent: "center", padding: "var(--static-space-24, 1.5rem)" }}>
        <div className="home-hero-surface">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--static-space-24, 1.5rem)", width: "100%" }}>
            <div className="home-hero-brand-badge">
              <div
                className="home-hero-brand-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.35rem 1rem",
                  borderRadius: "999px",
                  border: "1px solid var(--neutral-alpha-medium, rgba(255,255,255,0.12))",
                }}
              >
                <Link href="/" aria-label={SITE_NAME} className="home-hero-wordmark-link">
                  <img
                    src="/trademarks/wordmark-dark.svg"
                    alt=""
                    className="home-hero-wordmark home-hero-wordmark--dark"
                    width={96}
                    height={20}
                  />
                  <img
                    src="/trademarks/wordmark-light.svg"
                    alt=""
                    className="home-hero-wordmark home-hero-wordmark--light"
                    width={96}
                    height={20}
                  />
                </Link>
                <span aria-hidden="true" className="home-hero-brand-divider" />
                <span className="home-hero-brand-name">{SITE_NAME}</span>
              </div>
            </div>

            <h1 className="home-hero-h1">North Las Vegas real estate with Dr. Jan Duffy</h1>

            <p className="home-hero-lead">
              Local expertise for North Las Vegas and the Las Vegas Valley — buying, selling, and
              strategy with Berkshire Hathaway HomeServices Nevada Properties.
            </p>

            <p className="home-hero-copy">
              Curious about{" "}
              <Link href="/solara" className="home-hero-inline-link">
                new construction in North Las Vegas (including the Solara area)
              </Link>
              ? Dr. Jan Duffy can walk you through what to expect—separate from the builder’s sales
              team.
            </p>

            <div className="home-hero-photo-wrap">
              <Image
                src={SITE_IMAGE_PATHS.homeHeroAgent}
                alt={`${AGENT.fullName}, Nevada REALTOR with ${AGENT.brokerage}`}
                width={208}
                height={208}
                priority
                sizes="208px"
                className="home-hero-photo"
              />
            </div>

            <div className="home-hero-cta-group">
              <Link href="/home-value" className="home-hero-cta" id="home-value-cta">
                Free home evaluation
              </Link>
              <Link href="/search" className="home-hero-cta" id="search-cta">
                Search
              </Link>
              <Link href="/neighborhoods" className="home-hero-cta" id="neighborhoods-cta">
                Neighborhoods
              </Link>
              <CalendlyPopupLink className="home-hero-calendly-cta home-hero-calendly-cta--primary">
                Schedule a time with Dr. Jan Duffy
              </CalendlyPopupLink>
            </div>

            <p className="home-hero-copy home-hero-copy--tight">
              <a href={mailPrimary} className="home-hero-inline-link">
                Email Dr. Jan Duffy
              </a>
              {" · "}
              <Link href="/contact" className="home-hero-inline-link">
                Contact form
              </Link>
            </p>

            {gbpMapsUrl ? (
              <p className="home-hero-gbp-link">
                <a href={gbpMapsUrl} rel="noopener noreferrer" target="_blank">
                  See what people are saying about North Las Vegas on Google
                </a>
              </p>
            ) : null}

            <p className="home-hero-copy home-hero-copy--tight">
              Listings support:{" "}
              <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`} className="home-hero-inline-link">
                {CONTACT_EMAILS.drDuffySells}
              </a>
            </p>

            <p className="home-hero-license">
              Nevada license {AGENT.licenseNumber} · {AGENT.brokerage}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

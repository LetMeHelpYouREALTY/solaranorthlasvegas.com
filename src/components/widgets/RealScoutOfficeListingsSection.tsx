"use client";

import { useEffect, useRef } from "react";

const WIDGET_HTML =
  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="PRICE_HIGH" listing-status="For Sale" property-types=",SFR" price-min="500000" price-max="900000"></realscout-office-listings>';

type RealScoutOfficeListingsSectionProps = {
  /** Home already uses a tall hero; use a smaller top offset so the block is not pushed too far. */
  compactTop?: boolean;
};

/**
 * RealScout office listings web component. Script is loaded once in root layout.
 * Markup is injected client-side so the custom element can upgrade after the module loads.
 */
export function RealScoutOfficeListingsSection({
  compactTop = false,
}: RealScoutOfficeListingsSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.initialized === "true") {
      return;
    }
    el.innerHTML = WIDGET_HTML;
    el.dataset.initialized = "true";
  }, []);

  return (
    <section
      className="realscout-office-listings-section"
      aria-labelledby="realscout-office-listings-heading"
      style={{
        marginTop: compactTop ? "2rem" : "clamp(3rem, 12vw, 6rem)",
        paddingBottom: "clamp(2rem, 5vw, 3rem)",
        width: "100%",
        maxWidth: "min(1200px, 100%)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        boxSizing: "border-box",
      }}
    >
      <h2
        id="realscout-office-listings-heading"
        style={{
          fontSize: "clamp(1.125rem, 2.5vw, 1.35rem)",
          fontWeight: 700,
          margin: "0 0 0.75rem",
          lineHeight: 1.25,
        }}
      >
        Featured listings for sale
      </h2>
      <p
        style={{
          margin: "0 0 1.25rem",
          fontSize: "0.875rem",
          lineHeight: 1.5,
          opacity: 0.88,
          maxWidth: "42rem",
        }}
      >
        Listing details are provided by participating brokers and the MLS through RealScout. Not
        intended as solicitation where your jurisdiction prohibits it. Confirm status, price, and
        terms with a licensed professional.
      </p>
      <div ref={ref} className="realscout-office-listings-root" />
    </section>
  );
}

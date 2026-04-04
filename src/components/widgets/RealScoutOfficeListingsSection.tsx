"use client";

import { useEffect, useRef } from "react";
import classNames from "classnames";

const WIDGET_HTML =
  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="PRICE_HIGH" listing-status="For Sale" property-types=",SFR" price-min="500000" price-max="900000"></realscout-office-listings>';

type RealScoutOfficeListingsSectionProps = {
  /** Home already uses a tall hero; use a smaller top offset so the block is not pushed too far. */
  compactTop?: boolean;
};

/**
 * Third-party homes-for-sale widget (custom element). Script is loaded once in root layout.
 * Markup is injected client-side so the element can register after the module loads.
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
      className={classNames("realscout-office-listings-section", compactTop && "realscout-office-listings-section--compact")}
      aria-labelledby="realscout-office-listings-heading"
    >
      <div className="realscout-section-shell">
        <h2 id="realscout-office-listings-heading" className="v0-section-heading">
          Homes for sale
        </h2>
        <div ref={ref} className="realscout-office-listings-root" />
      </div>
    </section>
  );
}

"use client";

import { loadRealScoutWebComponentsScript } from "@/lib/realscout-widget";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const WIDGET_HTML =
  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="PRICE_HIGH" listing-status="For Sale" property-types=",SFR" price-min="500000" price-max="900000"></realscout-office-listings>';

type RealScoutOfficeListingsSectionProps = {
  /** Home already uses a tall hero; use a smaller top offset so the block is not pushed too far. */
  compactTop?: boolean;
};

/**
 * Third-party homes-for-sale widget (custom element). Script loads when the section nears the viewport.
 */
export function RealScoutOfficeListingsSection({
  compactTop = false,
}: RealScoutOfficeListingsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        setStatus("loading");
        void (async () => {
          try {
            await loadRealScoutWebComponentsScript();
            const el = widgetRef.current;
            if (el && el.dataset.initialized !== "true") {
              el.innerHTML = WIDGET_HTML;
              el.dataset.initialized = "true";
            }
            setStatus("ready");
          } catch {
            setStatus("error");
          }
        })();
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={classNames(
        "realscout-office-listings-section",
        compactTop && "realscout-office-listings-section--compact",
      )}
      aria-labelledby="realscout-office-listings-heading"
      aria-busy={status === "loading" || status === "idle"}
    >
      <div className="realscout-section-shell">
        <h2 id="realscout-office-listings-heading" className="v0-section-heading">
          Homes for sale
        </h2>
        <div
          ref={widgetRef}
          className={classNames(
            "realscout-office-listings-root",
            status !== "ready" && status !== "error" && "realscout-office-listings-root--pending",
          )}
        />
        {status === "error" ? (
          <p className="realscout-office-listings-fallback" role="status">
            Listings could not load.{" "}
            <a href="https://drjanduffy.realscout.com/" rel="noopener noreferrer" target="_blank">
              Open Dr. Jan Duffy’s home search
            </a>
            .
          </p>
        ) : null}
      </div>
    </section>
  );
}

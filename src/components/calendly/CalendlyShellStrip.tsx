"use client";

import { CalendlyPopupLink } from "./CalendlyPopupLink";

/**
 * Sitewide strip on marketing layout routes (above footer).
 */
export function CalendlyShellStrip() {
  return (
    <div className="calendly-shell-strip">
      <p className="calendly-shell-strip__text">
        Prefer to talk live? Schedule a private 15-minute conversation with Dr. Jan Duffy.
      </p>
      <CalendlyPopupLink className="calendly-shell-strip__link">Schedule time with me</CalendlyPopupLink>
    </div>
  );
}

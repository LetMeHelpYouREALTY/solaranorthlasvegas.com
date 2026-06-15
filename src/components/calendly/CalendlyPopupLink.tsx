"use client";

import { CALENDLY_EVENT_URL } from "@/lib/calendly-config";
import { loadCalendlyWidget, prefetchCalendlyWidget } from "@/lib/calendly-loader";
import type { MouseEvent, ReactNode } from "react";

type CalendlyPopupLinkProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Opens Calendly popup after lazy-loading the widget; falls back to the event URL in a new tab.
 */
export function CalendlyPopupLink({ children = "Schedule time with me", className }: CalendlyPopupLinkProps) {
  async function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    try {
      await loadCalendlyWidget();
      window.Calendly?.initPopupWidget({ url: CALENDLY_EVENT_URL });
    } catch {
      window.open(CALENDLY_EVENT_URL, "_blank", "noopener,noreferrer");
    }
  }

  function handleIntent() {
    prefetchCalendlyWidget();
  }

  return (
    <a
      className={className}
      href={CALENDLY_EVENT_URL}
      rel="noopener noreferrer"
      target="_blank"
      onClick={handleClick}
      onFocus={handleIntent}
      onPointerEnter={handleIntent}
    >
      {children}
    </a>
  );
}

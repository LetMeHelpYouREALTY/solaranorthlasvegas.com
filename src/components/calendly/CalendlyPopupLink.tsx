"use client";

import { CALENDLY_EVENT_URL } from "@/lib/calendly-config";
import type { MouseEvent, ReactNode } from "react";

type CalendlyPopupLinkProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Opens Calendly popup when the widget script is ready; otherwise opens the event URL in a new tab.
 */
export function CalendlyPopupLink({ children = "Schedule time with me", className }: CalendlyPopupLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (typeof window !== "undefined" && window.Calendly) {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_EVENT_URL });
    }
  }

  return (
    <a
      className={className}
      href={CALENDLY_EVENT_URL}
      rel="noopener noreferrer"
      target="_blank"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

"use client";

import { CALENDLY_BADGE_OPTIONS } from "@/lib/calendly-config";
import { useEffect, useRef } from "react";

/**
 * Initializes the floating Calendly badge once (survives React Strict Mode remount via ref).
 */
export function CalendlyBadgeInit() {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;

    const tryInit = () => {
      if (typeof window === "undefined" || !window.Calendly || didInit.current) return false;
      didInit.current = true;
      window.Calendly.initBadgeWidget({ ...CALENDLY_BADGE_OPTIONS });
      return true;
    };

    if (tryInit()) return;

    const id = window.setInterval(() => {
      if (tryInit()) window.clearInterval(id);
    }, 100);

    return () => window.clearInterval(id);
  }, []);

  return null;
}

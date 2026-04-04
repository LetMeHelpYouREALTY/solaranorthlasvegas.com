"use client";

import { CALENDLY_BADGE_OPTIONS } from "@/lib/calendly-config";
import { useEffect, useRef } from "react";

const CALENDLY_BADGE_GLOBAL_KEY = "__solaraCalendlyBadgeDone" as const;

/**
 * Initializes the floating Calendly badge once (Strict Mode remount + HMR safe).
 */
export function CalendlyBadgeInit() {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;

    const tryInit = () => {
      if (typeof window === "undefined" || !window.Calendly || didInit.current) return false;
      const g = window as Window & { [CALENDLY_BADGE_GLOBAL_KEY]?: boolean };
      if (g[CALENDLY_BADGE_GLOBAL_KEY]) {
        didInit.current = true;
        return true;
      }
      if (document.querySelector(".calendly-badge-widget")) {
        g[CALENDLY_BADGE_GLOBAL_KEY] = true;
        didInit.current = true;
        return true;
      }
      didInit.current = true;
      g[CALENDLY_BADGE_GLOBAL_KEY] = true;
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

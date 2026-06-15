"use client";

import { CALENDLY_BADGE_OPTIONS } from "@/lib/calendly-config";
import { loadCalendlyWidget } from "@/lib/calendly-loader";
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

    const start = () => {
      void loadCalendlyWidget()
        .then(() => {
          if (tryInit()) return;
          const id = window.setInterval(() => {
            if (tryInit()) window.clearInterval(id);
          }, 100);
        })
        .catch(() => {
          /* Badge is optional; popup/inline still work on interaction */
        });
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(start, { timeout: 5000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(start, 4000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

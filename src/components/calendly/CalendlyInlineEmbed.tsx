"use client";

import {
  CALENDLY_EVENT_URL,
  CALENDLY_INLINE_HEIGHT_PX,
  CALENDLY_INLINE_MIN_WIDTH_PX,
} from "@/lib/calendly-config";
import { loadCalendlyWidget } from "@/lib/calendly-loader";
import { useEffect, useRef } from "react";

type CalendlyInlineEmbedProps = {
  className?: string;
};

/**
 * Inline scheduling embed; lazy-loads Calendly when the contact page mounts.
 */
export function CalendlyInlineEmbed({ className }: CalendlyInlineEmbedProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    let cancelled = false;

    const tryInit = () => {
      if (cancelled || !parent || typeof window === "undefined" || !window.Calendly) return false;
      parent.innerHTML = "";
      window.Calendly.initInlineWidget({ url: CALENDLY_EVENT_URL, parentElement: parent });
      return true;
    };

    void loadCalendlyWidget()
      .then(() => {
        if (tryInit()) return;
        const id = window.setInterval(() => {
          if (tryInit()) window.clearInterval(id);
        }, 100);
      })
      .catch(() => {
        /* Contact page still has mailto + form if embed fails */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className={className}
      style={{
        minWidth: CALENDLY_INLINE_MIN_WIDTH_PX,
        height: CALENDLY_INLINE_HEIGHT_PX,
      }}
    />
  );
}

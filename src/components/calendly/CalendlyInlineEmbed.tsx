"use client";

import {
  CALENDLY_EVENT_URL,
  CALENDLY_INLINE_HEIGHT_PX,
  CALENDLY_INLINE_MIN_WIDTH_PX,
} from "@/lib/calendly-config";
import { useEffect, useRef } from "react";

type CalendlyInlineEmbedProps = {
  className?: string;
};

/**
 * Inline scheduling embed; waits for global Calendly script from root layout.
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

    if (tryInit()) return () => {
      cancelled = true;
    };

    const id = window.setInterval(() => {
      if (tryInit()) window.clearInterval(id);
    }, 100);

    return () => {
      cancelled = true;
      window.clearInterval(id);
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

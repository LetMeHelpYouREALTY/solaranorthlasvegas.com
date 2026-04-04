"use client";

import { useStyle, useTheme } from "@once-ui-system/core";
import { useEffect, useRef } from "react";

/**
 * Locks the marketing site to dark + custom gold brand and overrides stale
 * Once UI localStorage (e.g. light theme or contrast buttons) after hydration.
 */
export function SiteThemeDefaults() {
  const { setTheme } = useTheme();
  const { setStyle } = useStyle();
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    setTheme("dark");
    setStyle({
      brand: "custom",
      neutral: "slate",
      accent: "yellow",
      solid: "color",
    });
  }, [setTheme, setStyle]);

  return null;
}

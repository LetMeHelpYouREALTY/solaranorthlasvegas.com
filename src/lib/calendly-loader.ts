import { CALENDLY_WIDGET_CSS, CALENDLY_WIDGET_JS } from "@/lib/calendly-config";

let loadPromise: Promise<void> | null = null;

function waitForCalendly(timeoutMs = 10_000): Promise<void> {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const tick = () => {
      if (typeof window !== "undefined" && window.Calendly) {
        resolve();
        return;
      }
      if (Date.now() - started > timeoutMs) {
        reject(new Error("Calendly widget timed out"));
        return;
      }
      window.setTimeout(tick, 50);
    };
    tick();
  });
}

function ensureCalendlyStylesheet(): void {
  if (typeof document === "undefined" || document.getElementById("calendly-widget-css")) return;

  const link = document.createElement("link");
  link.id = "calendly-widget-css";
  link.rel = "stylesheet";
  link.href = CALENDLY_WIDGET_CSS;
  document.head.appendChild(link);
}

/**
 * Loads Calendly widget assets on demand (popup, inline, badge).
 * Safe to call multiple times; shares one in-flight promise.
 */
export function loadCalendlyWidget(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  if (!loadPromise) {
    loadPromise = new Promise<void>((resolve, reject) => {
      ensureCalendlyStylesheet();

      const existing = document.querySelector<HTMLScriptElement>(
        'script[src*="calendly.com/assets/external/widget.js"]',
      );
      if (existing) {
        void waitForCalendly().then(resolve).catch(reject);
        return;
      }

      const script = document.createElement("script");
      script.src = CALENDLY_WIDGET_JS;
      script.async = true;
      script.onload = () => {
        void waitForCalendly().then(resolve).catch(reject);
      };
      script.onerror = () => {
        loadPromise = null;
        reject(new Error("Calendly script failed to load"));
      };
      document.body.appendChild(script);
    });
  }

  return loadPromise;
}

/** Warm the widget on intent (hover/focus) without blocking navigation. */
export function prefetchCalendlyWidget(): void {
  void loadCalendlyWidget().catch(() => {
    /* Popup/inline fall back to opening the event URL */
  });
}

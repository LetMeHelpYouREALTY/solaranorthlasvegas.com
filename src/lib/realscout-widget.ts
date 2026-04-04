/** RealScout web components bundle — load once per document. */
export const REALSCOUT_WEB_COMPONENTS_SCRIPT_SRC =
  "https://em.realscout.com/widgets/realscout-web-components.umd.js" as const;

const OFFICE_LISTINGS_TAG = "realscout-office-listings";

/**
 * Ensures the RealScout UMD/module script is loaded and custom elements are defined.
 */
export function loadRealScoutWebComponentsScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.customElements?.get(OFFICE_LISTINGS_TAG)) {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>(
    'script[data-realscout-widget="true"], script[src*="realscout-web-components.umd.js"]',
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.customElements?.get(OFFICE_LISTINGS_TAG)) {
        resolve();
        return;
      }
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        resolve();
      };
      existing.addEventListener("load", done, { once: true });
      existing.addEventListener("error", () => reject(new Error("RealScout script failed")), {
        once: true,
      });
      let frames = 0;
      const poll = () => {
        if (settled) return;
        if (window.customElements?.get(OFFICE_LISTINGS_TAG)) {
          done();
          return;
        }
        if (++frames > 90) {
          done();
          return;
        }
        requestAnimationFrame(poll);
      };
      requestAnimationFrame(poll);
    });
  }

  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = REALSCOUT_WEB_COMPONENTS_SCRIPT_SRC;
    s.type = "module";
    s.async = true;
    s.dataset.realscoutWidget = "true";
    s.onload = () => {
      requestAnimationFrame(() => resolve());
    };
    s.onerror = () => reject(new Error("RealScout script failed"));
    document.body.appendChild(s);
  });
}

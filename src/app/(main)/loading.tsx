/**
 * Route-level loading UI (Next.js App Router).
 * Paired with aria-live for screen readers; keep layout stable with min-height.
 */
export default function MainLoading() {
  return (
    <output className="route-loading-shell" aria-live="polite" aria-busy="true">
      <span className="visually-hidden">Loading page…</span>
      <span className="route-loading-visible" aria-hidden="true">
        Loading…
      </span>
    </output>
  );
}

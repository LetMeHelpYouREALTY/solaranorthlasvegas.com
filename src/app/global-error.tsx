"use client";

/**
 * Replaces the root layout when it fails; must include <html> and <body> (Next.js App Router).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: 'system-ui, "Segoe UI", sans-serif',
          background: "#0a0a0a",
          color: "#f5f5f5",
        }}
      >
        <main role="alert" style={{ maxWidth: "24rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.25rem", margin: "0 0 0.75rem" }}>Something went wrong</h1>
          <p style={{ margin: "0 0 0.5rem", opacity: 0.9, lineHeight: 1.5 }}>
            {error.message || "The site hit an unexpected error. You can try reloading."}
          </p>
          {error.digest ? (
            <p style={{ margin: "0 0 1rem", fontSize: "0.75rem", opacity: 0.6 }}>
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "inherit",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

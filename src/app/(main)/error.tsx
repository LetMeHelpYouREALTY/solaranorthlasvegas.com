"use client";

/**
 * Segment error boundary — recover without a full reload when possible.
 */
export default function MainError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="page-top"
      style={{
        maxWidth: "28rem",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div role="alert">
        <h1 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.75rem" }}>
          Something went wrong
        </h1>
        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ margin: "0 0 0.5rem", lineHeight: 1.55, opacity: 0.9 }}>
            {error.message || "An unexpected error occurred. You can try again or return home."}
          </p>
          {error.digest ? (
            <p style={{ margin: 0, fontSize: "0.8125rem", opacity: 0.65 }}>
              Reference: {error.digest}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={reset}
          style={{
            marginRight: "0.75rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "1px solid color-mix(in srgb, currentColor 25%, transparent)",
            background: "color-mix(in srgb, currentColor 8%, transparent)",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Try again
        </button>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            fontWeight: 600,
          }}
        >
          Go home
        </a>
      </div>
    </main>
  );
}

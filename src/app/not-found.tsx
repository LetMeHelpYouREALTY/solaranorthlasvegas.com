import { SITE_NAME } from "@/lib/site-contact";
import Link from "next/link";

/**
 * Root not-found for unmatched routes (Next.js App Router).
 */
export default function NotFound() {
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
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Page not found</h1>
      <p style={{ margin: "0 0 1.25rem", lineHeight: 1.55, opacity: 0.9 }}>
        That URL does not exist on {SITE_NAME}. Try the home page or the Solara community overview.
      </p>
      <p
        style={{
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
        }}
      >
        <Link href="/" style={{ fontWeight: 600 }}>
          Home
        </Link>
        <span aria-hidden="true" style={{ opacity: 0.4 }}>
          ·
        </span>
        <Link href="/solara" style={{ fontWeight: 600 }}>
          Solara (North Las Vegas)
        </Link>
        <span aria-hidden="true" style={{ opacity: 0.4 }}>
          ·
        </span>
        <Link href="/neighborhoods" style={{ fontWeight: 600 }}>
          Neighborhoods
        </Link>
        <span aria-hidden="true" style={{ opacity: 0.4 }}>
          ·
        </span>
        <Link href="/contact" style={{ fontWeight: 600 }}>
          Contact
        </Link>
      </p>
    </main>
  );
}

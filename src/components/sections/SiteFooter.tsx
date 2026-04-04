import {
  AGENT,
  CONTACT_EMAILS,
  PRIMARY_CONTACT_EMAIL,
  SITE_NAME,
  formatPostalAddressLine,
  getOptionalPostalAddress,
  getPublicPhoneE164,
} from "@/lib/site-contact";
import Link from "next/link";

const FOOTER_NAV = [
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/search", label: "Search" },
  { href: "/home-value", label: "Home value" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

/**
 * Visible NAP-style footer — must stay aligned with JSON-LD and GBP.
 */
export function SiteFooter() {
  const phone = getPublicPhoneE164();
  const postal = getOptionalPostalAddress();

  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "2rem 1.5rem",
        borderTop: "1px solid color-mix(in srgb, currentColor 12%, transparent)",
      }}
    >
      <div
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          fontSize: "0.875rem",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        <nav aria-label="Footer">
          <ul
            style={{
              margin: "0 0 0.5rem",
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 0.75rem",
              justifyContent: "center",
            }}
          >
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p style={{ margin: 0, fontWeight: 600 }}>{SITE_NAME}</p>
        <p style={{ margin: 0 }}>
          {AGENT.fullName} · Nevada license {AGENT.licenseNumber}
        </p>
        <p style={{ margin: 0 }}>{AGENT.brokerage}</p>
        {postal ? <p style={{ margin: 0 }}>{formatPostalAddressLine(postal)}</p> : null}
        {phone ? (
          <p style={{ margin: 0 }}>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </p>
        ) : null}
        <p style={{ margin: 0 }}>
          <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a>
          {" · "}
          <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`}>listings</a>
        </p>
        <p style={{ margin: 0 }}>
          <a href="/">{SITE_NAME}</a>
        </p>
      </div>
    </footer>
  );
}

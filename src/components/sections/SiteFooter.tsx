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
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav aria-label="Footer">
          <ul>
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
          <Link href="/" className="footer-nav-link">
            {SITE_NAME}
          </Link>
        </p>
      </div>
    </footer>
  );
}

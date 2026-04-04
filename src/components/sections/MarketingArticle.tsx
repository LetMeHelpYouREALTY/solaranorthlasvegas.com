import { RealScoutOfficeListingsSection } from "@/components/widgets/RealScoutOfficeListingsSection";
import { SITE_NAME } from "@/lib/site-contact";
import Link from "next/link";

type MarketingArticleProps = {
  breadcrumbCurrent: string;
  /** Optional middle segment, e.g. Neighborhoods hub before area name */
  breadcrumbMiddle?: { href: string; label: string };
  h1: string;
  lead?: string;
  children: React.ReactNode;
};

/**
 * Shared inner layout for marketing pages: breadcrumb, single H1, optional lead, prose body.
 */
export function MarketingArticle({
  breadcrumbCurrent,
  breadcrumbMiddle,
  h1,
  lead,
  children,
}: MarketingArticleProps) {
  return (
    <main id="page-top" className="marketing-prose marketing-page-main">
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        <ol
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
          }}
        >
          <li>
            <Link href="/">{SITE_NAME}</Link>
          </li>
          <li aria-hidden="true">/</li>
          {breadcrumbMiddle ? (
            <>
              <li>
                <Link href={breadcrumbMiddle.href}>{breadcrumbMiddle.label}</Link>
              </li>
              <li aria-hidden="true">/</li>
            </>
          ) : null}
          <li>{breadcrumbCurrent}</li>
        </ol>
      </nav>
      <h1 className="marketing-page-h1">{h1}</h1>
      {lead ? <p className="marketing-lead">{lead}</p> : null}
      <RealScoutOfficeListingsSection />
      {children}
    </main>
  );
}

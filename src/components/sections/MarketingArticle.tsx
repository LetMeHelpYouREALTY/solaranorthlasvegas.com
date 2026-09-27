import { RealScoutOfficeListingsSection } from "@/components/widgets/RealScoutOfficeListingsSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE_NAME } from "@/lib/site-contact";
import classNames from "classnames";
import Link from "next/link";

type MarketingArticleProps = {
  /** Canonical path for this page, e.g. `/about` */
  pagePath: string;
  breadcrumbCurrent: string;
  /** Optional middle segment, e.g. Neighborhoods hub before area name */
  breadcrumbMiddle?: { href: string; label: string };
  h1: string;
  lead?: string;
  children: React.ReactNode;
  /** Narrower measure and spacing for long policy-style pages */
  contentTone?: "default" | "legal";
};

/**
 * Shared inner layout for marketing pages: breadcrumb, single H1, optional lead, prose body.
 */
export function MarketingArticle({
  pagePath,
  breadcrumbCurrent,
  breadcrumbMiddle,
  h1,
  lead,
  children,
  contentTone = "default",
}: MarketingArticleProps) {
  const breadcrumbItems = [
    { name: SITE_NAME, path: "/" },
    ...(breadcrumbMiddle
      ? [{ name: breadcrumbMiddle.label, path: breadcrumbMiddle.href }]
      : []),
    { name: breadcrumbCurrent, path: pagePath },
  ];

  return (
    <>
      <BreadcrumbJsonLd pagePath={pagePath} items={breadcrumbItems} />
      <main
      id="page-top"
      className={classNames(
        "marketing-prose",
        "marketing-page-main",
        contentTone === "legal" && "marketing-page-main--legal",
      )}
    >
      <div className="marketing-intro-band">
        <nav className="marketing-breadcrumb" aria-label="Breadcrumb">
          <ol>
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
      </div>
      <RealScoutOfficeListingsSection />
      {children}
    </main>
    </>
  );
}

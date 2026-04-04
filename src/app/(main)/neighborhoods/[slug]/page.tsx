import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { getAllNeighborhoodSlugs, getNeighborhoodBySlug } from "@/lib/neighborhoods-data";
import { SITE_HOSTNAME } from "@/lib/site-contact";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) {
    return {};
  }
  return buildSubpageMetadata({
    titleAbsolute: `${n.pageTitleAbsolute} | Dr. Jan Duffy`,
    description: n.pageDescription,
    path: `/neighborhoods/${n.slug}`,
    keywords: [n.shortName, "Las Vegas Valley real estate", SITE_HOSTNAME],
  });
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) {
    notFound();
  }

  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbMiddle={{ href: "/neighborhoods", label: "Neighborhoods" }}
        breadcrumbCurrent={n.shortName}
        h1={n.h1}
        lead={n.lead}
      >
        {n.body.map((para) => (
          <p key={para} style={{ lineHeight: 1.65 }}>
            {para}
          </p>
        ))}
        <section className="marketing-cta-band" aria-labelledby={`${n.slug}-cta`}>
          <h2 id={`${n.slug}-cta`}>Work with a local REALTOR</h2>
          <p>
            <Link href="/contact">Contact Dr. Jan Duffy</Link>
            {" · "}
            <Link href="/buyers">Buyer roadmap</Link>
            {" · "}
            <Link href="/sellers">Seller roadmap</Link>
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}

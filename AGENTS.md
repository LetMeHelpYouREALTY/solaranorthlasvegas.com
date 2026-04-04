# Solara North Las Vegas — agent notes

## Stack

Next.js 15 App Router, Once UI, TypeScript. Canonical host: `SITE_ORIGIN` in `src/lib/site-contact.ts` (must match Google Search Console and sitemap).

## SEO / Google (project conventions)

- **Metadata**: `src/lib/metadata.ts` — `metadataBase`, canonical, `alternates.languages` (`en-US` + `x-default` for this single-locale site), Open Graph/Twitter, verification.
- **Sitemap / robots**: `src/app/sitemap.ts`, `src/app/robots.ts` — absolute URLs only; never `Disallow` `/_next/static`.
- **JSON-LD**: `src/lib/schema.ts` — single source for graph builders; keep **NAP, email, and `sameAs`** aligned with visible copy and GBP.
- **FAQ**: `src/lib/home-faq.ts` + `HomeFaq` / `HomeFaqJsonLd` — visible Q&A must match **FAQPage** markup on the same URL only.

## Content integrity

- Use **Dr. Jan Duffy** (not “Janet”). License **S.0197614.LLC**. Brokerage **Berkshire Hathaway HomeServices Nevada Properties**.
- Do not add phone or street address to UI or schema until values **match GBP**; use `NEXT_PUBLIC_AGENT_PHONE`, optional **`NEXT_PUBLIC_BUSINESS_*`** address fields (all required together), and optional `NEXT_PUBLIC_*` profile URLs from `.env.example`.

## Global Cursor rules

Team-wide MDC rules live under the user’s `.cursor/rules/` (e.g. `seo-aeo-geo-gsc.mdc`, `lib-seo-metadata.mdc`, `real-estate-jsonld-schema.mdc`). This repo adds scoped hints in `.cursor/rules/solara-seo.mdc`.

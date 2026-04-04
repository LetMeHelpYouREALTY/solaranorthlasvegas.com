# Solara North Las Vegas — agent notes

## Stack

Next.js 15 App Router, Once UI, TypeScript. Canonical host: `SITE_ORIGIN` in `src/lib/site-contact.ts` (must match Google Search Console and sitemap).

## SEO / Google (project conventions)

- **Metadata**: `src/lib/metadata.ts` — `metadataBase`, canonical, `alternates.languages` (`en-US` + `x-default` for this single-locale site), Open Graph/Twitter, verification.
- **Sitemap / robots**: `src/app/sitemap.ts`, `src/app/robots.ts` — absolute URLs only; never `Disallow` `/_next/static`.
- **JSON-LD**: `src/lib/schema.ts` — single source for graph builders; keep **NAP, email, and `sameAs`** aligned with visible copy and GBP.
- **FAQ**: `src/lib/home-faq.ts` + `HomeFaq` / `HomeFaqJsonLd` — visible Q&A must match **FAQPage** markup on the same URL only.
- **`/solara`**: `src/lib/solara-page.ts`, `src/lib/solara-faq.ts`, `SolaraPageContent`, `SolaraFaq`, `SolaraFaqJsonLd`, `SolaraSupplementaryJsonLd` — community facts (Solara is a Lennar-built area); **client home search** and **onboarding** URLs live in `solara-page.ts` (`DR_JAN_CLIENT_SEARCH_URL`, `DR_JAN_CLIENT_ONBOARDING_URL`).

## Content integrity

- Use **Dr. Jan Duffy** (not “Janet”). License **S.0197614.LLC**. Brokerage **Berkshire Hathaway HomeServices Nevada Properties**.
- **Solara / builder**: This site is **not** the builder. Do not copy long builder marketing copy; attribute the community factually. **Builder pricing, hours, and inventory** are confirmed with the builder’s team—not via this site’s outbound links (search/onboarding use `drjanduffy.realscout.com`). Update **`SOLARA_CONTENT_REVIEWED_ON`** in `src/lib/solara-page.ts` when you refresh community facts.
- Do not add phone or street address to UI or schema until values **match GBP**; use `NEXT_PUBLIC_AGENT_PHONE`, optional **`NEXT_PUBLIC_BUSINESS_*`** address fields (all required together), and optional `NEXT_PUBLIC_*` profile URLs from `.env.example`.

## Global Cursor rules

Team-wide MDC rules live under the user’s `.cursor/rules/` (e.g. `seo-aeo-geo-gsc.mdc`, `lib-seo-metadata.mdc`, `real-estate-jsonld-schema.mdc`). This repo adds scoped hints in `.cursor/rules/solara-seo.mdc`.

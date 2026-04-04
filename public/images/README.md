# `public/images` — realtor assets (SEO, GEO, AEO)

Use these folders so asset URLs stay stable and aligned with metadata + JSON-LD.

## Folders

| Folder | Use |
|--------|-----|
| `og/` | Open Graph / social preview images (~1200×630 JPG/PNG). `home.jpg` is referenced from site config for the homepage. |
| `hero/` | Above-the-fold hero photos; compress for LCP; alt text = place + subject. |
| `team/` | Agent headshots; align with Google Business Profile where applicable. |
| `community/` | Area / lifestyle shots for neighborhood pages (not another broker’s listing photos without permission). |
| `logos/` | Brokerage marks (official brand guidelines) and optional site wordmark. |
| `entity/` | Canonical org logo for Organization/LocalBusiness schema—keep one stable filename; update `src/lib/schema.ts` if the URL changes. |
| `guides/` | Diagrams and step graphics that support visible FAQ / buyer-seller answers (AEO). |
| `misc/` | Other UI or decorative graphics. |

## Rules

- **Rights:** Listing photos from other brokers only with written permission; model/property releases for marketing imagery.
- **SEO:** Descriptive file names (`north-las-vegas-hero.webp`); meaningful `alt` on every content image.
- **GEO:** Logo and business imagery should match GBP and JSON-LD; avoid changing logo URL without updating schema.
- **AEO:** Put answer-supporting graphics in `guides/` and tie them to on-page headings/questions.
- **Formats:** Prefer WebP/AVIF for in-page photos via `next/image`; OG images are often JPG/PNG.

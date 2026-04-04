# `public/icons` — favicon and PWA

Raster icons are generated from `/trademarks/icon-dark.svg`:

```bash
node scripts/generate-favicons.mjs
```

| File | Size |
|------|------|
| `favicon-16x16.png` … `favicon-96x96.png` | 16, 32, 96 |
| `apple-icon-57x57.png` … `apple-icon-180x180.png` | Apple touch set |
| `ms-icon-144x144.png` | Windows tile |
| `android-icon-192x192.png` | PWA / Android |
| `android-chrome-512x512.png` | PWA install |

`src/lib/metadata.ts` and `src/app/manifest.ts` reference these paths. Optional: add `favicon.ico` for very old clients.

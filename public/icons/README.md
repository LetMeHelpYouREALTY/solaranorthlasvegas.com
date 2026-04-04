# `public/icons` — favicon and PWA

Target assets (add when ready):

| File | Typical size | Notes |
|------|----------------|-------|
| `favicon.ico` | multi-size ICO | Browser tab; optional if SVG favicon is enough. |
| `apple-touch-icon.png` | 180×180 | iOS home screen / Safari. |
| `icon-192.png` | 192×192 | PWA / Android. |
| `icon-512.png` | 512×512 | PWA splash / install. |

This project currently uses `/trademarks/icon-dark.svg` in `src/app/manifest.ts` and metadata. After adding PNGs, update `manifest.ts` and `src/lib/metadata.ts` icons to match.

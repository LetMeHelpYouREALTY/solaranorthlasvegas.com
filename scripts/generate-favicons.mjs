/**
 * Rasterizes public/trademarks/icon-dark.svg into public/icons/* for favicon/manifest.
 * Run: node scripts/generate-favicons.mjs
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "public/trademarks/icon-dark.svg");
const outDir = join(root, "public/icons");

const outputs = [
  { file: "favicon-16x16.png", size: 16 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "favicon-96x96.png", size: 96 },
  { file: "apple-icon-57x57.png", size: 57 },
  { file: "apple-icon-60x60.png", size: 60 },
  { file: "apple-icon-72x72.png", size: 72 },
  { file: "apple-icon-76x76.png", size: 76 },
  { file: "apple-icon-114x114.png", size: 114 },
  { file: "apple-icon-120x120.png", size: 120 },
  { file: "apple-icon-144x144.png", size: 144 },
  { file: "ms-icon-144x144.png", size: 144 },
  { file: "apple-icon-152x152.png", size: 152 },
  { file: "apple-icon-180x180.png", size: 180 },
  { file: "android-icon-192x192.png", size: 192 },
  { file: "android-chrome-512x512.png", size: 512 },
];

mkdirSync(outDir, { recursive: true });

for (const { file, size } of outputs) {
  const dest = join(outDir, file);
  await sharp(svgPath)
    .resize(size, size, {
      fit: "cover",
      position: "center",
      background: { r: 10, g: 10, b: 10, alpha: 1 },
    })
    .png()
    .toFile(dest);
  console.log("wrote", dest);
}

console.log("done");

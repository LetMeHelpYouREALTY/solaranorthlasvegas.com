import { SITE_NAME_SHORT } from "@/lib/site-contact";
import { SOLARA_HOME_TITLE_ABSOLUTE } from "@/lib/solara-page";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SOLARA_HOME_TITLE_ABSOLUTE,
    short_name: SITE_NAME_SHORT,
    description:
      "Solara North Las Vegas Lennar townhomes with independent REALTOR® guidance from Dr. Jan Duffy.",
    start_url: "/",
    display: "browser",
    background_color: "#0b0b0f",
    theme_color: "#c9a227",
    icons: [
      {
        src: "/icons/android-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/trademarks/icon-dark.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}

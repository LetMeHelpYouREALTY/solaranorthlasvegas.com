import { SITE_NAME } from "@/lib/site-contact";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Solara NLV",
    description:
      "North Las Vegas real estate with Dr. Jan Duffy — Berkshire Hathaway HomeServices Nevada Properties.",
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#1e3a8a",
    icons: [
      {
        src: "/trademarks/icon-dark.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}

// Canonical site URL and contact — see src/lib/site-contact.ts
import { PRIMARY_CONTACT_EMAIL, SITE_NAME, SITE_NAME_SHORT, SITE_ORIGIN } from "@/lib/site-contact";

import { Geist, Geist_Mono } from "next/font/google";

const baseURL = SITE_ORIGIN;

/** One sans loader per Next.js guidance; `--font-body` / `--font-label` alias in `custom.css`. */
const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "optional",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading,
  body: heading,
  label: heading,
  code,
};

const style = {
  theme: "system" as const,
  /** Warmer neutrals for a trust-first, residential feel */
  neutral: "sand" as const,
  brand: "blue" as const,
  accent: "indigo" as const,
  solid: "contrast" as const,
  solidStyle: "flat" as const,
  border: "playful" as const,
  surface: "filled" as const,
  transition: "all" as const,
  scaling: "100" as const,
};

const dataStyle = {
  variant: "gradient" as const,
  mode: "categorical" as const,
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 8,
    width: 110,
    height: 85,
    tilt: -6,
    colorStart: "brand-background-strong",
    colorEnd: "neutral-background-weak",
    opacity: 28,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

const meta = {
  home: {
    path: "/",
    title: `${SITE_NAME_SHORT} | North Las Vegas Real Estate`,
    description:
      "North Las Vegas and Las Vegas Valley homes with Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties. Email for buying, selling, and local market guidance.",
    image: "/images/og/home.jpg",
    canonical: SITE_ORIGIN,
    robots: "index,follow",
    alternates: [{ href: SITE_ORIGIN, hrefLang: "en" }],
  },
};

const schema = {
  logo: "",
  type: "Organization",
  name: SITE_NAME_SHORT,
  description: meta.home.description,
  email: PRIMARY_CONTACT_EMAIL,
};

const social = {
  twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };

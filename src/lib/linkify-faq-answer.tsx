import { Fragment, type ReactNode } from "react";
import {
  DR_JAN_CLIENT_ONBOARDING_URL,
  DR_JAN_CLIENT_SEARCH_URL,
  LENNAR_SOLARA_OFFICIAL_URL,
} from "@/lib/solara-page";

/** Canonical URLs — longest match wins (onboarding before bare domain). */
const LINK_SPECS = [
  { url: LENNAR_SOLARA_OFFICIAL_URL, label: "Lennar’s official Solara page (North Las Vegas)" },
  { url: DR_JAN_CLIENT_ONBOARDING_URL, label: "Onboarding — create your search" },
  { url: DR_JAN_CLIENT_SEARCH_URL, label: "Open client search" },
] as const;

type LinkSpecEntry = { url: string; label: string; canonicalHref: string };

/** Match both trailing-slash variants so pasted or normalized copy still linkifies. */
function expandedLinkSpecs(): LinkSpecEntry[] {
  const out: LinkSpecEntry[] = [];
  for (const spec of LINK_SPECS) {
    const canonicalHref = spec.url;
    const variants = new Set<string>([spec.url]);
    if (spec.url.endsWith("/")) {
      variants.add(spec.url.replace(/\/$/, ""));
    } else {
      variants.add(`${spec.url}/`);
    }
    for (const url of variants) {
      out.push({ url, label: spec.label, canonicalHref });
    }
  }
  return out.sort((a, b) => b.url.length - a.url.length);
}

const LINK_SPEC_ENTRIES = expandedLinkSpecs();

/**
 * Turns known Lennar + RealScout URLs in FAQ answer copy into external anchors.
 * Use only for visible UI — keep `item.answer` plain text in JSON-LD.
 */
export function linkifyFaqAnswer(answer: string): ReactNode {
  const segments: ReactNode[] = [];
  let rest = answer;
  let segKey = 0;

  while (rest.length > 0) {
    let best: { index: number; entry: LinkSpecEntry } | null = null;

    for (const entry of LINK_SPEC_ENTRIES) {
      const index = rest.indexOf(entry.url);
      if (index === -1) continue;
      if (
        !best ||
        index < best.index ||
        (index === best.index && entry.url.length > best.entry.url.length)
      ) {
        best = { index, entry };
      }
    }

    if (!best) {
      segments.push(<Fragment key={segKey++}>{rest}</Fragment>);
      break;
    }

    if (best.index > 0) {
      segments.push(<Fragment key={segKey++}>{rest.slice(0, best.index)}</Fragment>);
    }

    segments.push(
      <a
        key={segKey++}
        className="faq-inline-link"
        href={best.entry.canonicalHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        {best.entry.label}
      </a>,
    );

    rest = rest.slice(best.index + best.entry.url.length);
  }

  return <>{segments}</>;
}

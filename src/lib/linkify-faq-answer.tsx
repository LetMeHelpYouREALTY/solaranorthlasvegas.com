import { Fragment, type ReactNode } from "react";
import {
  DR_JAN_CLIENT_ONBOARDING_URL,
  DR_JAN_CLIENT_SEARCH_URL,
  LENNAR_SOLARA_OFFICIAL_URL,
} from "@/lib/solara-page";

/** Longest URL first aids mental model; matcher picks earliest index, then longer URL at same index. */
const LINK_SPECS = [
  { url: LENNAR_SOLARA_OFFICIAL_URL, label: "Lennar’s official Solara page (North Las Vegas)" },
  { url: DR_JAN_CLIENT_ONBOARDING_URL, label: "Onboarding — create your search" },
  { url: DR_JAN_CLIENT_SEARCH_URL, label: "Open client search" },
] as const;

/**
 * Turns known Lennar + RealScout URLs in FAQ answer copy into external anchors.
 * Use only for visible UI — keep `item.answer` plain text in JSON-LD.
 */
export function linkifyFaqAnswer(answer: string): ReactNode {
  const segments: ReactNode[] = [];
  let rest = answer;
  let segKey = 0;

  while (rest.length > 0) {
    let best: { index: number; spec: (typeof LINK_SPECS)[number] } | null = null;

    for (const spec of LINK_SPECS) {
      const index = rest.indexOf(spec.url);
      if (index === -1) continue;
      if (
        !best ||
        index < best.index ||
        (index === best.index && spec.url.length > best.spec.url.length)
      ) {
        best = { index, spec };
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
      <a key={segKey++} href={best.spec.url} rel="noopener noreferrer" target="_blank">
        {best.spec.label}
      </a>,
    );

    rest = rest.slice(best.index + best.spec.url.length);
  }

  return <>{segments}</>;
}

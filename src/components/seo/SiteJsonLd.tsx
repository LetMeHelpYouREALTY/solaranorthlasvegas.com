import { buildRootJsonLdGraph, serializeJsonLdGraph } from "@/lib/schema";

/** Site-wide JSON-LD graph — see `src/lib/schema.ts` for edits (NAP / GBP parity). */
export function SiteJsonLd() {
  const graph = buildRootJsonLdGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLdGraph(graph),
      }}
    />
  );
}

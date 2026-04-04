import { serializeSolaraSupplementaryLd } from "@/lib/schema";

export function SolaraSupplementaryJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeSolaraSupplementaryLd(),
      }}
    />
  );
}

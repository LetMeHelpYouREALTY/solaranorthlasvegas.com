import { serializeFaqPageLd } from "@/lib/schema";
import { SOLARA_FAQ_ITEMS } from "@/lib/solara-faq";

export function SolaraFaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeFaqPageLd(SOLARA_FAQ_ITEMS, "/solara"),
      }}
    />
  );
}

import { HOME_FAQ_ITEMS } from "@/lib/home-faq";
import { serializeFaqPageLd } from "@/lib/schema";

/** FAQPage JSON-LD — only mount on routes that render the same FAQ block as `HomeFaq`. */
export function HomeFaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeFaqPageLd(HOME_FAQ_ITEMS, "/"),
      }}
    />
  );
}

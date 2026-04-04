import type { HomeFaqItem } from "@/lib/home-faq";
import { serializeFaqPageLd } from "@/lib/schema";

type MarketingFaqJsonLdProps = {
  items: HomeFaqItem[];
  pagePath: string;
};

/** FAQPage JSON-LD — mount only on routes that render the same visible FAQ as `MarketingFaq`. */
export function MarketingFaqJsonLd({ items, pagePath }: MarketingFaqJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeFaqPageLd(items, pagePath),
      }}
    />
  );
}

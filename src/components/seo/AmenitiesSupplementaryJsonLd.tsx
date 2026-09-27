import { AMENITIES_FAQ_ITEMS } from "@/lib/amenities-faq";
import { CURATED_AMENITIES } from "@/lib/community-amenities-config";
import { serializeAmenitiesSupplementaryLd } from "@/lib/schema";

export function AmenitiesSupplementaryJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeAmenitiesSupplementaryLd(CURATED_AMENITIES, AMENITIES_FAQ_ITEMS),
      }}
    />
  );
}

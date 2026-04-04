import type { HomeFaqItem } from "@/lib/home-faq";

/** Visible on /sellers only — paired with FAQPage JSON-LD on the same URL. */
export const SELLERS_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "How do you price a home in North Las Vegas or the Las Vegas Valley?",
    answer:
      "Start with recent comparable sales near your property, then adjust for condition, updates, HOA fees, and buyer demand in your segment. Market headlines are a starting point—your micro-market matters more than county-wide averages.",
  },
  {
    question: "What should I disclose to buyers in Nevada?",
    answer:
      "Nevada sellers complete required disclosures about property condition and known material facts. Accuracy reduces legal risk and helps buyers make informed offers; your licensee can point you to the correct forms and timelines.",
  },
  {
    question: "Should I make repairs before listing?",
    answer:
      "It depends on ROI and time. Small fixes that improve showing feedback (paint, lighting, deep clean, landscape tidy-up) often help. Larger projects should be weighed against comparable listings and your target list date.",
  },
];

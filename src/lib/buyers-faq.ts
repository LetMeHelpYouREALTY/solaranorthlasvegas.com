import type { HomeFaqItem } from "@/lib/home-faq";

/** Visible on /buyers only — paired with FAQPage JSON-LD on the same URL. */
export const BUYERS_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "Do I need a pre-approval before touring homes in North Las Vegas?",
    answer:
      "You can preview listings anytime, but a lender pre-approval (or proof of funds for cash) helps you understand monthly payment, strengthens offers, and keeps tours focused on homes that fit your budget.",
  },
  {
    question: "How does new construction differ from resale when I make an offer?",
    answer:
      "Builders publish contracts, timelines, and incentives that change frequently. The builder’s representative works for the builder—your Nevada licensee can help you compare options and timelines while you rely on builder documents for final terms.",
  },
  {
    question: "What costs should I plan for beyond the purchase price?",
    answer:
      "Budget for earnest money, inspections, appraisal, title and escrow fees, insurance, HOA transfers, and moving costs. Your lender provides a loan estimate; your escrow team explains line items for your specific transaction.",
  },
];

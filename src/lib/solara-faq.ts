import type { HomeFaqItem } from "@/lib/home-faq";
import { LENNAR_SOLARA_OFFICIAL_URL } from "@/lib/solara-page";

/**
 * Solara route only — do not reuse on the homepage (avoid duplicate thin FAQ sitewide).
 */
export const SOLARA_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "What is Solara in North Las Vegas?",
    answer:
      "Solara is a Lennar new-home community of gated townhomes in North Las Vegas, Nevada. The builder controls pricing, incentives, floorplans, and sales office hours — confirm details on Lennar’s official Solara page.",
  },
  {
    question: "Is this website the same as Lennar or the Solara sales office?",
    answer:
      "No. This site is operated for independent real estate guidance from Dr. Jan Duffy (Nevada license S.0197614.LLC), affiliated with Berkshire Hathaway HomeServices Nevada Properties. It is not the builder’s site.",
  },
  {
    question: "Where is the Solara welcome center?",
    answer:
      "Lennar lists the Solara location at 212 Summer Park Ave, North Las Vegas, NV 89031. Tours and hours are typically by appointment; verify on Lennar’s site before you visit.",
  },
  {
    question: "How is a buyer’s agent different from the builder’s sales representative?",
    answer:
      "The builder’s sales team represents the builder. A buyer’s agent represents your interests in negotiation, paperwork timing, and understanding options. Nevada agency relationships are disclosed in writing — ask questions until the roles are clear.",
  },
  {
    question: "What should I verify about schools or HOA for Solara?",
    answer:
      "School zoning and HOA rules can change. Confirm schools with the Clark County School District and HOA documents during your due diligence. Do not rely on marketing summaries alone for enrollment or fee decisions.",
  },
  {
    question: "Where do I find current Solara pricing and available homesites?",
    answer: `Use Lennar’s official Solara page for live inventory and pricing: ${LENNAR_SOLARA_OFFICIAL_URL}`,
  },
];

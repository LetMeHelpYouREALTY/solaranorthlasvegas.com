import type { HomeFaqItem } from "@/lib/home-faq";
import { DR_JAN_CLIENT_ONBOARDING_URL, DR_JAN_CLIENT_SEARCH_URL } from "@/lib/solara-page";

/**
 * Solara route only — do not reuse on the homepage (avoid duplicate thin FAQ sitewide).
 */
export const SOLARA_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "Why work with Dr. Jan Duffy if I’m interested in new construction?",
    answer:
      "The on-site sales team represents the builder. Dr. Jan Duffy is a Nevada REALTOR® (license S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties and can represent your interests in North Las Vegas—helping you compare options, stay on top of paperwork, and ask the right questions before you commit.",
  },
  {
    question: "What is Solara in North Las Vegas?",
    answer:
      "Solara is a gated townhome community in North Las Vegas built by Lennar. The builder sets pricing, incentives, floorplans, and sales office hours—confirm those details with the builder. To search homes with Dr. Jan Duffy, use her client search page: " +
      DR_JAN_CLIENT_SEARCH_URL,
  },
  {
    question: "Is this website the same as the builder or the Solara sales office?",
    answer:
      "No. This site is for independent real estate guidance from Dr. Jan Duffy (Nevada license S.0197614.LLC), affiliated with Berkshire Hathaway HomeServices Nevada Properties. It is not the builder’s website.",
  },
  {
    question: "Where is the Solara welcome center?",
    answer:
      "The builder lists the Solara location at 212 Summer Park Ave, North Las Vegas, NV 89031. Tours and hours are typically by appointment; verify on the builder’s site before you visit.",
  },
  {
    question: "How is a buyer’s agent different from the builder’s sales representative?",
    answer:
      "The builder’s sales team represents the builder. A buyer’s agent focuses on your interests in negotiation, timing, and understanding your options. Nevada agency relationships are disclosed in writing — ask questions until the roles are clear.",
  },
  {
    question: "What should I verify about schools or HOA for Solara?",
    answer:
      "School zoning and HOA rules can change. Confirm schools with the Clark County School District and read HOA documents during your due diligence. Do not rely on marketing summaries alone for enrollment or fee decisions.",
  },
  {
    question: "Where can I search for homes or set up my own search?",
    answer: `Use Dr. Jan Duffy’s client home search: ${DR_JAN_CLIENT_SEARCH_URL} To gather your criteria and create a search yourself, use the onboarding link: ${DR_JAN_CLIENT_ONBOARDING_URL}`,
  },
];

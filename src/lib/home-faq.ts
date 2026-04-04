/**
 * Static FAQ copy for the homepage — keep answers accurate; pair with FAQPage JSON-LD.
 * Update when GBP or service scope changes.
 */
export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const HOME_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "What is Solara North Las Vegas?",
    answer:
      "Solara North Las Vegas is the client-facing brand for Dr. Jan Duffy's North Las Vegas and Las Vegas Valley real estate practice, affiliated with Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "The focus is North Las Vegas and the broader Las Vegas Valley, including nearby Southern Nevada communities where clients are buying or selling.",
  },
  {
    question: "How do I contact Dr. Jan Duffy?",
    answer:
      "Use DrDuffy@SolaraNorthLasVegas.com for general questions. For listing-related outreach, email DrDuffySells@SolaraNorthLasVegas.com.",
  },
  {
    question: "What is Dr. Jan Duffy's Nevada real estate license number?",
    answer: "Nevada license S.0197614.LLC.",
  },
  {
    question: "Does this site provide legal or tax advice?",
    answer:
      "No. Real estate information here is not legal or tax advice. For deeds, contracts, or tax consequences, consult a qualified Nevada attorney or CPA.",
  },
];

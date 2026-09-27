import type { HomeFaqItem } from "@/lib/home-faq";
import { AMENITIES_PAGE_PATH } from "@/lib/community-amenities-config";

export const AMENITIES_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "What grocery stores are near Lennar Solara in North Las Vegas?",
    answer:
      "Albertsons (3010 W Ann Rd), Walmart Neighborhood Market (5545 Simmons St), and Smith's (5564 Camino Al Norte) are common north-valley grocery runs from Solara. Drive times vary with traffic—see the map on this site's Nearby Amenities page for context.",
  },
  {
    question: "How far is Solara from the Las Vegas Strip?",
    answer:
      "From Solara in North Las Vegas, the Strip is typically an approximate 25–40 minute drive depending on your route, time of day, and traffic on I-15 or US-95. Always check live maps before you commit to a commute.",
  },
  {
    question: "Are there hospitals near Solara, North Las Vegas?",
    answer:
      "North Vista Hospital on E Lake Mead Blvd in North Las Vegas and Centennial Hills Hospital Medical Center on N Durango Dr in northwest Las Vegas are two hospitals buyers often ask about from the north valley. Confirm emergency services and specialists with each facility.",
  },
  {
    question: "What parks are close to Solara?",
    answer:
      "Craig Ranch Regional Park (628 W Craig Rd, North Las Vegas) is a large city park with trails, sports fields, and community events—one of the most asked-about outdoor destinations near Solara.",
  },
  {
    question: "Is there golf near Solara?",
    answer:
      "Painted Desert Golf Club (5555 Painted Mirage Rd, Las Vegas) is a well-known northwest valley course with a public grille. Hours and tee times change—confirm directly with the club before you visit.",
  },
  {
    question: "How far is Harry Reid International Airport from Solara?",
    answer:
      "Harry Reid International Airport is roughly an approximate 25–40 minute drive from Solara depending on route and traffic, often via I-15 or valley connectors. Use live navigation for trip planning.",
  },
  {
    question: "Where can I see a map of amenities near Solara?",
    answer: `This site's Nearby Amenities page (${AMENITIES_PAGE_PATH}) includes an interactive map, category filters, and a written guide to dining, parks, healthcare, and errands around Lennar Solara.`,
  },
  {
    question: "Who can help me buy or sell near Solara?",
    answer:
      "Dr. Jan Duffy (Nevada license S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties offers independent REALTOR guidance for Solara and the wider Las Vegas Valley—start on the contact page or by email.",
  },
];

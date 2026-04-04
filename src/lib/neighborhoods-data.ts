/**
 * Service-area pages — only markets you actually cover; keep copy differentiated per URL.
 */
export type NeighborhoodRecord = {
  slug: string;
  /** Short label for cards and breadcrumbs */
  shortName: string;
  schemaTitle: string;
  schemaDescription: string;
  /** Page <title> absolute segment handled by buildSubpageMetadata */
  pageTitleAbsolute: string;
  pageDescription: string;
  h1: string;
  lead: string;
  /** 2–3 unique paragraphs per area */
  body: string[];
};

export const NEIGHBORHOODS: NeighborhoodRecord[] = [
  {
    slug: "north-las-vegas",
    shortName: "North Las Vegas",
    schemaTitle: "North Las Vegas homes & real estate | Dr. Jan Duffy",
    schemaDescription:
      "North Las Vegas real estate context, new construction near Solara, and buyer/seller guidance with Dr. Jan Duffy.",
    pageTitleAbsolute: "North Las Vegas homes & real estate",
    pageDescription:
      "North Las Vegas housing market context, new construction near Solara, and how to get local REALTOR guidance with Dr. Jan Duffy.",
    h1: "North Las Vegas real estate",
    lead: "North Las Vegas offers a mix of established neighborhoods and new construction—including communities like Solara. Whether you are comparing areas or narrowing a short list, local guidance helps you read disclosures, HOA details, and offer strategy with confidence.",
    body: [
      "Many buyers start with commute, schools, and monthly payment, then refine by property type (single-family, townhome, condo) and HOA rules. In newer areas, builder timelines, incentives, and lender requirements can move quickly—so it helps to have a clear plan before you tour.",
      "If you are considering new construction, remember the builder’s sales team represents the builder. A Nevada licensee working with you can help you understand how that relationship fits alongside your goals.",
    ],
  },
  {
    slug: "aliante",
    shortName: "Aliante",
    schemaTitle: "Aliante North Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Aliante area overview for North Las Vegas buyers and sellers working with Dr. Jan Duffy, REALTOR.",
    pageTitleAbsolute: "Aliante, North Las Vegas homes",
    pageDescription:
      "Aliante area context for North Las Vegas buyers and sellers—planning a search or sale with Dr. Jan Duffy.",
    h1: "Aliante, North Las Vegas",
    lead: "Aliante is a well-known master-planned area in North Las Vegas with a mix of housing types and amenities. Buyers often compare it with other north valley options when balancing price, space, and lifestyle.",
    body: [
      "If you are touring Aliante listings, pay attention to HOA fees, special assessments, and how commute routes fit your daily routine. For resale homes, condition and recent updates can matter as much as list price.",
      "Sellers in Aliante can strengthen their position with realistic pricing, clean disclosures, and a marketing plan aligned to how buyers search today.",
    ],
  },
  {
    slug: "centennial-hills",
    shortName: "Centennial Hills",
    schemaTitle: "Centennial Hills Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Centennial Hills area notes for Las Vegas Valley buyers and sellers with Dr. Jan Duffy.",
    pageTitleAbsolute: "Centennial Hills, Las Vegas homes",
    pageDescription:
      "Centennial Hills area context for buyers and sellers in the northwest Las Vegas Valley.",
    h1: "Centennial Hills",
    lead: "Centennial Hills sits in the northwest Las Vegas Valley and attracts buyers who want newer construction options and suburban spacing while staying reasonably connected to the valley’s job centers.",
    body: [
      "Inventory and pricing can shift seasonally. If you need a specific school zone or commute threshold, filtering early saves time and reduces surprises after you are under contract.",
      "For sellers, presentation and pricing strategy should match the segment of the neighborhood you are in—not just county-wide averages.",
    ],
  },
  {
    slug: "shadow-creek",
    shortName: "Shadow Creek",
    schemaTitle: "Shadow Creek North Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Shadow Creek area overview for North Las Vegas real estate clients of Dr. Jan Duffy.",
    pageTitleAbsolute: "Shadow Creek, North Las Vegas homes",
    pageDescription:
      "Shadow Creek area notes for North Las Vegas buyers and sellers planning their next move.",
    h1: "Shadow Creek",
    lead: "Shadow Creek is a North Las Vegas community buyers often consider alongside other north valley neighborhoods. Your best fit depends on budget, HOA preferences, and how you want to live day to day.",
    body: [
      "When comparing listings, look beyond photos: verify fees, parking rules, and any rent restrictions if applicable. Those details frequently drive the real monthly cost of ownership.",
      "If you are selling, highlight what makes your home easy to maintain and move-in ready—buyers notice thoughtful upkeep.",
    ],
  },
  {
    slug: "skye-canyon",
    shortName: "Skye Canyon",
    schemaTitle: "Skye Canyon Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Skye Canyon master plan context for northwest Las Vegas Valley buyers and sellers.",
    pageTitleAbsolute: "Skye Canyon, Las Vegas homes",
    pageDescription:
      "Skye Canyon area overview for buyers and sellers comparing northwest Las Vegas Valley options.",
    h1: "Skye Canyon",
    lead: "Skye Canyon is a master-planned area in the northwest Las Vegas Valley. Buyers often weigh it against other newer communities based on amenities, commute, and monthly payment.",
    body: [
      "Newer communities can have evolving builder phases and HOA budgets—ask how reserves are funded and what is planned for common areas over the next few years.",
      "Sellers should be ready for buyers who compare multiple nearby neighborhoods; clear documentation and responsive timelines help deals stay on track.",
    ],
  },
  {
    slug: "providence",
    shortName: "Providence",
    schemaTitle: "Providence Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Providence master-planned community notes for Las Vegas Valley real estate clients.",
    pageTitleAbsolute: "Providence, Las Vegas homes",
    pageDescription:
      "Providence area overview for Las Vegas Valley buyers and sellers working with a local REALTOR.",
    h1: "Providence",
    lead: "Providence is a large master-planned community in the Las Vegas Valley. Buyers often explore it when they want neighborhood amenities and a range of housing styles in one footprint.",
    body: [
      "Because Providence spans a wide area, two listings with the same ZIP can feel very different. Location inside the community, backing conditions, and HOA sub-associations can all matter.",
      "Sellers benefit when marketing calls out practical wins: floor plan flow, storage, recent updates, and energy features buyers compare across listings.",
    ],
  },
  {
    slug: "henderson",
    shortName: "Henderson",
    schemaTitle: "Henderson NV homes & real estate | Dr. Jan Duffy",
    schemaDescription:
      "Henderson real estate context for Las Vegas Valley buyers and sellers with Dr. Jan Duffy.",
    pageTitleAbsolute: "Henderson, Nevada homes & real estate",
    pageDescription:
      "Henderson housing market context for buyers and sellers in the Las Vegas Valley.",
    h1: "Henderson, Nevada real estate",
    lead: "Henderson is a major Las Vegas Valley city with diverse neighborhoods—from established areas to newer developments. Many buyers cross-shop Henderson with North Las Vegas depending on commute and lifestyle.",
    body: [
      "If Henderson is on your list, clarify must-haves early: schools, HOA tolerance, and target monthly payment. Those filters keep your search efficient as new listings appear.",
      "Sellers should align pricing with recent comparable sales in their micro-market, not just city-wide headlines.",
    ],
  },
  {
    slug: "summerlin",
    shortName: "Summerlin",
    schemaTitle: "Summerlin Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Summerlin area notes for Las Vegas Valley buyers and sellers planning a purchase or sale.",
    pageTitleAbsolute: "Summerlin, Las Vegas homes",
    pageDescription:
      "Summerlin real estate context for buyers and sellers comparing west valley options.",
    h1: "Summerlin",
    lead: "Summerlin is one of the best-known master-planned areas in the Las Vegas Valley. Buyers often compare it with other west and northwest options when prioritizing schools, recreation, and neighborhood services.",
    body: [
      "Summerlin includes multiple villages and price bands. If you are serious about the area, it helps to tour a few neighborhoods so you understand what your budget buys in each segment.",
      "Sellers should work from fresh comps and highlight upgrades that match what today’s buyers value most.",
    ],
  },
  {
    slug: "spring-valley",
    shortName: "Spring Valley",
    schemaTitle: "Spring Valley Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Spring Valley area overview for central Las Vegas Valley buyers and sellers.",
    pageTitleAbsolute: "Spring Valley, Las Vegas homes",
    pageDescription:
      "Spring Valley area context for buyers and sellers in the central Las Vegas Valley.",
    h1: "Spring Valley",
    lead: "Spring Valley offers a wide range of housing types in the central Las Vegas Valley. Buyers often consider it for convenience and variety, while watching for HOA and property-condition differences block to block.",
    body: [
      "Because Spring Valley is broad, drive the neighborhood at different times of day and confirm flood zone and insurance considerations where relevant.",
      "Sellers can stand out with transparent disclosures and a pricing strategy grounded in nearby sold data.",
    ],
  },
  {
    slug: "enterprise",
    shortName: "Enterprise",
    schemaTitle: "Enterprise Las Vegas homes | Dr. Jan Duffy",
    schemaDescription: "Enterprise area notes for southwest Las Vegas Valley buyers and sellers.",
    pageTitleAbsolute: "Enterprise, Las Vegas homes",
    pageDescription:
      "Enterprise area overview for buyers and sellers in the southwest Las Vegas Valley.",
    h1: "Enterprise",
    lead: "Enterprise spans much of the southwest Las Vegas Valley. Buyers may find a mix of newer subdivisions and established homes; the right fit depends on schools, commute, and monthly budget.",
    body: [
      "Review HOA documents and utility averages alongside list price—those costs affect affordability as much as the mortgage payment.",
      "For sellers, curb appeal and simple staging often improve showing feedback without large upfront spend.",
    ],
  },
  {
    slug: "paradise",
    shortName: "Paradise",
    schemaTitle: "Paradise Las Vegas homes | Dr. Jan Duffy",
    schemaDescription:
      "Paradise (unincorporated Clark County) area context for Las Vegas Valley real estate.",
    pageTitleAbsolute: "Paradise, Las Vegas area homes",
    pageDescription:
      "Paradise area notes for buyers and sellers near the Las Vegas Strip corridor and surrounding neighborhoods.",
    h1: "Paradise (Las Vegas area)",
    lead: "Paradise includes many well-known corridors near the Las Vegas Strip and surrounding residential pockets. Buyers and sellers here should pay extra attention to zoning overlays, short-term rental rules where applicable, and insurance considerations.",
    body: [
      "Proximity to employment centers and entertainment can be a strength, but also brings unique buyer questions—especially for condos and townhomes with rental caps.",
      "Sellers should be precise about fees, parking, and what is included in the sale to reduce contract friction.",
    ],
  },
  {
    slug: "boulder-city",
    shortName: "Boulder City",
    schemaTitle: "Boulder City NV homes | Dr. Jan Duffy",
    schemaDescription:
      "Boulder City real estate context for buyers and sellers comparing valley-adjacent options.",
    pageTitleAbsolute: "Boulder City, Nevada homes",
    pageDescription:
      "Boulder City area overview for buyers and sellers comparing Las Vegas Valley-adjacent markets.",
    h1: "Boulder City",
    lead: "Boulder City offers a distinct small-city feel southeast of the core Las Vegas Valley. Buyers considering Boulder City often weigh commute, community character, and inventory differences compared with North Las Vegas or Henderson.",
    body: [
      "If you are cross-shopping Boulder City with North Las Vegas, compare not just price but also taxes, utilities, HOA structures, and your typical weekly routes.",
      "Sellers should highlight lifestyle benefits and any updates that matter for desert climate efficiency.",
    ],
  },
];

export function getNeighborhoodBySlug(slug: string): NeighborhoodRecord | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function getAllNeighborhoodSlugs(): string[] {
  return NEIGHBORHOODS.map((n) => n.slug);
}

import { SOLARA_WELCOME_ADDRESS, formatSolaraWelcomeAddressLine } from "@/lib/solara-page";

/**
 * Lennar Solara welcome center — same address as `SOLARA_WELCOME_ADDRESS`.
 * Coordinates from public geocoding for Summer Park(s) Ave, North Las Vegas (Spot On Nevada: 36.2449188, -115.1425705).
 */
export const COMMUNITY_DISPLAY_NAME = "Solara" as const;

export const COMMUNITY_CITY_LABEL = "North Las Vegas" as const;

export const COMMUNITY_CENTER = {
  lat: 36.2449188,
  lng: -115.1425705,
} as const;

export const COMMUNITY_MAP_EMBED_URL = `https://www.google.com/maps?q=${COMMUNITY_CENTER.lat},${COMMUNITY_CENTER.lng}&z=14&output=embed`;

export const AMENITIES_PAGE_PATH = "/amenities" as const;

export type AmenityCategoryId =
  | "grocery"
  | "parks"
  | "healthcare"
  | "restaurants"
  | "fitness"
  | "shopping"
  | "pharmacies"
  | "cafes"
  | "golf"
  | "parking"
  | "schools";

export type AmenityCategoryConfig = {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) `includedPrimaryTypes` — first type used for searchNearby */
  primaryTypes: string[];
  ariaLabel: string;
};

/** Townhome / north-valley suburban — groceries and daily errands first */
export const AMENITY_CATEGORIES: AmenityCategoryConfig[] = [
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["supermarket", "grocery_store"],
    ariaLabel: "Show grocery stores near Solara",
  },
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park"],
    ariaLabel: "Show parks near Solara",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
    ariaLabel: "Show hospitals and clinics near Solara",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Solara",
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym"],
    ariaLabel: "Show gyms and fitness centers near Solara",
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Solara",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy"],
    ariaLabel: "Show pharmacies near Solara",
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near Solara",
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Solara",
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    ariaLabel: "Show parking near Solara",
  },
  {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near Solara",
  },
];

export type CuratedAmenitySchemaType =
  | "GroceryStore"
  | "Park"
  | "Hospital"
  | "Restaurant"
  | "SportsActivityLocation"
  | "ShoppingCenter"
  | "Pharmacy"
  | "CafeOrCoffeeShop"
  | "GolfCourse"
  | "School"
  | "Place";

export type CuratedAmenity = {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  category: AmenityCategoryId;
  schemaType: CuratedAmenitySchemaType;
};

/** Verified names and addresses — used for fallback UI and JSON-LD ItemList */
export const CURATED_AMENITIES: CuratedAmenity[] = [
  {
    name: "Albertsons",
    streetAddress: "3010 W Ann Rd",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89031",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    name: "Walmart Neighborhood Market",
    streetAddress: "5545 Simmons St",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89031",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    name: "Smith's Food and Drug",
    streetAddress: "5564 Camino Al Norte",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89031",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    name: "Craig Ranch Regional Park",
    streetAddress: "628 W Craig Rd",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89032",
    category: "parks",
    schemaType: "Park",
  },
  {
    name: "North Vista Hospital",
    streetAddress: "1409 E Lake Mead Blvd",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89030",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    streetAddress: "6900 N Durango Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "Rockwall Grille at Painted Desert Golf Club",
    streetAddress: "5555 Painted Mirage Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    category: "restaurants",
    schemaType: "Restaurant",
  },
  {
    name: "Painted Desert Golf Club",
    streetAddress: "5555 Painted Mirage Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    category: "golf",
    schemaType: "GolfCourse",
  },
  {
    name: "Aliante Casino + Hotel",
    streetAddress: "7300 Aliante Pkwy",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89084",
    category: "shopping",
    schemaType: "ShoppingCenter",
  },
  {
    name: "Shadow Ridge High School",
    streetAddress: "5050 Brent Ln",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89130",
    category: "schools",
    schemaType: "School",
  },
];

export function formatCuratedAddress(a: CuratedAmenity): string {
  return `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`;
}

export function googleMapsDirectionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function getCuratedForCategory(categoryId: AmenityCategoryId): CuratedAmenity[] {
  return CURATED_AMENITIES.filter((a) => a.category === categoryId);
}

export function getCommunityMarkerLabel(): string {
  return `${COMMUNITY_DISPLAY_NAME} — ${formatSolaraWelcomeAddressLine()}`;
}

export const COMMUNITY_WELCOME_ADDRESS_LINE = formatSolaraWelcomeAddressLine();

export const COMMUNITY_POSTAL = SOLARA_WELCOME_ADDRESS;

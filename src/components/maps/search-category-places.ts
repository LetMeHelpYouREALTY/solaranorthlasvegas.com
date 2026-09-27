const cache = new Map<string, Promise<google.maps.places.Place[]>>();

/** One Places searchNearby per category per page session (all primary types in one call). */
export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: string,
  types: string[],
): Promise<google.maps.places.Place[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: 5000 },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as unknown as google.maps.places.SearchNearbyRankPreference,
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}

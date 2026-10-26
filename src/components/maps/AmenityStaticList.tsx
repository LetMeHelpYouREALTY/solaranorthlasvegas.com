import {
  type AmenityCategoryId,
  type CuratedAmenity,
  formatCuratedAddress,
  googleMapsDirectionsUrl,
} from "@/lib/community-amenities-config";

type AmenityStaticListProps = {
  items: CuratedAmenity[];
  categoryId: AmenityCategoryId;
  heading?: string;
};

export function AmenityStaticList({ items, categoryId, heading }: AmenityStaticListProps) {
  const filtered = items.filter((a) => a.category === categoryId);
  if (filtered.length === 0) {
    return (
      <p className="amenity-static-empty" style={{ margin: 0, fontSize: "0.9rem", opacity: 0.85 }}>
        No curated listings for this category yet. Try another filter or zoom the map when the
        interactive map is available.
      </p>
    );
  }

  return (
    <div className="amenity-static-list">
      {heading ? (
        <h3 className="amenity-static-list-heading" style={{ fontSize: "1rem", margin: "0 0 0.75rem" }}>
          {heading}
        </h3>
      ) : null}
      <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
        {filtered.map((place) => {
          const address = formatCuratedAddress(place);
          return (
            <li key={`${place.name}-${place.streetAddress}`}>
              <strong>{place.name}</strong>
              <br />
              <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>{address}</span>
              <br />
              <a
                href={googleMapsDirectionsUrl(address)}
                rel="noopener noreferrer"
                target="_blank"
                style={{ fontSize: "0.875rem" }}
              >
                Directions
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

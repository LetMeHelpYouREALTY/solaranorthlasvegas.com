"use client";

import { AmenityStaticList } from "@/components/maps/AmenityStaticList";
import { getGoogleMapsApiKey, getGoogleMapsMapId, loadGoogleMapsApi } from "@/components/maps/load-google-maps";
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  COMMUNITY_CENTER,
  COMMUNITY_DISPLAY_NAME,
  COMMUNITY_MAP_EMBED_URL,
  CURATED_AMENITIES,
  getCommunityMarkerLabel,
  googleMapsDirectionsUrl,
} from "@/lib/community-amenities-config";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const MAP_MIN_HEIGHT_PX = 360;

type MapMode = "loading" | "interactive" | "fallback";

type NearbyPlaceRow = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  directionsUrl: string;
};

function categoryById(id: AmenityCategoryId) {
  return AMENITY_CATEGORIES.find((c) => c.id === id) ?? AMENITY_CATEGORIES[0];
}

export function CommunityAmenityMap({
  defaultCategory = "grocery",
  showStaticList = true,
}: {
  defaultCategory?: AmenityCategoryId;
  showStaticList?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [mode, setMode] = useState<MapMode>(() => (getGoogleMapsApiKey() ? "loading" : "fallback"));
  const [places, setPlaces] = useState<NearbyPlaceRow[]>([]);
  const [searchStatus, setSearchStatus] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const observerStarted = useRef(false);
  const mapReady = useRef(false);

  const filterGroupId = useId();

  const clearMarkers = useCallback(() => {
    for (const m of markersRef.current) {
      m.setMap(null);
    }
    markersRef.current = [];
  }, []);

  const runNearbySearch = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || !mapReady.current) {
        return;
      }
      setSearchStatus("Searching nearby…");
      clearMarkers();

      const category = categoryById(categoryId);
      const primaryType = category.primaryTypes[0];

      try {
        const googleMaps = await loadGoogleMapsApi();
        const placesLib = (await googleMaps.maps.importLibrary("places")) as google.maps.PlacesLibrary;
        const PlaceCtor = placesLib.Place;

        const center = new googleMaps.maps.LatLng(COMMUNITY_CENTER.lat, COMMUNITY_CENTER.lng);
        const request = {
          fields: ["displayName", "location", "rating", "formattedAddress", "googleMapsURI"],
          locationRestriction: {
            center,
            radius: 8000,
          },
          includedPrimaryTypes: [primaryType],
          maxResultCount: 15,
        };

        const { places: nearby } = await PlaceCtor.searchNearby(request);
        const rows: NearbyPlaceRow[] = [];
        const bounds = new googleMaps.maps.LatLngBounds();
        bounds.extend(center);

        if (!infoWindowRef.current) {
          infoWindowRef.current = new googleMaps.maps.InfoWindow();
        }

        for (const place of nearby) {
          const loc = place.location;
          if (!loc) {
            continue;
          }
          const name = place.displayName ?? "Place";
          const address = place.formattedAddress ?? "";
          const rating = place.rating ?? undefined;
          const directionsUrl =
            place.googleMapsURI ??
            googleMapsDirectionsUrl(address || `${name}, North Las Vegas, NV`);

          rows.push({
            id: `${name}-${address}`,
            name,
            address,
            rating,
            directionsUrl,
          });

          const marker = new googleMaps.maps.Marker({
            map: mapRef.current,
            position: loc,
            title: name,
          });
          marker.addListener("click", () => {
            const ratingLine =
              rating != null ? `<p style="margin:0.25rem 0 0;font-size:0.85rem">Rating: ${rating}</p>` : "";
            infoWindowRef.current?.setContent(
              `<div style="max-width:220px"><strong>${name}</strong><p style="margin:0.35rem 0 0;font-size:0.85rem">${address}</p>${ratingLine}<p style="margin:0.5rem 0 0"><a href="${directionsUrl}" target="_blank" rel="noopener noreferrer">Directions</a></p></div>`,
            );
            infoWindowRef.current?.open({ map: mapRef.current, anchor: marker });
          });
          markersRef.current.push(marker);
          bounds.extend(loc);
        }

        if (communityMarkerRef.current) {
          bounds.extend(communityMarkerRef.current.getPosition() as google.maps.LatLng);
        }
        mapRef.current.fitBounds(bounds, 48);
        setPlaces(rows);
        setSearchStatus(rows.length ? null : "No results for this filter. Try another category.");
      } catch {
        setPlaces([]);
        setSearchStatus("Map search unavailable — showing curated list.");
        setMode("fallback");
      }
    },
    [clearMarkers],
  );

  const initMap = useCallback(async () => {
    if (!mapDivRef.current || mapReady.current) {
      return;
    }
    try {
      const googleMaps = await loadGoogleMapsApi();
      const mapId = getGoogleMapsMapId();
      const center = { lat: COMMUNITY_CENTER.lat, lng: COMMUNITY_CENTER.lng };

      mapRef.current = new googleMaps.maps.Map(mapDivRef.current, {
        center,
        zoom: 13,
        mapId,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      communityMarkerRef.current = new googleMaps.maps.Marker({
        map: mapRef.current,
        position: center,
        title: getCommunityMarkerLabel(),
        zIndex: 1000,
      });

      communityMarkerRef.current.addListener("click", () => {
        if (!infoWindowRef.current) {
          infoWindowRef.current = new googleMaps.maps.InfoWindow();
        }
        infoWindowRef.current.setContent(
          `<div style="max-width:240px"><strong>${COMMUNITY_DISPLAY_NAME}</strong><p style="margin:0.35rem 0 0;font-size:0.85rem">${getCommunityMarkerLabel()}</p><p style="margin:0.5rem 0 0;font-size:0.85rem">Lennar townhome community in North Las Vegas</p></div>`,
        );
        infoWindowRef.current.open({
          map: mapRef.current,
          anchor: communityMarkerRef.current,
        });
      });

      mapReady.current = true;
      setMode("interactive");
      await runNearbySearch(activeCategory);
    } catch {
      setMode("fallback");
    }
  }, [activeCategory, runNearbySearch]);

  useEffect(() => {
    if (mode === "fallback" || observerStarted.current) {
      return;
    }
    const node = containerRef.current;
    if (!node) {
      return;
    }
    observerStarted.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          void initMap();
        }
      },
      { rootMargin: "120px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [initMap, mode]);

  useEffect(() => {
    if (mode === "interactive") {
      void runNearbySearch(activeCategory);
    }
  }, [activeCategory, mode, runNearbySearch]);

  const onCategoryKeyDown = (event: React.KeyboardEvent, id: AmenityCategoryId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveCategory(id);
    }
  };

  return (
    <div ref={containerRef} className="community-amenity-map" style={{ width: "100%" }}>
      <div
        role="toolbar"
        aria-label="Amenity category filters"
        className="amenity-map-filters"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "0.75rem",
        }}
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              id={`${filterGroupId}-${cat.id}`}
              aria-pressed={selected}
              aria-label={cat.ariaLabel}
              className="amenity-map-filter-chip"
              onClick={() => setActiveCategory(cat.id)}
              onKeyDown={(e) => onCategoryKeyDown(e, cat.id)}
              style={{
                minHeight: "44px",
                padding: "0.4rem 0.85rem",
                borderRadius: "999px",
                border: "1px solid color-mix(in srgb, currentColor 18%, transparent)",
                background: selected
                  ? "color-mix(in srgb, currentColor 12%, transparent)"
                  : "transparent",
                fontWeight: selected ? 700 : 500,
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className="amenity-map-canvas-wrap"
        style={{
          position: "relative",
          width: "100%",
          minHeight: MAP_MIN_HEIGHT_PX,
          borderRadius: "0.65rem",
          overflow: "hidden",
          border: "1px solid color-mix(in srgb, currentColor 12%, transparent)",
        }}
      >
        {mode === "fallback" ? (
          <iframe
            title={`Map of ${COMMUNITY_DISPLAY_NAME}, North Las Vegas`}
            src={COMMUNITY_MAP_EMBED_URL}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        ) : (
          <div
            ref={mapDivRef}
            role="img"
            aria-label={`Interactive map of amenities near ${COMMUNITY_DISPLAY_NAME}`}
            style={{ width: "100%", minHeight: MAP_MIN_HEIGHT_PX }}
          />
        )}
        {mode === "loading" ? (
          <div
            className="amenity-map-loading"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "color-mix(in srgb, currentColor 4%, transparent)",
              fontSize: "0.9rem",
            }}
          >
            Loading map…
          </div>
        ) : null}
      </div>

      {searchStatus ? (
        <p style={{ margin: "0.75rem 0 0", fontSize: "0.875rem", opacity: 0.9 }}>{searchStatus}</p>
      ) : null}

      {mode === "interactive" && places.length > 0 ? (
        <ul
          className="amenity-map-results"
          aria-live="polite"
          style={{
            margin: "1rem 0 0",
            paddingLeft: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            fontSize: "0.9rem",
          }}
        >
          {places.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong>
              {p.rating != null ? ` · ${p.rating}★` : ""}
              {p.address ? ` — ${p.address}` : ""}
              {" · "}
              <a href={p.directionsUrl} rel="noopener noreferrer" target="_blank">Directions</a>
            </li>
          ))}
        </ul>
      ) : null}

      {showStaticList ? (
        <div style={{ marginTop: "1.25rem" }}>
          <AmenityStaticList
            items={CURATED_AMENITIES}
            categoryId={activeCategory}
            heading={mode === "fallback" ? "Curated nearby places" : "Also nearby (verified list)"}
          />
        </div>
      ) : null}
    </div>
  );
}

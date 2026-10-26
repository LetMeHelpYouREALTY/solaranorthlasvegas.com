"use client";

import { AmenityStaticList } from "@/components/maps/AmenityStaticList";
import {
  buildCommunityInfoWindowContent,
  buildPlaceInfoWindowContent,
} from "@/components/maps/map-info-window";
import {
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  loadGoogleMaps,
  mapsAuthFailed,
} from "@/components/maps/load-google-maps";
import { searchCategory } from "@/components/maps/search-category-places";
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  COMMUNITY_CENTER,
  COMMUNITY_DISPLAY_NAME,
  COMMUNITY_MAP_EMBED_URL,
  CURATED_AMENITIES,
  getCommunityMarkerLabel,
  getCuratedForCategory,
  googleMapsDirectionsUrl,
} from "@/lib/community-amenities-config";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const MAP_MIN_HEIGHT_PX = 360;

type MapMode = "loading" | "interactive" | "fallback";

type NearbyPlaceRow = {
  id: string;
  name: string;
  address: string;
  directionsUrl: string;
};

function categoryById(id: AmenityCategoryId) {
  return AMENITY_CATEGORIES.find((c) => c.id === id) ?? AMENITY_CATEGORIES[0];
}

function curatedRowsForCategory(categoryId: AmenityCategoryId): NearbyPlaceRow[] {
  return getCuratedForCategory(categoryId).map((place) => ({
    id: `curated-${place.name}-${place.streetAddress}`,
    name: place.name,
    address: `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`,
    directionsUrl: googleMapsDirectionsUrl(
      `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`,
    ),
  }));
}

export function CommunityAmenityMap({
  defaultCategory = "grocery",
  showStaticList = true,
}: {
  defaultCategory?: AmenityCategoryId;
  showStaticList?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [mode, setMode] = useState<MapMode>(() => {
    if (!getGoogleMapsApiKey() || mapsAuthFailed) {
      return "fallback";
    }
    return "loading";
  });
  const [places, setPlaces] = useState<NearbyPlaceRow[]>(() =>
    !getGoogleMapsApiKey() ? curatedRowsForCategory(defaultCategory) : [],
  );
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

  const enterFallbackMode = useCallback(() => {
    clearMarkers();
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    mapRef.current = null;
    mapReady.current = false;
    infoWindowRef.current?.close();
    setMode("fallback");
    setPlaces(curatedRowsForCategory(activeCategory));
    setSearchStatus(null);
  }, [activeCategory, clearMarkers]);

  useEffect(() => {
    if (mapsAuthFailed) {
      enterFallbackMode();
    }
    const onAuthFailure = () => {
      enterFallbackMode();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallbackMode]);

  const runNearbySearch = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || !mapReady.current || mode !== "interactive") {
        return;
      }
      setSearchStatus("Searching nearby…");
      clearMarkers();

      const category = categoryById(categoryId);
      const center = { lat: COMMUNITY_CENTER.lat, lng: COMMUNITY_CENTER.lng };

      try {
        await loadGoogleMaps(getGoogleMapsApiKey() as string);
        const nearby = await searchCategory(center, categoryId, category.primaryTypes);
        const googleMaps = window.google;
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
          const coords = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() };
          const name = place.displayName ?? "Place";
          const address = place.formattedAddress ?? "";
          const directionsUrl =
            place.googleMapsURI ??
            googleMapsDirectionsUrl(address || `${name}, North Las Vegas, NV`);

          rows.push({
            id: `${name}-${address}`,
            name,
            address,
            directionsUrl,
          });

          const marker = new googleMaps.maps.Marker({
            map: mapRef.current,
            position: coords,
            title: name,
          });
          marker.addListener("click", () => {
            infoWindowRef.current?.setContent(
              buildPlaceInfoWindowContent(name, address, directionsUrl),
            );
            infoWindowRef.current?.open({ map: mapRef.current, anchor: marker });
          });
          markersRef.current.push(marker);
          bounds.extend(coords);
        }

        if (communityMarkerRef.current) {
          const pos = communityMarkerRef.current.getPosition();
          if (pos) {
            bounds.extend(pos);
          }
        }
        mapRef.current.fitBounds(bounds, 48);
        setPlaces(rows.length ? rows : curatedRowsForCategory(categoryId));
        setSearchStatus(rows.length ? null : "Showing curated list for this category.");
      } catch {
        setPlaces(curatedRowsForCategory(categoryId));
        setSearchStatus(null);
      }
    },
    [clearMarkers, mode],
  );

  const initMap = useCallback(async () => {
    if (mapsAuthFailed || !mapDivRef.current || mapReady.current) {
      return;
    }
    const key = getGoogleMapsApiKey();
    if (!key) {
      enterFallbackMode();
      return;
    }
    try {
      await loadGoogleMaps(key);
      const googleMaps = window.google;
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
          buildCommunityInfoWindowContent(
            COMMUNITY_DISPLAY_NAME,
            getCommunityMarkerLabel(),
            "Lennar townhome community in North Las Vegas",
          ),
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
      enterFallbackMode();
    }
  }, [activeCategory, enterFallbackMode, runNearbySearch]);

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
    } else if (mode === "fallback") {
      setPlaces(curatedRowsForCategory(activeCategory));
    }
  }, [activeCategory, mode, runNearbySearch]);

  const onCategoryKeyDown = (event: React.KeyboardEvent, id: AmenityCategoryId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveCategory(id);
    }
  };

  const showResultsList =
    places.length > 0 && (mode === "interactive" || mode === "fallback");

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

      {showResultsList ? (
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
              {p.address ? ` — ${p.address}` : ""}
              {" · "}
              <a href={p.directionsUrl} rel="noopener noreferrer" target="_blank">
                Directions
              </a>
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

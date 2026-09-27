"use client";

import { AMENITIES_PAGE_PATH, COMMUNITY_DISPLAY_NAME } from "@/lib/community-amenities-config";
import type { AmenityCategoryId } from "@/lib/community-amenities-config";
import dynamic from "next/dynamic";
import Link from "next/link";

const CommunityAmenityMap = dynamic(
  () => import("@/components/maps/CommunityAmenityMap").then((m) => m.CommunityAmenityMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="amenity-map-canvas-wrap"
        style={{
          minHeight: 360,
          borderRadius: "0.65rem",
          border: "1px solid color-mix(in srgb, currentColor 12%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.9rem",
          opacity: 0.85,
        }}
        aria-hidden="true"
      >
        Loading map…
      </div>
    ),
  },
);

type AmenityMapSectionProps = {
  heading: string;
  headingId: string;
  lead?: string;
  defaultCategory?: AmenityCategoryId;
  /** Hide duplicate static list on compact embeds */
  showStaticList?: boolean;
  showFullPageLink?: boolean;
  className?: string;
};

export function AmenityMapSection({
  heading,
  headingId,
  lead,
  defaultCategory,
  showStaticList = true,
  showFullPageLink = true,
  className = "content-panel amenity-map-section",
}: AmenityMapSectionProps) {
  return (
    <section className={className} aria-labelledby={headingId}>
      <h2 id={headingId}>{heading}</h2>
      {lead ? <p style={{ lineHeight: 1.65 }}>{lead}</p> : null}
      <CommunityAmenityMap defaultCategory={defaultCategory} showStaticList={showStaticList} />
      {showFullPageLink ? (
        <p style={{ margin: "1rem 0 0", fontSize: "0.9rem" }}>
          <Link href={AMENITIES_PAGE_PATH}>
            Full nearby amenities guide for {COMMUNITY_DISPLAY_NAME}
          </Link>
        </p>
      ) : null}
    </section>
  );
}

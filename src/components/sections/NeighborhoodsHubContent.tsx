import { NEIGHBORHOODS } from "@/lib/neighborhoods-data";
import Link from "next/link";

export function NeighborhoodsHubContent() {
  return (
    <>
      <section aria-labelledby="areas-heading">
        <h2 id="areas-heading">Las Vegas Valley areas</h2>
        <p>
          Each guide is written to help you compare lifestyle, commute, and housing context—not to
          replace a tour or inspection. Pick an area to read a focused overview.
        </p>
        <ul className="neighborhood-card-grid">
          {NEIGHBORHOODS.map((n) => (
            <li key={n.slug} className="neighborhood-card">
              <Link href={`/neighborhoods/${n.slug}`} className="neighborhood-card-link">
                <span className="neighborhood-card-title">{n.shortName}</span>
                <span className="neighborhood-card-desc">{n.lead.slice(0, 120)}…</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

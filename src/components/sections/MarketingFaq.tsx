import type { HomeFaqItem } from "@/lib/home-faq";
import { linkifyFaqAnswer } from "@/lib/linkify-faq-answer";

type MarketingFaqProps = {
  items: HomeFaqItem[];
  sectionTitle: string;
  sectionId: string;
  headingId: string;
};

export function MarketingFaq({ items, sectionTitle, sectionId, headingId }: MarketingFaqProps) {
  return (
    <section
      aria-labelledby={headingId}
      id={sectionId}
      className="marketing-faq-section"
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "2rem 1.5rem 3rem",
      }}
    >
      <h2
        id={headingId}
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
          textAlign: "center",
        }}
      >
        {sectionTitle}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {items.map((item) => (
          <article key={item.question}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              {item.question}
            </h3>
            <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
              {linkifyFaqAnswer(item.answer)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

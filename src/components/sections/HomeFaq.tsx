import { HOME_FAQ_ITEMS } from "@/lib/home-faq";

/**
 * Visible FAQ for AEO — questions mirror FAQPage JSON-LD (`HomeFaqJsonLd`).
 */
export function HomeFaq() {
  return (
    <section
      aria-labelledby="home-faq-heading"
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "2rem 1.5rem 3rem",
      }}
    >
      <h2
        id="home-faq-heading"
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
          textAlign: "center",
        }}
      >
        Questions about North Las Vegas real estate
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {HOME_FAQ_ITEMS.map((item) => (
          <article key={item.question}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              {item.question}
            </h3>
            <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SOLARA_FAQ_ITEMS } from "@/lib/solara-faq";

export function SolaraFaq() {
  return (
    <section
      aria-labelledby="solara-faq-heading"
      style={{
        maxWidth: "42rem",
        margin: "0 auto",
        padding: "2rem 1.5rem 3rem",
      }}
    >
      <h2
        id="solara-faq-heading"
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
          textAlign: "center",
        }}
      >
        Solara &amp; new construction FAQs
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {SOLARA_FAQ_ITEMS.map((item) => (
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

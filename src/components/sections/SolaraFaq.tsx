import { SOLARA_FAQ_ITEMS } from "@/lib/solara-faq";

export function SolaraFaq() {
  return (
    <section className="aeo-faq-section" aria-labelledby="solara-faq-heading">
      <h2 id="solara-faq-heading" className="v0-section-heading">
        Questions about working with Dr. Jan Duffy &amp; new construction
      </h2>
      <div className="aeo-faq-list">
        {SOLARA_FAQ_ITEMS.map((item) => (
          <article key={item.question} className="aeo-faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

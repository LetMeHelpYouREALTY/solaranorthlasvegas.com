import { HOME_FAQ_ITEMS } from "@/lib/home-faq";
import { linkifyFaqAnswer } from "@/lib/linkify-faq-answer";

/**
 * Visible FAQ for AEO — questions mirror FAQPage JSON-LD (`HomeFaqJsonLd`).
 */
export function HomeFaq() {
  return (
    <section className="aeo-faq-section" aria-labelledby="home-faq-heading">
      <h2 id="home-faq-heading" className="v0-section-heading">
        Questions about North Las Vegas real estate
      </h2>
      <div className="aeo-faq-list">
        {HOME_FAQ_ITEMS.map((item) => (
          <article key={item.question} className="aeo-faq-card">
            <h3>{item.question}</h3>
            <p>{linkifyFaqAnswer(item.answer)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

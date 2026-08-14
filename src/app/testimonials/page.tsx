import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE, testimonials } from "@/data/site";
import styles from "./testimonials.module.css";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Words from District Dermatology patients in McLean and Vienna, VA.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Testimonials"
        title="Words from our patients"
        lead={`${SITE.rating} star rating across ${SITE.reviewCount} reviews.`}
      />
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.rating}>
            <strong>{SITE.rating}</strong>
            <span>{SITE.reviewCount} reviews</span>
          </div>
          <div className={styles.grid}>
            {testimonials.map((t) => (
              <blockquote key={t.quote} className={styles.card}>
                <p>“{t.quote}”</p>
                <footer>
                  {t.attribution} · {t.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

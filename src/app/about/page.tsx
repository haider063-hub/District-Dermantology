import type { Metadata } from "next";
import { AboutImageSlider } from "@/components/AboutImageSlider";
import { PageHero } from "@/components/PageHero";
import { aboutParagraphs, SITE } from "@/data/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About the Practice",
  description:
    "Learn about District Dermatology, a premier medical, surgical, and cosmetic dermatology practice founded by Dr. Al Damavandy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Practice"
        title="A premier dermatology practice for the greater D.C. area"
        lead="Founded by Dr. Al Damavandy to deliver the best treatment solutions for the health and appearance of your skin."
      />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.copy}>
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
            <p>
              Call the office today at{" "}
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
            </p>
          </div>
          <AboutImageSlider />
        </div>
      </section>
    </>
  );
}

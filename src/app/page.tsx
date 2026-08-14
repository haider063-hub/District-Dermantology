import Image from "next/image";
import Link from "next/link";
import { DoctorsGrid } from "@/components/DoctorsGrid";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TestimonialRotator } from "@/components/TestimonialRotator";
import { aboutParagraphs, SITE } from "@/data/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TestimonialRotator />

      <section className={`section ${styles.about}`} id="about">
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutCopy}>
            <p className="section-label">About the practice</p>
            <h2 className="section-title">Care that feels personal</h2>
            <p className="section-lead">
              Premier medical, surgical, and cosmetic dermatology for patients
              across the greater Washington D.C. area.
            </p>
            {aboutParagraphs.slice(0, 2).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <div className={styles.aboutActions}>
              <Link href="/about" className="btn btn-outline">
                Read more
              </Link>
              <a href={SITE.phoneHref} className="btn btn-primary">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className={styles.aboutMedia}>
            <Image
              src="/images/clinic/about-section-image.png"
              alt="District Dermatology clinic"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.aboutImg}
            />
          </div>
        </div>
      </section>

      <ServicesGrid limit={8} />
      <DoctorsGrid />
      <FaqSection />
      <Locations />
    </>
  );
}

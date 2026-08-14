"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import styles from "./Hero.module.css";

const slides = [
  {
    src: "/images/clinic/team.png",
    alt: "District Dermatology physician team",
  },
  {
    src: "/images/clinic/skin-exam.png",
    alt: "Dermatologist performing a skin examination",
  },
  {
    src: "/images/clinic/laser-treatment.png",
    alt: "Physician performing a laser treatment",
  },
  {
    src: "/images/clinic/cosmetic-injection.png",
    alt: "Cosmetic injection treatment in clinic",
  },
];

const features = [
  {
    title: "Medical",
    text: "Acne, eczema, rosacea, and full-skin exams for every age.",
  },
  {
    title: "Surgical",
    text: "Mohs surgery and precise treatment for skin cancer and growths.",
  },
  {
    title: "Cosmetic",
    text: "Botox®, fillers, lasers, and HydraFacial for refined results.",
  },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Welcome">
      <div className={styles.media} aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${styles[`slide${i + 1}` as "slide1"]}`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={styles.img}
              unoptimized
            />
          </div>
        ))}
        <div className={styles.shade} />
      </div>

      <div className={styles.inner}>
        <div className="container">
          <div className={styles.content}>
            <p className={`${styles.eyebrow} reveal`}>
              Medical · Surgical · Cosmetic
            </p>
            <h1 className={`${styles.title} reveal reveal-delay-1`}>
              District Dermatology
            </h1>
            <p className={`${styles.headline} reveal reveal-delay-2`}>
              Skin care that works. Kept working.
            </p>
            <p className={`${styles.support} reveal reveal-delay-2`}>
              Board-certified dermatologists in McLean and Vienna delivering Mohs
              surgery, medical treatment, and advanced rejuvenation in a warm,
              modern practice.
            </p>
            <div className={`${styles.ctas} reveal reveal-delay-3`}>
              <a href={SITE.phoneHref} className={styles.btnPrimary}>
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/physicians" className={styles.btnSecondary}>
                Meet our physicians
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.featureBar}>
          <div className={`container ${styles.featureGrid}`}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.feature}>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

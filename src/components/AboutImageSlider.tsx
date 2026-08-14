"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./AboutImageSlider.module.css";

const slides = [
  {
    src: "/images/clinic/team.png",
    alt: "District Dermatology physician team",
  },
  {
    src: "/images/clinic/hallway.png",
    alt: "Clinic hallway",
  },
  {
    src: "/images/clinic/reception.png",
    alt: "Reception area",
  },
  {
    src: "/images/clinic/procedure-room.png",
    alt: "Procedure room",
  },
] as const;

export function AboutImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.slider} aria-roledescription="carousel" aria-label="Clinic photos">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.img}
            priority={i === 0}
          />
        </div>
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        aria-label="Previous photo"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        aria-label="Next photo"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
      >
        ›
      </button>

      <div className={styles.dots} role="tablist" aria-label="Slide controls">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

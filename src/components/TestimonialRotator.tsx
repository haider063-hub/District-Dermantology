"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";
import styles from "./TestimonialRotator.module.css";

export function TestimonialRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  const item = testimonials[index];

  return (
    <section className={styles.wrap} aria-label="Patient testimonials">
      <div className={`container ${styles.inner}`}>
        <blockquote className={styles.quote} key={item.quote}>
          <p>“{item.quote}”</p>
          <footer>
            <cite>
              {item.attribution}
              <span> · {item.source}</span>
            </cite>
          </footer>
        </blockquote>
        <div className={styles.dots} role="tablist" aria-label="Select testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.quote}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

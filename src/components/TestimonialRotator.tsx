"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/site";
import styles from "./TestimonialRotator.module.css";

function VerifiedIcon() {
  return (
    <svg
      className={styles.badgeIcon}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M8 1.2 9.7 2l1.9.3.9 1.7 1.7.9.3 1.9L16 8l-.5 1.7-.3 1.9-1.7.9-.9 1.7-1.9.3L8 14.8l-1.7-.5-1.9-.3-.9-1.7-1.7-.9L1 9.7 1.2 8l.5-1.7.3-1.9 1.7-.9.9-1.7L6.3 2 8 1.2Zm-.1 8.9 3.6-3.6-.9-.9-2.7 2.7-1.3-1.3-.9.9 2.2 2.2Z"
      />
    </svg>
  );
}

function ArrowIcon({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        d={dir === "prev" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TestimonialRotator() {
  const [index, setIndex] = useState(0);
  const [motion, setMotion] = useState<"next" | "prev">("next");
  const [dragging, setDragging] = useState(false);
  const count = testimonials.length;
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const pointerId = useRef<number | null>(null);

  useEffect(() => {
    if (dragging) return;
    const id = window.setInterval(() => {
      setMotion("next");
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => window.clearInterval(id);
  }, [count, index, dragging]);

  const go = (dir: "next" | "prev") => {
    setMotion(dir);
    setIndex((i) => (dir === "next" ? (i + 1) % count : (i - 1 + count) % count));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerId.current = e.pointerId;
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== e.pointerId) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const finishDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== e.pointerId) return;
    const delta = dragDeltaX.current;
    pointerId.current = null;
    dragDeltaX.current = 0;
    setDragging(false);

    if (Math.abs(delta) < 48) return;
    go(delta < 0 ? "next" : "prev");
  };

  const prev = testimonials[(index - 1 + count) % count];
  const current = testimonials[index];
  const next = testimonials[(index + 1) % count];

  return (
    <section className={`section ${styles.wrap}`} aria-label="Patient testimonials">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="section-label">Patient stories</p>
            <h2 className="section-title">Trusted by patients</h2>
          </div>
        </div>

        <div
          className={`${styles.carousel} ${dragging ? styles.dragging : ""}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          <div
            key={`${index}-${motion}`}
            className={`${styles.track} ${motion === "next" ? styles.slideNext : styles.slidePrev}`}
            aria-live="polite"
          >
            <article className={`${styles.panel} ${styles.side}`} aria-hidden="true">
              <p>“{prev.quote}”</p>
            </article>

            <blockquote className={`${styles.panel} ${styles.featured}`}>
              <p>“{current.quote}”</p>
              <footer>
                <cite>
                  <VerifiedIcon />
                  <span className={styles.name}>{current.attribution}</span>
                  <span className={styles.source}>{current.source}</span>
                </cite>
              </footer>
            </blockquote>

            <article className={`${styles.panel} ${styles.side}`} aria-hidden="true">
              <p>“{next.quote}”</p>
            </article>
          </div>

          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous testimonial"
            onClick={() => go("prev")}
          >
            <ArrowIcon dir="prev" />
          </button>

          <div className={styles.dots} role="tablist" aria-label="Select testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.quote}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                onClick={() => {
                  setMotion(i > index || (index === count - 1 && i === 0) ? "next" : "prev");
                  setIndex(i);
                }}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            aria-label="Next testimonial"
            onClick={() => go("next")}
          >
            <ArrowIcon dir="next" />
          </button>
        </div>
      </div>
    </section>
  );
}

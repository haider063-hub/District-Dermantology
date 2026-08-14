"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`section ${styles.section}`} id="faq" aria-labelledby="faq-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="section-label">Common questions</p>
          <h2 id="faq-heading" className="section-title">
            What patients ask before visiting us.
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className={`${styles.item} ${open ? styles.itemOpen : ""}`}
              >
                <button
                  id={buttonId}
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panel}
                >
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

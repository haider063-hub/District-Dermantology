import Link from "next/link";
import { SITE } from "@/data/site";
import styles from "./CtaBand.module.css";

export function CtaBand() {
  return (
    <section className={styles.band} aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 id="cta-heading" className={styles.title}>
            Ready for healthier, clearer skin?
          </h2>
          <p className={styles.lead}>
            Call our McLean or Vienna office—or send a message—and our team will
            help you find the right visit.
          </p>
        </div>
        <div className={styles.actions}>
          <a href={SITE.phoneHref} className={`btn ${styles.btnDark}`}>
            Call {SITE.phoneDisplay}
          </a>
          <Link href="/contact" className={`btn ${styles.btnLight}`}>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/site";
import styles from "./DoctorsGrid.module.css";

type Props = {
  limit?: number;
  showCta?: boolean;
  showHeader?: boolean;
  muted?: boolean;
};

export function DoctorsGrid({
  limit,
  showCta = true,
  showHeader = true,
  muted = false,
}: Props) {
  const list = typeof limit === "number" ? doctors.slice(0, limit) : doctors;

  return (
    <section
      className={`section ${styles.section} ${muted ? styles.sectionMuted : ""}`}
      id="physicians"
    >
      <div className="container">
        {showHeader ? (
          <div className={styles.head}>
            <div className={styles.headCopy}>
              <p className="section-label">Our doctors</p>
              <h2 className="section-title">Meet our physicians</h2>
              <p className="section-lead">
                Board-certified dermatologists dedicated to medical, surgical, and
                cosmetic skin care.
              </p>
            </div>
            {showCta ? (
              <Link href="/physicians" className={`btn btn-outline ${styles.cta}`}>
                View all physicians
              </Link>
            ) : null}
          </div>
        ) : null}

        <div className={styles.grid}>
          {list.map((doc) => (
            <article key={doc.slug} className={styles.item}>
              <div className={styles.photo}>
                <Image
                  src={doc.image}
                  alt={`${doc.name}, ${doc.credentials}`}
                  fill
                  sizes="120px"
                />
              </div>
              <h3>
                {doc.name}, {doc.credentials}
              </h3>
              <p>{doc.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

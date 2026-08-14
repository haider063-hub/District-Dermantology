import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";
import styles from "./ServicesGrid.module.css";

type Props = {
  limit?: number;
  showCta?: boolean;
};

export function ServicesGrid({ limit, showCta }: Props) {
  const list = typeof limit === "number" ? services.slice(0, limit) : services;
  const cta = showCta ?? Boolean(limit);

  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headCopy}>
            <p className="section-label">What we offer</p>
            <h2 className="section-title">Services</h2>
            <p className="section-lead">
              Complete medical, surgical, and cosmetic dermatology for every stage of
              skin health.
            </p>
          </div>
          {cta ? (
            <Link href="/services" className={`btn btn-outline ${styles.cta}`}>
              View all services
            </Link>
          ) : null}
        </div>

        <div className={styles.grid}>
          {list.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.item}
            >
              <div className={styles.photo}>
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 50vw, 220px"
                />
              </div>
              <div className={styles.copy}>
                <h3>{service.name}</h3>
                <span>more info</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

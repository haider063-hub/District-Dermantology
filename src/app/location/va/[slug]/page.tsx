import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, SITE } from "@/data/site";
import styles from "./location.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

const bySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = bySlug[slug];
  if (!loc) return { title: "Location" };
  return {
    title: `${SITE.name} ${loc.city}`,
    description: `Visit District Dermatology at ${loc.addressDisplay}. Call ${SITE.phoneDisplay}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = bySlug[slug];
  if (!loc) notFound();

  return (
    <>
      <header className={styles.hero}>
        <div className="container">
          <p className="section-label">Location</p>
          <h1 className={styles.title}>
            {SITE.name} {loc.city} Office
          </h1>
          <p className={styles.lead}>{loc.addressDisplay}</p>
          <div className={styles.actions}>
            <a href={SITE.phoneHref} className="btn btn-primary">
              {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-outline">
              Contact us
            </Link>
            {loc.yelpUrl ? (
              <a href={loc.yelpUrl} className="btn btn-outline" target="_blank" rel="noreferrer">
                View on Yelp
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2>Opening hours</h2>
            <ul className={styles.hours}>
              {loc.hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
            <h2>Get in touch</h2>
            <p className={styles.address}>{loc.addressDisplay}</p>
            <Link href="/contact" className={styles.contactLink}>
              Contact Us →
            </Link>
          </div>
          <div className={styles.map}>
            <iframe
              title={`Map of ${loc.city}`}
              src={`https://maps.google.com/maps?q=${loc.mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

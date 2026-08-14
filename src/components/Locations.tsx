import { locations, SITE } from "@/data/site";
import styles from "./Locations.module.css";

type Props = {
  heading?: string;
  showHours?: boolean;
};

export function Locations({ heading = "Our Locations", showHours = false }: Props) {
  return (
    <section className={`section ${styles.section}`} id="locations">
      <div className="container">
        <p className="section-label">Visit us</p>
        <h2 className="section-title">{heading}</h2>
        <p className="section-lead">Choose your preferred location in Northern Virginia.</p>

        <div className={styles.grid}>
          {locations.map((loc) => (
            <article key={loc.slug} className={styles.block}>
              <div className={styles.meta}>
                {loc.yelpUrl ? (
                  <a
                    href={loc.yelpUrl}
                    className={styles.yelp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to Yelp page"
                  >
                    Yelp
                  </a>
                ) : (
                  <span className={styles.yelpPlaceholder} />
                )}
                <a href={loc.path} className={styles.address} id={`location-address-${loc.slug}`}>
                  {loc.addressDisplay}
                </a>
                <a
                  className={`btn btn-outline ${styles.phone}`}
                  href={SITE.phoneHref}
                  aria-describedby={`location-address-${loc.slug}`}
                >
                  {SITE.phoneDisplay}
                </a>
                {showHours ? (
                  <ul className={styles.hours}>
                    {loc.hours.map((h) => (
                      <li key={h.day}>
                        <span>{h.day}</span>
                        <span>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

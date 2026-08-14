import Image from "next/image";
import Link from "next/link";
import { locations, SITE } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Image
            src="/images/logo-dark-bg.png"
            alt="District Dermatology"
            width={300}
            height={80}
            className={styles.logo}
            unoptimized
          />
          <p className={styles.rating}>
            <strong>{SITE.rating}</strong> star rating · {SITE.reviewCount} reviews
          </p>
          <SocialLinks />
          <div className={styles.ctaRow}>
            <a href={SITE.phoneHref} className="btn btn-primary">
              {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-on-dark">
              Book Appointment
            </Link>
            <a href={SITE.onlinePayUrl} className="btn btn-on-dark" target="_blank" rel="noreferrer">
              Online Pay
            </a>
          </div>
        </div>

        <div className={styles.locGrid}>
          {locations.map((loc) => (
            <div key={loc.slug} className={styles.loc}>
              <h3>{SITE.name}, {loc.city}</h3>
              <p>
                Phone (appointments): {SITE.phoneDisplay}
                <br />
                Phone (general inquiries): {SITE.phoneDisplay}
              </p>
              <p>
                Address:{" "}
                <Link href={loc.path}>{loc.addressDisplay}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© Copyright {year} District Dermatology</p>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/accessibility">Accessibility Notice</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

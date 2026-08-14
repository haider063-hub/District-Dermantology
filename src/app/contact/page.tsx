import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Locations } from "@/components/Locations";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact District Dermatology in McLean or Vienna, VA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Send a message"
        lead={`Call ${SITE.phoneDisplay} for appointments, or reach out with the form below.`}
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <ContactForm />
          <div className={styles.side}>
            <h2>Prefer to call?</h2>
            <a href={SITE.phoneHref} className="btn btn-primary">
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:info@districtderm.com`} className="btn btn-outline">
              Email the office
            </a>
          </div>
        </div>
      </section>
      <Locations heading="Our locations" />
    </>
  );
}

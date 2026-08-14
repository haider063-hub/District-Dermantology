import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  insuranceInNetwork,
  insurancePpoCarriers,
  SITE,
} from "@/data/site";
import styles from "./insurance.module.css";

export const metadata: Metadata = {
  title: "Insurance & Billing",
  description:
    "Insurance and billing information for District Dermatology in McLean and Vienna, VA.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        label="Insurance & Billing"
        title="Insurance and billing"
        lead="Transparent guidance for in-network coverage and self-pay options."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2>We are in-network providers with</h2>
            <ul>
              {insuranceInNetwork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>PPO plans of the following carriers</h2>
            <ul>
              {insurancePpoCarriers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className={styles.note}>
              Currently, we are out-of-network providers for all other health
              insurance plans but do have a reasonable self-pay fee schedule.
            </p>
          </div>

          <aside className={styles.aside}>
            <h3>Need to pay a bill?</h3>
            <p>
              Use Online Pay for balances, or call our team for billing
              questions.
            </p>
            <a href={SITE.onlinePayUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              Online Pay
            </a>
            <a href={SITE.phoneHref} className="btn btn-outline">
              Call {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-outline">
              Book Appointment
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

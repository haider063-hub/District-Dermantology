import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" lead="Use of the District Dermatology website." />
      <section className="section">
        <div className="container" style={{ maxWidth: "42rem", color: "var(--ink-soft)" }}>
          <p>
            Content on this site is for general information and does not create a
            doctor–patient relationship. Treatment recommendations are made only
            after an in-person or appropriate telehealth evaluation.
          </p>
        </div>
      </section>
    </>
  );
}

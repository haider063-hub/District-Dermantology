import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" lead="How District Dermatology handles information on this website." />
      <section className="section">
        <div className="container" style={{ maxWidth: "42rem", color: "var(--ink-soft)" }}>
          <p>
            This website collects only the information you choose to share through
            contact forms or by calling the practice. Do not submit protected health
            information through unsecured web forms. For clinical or billing
            questions, please call 703-992-9211.
          </p>
        </div>
      </section>
    </>
  );
}

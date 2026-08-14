import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Accessibility Notice" };

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility Notice"
        lead="We strive to make our digital experience usable for everyone."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: "42rem", color: "var(--ink-soft)" }}>
          <p>
            If you have difficulty accessing any content on this website, please
            contact us at{" "}
            <a href={SITE.phoneHref} style={{ color: "var(--brand-deep)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>{" "}
            and we will help you obtain the information you need.
          </p>
        </div>
      </section>
    </>
  );
}

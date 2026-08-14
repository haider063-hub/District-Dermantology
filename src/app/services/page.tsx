import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services & Conditions",
  description:
    "Explore medical, surgical, and cosmetic dermatology services at District Dermatology.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services & Conditions"
        title="What we offer"
        lead="From skin cancer screenings and Mohs surgery to Botox®, lasers, and HydraFacials."
      />
      <ServicesGrid />
    </>
  );
}

import type { Metadata } from "next";
import { DoctorsGrid } from "@/components/DoctorsGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Physicians",
  description:
    "Meet the board-certified dermatologists at District Dermatology in McLean and Vienna, VA.",
};

export default function PhysiciansPage() {
  return (
    <>
      <PageHero
        label="Physicians"
        title="Meet our physicians"
        lead="Experienced, board-certified dermatologists focused on thoughtful, patient-first care."
      />
      <DoctorsGrid showCta={false} showHeader={false} muted />
    </>
  );
}

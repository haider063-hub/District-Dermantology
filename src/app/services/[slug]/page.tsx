import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SITE, services } from "@/data/site";
import styles from "./service.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero label="Services & Conditions" title={service.name} lead={service.summary} />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.media}>
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.copy}>
            <p>
              At District Dermatology, our board-certified physicians tailor{" "}
              {service.name.toLowerCase()} care to your goals—whether you need
              medical treatment, surgical expertise, or cosmetic refinement.
            </p>
            <p>
              Call our McLean or Vienna office at{" "}
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> to speak with our
              team about {service.name.toLowerCase()} care.
            </p>
            <div className={styles.actions}>
              <a href={SITE.phoneHref} className="btn btn-primary">
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/contact" className="btn btn-outline">
                Contact us
              </Link>
              <Link href="/services" className="btn btn-outline">
                All services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

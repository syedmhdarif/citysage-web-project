import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Smart City Projects & Case Studies — Real-World Urban AI Deployments",
  description:
    "Explore CitySage's smart city projects across Malaysia: KL smart waste pilot (28% cost reduction), Penang transit optimisation (19% commute improvement), Johor air-quality monitoring, Cyberjaya smart campus, Putrajaya digital twin, and Iskandar green corridor mapping.",
  alternates: { canonical: "https://citysage.my/project/" },
  openGraph: {
    title: "Smart City Projects & Case Studies — Real-World Urban AI Deployments",
    description:
      "Real-world smart city deployments across Malaysia — from smart waste management to city-scale digital twins. See measurable impact with AI-driven urban intelligence.",
    url: "https://citysage.my/project/",
  },
};

export default function ProjectPage() {
  return (
    <>
      <Hero
        title="Projects & Case Studies"
        subtitle="Real-world deployments across Southeast Asia — from smart waste pilots to city-scale digital twins."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} title={p.title} description={p.description} badge={p.category} />
          ))}
        </div>
      </section>
    </>
  );
}

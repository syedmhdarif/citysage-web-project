import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Smart City Projects & Case Studies — Real-World Urban AI Deployments",
  description:
    "Explore CitySage's smart city projects across Malaysia: MD Analytics AI Copilot, KLUO RoadSense, MUO NSCP 2.0 Smart City Platform, JUPEM MyCartoGo Enhancements, and SCOUT JCorp Supply Chain Control Tower.",
  alternates: { canonical: "https://citysage.my/project/" },
  openGraph: {
    title: "Smart City Projects & Case Studies — Real-World Urban AI Deployments",
    description:
      "Real-world AI-powered urban intelligence projects across Malaysia — from agentic AI copilots to supply chain control towers. See measurable impact with CitySage.",
    url: "https://citysage.my/project/",
  },
};

export default function ProjectPage() {
  return (
    <>
      <Hero
        title="Projects & Case Studies"
        subtitle="Real-world AI-powered urban intelligence deployments across Malaysia — from agentic AI copilots to supply chain control towers."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              description={p.description}
              badge={p.category}
              image={p.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Urban AI Research — Peer-Reviewed Papers & Technical Reports",
  description:
    "Read CitySage's peer-reviewed research on urban AI: predictive maintenance with graph neural networks, transit optimisation with reinforcement learning, urban heat-island mitigation, and real-time air quality forecasting. Co-authored with UTM, UMPSA, and Penang Institute.",
  alternates: { canonical: "https://citysage.my/ecosystem/research/" },
};

const papers = [
  { title: "Predictive Maintenance for Urban Water Networks Using Graph Neural Networks", authors: "CitySage Research Lab & UTM", year: 2026 },
  { title: "Optimising Bus Rapid Transit Corridors with Multi-Agent Reinforcement Learning", authors: "CitySage & Penang Institute", year: 2025 },
  { title: "Urban Heat-Island Mitigation: A Data-Driven Approach to Green Corridor Planning", authors: "CitySage & UMPSA", year: 2025 },
  { title: "Real-Time Air Quality Forecasting with Sparse Sensor Networks", authors: "CitySage Research Lab", year: 2025 },
];

export default function ResearchPage() {
  return (
    <>
      <Hero
        title="Research"
        subtitle="Peer-reviewed research and technical reports from our collaborations with universities and government labs."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="space-y-6">
          {papers.map((p) => (
            <article key={p.title} className="rounded-xl border border-border bg-card p-6">
              <span className="text-xs font-medium text-accent">{p.year}</span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-md text-muted">{p.authors}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

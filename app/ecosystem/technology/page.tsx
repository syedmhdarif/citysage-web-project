import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Technology Stack — AI, IoT, Geospatial & Cloud Infrastructure",
  description:
    "Explore CitySage's technology stack: AI and machine learning models, IoT edge computing, geospatial analytics with GIS and satellite imagery, and scalable cloud data platforms powering urban intelligence across Southeast Asia.",
  alternates: { canonical: "https://citysage.my/ecosystem/technology/" },
};

const stack = [
  { title: "AI & Machine Learning", desc: "Large-language models, computer vision, and time-series forecasting tuned for urban domains.", icon: "🤖" },
  { title: "IoT & Edge Computing", desc: "Low-power sensors, LoRaWAN gateways, and edge processors for real-time city-scale data capture.", icon: "📡" },
  { title: "Geospatial Analytics", desc: "GIS pipelines, satellite imagery processing, and 3D digital twin rendering.", icon: "🌍" },
  { title: "Cloud & Data Platform", desc: "Scalable data lakes, streaming pipelines, and interactive dashboards on modern cloud infrastructure.", icon: "☁️" },
];

export default function TechnologyPage() {
  return (
    <>
      <Hero
        label="// Tech Stack"
        title="Technology"
        subtitle="The technical foundations powering CitySage's urban intelligence platform."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {stack.map((item) => (
            <div key={item.title} className="group rounded border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground-bright">{item.title}</h3>
              <p className="mt-2 text-md leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

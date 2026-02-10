import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "CitySage Academy — Smart City Training & Professional Certification",
  description:
    "Upskill with CitySage Academy's practitioner-led programmes: Smart City Fundamentals, AI for Urban Planners, Data-Driven Governance, and Urban IoT certification. Hands-on training with real city datasets for planners, engineers, and city leaders.",
  alternates: { canonical: "https://citysage.my/academy/" },
  openGraph: {
    title: "CitySage Academy — Smart City Training & Professional Certification",
    description:
      "Practitioner-led smart city training programmes covering AI, IoT, data governance, and urban planning. Earn a CitySage Professional Certificate.",
    url: "https://citysage.my/academy/",
  },
};

const programmes = [
  {
    title: "Smart City Fundamentals",
    description: "A 5-day intensive covering urban data analytics, IoT sensor networks, and AI applications in city management.",
    icon: "📘",
  },
  {
    title: "AI for Urban Planners",
    description: "Hands-on workshops teaching planners how to use AI workers for zoning analysis, traffic modelling, and environmental assessment.",
    icon: "🧠",
  },
  {
    title: "Data-Driven Governance",
    description: "Executive programme for city leaders on leveraging dashboards, KPIs, and evidence-based policy-making.",
    icon: "📈",
  },
  {
    title: "Urban IoT & Sensor Networks",
    description: "Technical certification covering sensor deployment, edge computing, and data pipeline architecture for smart cities.",
    icon: "⚙️",
  },
];

export default function AcademyPage() {
  return (
    <>
      <Hero
        label="// Learning"
        title="CitySage Academy"
        subtitle="Building capacity for the next generation of smart city professionals. Our programmes blend hands-on technical training with real-world urban context."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Curriculum</p>
        <h2 className="text-center text-4xl font-bold text-foreground-bright">Programmes</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-lg text-muted">
          Designed for urban planners, engineers, data analysts, and city leaders.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {programmes.map((p) => (
            <Card key={p.title} title={p.title} description={p.description} icon={p.icon} />
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <section className="relative bg-background-alt px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Advantages</p>
          <h2 className="text-4xl font-bold text-foreground-bright">Why Train With Us?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Practitioner-Led", desc: "All courses taught by active smart-city consultants and AI engineers." },
              { title: "Project-Based", desc: "Every programme includes a capstone project using real city datasets." },
              { title: "Certified", desc: "Graduates receive a CitySage Professional Certificate recognised across the region." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-foreground-bright">{item.title}</h3>
                <p className="mt-2 text-md text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

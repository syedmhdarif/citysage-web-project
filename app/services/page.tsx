import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Smart City Services & Solutions — Consulting, AI Deployment & IoT Integration",
  description:
    "CitySage offers end-to-end smart city services: AI worker deployment, urban data analytics platforms, IoT sensor integration, capacity building, and strategic consulting for municipalities and developers across Malaysia and Southeast Asia.",
  alternates: { canonical: "https://citysage.my/services/" },
  openGraph: {
    title: "Smart City Services & Solutions — Consulting, AI Deployment & IoT Integration",
    description:
      "From strategy to deployment — smart city consulting, AI agent deployment, data analytics platforms, and urban IoT integration for data-driven urban management.",
    url: "https://citysage.my/services/",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        label="// What We Do"
        title="Services & Solutions"
        subtitle="From strategic consulting to hands-on AI deployment, CitySage delivers the full stack of urban intelligence services."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} title={s.title} description={s.description} icon={s.icon} />
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* How We Work */}
      <section className="relative bg-background-alt px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Process</p>
          <h2 className="text-center text-4xl font-bold text-foreground-bright">How We Work</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Discover", desc: "We audit existing data sources, infrastructure, and pain points to build a baseline understanding." },
              { step: "02", title: "Design", desc: "Our team architects a tailored solution combining AI workers, dashboards, and IoT integrations." },
              { step: "03", title: "Deploy", desc: "We implement, train your team, and provide ongoing monitoring and optimisation support." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-block rounded border border-accent/20 bg-accent/5 px-4 py-2 font-mono text-sm font-bold text-accent">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground-bright">{item.title}</h3>
                <p className="mt-2 text-md text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

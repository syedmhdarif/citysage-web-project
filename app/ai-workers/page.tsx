import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { aiWorkers } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Workers — Domain-Specific AI Agents for Urban Planning & City Management",
  description:
    "Meet CitySage's AI workers: C-Rose (geospatial AI), C-Siti (urban planning), C-Kimi (data governance), and C-Ruma (housing strategy). Purpose-built AI agents that automate urban analysis, zoning optimisation, and city management workflows.",
  alternates: { canonical: "https://citysage.my/ai-workers/" },
  openGraph: {
    title: "AI Workers — Domain-Specific AI Agents for Urban Planning & City Management",
    description:
      "Purpose-built AI agents for geospatial analysis, urban planning, data governance, and housing strategy. Automate complex city management workflows with CitySage AI workers.",
    url: "https://citysage.my/ai-workers/",
  },
};

export default function AIWorkersPage() {
  return (
    <>
      <Hero
        title="AI Workers"
        subtitle="Domain-specific AI agents purpose-built for urban challenges. Each worker specialises in a critical dimension of city management."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {aiWorkers.map((w) => (
            <Link key={w.slug} href={`/ai-workers/${w.slug}`} className="group">
              <div className="relative flex h-full flex-col overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
                {/* Top line glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />

                {/* GIF image */}
                <div className="relative aspect-[1.2/1] w-full overflow-hidden bg-background">
                  <img
                    src={w.image}
                    alt={`${w.name} — ${w.role} AI agent by CitySage`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-block w-fit rounded border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {w.role}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground-bright">{w.name}</h3>
                  <p className="mt-2 text-md leading-relaxed text-muted">{w.summary}</p>
                  <span className="mt-auto pt-4 font-mono text-xs text-accent/50 transition-colors group-hover:text-accent">
                    explore &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

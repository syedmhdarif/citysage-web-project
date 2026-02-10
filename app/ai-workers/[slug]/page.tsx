import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aiWorkers } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return aiWorkers.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const worker = aiWorkers.find((w) => w.slug === slug);
  if (!worker) return {};
  return {
    title: `${worker.name} — ${worker.role} | CitySage AI Workers`,
    description: `${worker.summary} Explore ${worker.name}'s capabilities: ${worker.capabilities.join(", ")}. Designed for ${worker.useCases.join(", ")}.`,
    alternates: { canonical: `https://citysage.my/ai-workers/${worker.slug}/` },
    openGraph: {
      title: `${worker.name} — ${worker.role}`,
      description: worker.summary,
      url: `https://citysage.my/ai-workers/${worker.slug}/`,
      images: [{ url: worker.image, alt: `${worker.name} — ${worker.role}` }],
    },
  };
}

export default async function AIWorkerDetail({ params }: Props) {
  const { slug } = await params;
  const worker = aiWorkers.find((w) => w.slug === slug);
  if (!worker) notFound();

  return (
    <>
      {/* Header card with image */}
      <section className="relative bg-surface px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-scan-lines" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center">
            {/* Agent GIF */}
            <div className="w-32 shrink-0 overflow-hidden rounded border border-border md:w-40">
              <img
                src={worker.image}
                alt={`${worker.name} — ${worker.role} AI agent by CitySage`}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Info */}
            <div>
              <span className="inline-block rounded border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                {worker.role}
              </span>
              <h1 className="text-glow mt-4 text-3xl font-extrabold tracking-tight text-foreground-bright sm:text-4xl md:text-5xl">{worker.name}</h1>
              <p className="mt-3 max-w-2xl text-base text-muted sm:mt-4 sm:text-lg">{worker.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* Capabilities */}
        <h2 className="text-2xl font-bold text-foreground-bright">Capabilities</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {worker.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2 text-muted">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {cap}
            </li>
          ))}
        </ul>

        {/* Use Cases */}
        <h2 className="mt-12 text-2xl font-bold text-foreground-bright">Use Cases</h2>
        <ul className="mt-4 space-y-2">
          {worker.useCases.map((uc) => (
            <li key={uc} className="flex items-start gap-2 text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {uc}
            </li>
          ))}
        </ul>

        {/* Example Interactions */}
        <h2 className="mt-12 text-2xl font-bold text-foreground-bright">Example Interaction</h2>
        {worker.interactions.map((ix, i) => (
          <div key={i} className="mt-4 space-y-3 rounded border border-border bg-card p-6">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">You</span>
              <p className="mt-1 text-md text-foreground">{ix.question}</p>
            </div>
            <div className="border-t border-border pt-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">{worker.name}</span>
              <p className="mt-1 text-md text-muted">{ix.answer}</p>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/request-demo"
            className="inline-block rounded border border-accent/50 bg-accent/10 px-8 py-3 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
          >
            Request a Demo of {worker.name}
          </Link>
        </div>
      </div>
    </>
  );
}

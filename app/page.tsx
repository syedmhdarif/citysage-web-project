import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import EmbedFrame from "@/components/EmbedFrame";
import HeroVisual from "@/components/HeroVisual";
import InstagramFeed from "@/components/InstagramFeed";
import { services, aiWorkers, projects } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "https://citysage.my/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CitySage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitySage is an AI-powered urban intelligence platform based in Kuala Lumpur, Malaysia. It deploys specialised AI workers that help municipalities and developers make data-driven decisions for smarter, more sustainable urban development across Southeast Asia.",
      },
    },
    {
      "@type": "Question",
      name: "What are CitySage AI Workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitySage AI Workers are domain-specific AI agents purpose-built for urban challenges. They include C-Rose (geospatial AI for satellite imagery and spatial analysis), C-Siti (urban planning and zoning optimisation), C-Kimi (data governance and compliance), and C-Ruma (housing affordability and community strategy).",
      },
    },
    {
      "@type": "Question",
      name: "What smart city services does CitySage offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitySage offers smart city consulting, AI worker deployment, urban data analytics platforms, IoT sensor integration, capacity building and training through CitySage Academy, and collaborative R&D with universities and government labs.",
      },
    },
    {
      "@type": "Question",
      name: "Where does CitySage operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitySage is headquartered in Kuala Lumpur, Malaysia, and operates across Southeast Asia. Projects span Kuala Lumpur, Penang, Johor Bahru, Cyberjaya, Putrajaya, and Iskandar Malaysia.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Hero
        layout="split"
        label="// Urban Intelligence Platform"
        title="AI-Powered Urban Intelligence"
        subtitle="CitySage deploys specialised AI workers that help cities plan smarter, move faster, and grow sustainably. From traffic optimisation to environmental monitoring, we turn urban data into actionable insight."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
      >
        <HeroVisual />
      </Hero>

      {/* Video Showcase */}
      <section className="relative bg-background-alt px-4 py-14 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Watch
          </p>
          <h2 className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            The Future of Urban Intelligence
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
            Discover how CitySage is transforming urban intelligence with AI-driven solutions. Our latest video dives into cutting-edge innovations in smart cities, geospatial analytics, and sustainable urban planning. 🚀
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-border shadow-[0_0_30px_rgba(74,222,128,0.06)]">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/GX0YF4G4vwE"
                title="CitySage — Urban Intelligence & Smart City Innovation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Smart City Solutions */}
      <section aria-labelledby="solutions-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
          // Solutions
        </p>
        <h2 id="solutions-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
          Wise City Solutions
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
          End-to-end AI and IoT capabilities that help municipalities transition to data-driven urban management — from consulting and strategy to deployment and monitoring.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              title={s.title}
              description={s.description}
              icon={s.icon}
              href="/services"
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* AI Workers for Urban Planning */}
      <section aria-labelledby="ai-workers-heading" className="relative bg-background-alt px-4 py-14 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // AI Workers
          </p>
          <h2 id="ai-workers-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Meet Our AI Workers
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
            Domain-specific AI agents purpose-built for urban challenges — from geospatial analysis and zoning optimisation to data governance and housing strategy.
          </p>
          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {aiWorkers.map((w) => (
              <Link key={w.slug} href={`/ai-workers/${w.slug}`} className="group">
                <article className="relative flex h-full flex-col overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                    <img
                      src={w.image}
                      alt={`${w.name} — ${w.role} AI agent by CitySage`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <span className="mb-2 inline-block w-fit rounded border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                      {w.role}
                    </span>
                    <h3 className="font-semibold text-foreground-bright">{w.name}</h3>
                    <p className="mt-1 line-clamp-2 text-md leading-relaxed text-muted">{w.summary}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Smart City Case Studies */}
      <section aria-labelledby="projects-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
          // Case Studies
        </p>
        <h2 id="projects-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
          Smart City Projects &amp; Case Studies
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
          Real-world AI-driven urban intelligence deployments across Malaysia and Southeast Asia — delivering measurable impact in waste management, transit, air quality, and infrastructure.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Card
              key={p.title}
              title={p.title}
              description={p.description}
              badge={p.category}
              href="/project"
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* UrbanData AI Chat Interface */}
      <section aria-labelledby="urbandata-heading" className="relative bg-background-alt px-4 py-14 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Live Interface
          </p>
          <h2 id="urbandata-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Try UrbanData AI
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
            Chat with our urban intelligence engine — ask about city data, planning metrics, or sustainability insights for Malaysian cities and beyond.
          </p>
          <div className="mt-10">
            <EmbedFrame src="https://urbandata.my/embed" title="UrbanData AI Chat — Urban Intelligence Engine by CitySage" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Instagram Feed */}
      <section aria-labelledby="instagram-heading" className="relative bg-background-alt px-4 py-14 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Follow Us
          </p>
          <h2 id="instagram-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Latest from Instagram
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
            Stay updated with our latest insights on AI-powered urban planning, smart city innovations, and community-driven development.
          </p>
          <InstagramFeed />
          <div className="mt-8 text-center">
            <a
              href="https://instagram.com/citysage.my"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent/70 transition-colors hover:text-accent"
            >
              @citysage.my &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Trusted By Municipalities & Institutions */}
      <section aria-labelledby="partners-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <h2 id="partners-heading" className="sr-only">Trusted Partners and Institutions</h2>
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          // Trusted by Municipalities &amp; Institutions
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-4">
          {["DBKL", "Penang State Gov", "MDEC", "Iskandar Regional Dev Authority", "UTM", "UMPSA"].map((name) => (
            <span
              key={name}
              className="rounded border border-border/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-accent/20 hover:text-muted sm:px-4 sm:py-2 sm:text-[11px]"
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

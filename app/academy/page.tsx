import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "CitySage Academy — Smart City Training & Professional Certification",
  description:
    "CitySage Academy develops skills and knowledge for responsible AI-driven urban intelligence. Structured learning pathways across Beginner, Intermediate, and Advanced levels for urban planners, policymakers, and AI practitioners. Aligned with Industry 5.0 principles.",
  alternates: { canonical: "https://citysage.my/academy/" },
  openGraph: {
    title: "CitySage Academy — Smart City Training & Professional Certification",
    description:
      "Structured learning pathways for responsible AI-driven urban intelligence. Practitioner-led programmes for urban planners, policymakers, and smart city professionals.",
    url: "https://citysage.my/academy/",
  },
};

const levels = [
  {
    level: "01",
    title: "Beginner",
    audience:
      "Designed for individuals who are new to urban intelligence, smart cities, or AI integration.",
    focusAreas: [
      "Introduction to Urban Intelligence",
      "Fundamentals of Artificial Intelligence in City Planning",
      "Basics of ESG and Sustainable Urban Development",
      "Foundations of Urban Data Systems",
      "Understanding Human-AI Collaboration",
    ],
    outcome:
      "Participants gain foundational knowledge and conceptual clarity to understand how AI integrates into urban ecosystems.",
  },
  {
    level: "02",
    title: "Intermediate",
    audience:
      "Designed for professionals with prior exposure to urban systems, planning, or technology who want to deepen practical capabilities.",
    focusAreas: [
      "Applied AI in Urban Planning Workflows",
      "Governance Frameworks for Smart Cities",
      "Data Interpretation and Decision Support Systems",
      "ESG Implementation Strategies",
      "Human-AI Collaboration in Operational Contexts",
    ],
    outcome:
      "Participants develop analytical and applied skills to implement AI-driven urban solutions responsibly.",
  },
  {
    level: "03",
    title: "Advanced",
    audience:
      "Designed for senior professionals, strategists, policymakers, and transformation leaders.",
    focusAreas: [
      "AI Strategy for Urban Transformation",
      "Advanced ESG and Net Zero Planning Integration",
      "Intelligent Infrastructure Modeling and Simulation",
      "Policy Architecture for Responsible AI Deployment",
      "Industry 5.0 Urban Ecosystem Integration",
    ],
    outcome:
      "Participants build strategic leadership capability to design and govern long-term AI-enabled urban systems.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Understanding",
    description:
      "Promoting deep comprehension of urban systems combined with artificial intelligence technologies. Learners are guided to understand not only how AI tools function, but why they matter in real-world city planning and development contexts.",
  },
  {
    number: "02",
    title: "Governance",
    description:
      "Advocating responsible AI deployment through ethical implementation, transparent data usage, accountability in decision-making, and governance models aligned with ESG principles.",
  },
  {
    number: "03",
    title: "Human Expertise",
    description:
      "Reinforcing that AI augments human expertise rather than replaces it. Participants learn to collaborate effectively with AI systems, interpret AI-generated insights critically, and integrate human-centered design into smart city initiatives.",
  },
];

const objectives = [
  "Develop urban professionals capable of leveraging AI responsibly",
  "Promote governance-first thinking in smart city development",
  "Support sustainable and ESG-aligned urban growth",
  "Encourage interdisciplinary collaboration between technology and planning professionals",
];

const targetAudience = [
  "Urban planners and city designers",
  "Government officials and policymakers",
  "Smart city strategists",
  "Sustainability and ESG professionals",
  "Technology leaders and AI practitioners",
  "Academic researchers in urban development and AI",
];

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const galleryImages = [
  { src: `${basePath}/academy/gallery1.jpg`, alt: "CitySage Academy training session — smart city fundamentals workshop" },
  { src: `${basePath}/academy/gallery2.jpg`, alt: "CitySage Academy participants collaborating on urban data analysis" },
  { src: `${basePath}/academy/gallery3.jpg`, alt: "Hands-on AI workshop for urban planners at CitySage Academy" },
  { src: `${basePath}/academy/gallery4.jpg`, alt: "CitySage Academy lecture on sustainable urban development" },
  { src: `${basePath}/academy/gallery5.jpg`, alt: "Group discussion on governance frameworks for smart cities" },
  { src: `${basePath}/academy/gallery6.jpg`, alt: "CitySage Academy capstone project presentation" },
  { src: `${basePath}/academy/gallery7.jpg`, alt: "Urban IoT sensor networks demonstration at CitySage Academy" },
  { src: `${basePath}/academy/gallery8.jpg`, alt: "CitySage Academy certification ceremony for smart city professionals" },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        label="// Learning"
        title="CitySage Academy"
        subtitle="Developing Skills and Knowledge for Responsible AI-Driven Urban Intelligence"
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="text-md leading-relaxed text-muted">
          CitySage Academy is dedicated to advancing understanding, governance, and human expertise in
          urban intelligence. The Academy supports professionals, planners, policymakers, and
          organizations in developing the knowledge and capabilities required to integrate AI
          responsibly into urban systems.
        </p>
        <p className="mt-4 text-md leading-relaxed text-muted">
          The Academy aligns with <span className="font-semibold text-accent">Industry 5.0</span> principles,
          ensuring technological advancement remains human-centric, ethical, and environmentally
          conscious.
        </p>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Module Overview */}
      <section className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Curriculum Overview
          </p>
          <h2 className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Module Overview
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
            A structured curriculum designed to build progressive expertise across all dimensions of urban intelligence.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-border shadow-[0_0_30px_rgba(74,222,128,0.06)]">
            <img
              src={`${basePath}/academy/moduleOverview.jpg`}
              alt="CitySage Academy module overview — structured learning pathways from beginner to advanced level"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Programme Structure */}
      <section aria-labelledby="programme-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
          // Programme Structure
        </p>
        <h2 id="programme-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
          Three Progressive Levels
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
          CitySage Academy offers structured learning pathways organized into three progressive levels.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className="group relative flex flex-col overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-sm font-bold text-accent">
                    {lvl.level}
                  </span>
                  <h3 className="text-xl font-bold text-foreground-bright">{lvl.title}</h3>
                </div>
                <p className="mt-3 text-md leading-relaxed text-muted">{lvl.audience}</p>

                <h4 className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent/50">
                  // Focus Areas
                </h4>
                <ul className="mt-3 space-y-2">
                  {lvl.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                      {area}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded border border-accent/10 bg-accent/5 p-3">
                  <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent/70">
                    // Outcome
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{lvl.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Core Philosophy */}
      <section aria-labelledby="philosophy-heading" className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Foundation
          </p>
          <h2 id="philosophy-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Core Philosophy
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
            CitySage Academy is built around three foundational pillars.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative overflow-hidden rounded border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />
                <span className="inline-block rounded border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-sm font-bold text-accent">
                  {pillar.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground-bright">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-md leading-relaxed text-muted">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Objectives & Target Audience */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Objectives */}
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
              // Objectives
            </p>
            <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Our Objectives</h2>
            <p className="mt-4 text-md leading-relaxed text-muted">
              CitySage Academy aims to:
            </p>
            <ul className="mt-4 space-y-3">
              {objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2 text-md text-muted">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
              // Who It&apos;s For
            </p>
            <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Target Audience</h2>
            <p className="mt-4 text-md leading-relaxed text-muted">
              CitySage Academy is designed for:
            </p>
            <ul className="mt-4 space-y-3">
              {targetAudience.map((audience) => (
                <li key={audience} className="flex items-start gap-2 text-md text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Alignment with Vision */}
      <section className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Our Purpose
          </p>
          <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Aligned with the CitySage Vision
          </h2>
          <p className="mt-6 text-md leading-relaxed text-muted">
            CitySage Academy supports the broader mission of CitySage by strengthening the knowledge
            base required to build intelligent, sustainable, and resilient cities. It bridges advanced
            AI technologies with real-world urban implementation.
          </p>
          <p className="mt-4 text-md leading-relaxed text-muted">
            Through education and capability development, the Academy empowers cities to make informed,
            responsible, and future-ready decisions.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Gallery */}
      <section aria-labelledby="gallery-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
          // Gallery
        </p>
        <h2 id="gallery-heading" className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
          Inside the Academy
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
          Highlights from our training sessions, workshops, and collaborative learning experiences.
        </p>

        {/* Collage grid — 2 cols on mobile, 2 on sm, 4 on lg with masonry */}
        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {/* Row 1: 2 tall + 2 normal */}
          <div className="row-span-2">
            <div className="group h-full overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="group overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="group overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="row-span-2 hidden lg:block">
            <div className="group h-full overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div>
            <div className="group overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="group overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 3: wide images */}
          <div className="col-span-2">
            <div className="group overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="group overflow-hidden rounded border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]">
              <img
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* CTA */}
      <section className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">
            // Get Started
          </p>
          <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">
            Ready to Build the Future of Cities?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Join CitySage Academy and gain the skills to lead responsible AI-driven urban transformation.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="rounded border border-accent/50 bg-accent/10 px-8 py-3 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
            >
              Get in Touch
            </Link>
            <Link
              href="/request-demo"
              className="rounded border border-border px-8 py-3 font-mono text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:text-accent"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

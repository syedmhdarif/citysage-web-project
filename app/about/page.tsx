import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About CitySage — Our Mission, Team & Vision for Smarter Cities",
  description:
    "Learn about CitySage, the AI-powered urban intelligence company founded in Kuala Lumpur. Meet our leadership team, discover our ESG-aligned mission, and see how we help municipalities across Malaysia and Southeast Asia build smarter, more sustainable cities.",
  alternates: { canonical: "https://citysage.my/about/" },
  openGraph: {
    title: "About CitySage — Our Mission, Team & Vision for Smarter Cities",
    description:
      "Founded by leaders in AI and urban development, CitySage empowers city planners and governments with data-driven intelligence for sustainable urban growth.",
    url: "https://citysage.my/about/",
  },
};

const stats = [
  { value: "50+", label: "City Projects Delivered" },
  { value: "12", label: "Municipalities Served" },
  { value: "4", label: "AI Workers Deployed" },
  { value: "3M+", label: "Data Points Processed Daily" },
];

const values = [
  { letter: "C", word: "Core", desc: "Delivering the core technological advancements needed to build smarter, safer, and more sustainable cities using AI." },
  { letter: "I", word: "Intelligence", desc: "Using AI and machine learning to drive data-informed decisions for urban development." },
  { letter: "T", word: "Transparency", desc: "Providing open, data-driven insights to cities, ensuring planners can make wise decisions that citizens trust." },
  { letter: "Y", word: "Yielding Sustainability", desc: "Optimizing resource use, energy management, and green space allocation in urban environments." },
  { letter: "S", word: "Safety", desc: "Mitigating risks of infrastructure failures and enhancing public safety — anticipating hazards before they become crises." },
  { letter: "A", word: "Adaptability", desc: "Designing solutions adaptable across platforms — from professional town planning to city simulation." },
  { letter: "G", word: "Global", desc: "Addressing urban challenges across diverse regions, from rapidly growing cities to established metropolises." },
  { letter: "E", word: "Efficiency", desc: "Optimizing traffic flow, infrastructure resilience, and environmental impacts to create smarter, leaner cities." },
];

const team = [
  {
    name: "Daniel Wallis",
    role: "Co-Founder & CEO",
    image: "https://citysage.my/wp-content/uploads/2025/01/image-3.png",
    bio: "As Co-Founder of CitySage, Daniel is helping shape the future of urban intelligence by blending AI-driven solutions with ecological and human-centered design to build smarter, more sustainable cities.",
    highlights: [
      "Over two decades of experience across mobile communications, financial markets, and software development",
      "Founder of ZONAR, a technology solutions company operating in the UK, Japan, and ASEAN markets",
      "Past roles at Shazam and Bloomberg",
      "BA (Hons) in Japanese and Business Management from the University of London",
    ],
  },
  {
    name: "Dr. Nazri Bajuri",
    suffix: "DPhil Oxon",
    role: "Co-Founder & CTO",
    image: "https://citysage.my/wp-content/uploads/2025/01/image-5.png",
    bio: "A visionary technology leader with over 15 years of experience at the intersection of Artificial Intelligence and Human Intelligence, Dr. Nazri leads AI-driven innovation, product architecture, and strategic growth at CitySage.",
    highlights: [
      "DPhil from the University of Oxford — Malaysian King's Scholar",
      "Leads design of CitySage's core systems including the Modern Data Platform and agentic AI workers",
      "Focused on enabling responsible, governance-aware AI that amplifies human expertise",
    ],
  },
  {
    name: "Datuk Prof. Ian Davies",
    role: "Co-Founder & CSO",
    image: "https://citysage.my/wp-content/uploads/2025/02/Datuk-Ian-Davies-1-1-768x793.jpg",
    bio: "With over 40 years of experience in interior design across Europe and Southeast Asia, Datuk Prof. Ian Davies brings deep expertise in sustainable design and architecture.",
    highlights: [
      "Advocate for sustainable design; active in architecture and design education",
      "Past leadership roles with Herman Miller and Haworth",
      "Contributed to Petronas Twin Towers Interiors and Kuala Lumpur International Airport",
    ],
  },
];

const advisors = [
  {
    name: "Dato' Dr. Ken Yeang",
    suffix: "PhD Cantab, UK",
    role: "Advisor",
    image: "https://citysage.my/wp-content/uploads/2025/01/image-6.png",
    bio: "Cambridge-educated architect and ecologist with more than 50 years devoted to sustainable, ecology-based architecture. Known for pioneering bioclimatic skyscrapers and eco-designs that integrate natural systems into urban spaces.",
    highlights: [
      "Signature projects: Menara Mesiniaga (1992) and National Library of Singapore (2005)",
      "Merdeka Award recipient; named in The Guardian's \"50 people who could save the planet\"",
    ],
  },
  {
    name: "Datuk Christopher Boyd",
    role: "Advisor",
    image: "https://citysage.my/wp-content/uploads/2025/01/image-7.png",
    bio: "Veteran property consultant with over 42 years of experience in Malaysia and international experience across the UK, Australia, and Singapore.",
    highlights: [
      "Recently retired as Executive Chairman of Savills Malaysia",
      "Fellow of the Royal Institution of Chartered Surveyors (FRICS) and the Institution of Surveyors, Malaysia (FISM)",
      "Chair of the Malaysian Nature Society's Board of Trustees",
    ],
  },
];

const quotes = [
  {
    text: "Urban intelligence shapes the future of cities, where data-driven insights and innovative design transform complexity into smarter solutions, paving the way for sustainable growth and emerging trends.",
    author: "Daniel Wallis",
  },
  {
    text: "Urban intelligence is the pulse of a city, where data meets design, and innovation turns complexity into opportunity.",
    author: "Dr Nazri Bajuri",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        label="// Who We Are"
        title="About CitySage"
        subtitle="We are on a mission to revolutionize urban planning with advanced intelligence to create smarter, more sustainable cities. CitySage empowers city planners, developers, and governments to tackle the most pressing challenges of modern urban environments."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="text-md leading-relaxed text-muted">
          Founded by visionary leaders in urban development and AI, CitySage aims to drive sustainable
          urban development by providing innovative solutions that align with ESG principles and Net Zero
          goals. We empower cities to make informed decisions and build resilient, environmentally
          conscious urban spaces.
        </p>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Vision & Mission */}
      <section className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Vision */}
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Vision</p>
              <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Our Vision</h2>
              <p className="mt-4 text-md leading-relaxed text-muted">
                We envision a world where cities are designed to intelligently anticipate future
                challenges, ensuring they are resilient, sustainable, and vibrant places for generations
                to come. By embracing the principles of Industry 5.0, we aim to create cities that
                achieve a balanced integration of human and ecological needs, powered by AI-driven
                technology.
              </p>
            </div>

            {/* Mission */}
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Mission</p>
              <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Our Mission</h2>
              <p className="mt-4 text-md leading-relaxed text-muted">
                CitySage is committed to promoting accessibility and inclusivity in urban planning.
                We deliver AI solutions and services that support ESG-aligned decision making,
                resilience, and sustainable growth — empowering cities and planners with innovative
                tools that enhance urban planning and improve infrastructure resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* CITYSAGE Core Values */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Principles</p>
        <h2 className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Our Core Values</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
          The acronym <span className="font-semibold text-accent">CITYSAGE</span> encapsulates the principles that drive everything we do.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.letter}
              className="group relative overflow-hidden rounded border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />
              <span className="inline-block rounded border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-lg font-bold text-accent">
                {v.letter}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground-bright">{v.word}</h3>
              <p className="mt-2 text-md leading-relaxed text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Culture */}
      <section className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Culture</p>
          <h2 className="text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Our Culture</h2>
          <p className="mt-6 text-md leading-relaxed text-muted">
            We are explorers of possibility — driven by data, inspired by creativity, and united by
            purpose. Our culture embraces experimentation, lifelong learning, and sustainable innovation.
            We thrive where integrity meets ingenuity, and every individual helps shape the future of
            cities and technology.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Leadership Quotes */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Perspectives</p>
        <h2 className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Leadership Perspective</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {quotes.map((q) => (
            <blockquote
              key={q.author}
              className="relative rounded border border-border bg-card p-6"
            >
              <span className="absolute -top-3 left-4 font-mono text-4xl leading-none text-accent/20">&ldquo;</span>
              <p className="text-md italic leading-relaxed text-muted">
                {q.text}
              </p>
              <footer className="mt-4 font-mono text-sm text-accent">
                — {q.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Stats */}
      <section className="relative bg-surface px-4 py-16 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="relative mx-auto grid max-w-5xl gap-6 grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-glow font-mono text-4xl font-extrabold text-accent">{s.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Leadership</p>
        <h2 className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Meet Our Team</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-base text-muted sm:text-lg">
          The people building the future of urban intelligence.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at CitySage`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  {member.role}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground-bright">
                  {member.name}
                  {member.suffix && (
                    <span className="ml-1 text-sm font-normal text-muted">({member.suffix})</span>
                  )}
                </h3>
                <p className="mt-2 text-md leading-relaxed text-muted">{member.bio}</p>
                <ul className="mt-4 space-y-2">
                  {member.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/40" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Advisors */}
      <section className="relative bg-background-alt px-4 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-20" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-accent/40">// Advisors</p>
          <h2 className="text-center text-2xl font-bold text-foreground-bright sm:text-3xl md:text-4xl">Our Advisors</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="group relative overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                  <img
                    src={advisor.image}
                    alt={`${advisor.name}, ${advisor.role} at CitySage`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {advisor.role}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground-bright">
                    {advisor.name}
                    {advisor.suffix && (
                      <span className="ml-1 text-sm font-normal text-muted">({advisor.suffix})</span>
                    )}
                  </h3>
                  <p className="mt-2 text-md leading-relaxed text-muted">{advisor.bio}</p>
                  <ul className="mt-4 space-y-2">
                    {advisor.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/40" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

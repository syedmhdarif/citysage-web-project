import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Smart City Events — Conferences, Workshops & Hackathons",
  description:
    "Join CitySage at upcoming smart city events across Malaysia: Smart City Asia Summit 2026 in KL, AI Workers workshops, Urban Data Hackathons, and Academy Open Days. Connect with the urban intelligence community.",
  alternates: { canonical: "https://citysage.my/ecosystem/events/" },
};

const events = [
  { date: "2026-03-15", title: "Smart City Asia Summit 2026", location: "Kuala Lumpur Convention Centre", type: "Conference" },
  { date: "2026-04-08", title: "AI Workers Workshop — Penang", location: "Penang Digital Library", type: "Workshop" },
  { date: "2026-05-20", title: "Urban Data Hackathon", location: "Virtual", type: "Hackathon" },
  { date: "2026-06-12", title: "CitySage Academy Open Day", location: "KL Sentral Hub", type: "Open Day" },
];

export default function EventsPage() {
  return (
    <>
      <Hero
        label="// Calendar"
        title="Events"
        subtitle="Conferences, workshops, and hackathons where the CitySage community gathers to share ideas and build together."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="space-y-4">
          {events.map((e) => (
            <div key={e.title} className="group flex flex-col gap-4 rounded border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-block rounded border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">{e.type}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground-bright">{e.title}</h3>
                <p className="mt-1 text-md text-muted">{e.location}</p>
              </div>
              <time className="shrink-0 font-mono text-sm text-accent/70">{e.date}</time>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

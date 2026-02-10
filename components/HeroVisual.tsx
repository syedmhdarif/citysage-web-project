export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-[80%] max-w-sm pb-5">
      {/* Ambient mint glow behind the image */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-8 rounded-full blur-3xl opacity-[0.12]"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.5) 0%, transparent 70%)" }}
      />

      {/* Image container */}
      <div className="relative overflow-hidden rounded-4xl border border-accent/15 shadow-[0_0_40px_rgba(74,222,128,0.08)]">
        <img
          src="https://citysage.my/wp-content/uploads/2025/01/C-Rose-Video-ezgif.com-optimize.gif"
          alt="C-Rose — Geospatial AI Agent by CitySage"
          className="relative h-full w-full object-cover"
        />

        {/* Bottom gradient fade into surface */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

        {/* Top-left subtle glow accent */}
        <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-accent/5 blur-2xl" />
      </div>

      {/* Label badge */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-card/90 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent shadow-[0_0_20px_rgba(74,222,128,0.1)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent" />
          C-Rose · Geospatial AI
        </span>
      </div>
    </div>
  );
}

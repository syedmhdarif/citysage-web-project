"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  label?: string;
  layout?: "center" | "split";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, label, layout = "center", primaryCta, secondaryCta, children }: HeroProps) {
  const isSplit = layout === "split";
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      className="relative overflow-hidden bg-surface px-4 py-28 sm:px-6 lg:py-36"
    >
      {/* ── Glass glyph cursor follower ── */}
      <motion.div
        className="pointer-events-none absolute z-10 hidden lg:block"
        style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
        animate={{ opacity: cursorVisible ? 1 : 0, scale: cursorVisible ? 1 : 0.6 }}
        transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.3 } }}
      >
        {/* Outer glow */}
        <div className="absolute -inset-6 rounded-full bg-accent/5 blur-2xl" />
        {/* Glass hexagon shape */}
        <svg width="48" height="48" viewBox="0 0 48 48" className="drop-shadow-[0_0_14px_rgba(74,222,128,0.3)]">
          <defs>
            <linearGradient id="hex-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(74,222,128,0.12)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.08)" />
            </linearGradient>
            <linearGradient id="hex-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(74,222,128,0.45)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.3)" />
            </linearGradient>
            <linearGradient id="hex-inner-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(74,222,128,0.2)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.12)" />
            </linearGradient>
          </defs>
          <polygon
            points="24,2 44,14 44,34 24,46 4,34 4,14"
            fill="url(#hex-fill)"
            stroke="url(#hex-stroke)"
            strokeWidth="1"
          />
          <polygon
            points="24,10 36,17 36,31 24,38 12,31 12,17"
            fill="rgba(74,222,128,0.04)"
            stroke="url(#hex-inner-stroke)"
            strokeWidth="0.5"
          />
          {/* Center dot */}
          <circle cx="24" cy="24" r="2" fill="rgba(74,222,128,0.6)" />
        </svg>
      </motion.div>

      {/* ── Animated background layers ── */}

      {/* Floating mint orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="animate-float absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, rgba(74,222,128,0.6) 0%, transparent 70%)" }}
        />
        <div
          className="animate-float-reverse absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, rgba(74,222,128,0.5) 0%, transparent 70%)" }}
        />
        <div
          className="animate-float absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(74,222,128,0.4) 0%, transparent 70%)" }}
        />
      </div>

      {/* Pulsing ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="animate-pulse-ring h-[500px] w-[500px] rounded-full border border-accent/10"
        />
      </div>

      {/* Data matrix dot grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0 bg-grid-dot"
      />
      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0 bg-scan-lines" />
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-surface/80" />
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      {/* Bottom accent line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {isSplit ? (
        /* ── Split layout: text left, children right ── */
        <div className="relative mx-auto grid max-w-7xl items-center gap-4 lg:grid-cols-2 lg:gap-8">
          {children && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              {children}
            </motion.div>
          )}
          <div>
            {label && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/60"
              >
                {label}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-glow mt-5 text-4xl font-extrabold tracking-tight text-foreground-bright sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {subtitle}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="rounded border border-accent/50 bg-accent/10 px-8 py-3 text-center font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="rounded border border-border px-8 py-3 text-center font-mono text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:text-accent"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          
        </div>
      ) : (
        /* ── Center layout (default) ── */
        <div className="relative mx-auto max-w-4xl text-center">
          {label && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/60"
            >
              {label}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-glow mt-5 text-4xl font-extrabold tracking-tight text-foreground-bright sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-muted"
          >
            {subtitle}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="rounded border border-accent/50 bg-accent/10 px-8 py-3 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded border border-border px-8 py-3 font-mono text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ecoOpen, setEcoOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string | undefined) {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/mainIcon.png" alt="CitySage — AI-Powered Urban Intelligence" width={140} height={30} priority />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setEcoOpen(true)}
                onMouseLeave={() => setEcoOpen(false)}
              >
                <button
                  className={`px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-accent ${
                    item.children.some((c) => isActive(c.href))
                      ? "text-accent text-glow-sm"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                  <svg className="ml-1 inline h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {ecoOpen && (
                  <div className="absolute left-0 top-full mt-1 w-52 rounded border border-border bg-card py-2 shadow-lg shadow-black/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-accent/5 hover:text-accent ${
                          isActive(child.href) ? "text-accent bg-accent/5" : "text-muted"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`relative px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent text-glow-sm" : "text-muted"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent/60" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/ai-workers"
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-accent ${
              isActive("/ai-workers") ? "text-accent text-glow-sm" : "text-accent/70"
            }`}
          >
            AI Workers
          </Link>
          <Link
            href="/request-demo"
            className="rounded border border-accent/40 bg-accent/10 px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Mobile menu */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-card px-4 py-4 lg:hidden">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setEcoOpen(!ecoOpen)}
                  className={`flex w-full items-center justify-between py-2.5 font-mono text-xs uppercase tracking-wider ${
                    item.children.some((c) => isActive(c.href)) ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.label}
                  <svg className={`h-3 w-3 transition-transform ${ecoOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {ecoOpen && (
                  <div className="ml-4 border-l border-border/50 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-accent ${
                          isActive(child.href) ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <Link href="/ai-workers" onClick={() => setMobileOpen(false)} className={`py-2 font-mono text-xs uppercase tracking-wider ${isActive("/ai-workers") ? "text-accent" : "text-accent/70"}`}>
              AI Workers
            </Link>
            <Link
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="rounded border border-accent/40 bg-accent/10 px-5 py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-wider text-accent"
            >
              Request Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

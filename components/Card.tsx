"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  badge?: string;
  image?: string;
}

export default function Card({ title, description, icon, href, badge, image }: CardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative flex h-full flex-col overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
    >
      {/* Top line glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-accent/40" />

      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {icon && <span className="mb-3 text-2xl">{icon}</span>}
        {badge && (
          <span className="mb-3 inline-block w-fit rounded border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
            {badge}
          </span>
        )}
        <h3 className="text-lg font-semibold text-foreground-bright">{title}</h3>
        <p className="mt-2 text-md leading-relaxed text-muted">{description}</p>
        {href && (
          <span className="mt-auto pt-4 font-mono text-xs text-accent/50 transition-colors group-hover:text-accent">
            explore &rarr;
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

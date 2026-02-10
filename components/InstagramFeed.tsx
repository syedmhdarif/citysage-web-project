"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BeholdPost {
  id: string;
  mediaUrl: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  caption?: string;
  prunedCaption?: string;
  timestamp: string;
  thumbnailUrl?: string;
  sizes?: {
    small?: { mediaUrl: string };
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
  };
}

const FEED_URL = "https://feeds.behold.so/tqNJuCpyl40pHCktjwzb";

export default function InstagramFeed() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(FEED_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts ?? data ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) return null;

  return (
    <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square animate-pulse rounded border border-border bg-card"
            />
          ))
        : posts.slice(0, 6).map((post, i) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative aspect-square overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.06)]"
            >
              <img
                src={
                  post.sizes?.medium?.mediaUrl ??
                  post.thumbnailUrl ??
                  post.mediaUrl
                }
                alt={post.prunedCaption?.slice(0, 100) ?? "Instagram post"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="line-clamp-3 p-3 text-xs leading-relaxed text-white/90 sm:p-4 sm:text-sm">
                  {post.prunedCaption ?? post.caption}
                </p>
              </div>

              {/* Media type badge */}
              {post.mediaType === "VIDEO" && (
                <div className="absolute right-2 top-2 rounded bg-black/60 p-1">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
              {post.mediaType === "CAROUSEL_ALBUM" && (
                <div className="absolute right-2 top-2 rounded bg-black/60 p-1">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="14" height="14" rx="1" />
                    <path d="M7 21h12a2 2 0 002-2V7" />
                  </svg>
                </div>
              )}
            </motion.a>
          ))}
    </div>
  );
}

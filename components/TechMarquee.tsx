"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { featuredTechnologies } from "@/data/skills";

interface MarqueeTrackProps {
  items: readonly string[];
  direction?: "left" | "right";
  duration?: number;
}

function MarqueeTrack({
  items,
  direction = "left",
  duration = 36,
}: MarqueeTrackProps) {
  // Ensure enough width to fill wide screens and loop seamlessly from 0% to -50%
  const repeatCount = items.length <= 6 ? 4 : 2;
  const duplicatedItems = useMemo(
    () => Array.from({ length: repeatCount * 2 }).flatMap(() => items),
    [items, repeatCount]
  );

  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        className="flex shrink-0 items-center gap-8 sm:gap-12 will-change-transform"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-8 sm:gap-12 shrink-0"
          >
            <span className="font-display text-base sm:text-lg font-medium tracking-wider text-text-dark-secondary whitespace-nowrap hover:text-text-dark-primary transition-colors">
              {tech}
            </span>
            <span className="text-emerald text-sm opacity-60 select-none">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TechMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Derive desktop rows from single source of truth
  const rowOne = useMemo(
    () => [
      featuredTechnologies[0], // Next.js
      featuredTechnologies[1], // TypeScript
      featuredTechnologies[2], // Spring Boot
      featuredTechnologies[4], // PostgreSQL
      featuredTechnologies[3], // React
      featuredTechnologies[11], // REST APIs
    ],
    []
  );

  const rowTwo = useMemo(
    () => [
      featuredTechnologies[5], // Node.js
      featuredTechnologies[6], // Java
      featuredTechnologies[7], // WebSocket
      featuredTechnologies[8], // Docker
      featuredTechnologies[9], // Prisma
      featuredTechnologies[10], // MongoDB
    ],
    []
  );

  return (
    <section
      aria-labelledby="featured-tech-title"
      className="relative overflow-hidden py-7 sm:py-9 bg-bg-dark border-y border-mint/10 select-none"
    >
      {/* Accessible Screen-Reader Layer (Canonical Single Representation) */}
      <h2 id="featured-tech-title" className="sr-only">
        Featured technologies
      </h2>
      <ul className="sr-only">
        {featuredTechnologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {/* Reduced Motion Static Fallback */}
      {shouldReduceMotion ? (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-center">
          {featuredTechnologies.map((tech, idx) => (
            <span
              key={tech}
              className="inline-flex items-center gap-6 sm:gap-8 font-display text-base sm:text-lg text-text-dark-secondary font-medium tracking-wide"
            >
              <span>{tech}</span>
              {idx < featuredTechnologies.length - 1 && (
                <span
                  className="text-emerald text-xs opacity-60"
                  aria-hidden="true"
                >
                  •
                </span>
              )}
            </span>
          ))}
        </div>
      ) : (
        /* Visual Moving Tracks (aria-hidden="true" to prevent duplicate speech) */
        <div aria-hidden="true" className="relative w-full">
          {/* Edge fade masks */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

          {/* Desktop Layout (2 opposing rows) */}
          <div className="hidden lg:flex flex-col gap-4">
            <MarqueeTrack items={rowOne} direction="left" duration={36} />
            <MarqueeTrack items={rowTwo} direction="right" duration={38} />
          </div>

          {/* Mobile & Tablet Layout (1 continuous row) */}
          <div className="flex lg:hidden flex-col">
            <MarqueeTrack
              items={featuredTechnologies}
              direction="left"
              duration={44}
            />
          </div>
        </div>
      )}
    </section>
  );
}

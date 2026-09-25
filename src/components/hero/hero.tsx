"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { MovingLinesBackground } from "@/components/ui/movinglines-background";
import { StaggerButton } from "@/components/ui/stagger-button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    // Small desktop-only translation capped at 8px
    setOffset({ x: x * 8, y: y * 8 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <MovingLinesBackground speed="35s" opacity={0.05} className="w-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column: Hero narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] dark:border-white/10 bg-white/90 dark:bg-[#151515]/90 backdrop-blur-md px-3.5 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                {!shouldReduceMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--green,#2fae63)] opacity-75" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--green,#2fae63)]" />
              </span>
              <span className="font-mono text-xs font-medium text-[var(--plum)] dark:text-[#F5F5F5]">
                Open to Software Engineering opportunities
              </span>
            </div>

            {/* Eyebrow */}
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A] uppercase">
              SOFTWARE ENGINEERING • FULL-STACK • AI
            </p>

            {/* Heading */}
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5] leading-[1.04]"
            >
              <span className="block overflow-hidden py-1 -my-1">
                {shouldReduceMotion ? (
                  <span className="block">Dulan</span>
                ) : (
                  <motion.span
                    className="block will-change-transform"
                    initial={{ y: 45, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    }}
                  >
                    Dulan
                  </motion.span>
                )}
              </span>{" "}
              <span className="block overflow-hidden py-1 -my-1">
                {shouldReduceMotion ? (
                  <span className="block">
                    Prabashwara
                    <span className="text-[var(--green,#2fae63)]">.</span>
                  </span>
                ) : (
                  <motion.span
                    className="block will-change-transform"
                    initial={{ y: 45, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.26,
                    }}
                  >
                    Prabashwara
                    <motion.span
                      className="inline-block text-[var(--green,#2fae63)] origin-bottom"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.75,
                      }}
                    >
                      .
                    </motion.span>
                  </motion.span>
                )}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl text-base sm:text-lg text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed">
              Information Technology undergraduate at the University of Moratuwa
              building full-stack applications, real-time systems, and{" "}
              <span className="text-[var(--plum)] dark:text-[#F5F5F5] font-medium">
                intelligent platforms
              </span>{" "}
              with clean architecture.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <StaggerButton asChild text="Explore my work">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--green,#2fae63)] px-6 py-3.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-white shadow-sm hover:bg-[var(--green-hover,#258c50)] hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore my work</span>
                  <span
                    className="material-symbols-outlined text-base"
                    aria-hidden
                  >
                    arrow_forward
                  </span>
                </a>
              </StaggerButton>

              <a
                href="/dulan-prabashwara-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-white px-6 py-3.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-[var(--plum)] shadow-xs hover:border-[var(--green,#2fae63)] hover:text-[var(--green,#2fae63)] hover:-translate-y-0.5 dark:border-white/15 dark:bg-[#151515] dark:text-[#F5F5F5] transition-all"
              >
                <span>View résumé</span>
                <span
                  className="material-symbols-outlined text-base"
                  aria-hidden
                >
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          {/* Right column: Circular Hero Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div
              className="portrait-motion relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[450px] xl:h-[450px] transition-transform duration-200 ease-out"
              style={{
                transform: shouldReduceMotion
                  ? "none"
                  : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
              }}
            >
              {/* Soft ambient green halo behind the circular portrait */}
              <div
                className="pointer-events-none absolute -inset-3 sm:-inset-6 rounded-full bg-[radial-gradient(circle,rgba(47,174,99,0.22)_0%,rgba(47,174,99,0.06)_50%,transparent_72%)] blur-2xl sm:blur-3xl -z-10"
                aria-hidden="true"
              />

              {/* Circular Frame Container */}
              <div className="relative aspect-square w-full h-full rounded-full border-2 border-[var(--border)] dark:border-white/15 bg-white dark:bg-black shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden group">
                {/* Subtle radial overhead spotlight inside circle */}
                <div
                  className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-48 rounded-full bg-[radial-gradient(circle,rgba(47,174,99,0.16)_0%,transparent_70%)] z-10"
                  aria-hidden="true"
                />

                {/* Subject Image: Centered on person & laptop, desk seamlessly fills bottom curve with zero gap */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/dulan-hero.png"
                    alt="Dulan Prabashwara working on a laptop at a desk"
                    width={1024}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full object-cover select-none"
                    style={{
                      transform: "scale(1.05)",
                    }}
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 450px"
                  />
                </div>
              </div>

              {/* Floating Chip 1 (Top-Left): Sri Lanka with location icon */}
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 z-10 inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/95 backdrop-blur-md px-3 py-1 shadow-md dark:border-white/15 dark:bg-[#151515]/95 transition-transform hover:scale-105">
                <span
                  className="material-symbols-outlined text-[14px] text-[var(--green,#2fae63)]"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[var(--plum)] dark:text-[#F5F5F5]">
                  Sri Lanka
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </MovingLinesBackground>
  );
}

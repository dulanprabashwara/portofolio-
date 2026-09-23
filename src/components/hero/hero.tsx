"use client";

import { useState } from "react";
import { NeutralMedia } from "@/components/media/neutral-media";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

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
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column: Hero narrative & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border,#ddd6e3)] bg-white px-3.5 py-1.5 shadow-xs">
            <span className="relative flex h-2 w-2">
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--green,#2fae63)] opacity-75" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--green,#2fae63)]" />
            </span>
            <span className="font-mono text-xs font-medium text-[var(--plum,#231d2b)]">
              Open to Software Engineering opportunities
            </span>
          </div>

          {/* Eyebrow */}
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--muted-plum,#655d6f)] uppercase">
            SOFTWARE ENGINEERING • FULL-STACK • AI
          </p>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--plum,#231d2b)] leading-[1.08]"
          >
            Dulan Prabashwara
            <span className="text-[var(--green,#2fae63)]">.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-xl text-base sm:text-lg text-[var(--muted-plum,#655d6f)] leading-relaxed">
            Information Technology undergraduate at the University of Moratuwa
            building full-stack applications, real-time systems, and intelligent
            platforms with clean architecture.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--green,#2fae63)] px-6 py-3 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-white shadow-sm hover:bg-[var(--green-hover,#258c50)] transition-all hover:translate-y-[-1px]"
            >
              <span>Explore my work</span>
              <span className="material-symbols-outlined text-base" aria-hidden>
                arrow_downward
              </span>
            </a>

            <a
              href="/dulan-prabashwara-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border,#ddd6e3)] bg-white px-6 py-3 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-[var(--plum,#231d2b)] shadow-xs hover:border-[var(--green,#2fae63)] hover:text-[var(--green,#2fae63)] transition-all hover:translate-y-[-1px]"
            >
              <span>View résumé</span>
              <span className="material-symbols-outlined text-base" aria-hidden>
                open_in_new
              </span>
            </a>
          </div>
        </div>

        {/* Right column: Circular Portrait slot */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="portrait-motion transition-transform duration-200 ease-out"
            style={{
              transform: shouldReduceMotion
                ? "none"
                : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
            }}
          >
            <NeutralMedia label="Portrait not supplied" aspect="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

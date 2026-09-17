"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { DURATIONS, EASINGS, SPRINGS } from "@/lib/animations";
import { useFinePointer } from "@/lib/useFinePointer";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const canParallax = useFinePointer();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax spring values with restrained displacement
  const portraitX = useSpring(mouseX, SPRINGS.soft);
  const portraitY = useSpring(mouseY, SPRINGS.soft);

  const glowX = useSpring(
    useMotionValue(0),
    SPRINGS.soft
  );
  const glowY = useSpring(
    useMotionValue(0),
    SPRINGS.soft
  );

  const isInteractive = canParallax && !shouldReduceMotion;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isInteractive || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const relX = (e.clientX - centerX) / (rect.width / 2);
    const relY = (e.clientY - centerY) / (rect.height / 2);

    // portrait ±8px
    mouseX.set(relX * 8);
    mouseY.set(relY * 8);

    // glow ±6px
    glowX.set(relX * 6);
    glowY.set(relY * 6);
  };

  const handlePointerLeave = () => {
    if (!isInteractive) return;
    mouseX.set(0);
    mouseY.set(0);
    glowX.set(0);
    glowY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex items-center justify-center w-full max-w-[440px] mx-auto py-6"
    >
      {/* Ambient background glow for portrait */}
      <motion.div
        aria-hidden="true"
        style={isInteractive ? { x: glowX, y: glowY } : undefined}
        className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-emerald/20 blur-3xl pointer-events-none -z-10"
      />

      {/* Portrait / Temporary Development Silhouette */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATIONS.reveal,
          ease: EASINGS.smooth,
          delay: 0.5,
        }}
        style={{
          ...(isInteractive ? { x: portraitX, y: portraitY } : {}),
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
        }}
        className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[380px] lg:h-[480px] rounded-2xl border border-emerald/25 bg-gradient-to-b from-surface-raised/80 via-surface-dark/60 to-transparent p-4 flex flex-col justify-between overflow-hidden shadow-dark-soft select-none pointer-events-none"
      >
        {/* Top Header Badge inside placeholder */}
        <div className="flex items-center justify-between text-xs font-mono text-emerald/80 border-b border-border-dark/60 pb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            PORTRAIT_SYS
          </span>
          <span className="text-text-dark-secondary/60 text-[10px] tracking-wider">
            DP // 2026
          </span>
        </div>

        {/* Center Abstract Silhouette & Monogram */}
        <div className="flex flex-col items-center justify-center my-auto text-center space-y-4">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-emerald/30 bg-surface-dark flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <span className="font-display text-4xl sm:text-5xl font-bold tracking-wider text-emerald-bright">
              DP
            </span>
            <div className="absolute inset-0 rounded-full border border-mint/20 animate-spin-slow pointer-events-none" />
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-mint/80">
              Developer Portrait
            </p>
            <p className="font-sans text-[10px] text-text-dark-secondary/60 max-w-[200px] leading-tight">
              Asset placeholder — ready for professional photograph
            </p>
          </div>
        </div>

        {/* Bottom Technical Coordinates */}
        <div className="flex items-center justify-between text-[10px] font-mono text-text-dark-secondary/50 pt-3 border-t border-border-dark/40">
          <span>LAT: 6.7951° N</span>
          <span>LON: 79.9009° E</span>
          <span className="text-emerald/80">UOM.LK</span>
        </div>
      </motion.div>
    </div>
  );
}

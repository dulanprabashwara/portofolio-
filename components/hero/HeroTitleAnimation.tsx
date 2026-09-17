"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export function HeroTitleAnimation() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) {
      return;
    }

    let ctx: gsap.Context | null = null;
    let isCancelled = false;

    const fontsReady =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();

    fontsReady.then(() => {
      if (isCancelled || !containerRef.current) return;

      ctx = gsap.context(() => {
        const split = new SplitText(".hero-title-line", {
          type: "lines,words",
          linesClass: "overflow-hidden",
          aria: "none",
        });

        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
          stagger: 0.12,
        });
      }, containerRef);
    });

    return () => {
      isCancelled = true;
      ctx?.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <h1
      ref={containerRef}
      aria-label="Dulan Prabashwara"
      className="font-display font-bold uppercase tracking-tight text-text-dark-primary text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.25rem] leading-[0.88] select-none"
    >
      <span className="block overflow-hidden py-0.5 sm:py-1">
        <span className="hero-title-line block">DULAN</span>
      </span>
      <span className="block overflow-hidden py-0.5 sm:py-1">
        <span className="hero-title-line block">
          PRABASHWARA<span className="text-emerald">.</span>
        </span>
      </span>
    </h1>
  );
}

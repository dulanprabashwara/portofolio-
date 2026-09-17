"use client";

import { motion, useReducedMotion } from "motion/react";
import { socialLinks } from "@/data/socials";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DURATIONS, EASINGS } from "@/lib/animations";
import { HeroTitleAnimation } from "./HeroTitleAnimation";

export function HeroSocials({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-6 pt-4 border-t border-border-dark/60 w-full max-w-lg ${className}`}
    >
      <span className="font-mono text-xs uppercase tracking-widest text-text-dark-secondary/60">
        Connect
      </span>
      <div className="flex items-center gap-5">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.label}
            className="group inline-flex items-center gap-1 font-body text-sm font-medium text-text-dark-primary/80 hover:text-emerald transition-colors min-h-[44px] py-2 focus-visible:outline-2 focus-visible:outline-emerald rounded"
          >
            <span>{item.label}</span>
            <span className="text-emerald text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-start gap-6 sm:gap-7 z-10 w-full">
      {/* 1. Availability Indicator */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATIONS.normal,
          ease: EASINGS.smooth,
          delay: 0.1,
        }}
        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald/25 bg-surface-dark/80 backdrop-blur-xs"
      >
        <span className="relative flex h-2 w-2">
          {!shouldReduceMotion && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
        </span>
        <span className="font-sans text-[11px] sm:text-xs font-medium tracking-wider text-mint uppercase">
          Available for Software Engineering Internships
        </span>
      </motion.div>

      {/* 2. Semantic H1 with GSAP SplitText */}
      <HeroTitleAnimation />

      {/* 3. Role */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATIONS.reveal,
          ease: EASINGS.smooth,
          delay: 0.35,
        }}
      >
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-mint">
          Software Engineering Undergraduate &amp; Full-Stack Developer
        </p>
      </motion.div>

      {/* 4. Description */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATIONS.reveal,
          ease: EASINGS.smooth,
          delay: 0.45,
        }}
        className="max-w-xl"
      >
        <p className="font-body text-base sm:text-lg text-text-dark-secondary leading-relaxed">
          I build full-stack applications that combine clean interfaces, reliable
          backend systems, real-time experiences, and thoughtful engineering.
        </p>
      </motion.div>

      {/* 5. CTA Group */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATIONS.reveal,
          ease: EASINGS.smooth,
          delay: 0.8,
        }}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        <MagneticButton>
          <ButtonLink
            href="#projects"
            variant="primary"
            size="lg"
            className="font-semibold shadow-dark-soft"
          >
            Explore Projects ↗
          </ButtonLink>
        </MagneticButton>

        {/* Note: Secondary CTA (Download CV ↓) is omitted until public/resume/Dulan-Prabashwara-CV.pdf exists */}
      </motion.div>

      {/* 6. Professional Social Links (Desktop layout) */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATIONS.reveal,
          ease: EASINGS.smooth,
          delay: 1.0,
        }}
        className="hidden lg:block w-full max-w-lg"
      >
        <HeroSocials />
      </motion.div>
    </div>
  );
}

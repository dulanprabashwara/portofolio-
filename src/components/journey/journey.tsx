"use client";

import { motion } from "motion/react";
import { journey } from "@/data/journey";
import { SpotlightCard } from "@/components/ui/spotlightcard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
          05 // JOURNEY
        </p>
        <h2
          id="journey-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]"
        >
          Still learning. Always building.
        </h2>
      </div>

      {/* Horizontal Alternating Timeline on Desktop, Vertical on Mobile */}
      <div className="relative">
        {/* Desktop Animated Continuous Energy Beam along the Milestone Track */}
        {!shouldReduceMotion && (
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-0.5 pointer-events-none overflow-hidden z-0"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-28 bg-gradient-to-r from-transparent via-[var(--green,#2fae63)] to-transparent blur-[0.5px]"
              animate={{
                x: ["-100%", "500%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.2,
                ease: "easeInOut",
                repeatDelay: 0.8,
              }}
            />
          </div>
        )}

        <ol className="relative flex flex-col lg:grid lg:grid-cols-4 lg:gap-6 border-l-2 border-[var(--border)] dark:border-[#2A2A2A] lg:border-l-0 ml-4 sm:ml-6 lg:ml-0 pl-6 sm:pl-8 lg:pl-0 space-y-8 lg:space-y-0">
          {/* Mobile Animated Energy Pulse down the Vertical Line */}
          {!shouldReduceMotion && (
            <div
              className="lg:hidden absolute -left-[2px] top-4 bottom-6 w-0.5 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <motion.div
                className="w-full h-24 bg-gradient-to-b from-transparent via-[var(--green,#2fae63)] to-transparent blur-[0.5px]"
                animate={{
                  y: ["-100%", "500%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  ease: "easeInOut",
                  repeatDelay: 0.6,
                }}
              />
            </div>
          )}

          {journey.map((entry, index) => {
            const isCurrent = index === journey.length - 1;
            const isEven = index % 2 === 0;
            const milestoneNum = `0${index + 1}`;

            const card = (
              <SpotlightCard
                spotlightColor={isCurrent ? "47, 174, 99" : "232, 95, 142"}
                className={`w-full rounded-2xl border transition-all duration-300 ${
                  isCurrent
                    ? "border-[var(--green,#2fae63)]/50 bg-white ring-1 ring-[var(--green,#2fae63)]/20 shadow-lg hover:border-[var(--green,#2fae63)] hover:-translate-y-1 dark:bg-[#151515]"
                    : "border-[var(--border)] bg-white shadow-md hover:border-black/20 hover:-translate-y-1 dark:border-[#2A2A2A] dark:bg-[#151515] dark:hover:border-white/20"
                }`}
                contentClassName="p-5 sm:p-6 text-left flex flex-col justify-start w-full h-full"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isCurrent
                        ? "text-[var(--green,#2fae63)]"
                        : "text-[var(--coral,#e85f8e)]"
                    }`}
                  >
                    {milestoneNum}
                  </span>
                  {isCurrent ? (
                    <span className="rounded-full bg-[rgba(47,174,99,0.15)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-[var(--green,#2fae63)] border border-[var(--green,#2fae63)]/30">
                      Current
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                      Stage
                    </span>
                  )}
                </div>

                <h3 className="mt-2.5 text-base sm:text-lg font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]">
                  {entry.institution}
                </h3>

                {entry.detail && (
                  <p className="mt-1.5 font-mono text-xs sm:text-sm text-[var(--green,#2fae63)] font-semibold leading-relaxed">
                    {entry.detail}
                  </p>
                )}
              </SpotlightCard>
            );

            const desktopNode = (
              <div className="hidden lg:flex relative w-full items-center justify-center my-4 group">
                {/* Horizontal line wing: left half */}
                <div
                  className={`absolute left-0 right-1/2 h-0.5 ${
                    index === 0
                      ? "bg-transparent"
                      : "bg-[var(--border)] dark:bg-[#2A2A2A]"
                  }`}
                />
                {/* Horizontal line wing: right half */}
                <div
                  className={`absolute left-1/2 right-0 h-0.5 ${
                    isCurrent
                      ? "bg-transparent"
                      : "bg-[var(--border)] dark:bg-[#2A2A2A]"
                  }`}
                />

                {/* Milestone Node Badge */}
                <div
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
                    isCurrent
                      ? "border-[var(--green,#2fae63)] bg-[var(--green,#2fae63)] text-white shadow-md ring-4 ring-[var(--green,#2fae63)]/20"
                      : "border-[var(--border)] bg-white text-[var(--muted-plum)] shadow-xs dark:border-[#2A2A2A] dark:bg-[#151515] dark:text-[#8A8A8A] group-hover:border-[var(--green,#2fae63)] group-hover:text-[var(--green,#2fae63)]"
                  }`}
                  aria-hidden="true"
                >
                  {isCurrent && !shouldReduceMotion && (
                    <span className="absolute -inset-1.5 rounded-full bg-[var(--green,#2fae63)]/40 animate-ping opacity-60 pointer-events-none" />
                  )}
                  {isCurrent ? (
                    <GraduationCap className="w-4 h-4 relative z-10" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 relative z-10" aria-hidden="true" />
                  )}
                </div>
              </div>
            );

            const mobileNode = (
              <div
                className={`lg:hidden absolute -left-[35px] sm:-left-[43px] top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                  isCurrent
                    ? "border-[var(--green,#2fae63)] bg-[var(--green,#2fae63)] text-white ring-4 ring-[var(--green,#2fae63)]/20"
                    : "border-[var(--border)] bg-white text-[var(--muted-plum)] shadow-xs dark:border-[#2A2A2A] dark:bg-[#151515] dark:text-[#8A8A8A]"
                }`}
                aria-hidden="true"
              >
                {isCurrent && !shouldReduceMotion && (
                  <span className="absolute -inset-1 rounded-full bg-[var(--green,#2fae63)]/40 animate-ping opacity-60 pointer-events-none" />
                )}
                {isCurrent ? (
                  <GraduationCap className="w-3.5 h-3.5 relative z-10" aria-hidden="true" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 relative z-10" aria-hidden="true" />
                )}
              </div>
            );

            return (
              <motion.li
                key={entry.institution}
                initial={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, y: isEven ? -16 : 16 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative lg:flex lg:flex-col lg:justify-between items-center"
              >
                {/* Mobile Milestone Node */}
                {mobileNode}

                {/* Desktop Alternating Layout */}
                {isEven ? (
                  <>
                    {/* Card Above Line */}
                    <div className="w-full lg:h-[155px] flex flex-col justify-end">
                      {card}
                      <div
                        className="hidden lg:block mx-auto h-5 w-0.5 bg-[var(--border)] dark:bg-[#2A2A2A]"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Desktop Center Node */}
                    {desktopNode}

                    {/* Empty Bottom Spacer to align heights */}
                    <div
                      className="hidden lg:block w-full lg:h-[155px]"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    {/* Empty Top Spacer to align heights */}
                    <div
                      className="hidden lg:block w-full lg:h-[155px]"
                      aria-hidden="true"
                    />

                    {/* Desktop Center Node */}
                    {desktopNode}

                    {/* Card Below Line */}
                    <div className="w-full lg:h-[155px] flex flex-col justify-start">
                      <div
                        className="hidden lg:block mx-auto h-5 w-0.5 bg-[var(--border)] dark:bg-[#2A2A2A]"
                        aria-hidden="true"
                      />
                      {card}
                    </div>
                  </>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

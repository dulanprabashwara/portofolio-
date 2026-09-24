"use client";

import { SpotlightCard } from "@/components/ui/spotlightcard";

const PRINCIPLES = [
  {
    number: "01",
    title: "Understand the system",
    description:
      "Think about the users, requirements, data and architecture before implementation.",
  },
  {
    number: "02",
    title: "Build end-to-end",
    description:
      "Work across frontend, backend, databases and APIs to create complete solutions.",
  },
  {
    number: "03",
    title: "Make it reliable",
    description:
      "Pay attention to authentication, persistence, error handling and system behavior.",
  },
  {
    number: "04",
    title: "Keep improving",
    description:
      "Debug, test, iterate and refine rather than stopping when something simply works.",
  },
] as const;

export function Approach() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
          04 / APPROACH
        </p>
        <h2
          id="approach-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]"
        >
          How I think about building.
        </h2>
      </div>

      {/* Grid of 4 principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {PRINCIPLES.map((principle) => (
          <SpotlightCard
            key={principle.number}
            spotlightColor="47, 174, 99"
            className="flex flex-col rounded-xl border border-[var(--border)] bg-white p-6 sm:p-8 shadow-xl hover:border-black/20 hover:-translate-y-0.5 dark:border-[#2A2A2A] dark:bg-[#151515] dark:hover:border-white/20 transition-all"
            contentClassName="flex flex-col items-start text-left"
          >
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[var(--coral,#e85f8e)] mb-4">
              {principle.number}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed">
              {principle.description}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

"use client";

import { skillGroups } from "@/data/skills";
import { SpotlightCard } from "@/components/ui/spotlightcard";
import { TechIcon } from "@/components/ui/tech-icon";

const GROUP_CONFIG = [
  {
    num: "01",
    subtitle: "Syntax & Core",
    accent: "coral",
    panelClasses:
      "rounded-[2.5rem] rounded-tr-xl bg-white border border-[var(--border)] shadow-xl lg:-rotate-1 lg:hover:rotate-0 hover:border-black/20 dark:bg-[#151515] dark:border-[#2A2A2A] dark:hover:border-white/20",
    tagClasses:
      "bg-[var(--mist)] border border-[var(--border)] text-[var(--plum)] dark:bg-[#1A1A1A] dark:border-[#2A2A2A] dark:text-[#C9C9C9] hover:border-[var(--coral,#e85f8e)]/60 hover:bg-[var(--soft-coral,#fff0f4)]",
  },
  {
    num: "02",
    subtitle: "Client & Interface",
    accent: "green",
    panelClasses:
      "rounded-[2.5rem] rounded-tl-xl bg-white border border-[var(--border)] shadow-xl lg:rotate-1 lg:hover:rotate-0 lg:translate-y-6 hover:border-black/20 dark:bg-[#181818] dark:border-[#2A2A2A] dark:hover:border-white/20",
    tagClasses:
      "bg-[var(--mist)] border border-[var(--border)] text-[var(--plum)] dark:bg-[#1A1A1A] dark:border-[#2A2A2A] dark:text-[#C9C9C9] hover:border-[var(--green,#2fae63)]/60 hover:bg-[var(--soft-green,#e8f8ee)]",
  },
  {
    num: "03",
    subtitle: "Services & Streams",
    accent: "coral",
    panelClasses:
      "rounded-[2.5rem] rounded-br-xl bg-white border border-[var(--border)] shadow-xl lg:rotate-1 lg:hover:rotate-0 hover:border-black/20 dark:bg-[#181818] dark:border-[#2A2A2A] dark:hover:border-white/20",
    tagClasses:
      "bg-[var(--mist)] border border-[var(--border)] text-[var(--plum)] dark:bg-[#1A1A1A] dark:border-[#2A2A2A] dark:text-[#C9C9C9] hover:border-[var(--coral,#e85f8e)]/60 hover:bg-[var(--soft-coral,#fff0f4)]",
  },
  {
    num: "04",
    subtitle: "Storage & Cloud",
    accent: "green",
    panelClasses:
      "rounded-[2.5rem] rounded-bl-xl bg-white border border-[var(--border)] shadow-xl lg:-rotate-1 lg:hover:rotate-0 lg:translate-y-6 hover:border-black/20 dark:bg-[#151515] dark:border-[#2A2A2A] dark:hover:border-white/20",
    tagClasses:
      "bg-[var(--mist)] border border-[var(--border)] text-[var(--plum)] dark:bg-[#1A1A1A] dark:border-[#2A2A2A] dark:text-[#C9C9C9] hover:border-[var(--green,#2fae63)]/60 hover:bg-[var(--soft-green,#e8f8ee)]",
  },
] as const;

export function Toolkit() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
          03 // TOOLKIT
        </p>
        <h2
          id="toolkit-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]"
        >
          Tools I use to turn ideas into systems.
        </h2>
      </div>

      {/* Playful, Organic Visual Panels */}
      <div className="relative max-w-5xl mx-auto">
        {/* Subtle decorative center doodle connector on desktop */}
        <div
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          aria-hidden="true"
        >
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            className="text-[var(--border)] dark:text-[#2A2A2A]"
          >
            <path
              d="M30,70 Q70,25 110,70 T70,115"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <circle
              cx="30"
              cy="70"
              r="3.5"
              fill="var(--coral,#e85f8e)"
              opacity="0.7"
            />
            <circle
              cx="110"
              cy="70"
              r="3.5"
              fill="var(--green,#2fae63)"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* 2x2 Asymmetric Staggered Grid on Desktop, Clean Stack on Mobile */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {skillGroups.map((group, index) => {
            const config = GROUP_CONFIG[index];
            const isGreen = config.accent === "green";

            return (
              <SpotlightCard
                key={group.title}
                spotlightColor={isGreen ? "47, 174, 99" : "232, 95, 142"}
                className={`flex flex-col transition-all duration-300 ${config.panelClasses}`}
                contentClassName="p-6 sm:p-8 flex flex-col w-full h-full"
              >
                {/* Panel Header Badge */}
                <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] dark:border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isGreen
                          ? "bg-[var(--green,#2fae63)]"
                          : "bg-[var(--coral,#e85f8e)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-mono text-xs font-bold ${
                        isGreen
                          ? "text-[var(--green,#2fae63)]"
                          : "text-[var(--coral,#e85f8e)]"
                      }`}
                    >
                      {`${config.num} // ${config.subtitle}`}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-[var(--lavender-gray)] dark:text-[#8A8A8A] uppercase tracking-wider">
                    {group.items.length} tools
                  </span>
                </div>

                {/* Primary Group Title */}
                <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]">
                  {group.title}
                </h3>

                {/* Skills Cloud Tags */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${config.tagClasses}`}
                    >
                      <TechIcon
                        name={item}
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 opacity-80 group-hover:opacity-100"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

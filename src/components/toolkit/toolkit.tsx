import { skillGroups } from "@/data/skills";

const GROUP_CONFIG = [
  {
    num: "01",
    subtitle: "Syntax & Core",
    accent: "coral",
    panelClasses:
      "rounded-[2.5rem] rounded-tr-xl bg-white border border-[var(--border,#ddd6e3)] shadow-xs lg:-rotate-1 lg:hover:rotate-0",
    tagClasses:
      "bg-[var(--pearl,#f7f4fa)] border-[var(--border,#ddd6e3)]/80 text-[var(--plum,#231d2b)] hover:border-[var(--coral,#e85f8e)]/60 hover:bg-white",
  },
  {
    num: "02",
    subtitle: "Client & Interface",
    accent: "green",
    panelClasses:
      "rounded-[2.5rem] rounded-tl-xl bg-[var(--pearl,#f7f4fa)]/60 border border-[var(--border,#ddd6e3)] shadow-xs lg:rotate-1 lg:hover:rotate-0 lg:translate-y-6",
    tagClasses:
      "bg-white border-[var(--border,#ddd6e3)]/80 text-[var(--plum,#231d2b)] hover:border-[var(--green,#2fae63)]/60 hover:bg-[var(--soft-green,#e8f8ee)]/40",
  },
  {
    num: "03",
    subtitle: "Services & Streams",
    accent: "coral",
    panelClasses:
      "rounded-[2.5rem] rounded-br-xl bg-[var(--pearl,#f7f4fa)]/60 border border-[var(--border,#ddd6e3)] shadow-xs lg:rotate-1 lg:hover:rotate-0",
    tagClasses:
      "bg-white border-[var(--border,#ddd6e3)]/80 text-[var(--plum,#231d2b)] hover:border-[var(--coral,#e85f8e)]/60 hover:bg-white",
  },
  {
    num: "04",
    subtitle: "Storage & Cloud",
    accent: "green",
    panelClasses:
      "rounded-[2.5rem] rounded-bl-xl bg-white border border-[var(--border,#ddd6e3)] shadow-xs lg:-rotate-1 lg:hover:rotate-0 lg:translate-y-6",
    tagClasses:
      "bg-[var(--pearl,#f7f4fa)] border-[var(--border,#ddd6e3)]/80 text-[var(--plum,#231d2b)] hover:border-[var(--green,#2fae63)]/60 hover:bg-white",
  },
] as const;

export function Toolkit() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          03 // TOOLKIT
        </p>
        <h2
          id="toolkit-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
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
            className="text-[var(--border,#ddd6e3)]"
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
              <div
                key={group.title}
                className={`relative flex flex-col p-6 sm:p-8 transition-all duration-300 ${config.panelClasses}`}
              >
                {/* Panel Header Badge */}
                <div className="flex items-center justify-between gap-3 border-b border-[var(--border,#ddd6e3)]/70 pb-4">
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

                  <span className="font-mono text-[11px] text-[var(--lavender-gray,#8b8295)] uppercase tracking-wider">
                    {group.items.length} tools
                  </span>
                </div>

                {/* Primary Group Title */}
                <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
                  {group.title}
                </h3>

                {/* Skills Cloud Tags */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${config.tagClasses}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

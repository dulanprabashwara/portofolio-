import { skillGroups } from '@/data/skills'

export function TechnologyMarquee() {
  const uniqueSkills = Array.from(new Set(skillGroups.flatMap((group) => group.items)))

  return (
    <div
      aria-label="Technologies"
      className="relative w-full overflow-hidden border-y border-[var(--border,#ddd6e3)] bg-[var(--mist,#f0ebf4)]/40 py-4 sm:py-5"
    >
      <div className="flex w-max marquee-track">
        {/* Track 1: Visible & screen-reader accessible */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
          {uniqueSkills.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[var(--muted-plum,#655d6f)] uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green,#2fae63)]/60" aria-hidden />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Track 2: Visual duplicate with aria-hidden for seamless loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10 select-none"
        >
          {uniqueSkills.map((tech, idx) => (
            <div
              key={`dup-${tech}-${idx}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[var(--muted-plum,#655d6f)] uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green,#2fae63)]/60" aria-hidden />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

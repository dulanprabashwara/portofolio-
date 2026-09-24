import { skillGroups } from "@/data/skills";
import { TechIcon } from "@/components/ui/tech-icon";

export function TechnologyMarquee() {
  const uniqueSkills = Array.from(
    new Set(skillGroups.flatMap((group) => group.items)),
  );

  return (
    <div
      aria-label="Technologies"
      className="relative w-full overflow-hidden border-y border-[var(--border)] dark:border-[#2A2A2A] bg-[var(--mist)] dark:bg-[#0D0D0D] py-4 sm:py-5 transition-colors"
    >
      <div className="flex w-max marquee-track">
        {/* Track 1: Visible & screen-reader accessible */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
          {uniqueSkills.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[var(--plum)] dark:text-[#C9C9C9] uppercase"
            >
              <TechIcon
                name={tech}
                className="h-3.5 w-3.5 text-[var(--green,#2fae63)] shrink-0"
              />
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
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[var(--plum)] dark:text-[#C9C9C9] uppercase"
            >
              <TechIcon
                name={tech}
                className="h-3.5 w-3.5 text-[var(--green,#2fae63)] shrink-0"
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

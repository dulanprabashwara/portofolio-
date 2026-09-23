import { skillGroups } from "@/data/skills";

export function Toolkit() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          03 / TOOLKIT
        </p>
        <h2
          id="toolkit-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          Tools I use to turn ideas into systems.
        </h2>
      </div>

      {/* Grid of 4 Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col rounded-xl border border-[var(--border,#ddd6e3)] bg-white p-6 sm:p-7 shadow-xs hover:border-[var(--green,#2fae63)]/40 hover:-translate-y-0.5 transition-all"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--lavender-gray,#8b8295)] border-b border-[var(--border,#ddd6e3)] pb-3">
              {group.title}
            </h3>

            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium text-[var(--plum,#231d2b)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

import { skillGroups } from '@/data/skills'

export function Toolkit() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          03 / TOOLKIT
        </p>
        <h2
          id="toolkit-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          Technologies, tools, and technical practices.
        </h2>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col rounded-xl border border-[var(--border,#ddd6e3)] bg-white p-6 shadow-xs"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--lavender-gray,#8b8295)] border-b border-[var(--border,#ddd6e3)] pb-3">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2 pt-4">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[var(--border,#ddd6e3)] bg-[var(--pearl,#f7f4fa)] px-3 py-1.5 font-mono text-xs text-[var(--plum,#231d2b)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

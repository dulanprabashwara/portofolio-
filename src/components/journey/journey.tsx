import { journey } from "@/data/journey";

export function Journey() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          05 / EDUCATION
        </p>
        <h2
          id="journey-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          Still learning. Always building.
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="max-w-3xl">
        <ol className="relative border-l border-[var(--border,#ddd6e3)] ml-3 sm:ml-4 space-y-10 sm:space-y-12">
          {journey.map((entry, index) => {
            const isCurrent = index === journey.length - 1;

            return (
              <li key={entry.institution} className="relative pl-8 sm:pl-10">
                {/* Timeline Node Indicator */}
                <div
                  className={`absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white transition-colors ${
                    isCurrent
                      ? "border-[var(--green,#2fae63)] shadow-xs"
                      : "border-[var(--lavender-gray,#8b8295)]"
                  }`}
                  aria-hidden="true"
                >
                  {isCurrent && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green,#2fae63)]" />
                  )}
                </div>

                {/* Entry Content Card */}
                <div
                  className={`rounded-xl border p-5 sm:p-6 transition-all ${
                    isCurrent
                      ? "border-[var(--green,#2fae63)]/40 bg-white shadow-xs"
                      : "border-[var(--border,#ddd6e3)] bg-white/70"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
                      {entry.institution}
                    </h3>
                    {isCurrent && (
                      <span className="rounded-full bg-[var(--soft-green,#e8f8ee)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-[var(--green,#2fae63)]">
                        Current
                      </span>
                    )}
                  </div>

                  {entry.detail && (
                    <p className="mt-2 font-mono text-sm text-[var(--muted-plum,#655d6f)]">
                      {entry.detail}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

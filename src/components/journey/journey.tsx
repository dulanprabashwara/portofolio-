import { journey } from "@/data/journey";

export function Journey() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          05 // JOURNEY
        </p>
        <h2
          id="journey-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          Still learning. Always building.
        </h2>
      </div>

      {/* Horizontal Alternating Timeline on Desktop, Vertical on Mobile */}
      <div className="relative">
        <ol className="relative flex flex-col lg:grid lg:grid-cols-4 lg:gap-6 border-l-2 border-[var(--border,#ddd6e3)] lg:border-l-0 ml-4 sm:ml-6 lg:ml-0 pl-6 sm:pl-8 lg:pl-0 space-y-8 lg:space-y-0">
          {journey.map((entry, index) => {
            const isCurrent = index === journey.length - 1;
            const isEven = index % 2 === 0;
            const milestoneNum = `0${index + 1}`;

            const card = (
              <div
                className={`w-full rounded-2xl border p-5 sm:p-6 transition-all duration-300 text-left ${
                  isCurrent
                    ? "border-[var(--green,#2fae63)]/40 bg-[var(--soft-green,#e8f8ee)]/25 shadow-xs hover:border-[var(--green,#2fae63)] hover:shadow-md"
                    : "border-[var(--border,#ddd6e3)] bg-white shadow-xs hover:border-[var(--lavender-gray,#8b8295)] hover:shadow-sm"
                }`}
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
                    <span className="rounded-full bg-[var(--soft-green,#e8f8ee)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-[var(--green,#2fae63)] border border-[var(--green,#2fae63)]/30">
                      Current
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                      Stage
                    </span>
                  )}
                </div>

                <h3 className="mt-2.5 text-base sm:text-lg font-bold tracking-tight text-[var(--plum,#231d2b)]">
                  {entry.institution}
                </h3>

                {entry.detail && (
                  <p className="mt-1.5 font-mono text-xs sm:text-sm text-[var(--green,#2fae63)] font-semibold leading-relaxed">
                    {entry.detail}
                  </p>
                )}
              </div>
            );

            const desktopNode = (
              <div className="hidden lg:flex relative w-full items-center justify-center my-4">
                {/* Horizontal line wing: left half */}
                <div
                  className={`absolute left-0 right-1/2 h-0.5 ${
                    index === 0
                      ? "bg-transparent"
                      : "bg-[var(--border,#ddd6e3)]"
                  }`}
                />
                {/* Horizontal line wing: right half */}
                <div
                  className={`absolute left-1/2 right-0 h-0.5 ${
                    isCurrent
                      ? "bg-transparent"
                      : "bg-[var(--border,#ddd6e3)]"
                  }`}
                />

                {/* Milestone Node Badge */}
                <div
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all ${
                    isCurrent
                      ? "border-[var(--green,#2fae63)] bg-[var(--green,#2fae63)] text-white shadow-sm ring-4 ring-[var(--soft-green,#e8f8ee)]"
                      : "border-[var(--border,#ddd6e3)] bg-white text-[var(--lavender-gray,#8b8295)] shadow-xs"
                  }`}
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-base">
                    {isCurrent ? "school" : "verified"}
                  </span>
                </div>
              </div>
            );

            const mobileNode = (
              <div
                className={`lg:hidden absolute -left-[35px] sm:-left-[43px] top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                  isCurrent
                    ? "border-[var(--green,#2fae63)] bg-[var(--green,#2fae63)] text-white ring-4 ring-[var(--soft-green,#e8f8ee)]"
                    : "border-[var(--border,#ddd6e3)] bg-white text-[var(--lavender-gray,#8b8295)] shadow-xs"
                }`}
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-sm">
                  {isCurrent ? "school" : "verified"}
                </span>
              </div>
            );

            return (
              <li
                key={entry.institution}
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
                        className="hidden lg:block mx-auto h-5 w-0.5 bg-[var(--border,#ddd6e3)]"
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
                        className="hidden lg:block mx-auto h-5 w-0.5 bg-[var(--border,#ddd6e3)]"
                        aria-hidden="true"
                      />
                      {card}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

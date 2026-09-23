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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          04 / APPROACH
        </p>
        <h2
          id="approach-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          How I think about building.
        </h2>
      </div>

      {/* Grid of 4 principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className="flex flex-col rounded-xl border border-[var(--border,#ddd6e3)] bg-white p-6 sm:p-8 shadow-xs hover:border-[var(--green,#2fae63)]/40 hover:-translate-y-0.5 transition-all"
          >
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[var(--coral,#e85f8e)] mb-4">
              {principle.number}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--muted-plum,#655d6f)] leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

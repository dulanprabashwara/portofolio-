export function BeyondCode() {
  const tags = ["WEB SYSTEMS", "AI", "EMBEDDED"] as const;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[var(--border,#ddd6e3)]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          INTERSECTION &amp; PHILOSOPHY
        </p>

        <h2
          id="beyond-code-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--plum,#231d2b)] leading-snug"
        >
          &ldquo;Curious about where software, intelligent systems and physical
          computing intersect.&rdquo;
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border,#ddd6e3)] bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--plum,#231d2b)] shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

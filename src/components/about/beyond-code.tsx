export function BeyondCode() {
  const tags = ["WEB SYSTEMS", "AI", "EMBEDDED"] as const;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
          INTERSECTION &amp; PHILOSOPHY
        </p>

        <h2
          id="beyond-code-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5] leading-snug"
        >
          &ldquo;Curious about where software, intelligent systems and physical
          computing intersect.&rdquo;
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--plum)] shadow-2xs hover:border-black/20 dark:border-[#2A2A2A] dark:bg-[#151515] dark:text-[#C9C9C9] dark:hover:border-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

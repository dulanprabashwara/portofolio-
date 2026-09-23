type NeutralMediaProps = {
  label?: string;
  aspect?: "circle" | "video" | "card" | "square";
  className?: string;
};

export function NeutralMedia({
  label = "Media not supplied",
  aspect = "card",
  className = "",
}: NeutralMediaProps) {
  const aspectClasses = {
    circle:
      "aspect-square rounded-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]",
    video: "aspect-16/10 rounded-xl",
    card: "aspect-16/10 rounded-xl",
    square: "aspect-square rounded-xl",
  }[aspect];

  return (
    <div
      aria-hidden="true"
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden border border-[var(--border,#ddd6e3)] bg-[var(--mist,#f0ebf4)]/60 text-[var(--lavender-gray,#8b8295)] p-6 select-none ${aspectClasses} ${className}`}
    >
      {/* Subtle decorative background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(var(--plum,#231d2b) 1px, transparent 1px), radial-gradient(var(--plum,#231d2b) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          backgroundPosition: "0 0, 8px 8px",
        }}
      />

      {aspect === "circle" ? (
        <div className="relative flex flex-col items-center gap-2 text-center">
          <span className="material-symbols-outlined text-4xl sm:text-5xl text-[var(--lavender-gray,#8b8295)] opacity-60">
            person
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
            {label}
          </span>
        </div>
      ) : (
        <div className="relative flex flex-col items-center gap-2.5 text-center px-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border,#ddd6e3)] bg-white/70 shadow-2xs">
            <span className="material-symbols-outlined text-xl text-[var(--muted-plum,#655d6f)]">
              image
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-xs font-semibold text-[var(--plum,#231d2b)] block">
              {label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--lavender-gray,#8b8295)] block">
              PROJECT PREVIEW
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

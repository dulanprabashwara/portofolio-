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
      "aspect-square rounded-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]",
    video: "aspect-video rounded-xl",
    card: "aspect-16/10 rounded-xl",
    square: "aspect-square rounded-xl",
  }[aspect];

  return (
    <div
      aria-hidden="true"
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden border border-[var(--border,#ddd6e3)] bg-[var(--mist,#f0ebf4)]/60 text-[var(--lavender-gray,#8b8295)] p-6 shadow-inner select-none ${aspectClasses} ${className}`}
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

      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="material-symbols-outlined text-3xl sm:text-4xl opacity-50">
          {aspect === "circle" ? "person" : "image"}
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-plum,#655d6f)] opacity-75">
          {label}
        </span>
      </div>
    </div>
  );
}

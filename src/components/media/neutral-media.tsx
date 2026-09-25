import { User, Image as ImageIcon } from "lucide-react";

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
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden border border-[var(--border)] bg-[var(--mist)] text-[var(--muted-plum)] dark:border-[#2A2A2A] dark:bg-[#151515] dark:text-[#8A8A8A] p-6 select-none ${aspectClasses} ${className}`}
    >
      {/* Subtle decorative background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          backgroundPosition: "0 0, 8px 8px",
        }}
      />

      {aspect === "circle" ? (
        <div className="relative flex flex-col items-center gap-2 text-center">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--lavender-gray)] dark:text-[#8A8A8A] opacity-60" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#C9C9C9]">
            {label}
          </span>
        </div>
      ) : (
        <div className="relative flex flex-col items-center gap-2.5 text-center px-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-white shadow-2xs dark:border-[#2A2A2A] dark:bg-[#1C1C1C]">
            <ImageIcon className="w-5 h-5 text-[var(--muted-plum)] dark:text-[#C9C9C9]" aria-hidden="true" />
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-xs font-semibold text-[var(--plum)] dark:text-[#F5F5F5] block">
              {label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--lavender-gray)] dark:text-[#8A8A8A] block">
              PROJECT PREVIEW
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

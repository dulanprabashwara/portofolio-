import { MotionGrid } from "@/components/ui/MotionGrid";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-bg-deep"
    >
      {/* Layer 1: Base Deep Teal is container background */}

      {/* Layer 2: Technical Grid */}
      <MotionGrid className="z-1 opacity-70" />

      {/* Layer 3: Emerald Radial Glow (positioned behind portrait on desktop) */}
      <div
        className="absolute top-1/4 right-[-5%] sm:right-[5%] lg:right-[10%] w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] lg:w-[680px] lg:h-[680px] rounded-full z-2 blur-3xl opacity-35 sm:opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(6, 95, 70, 0.08) 45%, transparent 70%)",
        }}
      />

      {/* Subtle secondary ambient glow on bottom left to balance typography */}
      <div
        className="absolute -bottom-24 -left-24 w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] rounded-full z-2 blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 65%)",
        }}
      />

      {/* Layer 4: Faint Technical Geometry / Nodes */}
      <svg
        className="absolute inset-0 w-full h-full z-3 opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="96"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#A7F3D0" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />

        {/* Subtle technical crosshair and coordinate accents */}
        <g stroke="#A7F3D0" strokeWidth="1" opacity="0.25">
          <line x1="12%" y1="18%" x2="12%" y2="21%" />
          <line x1="10.5%" y1="19.5%" x2="13.5%" y2="19.5%" />

          <line x1="88%" y1="35%" x2="88%" y2="38%" />
          <line x1="86.5%" y1="36.5%" x2="89.5%" y2="36.5%" />

          <line x1="75%" y1="78%" x2="75%" y2="81%" />
          <line x1="73.5%" y1="79.5%" x2="76.5%" y2="79.5%" />
        </g>
      </svg>
    </div>
  );
}

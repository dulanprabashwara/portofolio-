"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface MovingLinesBackgroundProps {
  speed?: string;
  opacity?: number;
  direction?: "left" | "right";
  blur?: string;
  className?: string;
  lineClassName?: string;
  children?: React.ReactNode;
}

export function MovingLinesBackground({
  speed = "35s",
  opacity = 0.06,
  direction = "right",
  blur = "0px",
  className,
  lineClassName,
  children,
}: MovingLinesBackgroundProps) {
  const id = React.useId().replace(/:/g, "");
  const prefersReducedMotion = useReducedMotion();
  const directionValue = direction === "right" ? "200%" : "-200%";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <style>{`
        @keyframes lineBackgroundMove-${id} {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: ${directionValue} ${directionValue};
          }
        }
      `}</style>

      <motion.div
        aria-hidden="true"
        style={
          {
            "--speed": speed,
            "--blur": blur,
            filter: `blur(var(--blur))`,
            opacity,
            backgroundSize: "1.2em 1.2em",
            backgroundPosition: "0 0",
            animation: prefersReducedMotion
              ? "none"
              : `lineBackgroundMove-${id} var(--speed) linear infinite`,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500",
          "bg-[linear-gradient(45deg,transparent_45%,rgba(139,130,149,0.35)_45%,rgba(139,130,149,0.35)_55%,transparent_0)]",
          lineClassName,
        )}
      />

      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

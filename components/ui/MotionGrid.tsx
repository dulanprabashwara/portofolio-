"use client";

import { motion, useReducedMotion } from "motion/react";

interface MotionGridProps {
  className?: string;
}

export function MotionGrid({ className = "" }: MotionGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute -inset-12 w-[calc(100%+96px)] h-[calc(100%+96px)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(167, 243, 208, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(167, 243, 208, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0 }
            : {
                x: [0, 48],
                y: [0, 48],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
    </div>
  );
}

"use client";

import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.ComponentProps<typeof Card> {
  spotlightColor?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export function SpotlightCard({
  spotlightColor = "47, 174, 99",
  children,
  className,
  contentClassName,
  style,
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const backgroundImage = useMotionTemplate`radial-gradient(300px circle at ${spotlightX}px ${spotlightY}px, rgba(${spotlightColor}, 0.15), transparent)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(x);
    spotlightY.set(y);
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border rounded-xl",
        className,
      )}
      style={
        {
          "--spotlight-color": spotlightColor,
          ...style,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{ backgroundImage }}
      />
      <CardContent
        className={cn(
          "relative z-20 flex flex-col w-full h-full",
          contentClassName,
        )}
      >
        {children}
      </CardContent>
    </Card>
  );
}

export default SpotlightCard;

"use client";

import React, { useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface DriftCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  maxOffset?: number;
}

export function DriftCard({
  children,
  className,
  style,
  maxOffset = 5,
  ...props
}: DriftCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = ((x - centerX) / centerX) * maxOffset;
    const offsetY = ((y - centerY) / centerY) * maxOffset;
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className={cn(
        "relative transition-transform duration-300 ease-out",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: prefersReducedMotion
          ? undefined
          : `translate3d(${position.x.toFixed(1)}px, ${position.y.toFixed(1)}px, 0)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default DriftCard;

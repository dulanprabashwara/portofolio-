"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { SPRINGS } from "@/lib/animations";
import { useFinePointer } from "@/lib/useFinePointer";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  maxDisplacement?: number;
}

export function MagneticButton({
  children,
  className = "",
  maxDisplacement = 4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const canHover = useFinePointer();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRINGS.soft);
  const springY = useSpring(y, SPRINGS.soft);

  const isInteractive = canHover && !shouldReduceMotion;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isInteractive || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * maxDisplacement;
    const deltaY =
      ((e.clientY - centerY) / (rect.height / 2)) * maxDisplacement;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handlePointerLeave = () => {
    if (!isInteractive) return;
    x.set(0);
    y.set(0);
  };

  if (!isInteractive) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

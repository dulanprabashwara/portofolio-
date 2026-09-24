"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";
type Mode = "manual" | "auto";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  boxClassName?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  mode?: Mode;
  stagger?: number;
  once?: boolean;
}

const baseBoxStyles =
  "absolute inset-0 z-10 bg-[var(--green,#2fae63)]/20 pointer-events-none";

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = "",
  boxClassName = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  mode = "manual",
  stagger = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion) {
      controls.set("animate");
      return;
    }
    if (inView) {
      controls.set("initial");
      controls.start("animate");
    } else if (!once) {
      controls.start("initial");
    }
  }, [inView, controls, once, prefersReducedMotion]);

  const getAnimationValues = () => {
    switch (direction) {
      case "up":
        return {
          initial: { scaleY: 1, originY: 0 },
          animate: { scaleY: 0 },
        };
      case "down":
        return {
          initial: { scaleY: 1, originY: 1 },
          animate: { scaleY: 0 },
        };
      case "left":
        return {
          initial: { scaleX: 1, originX: 0 },
          animate: { scaleX: 0 },
        };
      case "right":
        return {
          initial: { scaleX: 1, originX: 1 },
          animate: { scaleX: 0 },
        };
    }
  };

  const animationValues = getAnimationValues();

  const renderWord = (word: string, i: number) => (
    <span key={i} className="relative inline-block overflow-hidden mr-2">
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          variants={{
            initial: animationValues.initial,
            animate: animationValues.animate,
          }}
          initial="initial"
          animate={controls}
          transition={{
            delay: delay + i * stagger,
            duration,
            ease: [0.76, 0, 0.24, 1],
          }}
          className={cn(baseBoxStyles, boxClassName)}
        />
      )}

      <motion.span
        variants={{
          initial: { opacity: prefersReducedMotion ? 1 : 0 },
          animate: { opacity: 1 },
        }}
        initial={prefersReducedMotion ? "animate" : "initial"}
        animate={controls}
        transition={{
          delay: prefersReducedMotion
            ? 0
            : delay + i * stagger + duration * 0.4,
          duration: prefersReducedMotion ? 0 : duration * 0.5,
        }}
        className={className}
      >
        {word}
      </motion.span>
    </span>
  );

  if (mode === "auto" && typeof children === "string") {
    const words = children.split(" ");
    return (
      <span ref={ref} className={cn("inline-block", className)}>
        {words.map(renderWord)}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={cn("relative inline-block overflow-hidden", className)}
    >
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          variants={{
            initial: animationValues.initial,
            animate: animationValues.animate,
          }}
          initial="initial"
          animate={controls}
          transition={{
            delay,
            duration,
            ease: [0.76, 0, 0.24, 1],
          }}
          className={cn(baseBoxStyles, boxClassName)}
        />
      )}

      <motion.span
        variants={{
          initial: { opacity: prefersReducedMotion ? 1 : 0 },
          animate: { opacity: 1 },
        }}
        initial={prefersReducedMotion ? "animate" : "initial"}
        animate={controls}
        transition={{
          delay: prefersReducedMotion ? 0 : delay + duration * 0.4,
          duration: prefersReducedMotion ? 0 : duration * 0.5,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

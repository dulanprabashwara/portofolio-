"use client";

import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-emerald z-60 pointer-events-none origin-left"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0% 50%",
      }}
    />
  );
}

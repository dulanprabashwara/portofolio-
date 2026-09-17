import type { Variants } from "motion/react";

export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  reveal: 0.65,
  cinematic: 1.0,
} as const;

export const EASINGS = {
  smooth: [0.22, 1, 0.36, 1] as const,
  linear: [0, 0, 1, 1] as const,
};

export const STAGGER = {
  fast: 0.06,
  normal: 0.08,
} as const;

export const SPRINGS = {
  soft: {
    type: "spring" as const,
    stiffness: 280,
    damping: 24,
    mass: 0.8,
  },
} as const;

export const VIEWPORT = {
  once: true,
  amount: 0.2,
} as const;

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASINGS.smooth,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASINGS.smooth,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASINGS.smooth,
    },
  },
};

'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const emptySubscribe = () => () => {};

export function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth lagging spring physics for a tactile feel
  const springX = useSpring(mouseX, { damping: 28, stiffness: 180, mass: 0.6 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion
    const hasFinePointer =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(pointer: fine)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [prefersReducedMotion, mouseX, mouseY]);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          opacity: visible ? 1 : 0,
        }}
        className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-br from-[rgba(47,174,99,0.15)] via-[rgba(54,194,112,0.10)] to-[rgba(232,95,142,0.08)] blur-3xl transition-opacity duration-300"
      />
    </div>
  );
}

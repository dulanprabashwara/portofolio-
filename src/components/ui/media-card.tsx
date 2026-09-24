"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

interface MediaCardRootProps {
  children: React.ReactNode;
  className?: string;
  dotClassName?: string;
  marqueeClassName?: string;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  marqueeSpeed?: number;
  marqueeDelay?: number;
}

interface MediaCardItemProps {
  src?: string;
  alt?: string;
  title: string;
  type?: "image" | "video";
  className?: string;
  children?: React.ReactNode;
}

interface CursorContextType {
  setLabel: (label: string | null) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const CursorContext = React.createContext<CursorContextType | null>(null);

const useCursor = () => {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error("MediaCard components must be used within MediaCard root");
  }
  return context;
};

const Cursor = ({
  label,
  containerRef,
  marqueeClassName,
  springConfig = { stiffness: 300, damping: 30, mass: 0.5 },
}: {
  label: string | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
  marqueeClassName?: string;
  springConfig?: { stiffness?: number; damping?: number; mass?: number };
}) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const [isInside, setIsInside] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const container = containerRef.current;
    if (!container) return;

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const isWithinBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsInside(isWithinBounds);

      if (isWithinBounds) {
        rawX.set(e.clientX);
        rawY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rawX, rawY, containerRef, prefersReducedMotion]);

  if (prefersReducedMotion || !isInside || !label) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none z-50 select-none"
      style={{ left: x, top: y, x: "-50%", y: "-50%" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="marquee"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "overflow-hidden backdrop-blur-md shadow-lg flex items-center justify-center bg-[#151515]/95 border border-[#2A2A2A] rounded-full px-4 h-9 min-w-36 text-[#F5F5F5]",
            marqueeClassName,
          )}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="whitespace-nowrap font-mono text-xs font-bold tracking-wider uppercase text-[#F5F5F5] flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span>{label}</span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export const MediaCard = ({
  children,
  className,
  marqueeClassName,
  springConfig,
}: MediaCardRootProps) => {
  const [label, setLabel] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <CursorContext.Provider value={{ setLabel, containerRef }}>
      <Cursor
        label={label}
        containerRef={containerRef}
        marqueeClassName={marqueeClassName}
        springConfig={springConfig}
      />
      <div ref={containerRef} className={cn("", className)}>
        {children}
      </div>
    </CursorContext.Provider>
  );
};

export const MediaCardItem = ({
  src,
  alt = "",
  title,
  type = "image",
  className,
  children,
}: MediaCardItemProps) => {
  const { setLabel } = useCursor();

  return (
    <div
      onMouseEnter={() => setLabel(title)}
      onMouseLeave={() => setLabel(null)}
      className={cn("relative overflow-hidden", className)}
    >
      {children ? (
        children
      ) : type === "video" && src ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay
        />
      ) : src ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
};

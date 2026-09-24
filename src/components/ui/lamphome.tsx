"use client";

import {
  motion,
  AnimatePresence,
  PanInfo,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useMemo } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export interface LampToggleProps {
  className?: string;
  length?: number;
}

const emptySubscribe = () => () => {};

function useMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function LampToggle({ className, length }: LampToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  const isDarkMode = mounted && (resolvedTheme === "dark" || theme === "dark");
  const baseLength = length ?? (isDarkMode ? 74 : 58);

  const y = useMotionValue(0);
  // Extend cord 2px past the bead top so there is strictly zero visual gap
  const cordHeight = useTransform(y, (v) => baseLength + v + 2);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y > 8) {
      toggleTheme();
    }
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "relative flex flex-col items-center select-none w-8",
          className,
        )}
      >
        <div className="w-3.5 h-1.5 rounded-b-md bg-neutral-300 dark:bg-neutral-600 mb-[-1px]" />
        <div className="w-0.5 h-14 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
        <div className="w-6 h-6 rounded-full bg-amber-400/80 border border-amber-500 shadow-xs" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center select-none z-30 group",
        className,
      )}
      style={{ minHeight: baseLength + 28 }}
    >
      {/* Downward Light Cone Glow in Dark Mode */}
      <AnimatePresence>
        {isDarkMode && !prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
            className="pointer-events-none absolute -top-1 right-[-14px] sm:left-1/2 sm:-translate-x-1/2 w-44 sm:w-64 h-52 max-w-[calc(100vw-1rem)]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(251, 191, 36, 0.24) 0%, rgba(47, 174, 99, 0.08) 45%, transparent 75%)",
              filter: "blur(12px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Top Fixture Anchor - Clamped to bottom border of navbar */}
      <div className="w-3.5 h-1.5 rounded-b-md bg-neutral-400 dark:bg-neutral-600 border-x border-b border-neutral-500/50 dark:border-neutral-500 shadow-xs z-10" />

      {/* The Pull Cord / Chain - dynamically bound to drag motion */}
      <motion.div
        className="w-[2px] bg-linear-to-b from-neutral-400 via-neutral-400 to-neutral-500 dark:from-neutral-400 dark:via-neutral-300 dark:to-amber-400 rounded-full relative"
        style={{
          height: cordHeight,
          transformOrigin: "top center",
        }}
      >
        {/* Bead segments on the cord */}
        <div className="absolute inset-0 flex flex-col justify-evenly opacity-65">
          {Array.from({
            length: Math.max(4, Math.floor(baseLength / 7)),
          }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 -left-[1px] relative rounded-full bg-neutral-400 dark:bg-neutral-200"
            />
          ))}
        </div>
      </motion.div>

      {/* The Interactive Lamp Pull Bead - Absolutely positioned at base of cord */}
      <motion.button
        type="button"
        role="button"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={
          isDarkMode
            ? "Pull or click for light mode"
            : "Pull or click for dark mode"
        }
        onClick={toggleTheme}
        drag={prefersReducedMotion ? false : "y"}
        dragConstraints={{ top: 0, bottom: 28 }}
        dragElastic={0.15}
        dragSnapToOrigin={true}
        onDragEnd={handleDragEnd}
        style={{
          y,
          top: baseLength,
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 shadow-md transition-colors duration-300 flex items-center justify-center cursor-grab active:cursor-grabbing z-20 focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)]",
          isDarkMode
            ? "bg-amber-300 border-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.65)] text-neutral-900"
            : "bg-white border-neutral-300 shadow-sm text-neutral-700 hover:border-amber-400",
        )}
      >
        {/* Glow halo inside the bead in dark mode */}
        {isDarkMode && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-amber-400/40 animate-pulse pointer-events-none"
          />
        )}

        {/* Mode Icon inside bead */}
        {isDarkMode ? (
          <span
            className="material-symbols-outlined text-[13px] text-amber-950 font-bold leading-none select-none"
            aria-hidden="true"
          >
            light_mode
          </span>
        ) : (
          <span
            className="material-symbols-outlined text-[13px] text-neutral-600 font-bold leading-none select-none"
            aria-hidden="true"
          >
            dark_mode
          </span>
        )}
      </motion.button>
    </div>
  );
}

interface NavItem {
  href: string;
  label: string;
}

interface LamphomeProps {
  title?: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  children?: React.ReactNode;
  className?: string;
}

export function Lamphome({
  title,
  description,
  logoSrc,
  logoAlt,
  navItems = [],
  children,
  className = "",
}: LamphomeProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  const isDarkMode = mounted && (resolvedTheme === "dark" || theme === "dark");
  const chainLength = useMemo(() => (isDarkMode ? 108 : 84), [isDarkMode]);
  const showGlow = useMemo(() => isDarkMode, [isDarkMode]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const navBarRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(false);
    const finalDragY = Math.max(0, info.offset.y);
    if (finalDragY > 8) {
      const newTheme = isDarkMode ? "light" : "dark";
      setTheme(newTheme);
    }
    setTimeout(() => {
      setDragY(0);
    }, 100);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={cn(
        "min-h-full w-full flex flex-col items-center justify-start pt-2 sm:pt-6 lg:pt-8 transition-all duration-500 text-[var(--plum,#231d2b)]",
        className,
      )}
    >
      <motion.div
        ref={navBarRef}
        initial={{ width: "95%" }}
        animate={{ width: "95%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-center justify-between w-full max-w-4xl h-auto py-3 px-4 sm:px-6 bg-white/80 dark:bg-neutral-950 backdrop-blur-xs border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {logoSrc && (
          <div className="shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt || "Logo"}
              width={28}
              height={28}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>
        )}

        <nav className="hidden sm:flex items-center space-x-4 md:space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm md:text-base font-medium text-[var(--muted-plum,#655d6f)] hover:text-[var(--plum,#231d2b)] transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--green,#2fae63)] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="sm:hidden flex justify-center items-center p-2 bg-gray-100 dark:bg-neutral-900 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </motion.svg>
          </button>
        </div>

        {/* Lamp pull chain mechanism */}
        <div className="absolute right-4 top-full mt-1 flex flex-col items-center z-20">
          <motion.div
            className="w-1 bg-linear-to-b from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full shadow-xs relative"
            animate={{
              height: chainLength + dragY,
            }}
            transition={{
              duration: isDragging ? 0.05 : 0.6,
              ease: isDragging ? "linear" : "easeOut",
            }}
            style={{
              height: `${chainLength + dragY}px`,
              transformOrigin: "top center",
            }}
          />
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 12 }}
            dragElastic={0}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onDrag={(
              _event: MouseEvent | TouchEvent | PointerEvent,
              info: PanInfo,
            ) => {
              setDragY(Math.max(0, info.offset.y));
            }}
            whileHover={{ scale: 1.08 }}
            className="w-6 h-6 bg-linear-to-br from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500 rounded-full shadow-lg border-2 border-yellow-500 dark:border-yellow-400 transition-shadow duration-200 relative overflow-hidden cursor-grab active:cursor-grabbing -mt-2"
          />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 sm:hidden bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg backdrop-blur-xs z-50"
            >
              <nav className="flex flex-col py-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {isDarkMode && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: showGlow ? "80%" : 0,
            opacity: showGlow ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-3xl mt-6 h-0.5 bg-linear-to-r from-transparent via-amber-400 to-transparent"
        />
      )}

      {title && (
        <motion.h1
          className="mt-6 text-3xl sm:text-5xl font-bold text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>
      )}

      {description && (
        <motion.p
          className="mt-4 text-center text-base sm:text-lg text-[var(--muted-plum,#655d6f)] max-w-2xl px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {description}
        </motion.p>
      )}

      {children && (
        <motion.div
          className="mt-6 w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

export default Lamphome;

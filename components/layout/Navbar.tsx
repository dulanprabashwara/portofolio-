"use client";

import { useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navItems } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { useActiveSection } from "./useActiveSection";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 96);
  });

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      {/* Skip to main content link for keyboard & screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-emerald focus:text-bg-deep focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "pt-4 px-4 pointer-events-none"
            : "pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8"
        }`}
      >
        <motion.nav
          layout
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto flex items-center justify-between transition-all duration-300 pointer-events-auto ${
            isScrolled
              ? "max-w-4xl rounded-full bg-surface-dark/90 backdrop-blur-[18px] border border-mint/15 shadow-xl px-6 py-2"
              : "max-w-7xl w-full px-2 py-2 bg-transparent border-transparent"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand */}
          <a
            href="#"
            aria-label="Dulan Prabashwara Home"
            className="flex items-center gap-1 font-display font-bold tracking-wider text-text-dark-primary text-xl sm:text-2xl transition-colors hover:text-emerald focus-visible:outline-2 focus-visible:outline-emerald rounded"
          >
            <span>{isScrolled ? "DP" : "DULAN"}</span>
            <span className="text-emerald">.</span>
          </a>

          {/* Desktop Navigation Items */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    className={`relative z-10 px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-emerald ${
                      isActive
                        ? "text-text-dark-primary font-semibold"
                        : "text-text-dark-primary/70 hover:text-text-dark-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 -z-10 rounded-full bg-emerald/15 border border-emerald/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ButtonLink
                href="#contact"
                variant="primary"
                size="sm"
                className="font-medium"
              >
                Contact ↗
              </ButtonLink>
            </div>

            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </motion.nav>
      </header>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { MobileMenu, type NavItem } from "./mobile-menu";
import { LampToggle } from "@/components/ui/lamphome";

const NAV_ITEMS: readonly NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#toolkit", id: "toolkit" },
  { label: "Approach", href: "#approach", id: "approach" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Recognition", href: "#recognition", id: "recognition" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/[0.08] dark:border-white/[0.12] bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-xl shadow-xs dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-white/40 dark:bg-[#0A0A0A]/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-base font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5] hover:opacity-80 transition-opacity"
        >
          <span
            className="material-symbols-outlined text-[var(--green,#2fae63)]"
            aria-hidden
          >
            terminal
          </span>
          <span>DULAN.</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex md:items-center md:gap-1 lg:gap-2 font-mono text-xs tracking-wider uppercase"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative px-3 py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--green,#2fae63)] font-semibold"
                    : "text-[var(--muted-plum)] hover:text-[var(--plum)] dark:text-[#8A8A8A] dark:hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--green,#2fae63)]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions: Resume */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="/dulan-prabashwara-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--plum)] hover:border-[var(--green,#2fae63)] hover:text-[var(--green,#2fae63)] dark:border-white/10 dark:bg-[#151515] dark:text-[#F5F5F5] transition-colors shadow-xs"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-sm" aria-hidden>
              open_in_new
            </span>
          </a>
        </div>

        {/* Mobile Actions: Resume + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/dulan-prabashwara-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--plum)] hover:border-[var(--green,#2fae63)] dark:border-white/10 dark:bg-[#151515] dark:text-[#F5F5F5] transition-colors"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-xs" aria-hidden>
              open_in_new
            </span>
          </a>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--plum)] hover:bg-black/5 dark:border-white/10 dark:text-[#F5F5F5] dark:hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined" aria-hidden>
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Lamp Theme Toggle mounted directly UNDER the navbar */}
        <div className="absolute top-full right-7 md:right-8 lg:right-10 -translate-y-[1px] pointer-events-auto">
          <LampToggle />
        </div>
      </div>

      {/* Subtle specular glass highlight line along the bottom border when scrolled */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--green,#2fae63)]/25 dark:via-[var(--green,#2fae63)]/40 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <MobileMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        triggerRef={triggerRef}
      />
    </header>
  );
}

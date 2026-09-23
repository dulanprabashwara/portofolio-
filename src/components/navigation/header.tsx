"use client";

import { useRef, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { MobileMenu, type NavItem } from "./mobile-menu";

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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border,#ddd6e3)]/60 bg-white/80 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(35,29,43,0.03)] transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-base font-bold tracking-tight text-[var(--plum,#231d2b)] hover:opacity-80 transition-opacity"
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
                    : "text-[var(--muted-plum,#655d6f)] hover:text-[var(--plum,#231d2b)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--green,#2fae63)]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Resume Action */}
        <div className="hidden md:flex md:items-center">
          <a
            href="/dulan-prabashwara-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-[var(--border,#ddd6e3)] bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--plum,#231d2b)] hover:border-[var(--green,#2fae63)] hover:text-[var(--green,#2fae63)] transition-colors shadow-xs"
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
            className="flex items-center gap-1 rounded-full border border-[var(--border,#ddd6e3)] bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--plum,#231d2b)] hover:border-[var(--green,#2fae63)] transition-colors"
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
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border,#ddd6e3)] text-[var(--plum,#231d2b)] hover:bg-[var(--mist,#f0ebf4)] transition-colors"
          >
            <span className="material-symbols-outlined" aria-hidden>
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

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

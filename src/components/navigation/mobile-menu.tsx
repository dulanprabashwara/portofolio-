"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { useModalBehavior } from "@/hooks/use-modal-behavior";

export type NavItem = {
  label: string;
  href: string;
  id: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: readonly NavItem[];
  activeSection: string | null;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export function MobileMenu({
  open,
  onClose,
  navItems,
  activeSection,
  triggerRef,
}: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useModalBehavior({
    open,
    onClose,
    containerRef,
    triggerRef,
  });

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={containerRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[var(--pearl)]/98 dark:bg-[#0A0A0A]/95 backdrop-blur-2xl p-6 sm:p-8 md:hidden border-l border-[var(--border)] dark:border-white/[0.08]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] dark:border-white/[0.08] pb-4">
        <a
          href="#top"
          onClick={onClose}
          className="flex items-center gap-2 font-mono font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5] text-lg"
        >
          <span
            className="material-symbols-outlined text-[var(--green,#2fae63)]"
            aria-hidden
          >
            terminal
          </span>
          <span>DULAN.</span>
        </a>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--plum)] hover:bg-black/5 dark:border-white/10 dark:text-[#F5F5F5] dark:hover:bg-white/5 transition-colors"
        >
          <span className="material-symbols-outlined" aria-hidden>
            close
          </span>
        </button>
      </div>

      <nav className="my-auto flex flex-col gap-4 py-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              aria-current={isActive ? "location" : undefined}
              className={`font-mono text-xl tracking-wider uppercase transition-colors py-2.5 px-3.5 rounded-md flex items-center justify-between ${
                isActive
                  ? "text-[var(--green,#2fae63)] bg-[var(--green,#2fae63)]/10 font-semibold"
                  : "text-[var(--muted-plum)] hover:text-[var(--plum)] hover:bg-black/5 dark:text-[#C9C9C9] dark:hover:text-[#F5F5F5] dark:hover:bg-white/5"
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--green,#2fae63)]" />
              )}
            </a>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-[var(--border)] dark:border-white/[0.08]">
        <a
          href="/dulan-prabashwara-resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-[var(--green,#2fae63)] text-white font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[var(--green-hover,#36c270)] transition-colors shadow-md"
        >
          <span>Resume</span>
          <span className="material-symbols-outlined text-base" aria-hidden>
            open_in_new
          </span>
        </a>
      </div>
    </div>,
    document.body
  );
}

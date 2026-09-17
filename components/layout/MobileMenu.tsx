"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Menu, X } from "lucide-react";
import { navItems as defaultNavItems } from "@/data/navigation";
import { socialLinks as defaultSocialLinks } from "@/data/socials";
import type { NavItem, SocialLink } from "@/types/portfolio";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface MobileMenuProps {
  navItems?: readonly NavItem[];
  socialLinks?: readonly SocialLink[];
}

function getSocialIcon(platform: SocialLink["platform"]) {
  switch (platform) {
    case "github":
      return <GithubIcon className="w-5 h-5" />;
    case "linkedin":
      return <LinkedinIcon className="w-5 h-5" />;
    case "email":
      return <Mail className="w-5 h-5" aria-hidden="true" />;
    default:
      return null;
  }
}

export function MobileMenu({
  navItems = defaultNavItems,
  socialLinks = defaultSocialLinks,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Focus management on open/close
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const focusableElements = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label="Open navigation menu"
        className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg border border-border-dark bg-surface-dark/80 text-text-dark-primary hover:text-emerald hover:border-emerald/50 transition-colors focus-visible:outline-2 focus-visible:outline-emerald"
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dialogRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-bg-deep/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Header with Brand and Close Button */}
            <div className="flex items-center justify-between border-b border-border-dark pb-4">
              <span className="font-display text-2xl font-bold tracking-wider text-text-dark-primary">
                DULAN<span className="text-emerald">.</span>
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg border border-border-dark bg-surface-dark text-text-dark-primary hover:text-emerald hover:border-emerald/50 transition-colors focus-visible:outline-2 focus-visible:outline-emerald"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="my-auto py-6" aria-label="Mobile Menu">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-4 min-h-[44px] py-2 text-2xl font-display font-medium text-text-dark-primary hover:text-emerald transition-colors focus-visible:outline-2 focus-visible:outline-emerald rounded"
                    >
                      <span className="text-emerald text-xs font-mono font-semibold tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links Footer */}
            <div className="pt-6 border-t border-border-dark">
              <p className="text-xs uppercase tracking-wider text-text-dark-primary/60 mb-3 font-sans">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg border border-border-dark bg-surface-dark text-text-dark-primary hover:text-emerald hover:border-emerald/50 transition-colors focus-visible:outline-2 focus-visible:outline-emerald"
                  >
                    {getSocialIcon(s.platform)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

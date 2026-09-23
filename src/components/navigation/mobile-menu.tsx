'use client'

import { useRef } from 'react'
import { useModalBehavior } from '@/hooks/use-modal-behavior'

export type NavItem = {
  label: string
  href: string
  id: string
}

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  navItems: readonly NavItem[]
  activeSection: string | null
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export function MobileMenu({
  open,
  onClose,
  navItems,
  activeSection,
  triggerRef,
}: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useModalBehavior({
    open,
    onClose,
    containerRef,
    triggerRef,
  })

  if (!open) return null

  return (
    <div
      ref={containerRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[var(--pearl,#f7f4fa)]/95 backdrop-blur-md p-6 sm:p-8 md:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="flex items-center justify-between border-b border-[var(--border,#ddd6e3)] pb-4">
        <a
          href="#"
          onClick={onClose}
          className="flex items-center gap-2 font-mono font-bold tracking-tight text-[var(--plum,#231d2b)] text-lg"
        >
          <span className="material-symbols-outlined text-[var(--green,#2fae63)]" aria-hidden>
            terminal
          </span>
          <span>DULAN.</span>
        </a>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border,#ddd6e3)] text-[var(--plum,#231d2b)] hover:bg-[var(--mist,#f0ebf4)] transition-colors"
        >
          <span className="material-symbols-outlined" aria-hidden>
            close
          </span>
        </button>
      </div>

      <nav className="my-auto flex flex-col gap-4 py-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              aria-current={isActive ? 'location' : undefined}
              className={`font-mono text-xl tracking-wider uppercase transition-colors py-2 px-3 rounded-md ${
                isActive
                  ? 'text-[var(--green,#2fae63)] bg-[var(--soft-green,#e8f8ee)] font-semibold'
                  : 'text-[var(--plum,#231d2b)] hover:text-[var(--green,#2fae63)] hover:bg-[var(--mist,#f0ebf4)]'
              }`}
            >
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="pt-4 border-t border-[var(--border,#ddd6e3)]">
        <a
          href="/dulan-prabashwara-resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-[var(--green,#2fae63)] text-white font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[var(--green-hover,#258c50)] transition-colors"
        >
          <span>Resume</span>
          <span className="material-symbols-outlined text-base" aria-hidden>
            open_in_new
          </span>
        </a>
      </div>
    </div>
  )
}

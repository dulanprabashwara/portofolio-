'use client'

import { useEffect } from 'react'

export type ModalBehaviorOptions = {
  open: boolean
  onClose: () => void
  containerRef: React.RefObject<HTMLElement | null>
  triggerRef?: React.RefObject<HTMLElement | null>
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useModalBehavior({
  open,
  onClose,
  containerRef,
  triggerRef,
}: ModalBehaviorOptions) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const container = containerRef.current
    const trigger = triggerRef?.current

    // Focus first focusable element
    if (container) {
      const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusable.length > 0) {
        focusable[0].focus()
      } else {
        container.focus()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'Tab' && container) {
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter(
          (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
        )

        if (focusable.length === 0) {
          event.preventDefault()
          return
        }

        const firstElement = focusable[0]
        const lastElement = focusable[focusable.length - 1]

        if (event.shiftKey) {
          if (
            document.activeElement === firstElement ||
            !container.contains(document.activeElement)
          ) {
            event.preventDefault()
            lastElement.focus()
          }
        } else {
          if (
            document.activeElement === lastElement ||
            !container.contains(document.activeElement)
          ) {
            event.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (trigger && typeof trigger.focus === 'function') {
        trigger.focus()
      }
    }
  }, [open, onClose, containerRef, triggerRef])
}

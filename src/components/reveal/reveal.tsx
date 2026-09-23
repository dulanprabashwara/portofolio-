'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
}

export function Reveal({ children, className = '' }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [revealed, setRevealed] = useState(
    () => typeof window !== 'undefined' && typeof IntersectionObserver === 'undefined'
  )

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined' ||
      shouldReduceMotion
    ) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
            break
          }
        }
      },
      {
        threshold: 0.1,
      }
    )

    const element = containerRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [shouldReduceMotion])

  const isVisible = shouldReduceMotion || revealed

  return (
    <div
      ref={containerRef}
      data-reveal="true"
      data-visible={isVisible ? 'true' : 'false'}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

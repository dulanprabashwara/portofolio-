# Dulan Prabashwara — Software Engineering Portfolio

Production personal software engineering portfolio showcasing full-stack applications, real-time systems, cloud deployment, AI pipelines, and embedded engineering.

## Author

**Dulan Prabashwara**  
Software Engineering Undergraduate & Full-Stack Developer  
University of Moratuwa — BSc (Hons) in Information Technology

- **GitHub**: [dulanprabashwara](https://github.com/dulanprabashwara)
- **LinkedIn**: [Dulan Prabashwara](https://www.linkedin.com/in/dulan-prabashwara/)
- **Email**: dulanprabashwara@gmail.com

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Typography**: Genos (Display/Headings) & Poppins (Body/UI)
- **Design System**: Emerald & dark teal engineering aesthetic with centralized CSS tokens
- **Data & Types**: Centralized, immutable, typed content models (`types/portfolio.ts`, `data/*`)
- **Animation System**: Motion (`motion/react` with global `reducedMotion="user"`, centralized durations, smooth easing, and typed variants) & GSAP (reserved for hero text)
- **Testing**: Vitest, React Testing Library, Playwright, axe-core

---

## Current Development Status

**Phase 5 — Adaptive Navigation, Mobile Menu & Scroll Progress Complete**

- **Adaptive Desktop Navbar**: `components/layout/Navbar.tsx` featuring scroll-driven state transition (>96px) morphing from full-width top bar into a floating dark glass pill (`bg-surface-dark/90 backdrop-blur-[18px] border border-mint/15 shadow-xl`).
- **Active Section Indicator**: Motion `layoutId="active-nav-indicator"` driving an animated indicator that tracks the currently intersecting section.
- **Scroll Progress Bar**: `components/layout/ScrollProgress.tsx` binding `useScroll` to a 2px emerald indicator fixed at viewport top (`z-60`).
- **Accessible Mobile Menu**: `components/layout/MobileMenu.tsx` with hamburger toggle (44x44px target), focus trap, Escape key dismiss, body scroll lock, numbered links (`01 About`, etc.), and social icons.
- **Keyboard Navigation**: Accessible skip-to-content link targeting `#main-content`.
- **Accessibility Verification**: Tested with axe-core for WCAG 2.2 AA compliance both with menu closed and open.

---

## Available Commands

```bash
# Development server
npm run dev

# Type check
npm run typecheck

# Code quality / lint
npm run lint

# Unit & component tests
npm run test

# End-to-end & accessibility smoke tests
npm run test:e2e

# Production build
npm run build
```

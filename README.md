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

**Phase 4 — Global Motion Foundation Complete**

- **Motion Provider**: `components/providers/MotionProvider.tsx` wrapping layout with `<MotionConfig reducedMotion="user">` while keeping `app/layout.tsx` a pure Server Component.
- **Animation Constants**: Centralized in `lib/animations.ts` (`DURATIONS`, `EASINGS`, `STAGGER`, `SPRINGS`, `VIEWPORT`).
- **Reusable Variants**: Typed Motion variants (`fadeIn`, `fadeUp`, `scaleIn`, `staggerContainer`, `staggerItem`).
- **Accessibility**: Automatic OS `prefers-reduced-motion` compliance.

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

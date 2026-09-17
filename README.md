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

**Phase 7 — Technology Marquee Complete**

- **Technology Marquee**: `components/TechMarquee.tsx` positioned directly below the Hero in the dark visual family (`#08231E`, `border-mint/10`), providing a fast technical snapshot of full-stack engineering breadth.
- **Curated Technology Snapshot**: Single source of truth in `data/skills.ts` (`featuredTechnologies`: Next.js, TypeScript, Spring Boot, React, PostgreSQL, Node.js, Java, WebSocket, Docker, Prisma, MongoDB, REST APIs).
- **Desktop Two-Row Opposing Motion**: Two opposing rows on desktop (`>= 1024px`) moving continuously with linear easing (`x: 0% → -50%` and `x: -50% → 0%`).
- **Mobile One-Row Continuous Track**: Single continuous track on mobile and tablet (`< 1024px`) for compact vertical efficiency.
- **Reduced Motion Static Layout**: When `prefers-reduced-motion: reduce` is enabled, switches to an intentionally designed static wrapping flex layout with no horizontal translation.
- **Accessibility & Canonical Representation**: Visual looping tracks marked `aria-hidden="true"`, while assistive technologies receive a canonical single-instance list (`<ul className="sr-only">`) under `<h2 className="sr-only">Featured technologies</h2>`. Zero duplicate screen reader announcements.
- **Zero New Dependencies**: Implemented natively using existing Motion foundation without external marquee packages.

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

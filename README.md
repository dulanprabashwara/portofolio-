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

**Phase 9 — Skills Bento & Interactive Technology Network Complete**

- **Categorized Skills Bento Grid**: `components/skills/SkillBento.tsx` and `components/skills/SkillCard.tsx` present 6 verified skill categories (Frontend, Backend & APIs, Databases & Data, Languages, DevOps & Tools, Engineering) in a responsive 12-column editorial layout with card-level stagger animations.
- **Interactive Technology Network**: `components/skills/TechNetwork.tsx` maps 9 core full-stack technologies and 10 relationship edges using an accessible layered architecture (SVG connection layer + native HTML button nodes + dynamic relationship summary).
- **Data-Driven Relationship Derivation**: Selecting or hovering a node dynamically derives direct connections from immutable domain data (`data/skills.ts`) with clear visual emphasis and screen reader live region announcements (`aria-live="polite"`).
- **Zero-Crossing Geometry & Touch Ergonomics**: Normalized percentage coordinates designed for zero line crossings on desktop and a clean touch-friendly vertical ladder on mobile with $\ge 44\text{px}$ touch targets.
- **Full Accessibility & Reduced Motion Support**: Native `<button type="button">` keyboard navigation, `aria-hidden="true"` SVG layer, zero subjective skill percentages or ratings, and instantaneous static presentation under `prefers-reduced-motion: reduce`.
- **Active Navigation Integration**: Section `#skills` is automatically observed by `useActiveSection`, seamlessly transitioning desktop navigation state and applying `aria-current="location"`.

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

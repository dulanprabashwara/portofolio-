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

**Phase 8 — About Section Complete**

- **Editorial Light About Section**: `components/about/About.tsx` and `components/about/AboutContent.tsx` introduce the first light-themed major section (`--off-white: #F7F9F7`, `--ink: #10201B`), providing a calm, editorial contrast after the cinematic Hero and Marquee.
- **Dark-to-Light Architectural Transition**: Seamless top gradient band (`from-bg-dark to-off-white`) owned by the About section, bridging `#08231E` to `#F7F9F7` without cartoonish shapes or decorative clutter.
- **Verified Professional Narrative**: Structured 4-paragraph story highlighting full-stack engineering across Next.js, React, Spring Boot, databases, real-time messaging, and multi-domain software systems.
- **Academic Credentials & Foundations**: Semantic definition list (`<dl>`, `<dt>`, `<dd>`) for University of Moratuwa, CGPA (3.70 / 4.00), BSc in Information Technology (Hons), and 2024 — Present; paired with semantic coursework chips (`<ul>`, `<li>`) sourced centrally from `data/site.ts`.
- **Active Navigation Tracking**: First real destination `#about` automatically tracked by `useActiveSection` IntersectionObserver, activating the desktop floating nav indicator and exposing `aria-current="location"`.
- **Production Composition & Clean Dev Boundaries**: `DesignSystemPreview` cleanly decoupled from public homepage flow while preserved in the repo for dev reference.

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

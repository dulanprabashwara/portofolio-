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

**Phase 6 — Cinematic Hero Complete**

- **Cinematic Hero**: `components/hero/Hero.tsx` rendering within `min-h-[100svh]` on the dark teal palette (`#061A16`), structured cleanly as a Server Component.
- **GSAP SplitText Title**: `components/hero/HeroTitleAnimation.tsx` with isolated GSAP SplitText masked line reveal, `document.fonts.ready` synchronization, `gsap.context()` cleanup, and accessible single H1 name (`aria-label="Dulan Prabashwara"`).
- **Choreographed Motion Entrance**: `components/hero/HeroContent.tsx` sequencing availability indicator, role, description, magnetic CTA, and social links with approved durations and easing.
- **Subtle Magnetic CTA**: `components/ui/MagneticButton.tsx` offering a restrained ±4px hover displacement on fine-pointer desktop, cleanly disabled for touch and reduced motion.
- **4-Layer Restrained Background**: `components/hero/HeroBackground.tsx` and `components/ui/MotionGrid.tsx` with oversized 30s slow grid drift, atmospheric emerald radial glow, and technical SVG coordinates.
- **Portrait Placeholder & Parallax**: `components/hero/HeroPortrait.tsx` with integrated silhouette composition, DP monogram, bottom gradient mask, and fine-pointer desktop parallax via MotionValues.
- **Accessibility Verification**: Tested with axe-core for zero critical/serious violations across desktop and mobile viewports.

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

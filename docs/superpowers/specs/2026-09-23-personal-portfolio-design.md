# Dulan Prabashwara Personal Portfolio — Design Specification

## Purpose

Build a production-quality personal portfolio for Dulan Prabashwara that presents his education, technical breadth, projects, approach, and recognition to software-engineering recruiters and collaborators. The finished site must feel polished and credible, remain faithful to the supplied desktop and mobile references, and let visitors quickly inspect projects, open supporting links when they are eventually supplied, download the résumé, and contact Dulan.

## Source hierarchy

Conflicts are resolved in this order:

1. The user's written portfolio brief defines requirements and corrections.
2. The supplied desktop/mobile screenshots define visual appearance.
3. The supplied Stitch HTML defines spacing, layout, colors, and interaction intent.
4. The supplied résumé defines factual personal, education, skills, project, and recognition content.

The three supplied Stitch HTML files are byte-identical and therefore represent one reference implementation. Their code will not be copied directly. They are reference material only.

## Product constraints

- Build one responsive Next.js application, not separate desktop and mobile sites.
- Use the Next.js App Router, React, TypeScript, Tailwind CSS, `next/font`, Space Grotesk for headings, and Inter for body copy.
- Keep all content factual. Do not invent URLs, metrics, technologies, architecture, employment history, or unsupported qualifications.
- Use the supplied résumé PDF for every résumé action.
- Do not generate portraits or competition photography. Because no real portrait or competition photos are currently attached, use restrained neutral placeholders that are clearly decorative and do not imply documentary photography.
- Do not prominently display the phone number.
- Use lightweight native/CSS motion only; do not add a heavy animation dependency.
- Do not add a backend, CMS, authentication, analytics, or persistence.

## Visual direction

Recreate the editorial, spacious composition shown in the references: large Space Grotesk headings, compact mono-like labels, generous whitespace, alternating project layouts, thin lavender dividers, and restrained green/coral accents.

### Color tokens

| Token | Value | Use |
|---|---:|---|
| Pearl Cloud | `#F7F4FA` | Main background |
| Mist Violet | `#F0EBF4` | Secondary surfaces |
| White | `#FFFFFF` | Cards and elevated surfaces |
| Deep Plum | `#231D2B` | Primary text |
| Muted Plum | `#655D6F` | Secondary text |
| Soft Lavender Gray | `#8B8295` | Tertiary text |
| Lavender Border | `#DDD6E3` | Rules and boundaries |
| Primary Green | `#2FAE63` | Primary actions and active states |
| Green Hover | `#258C50` | Primary hover state |
| Soft Green | `#E8F8EE` | Green-tinted surfaces |
| Coral | `#E85F8E` | Restrained secondary accent |
| Soft Coral | `#FFF0F4` | Coral-tinted surfaces |

No gradients, particles, WebGL, autoplay video, or decorative 3D effects will be introduced.

## Information architecture

The page order is fixed:

1. Navbar
2. Hero
3. Technology marquee
4. About
5. Selected Work
6. Toolkit
7. Approach
8. Journey
9. Recognition
10. Beyond Code
11. Contact
12. Footer

All six projects stay consecutive and in this exact order: EasyBlogger, MediSync, Ceylon News, FoundIt, BotNexus, Pacman Live.

## Responsive behavior

Desktop uses a centered, wide editorial container, a complete navigation row, a split hero, alternating project image/content rows, multi-column toolkit and approach layouts, and large centered dialogs.

Mobile uses the same document and data with a compact sticky header, résumé action, hamburger-triggered drawer, vertically stacked hero and project layouts, touch targets of at least approximately 44px, and near-full-screen dialogs. No horizontal overflow is permitted.

The low-resolution mobile and desktop screenshots guide composition, while the Stitch export provides more exact proportions and spacing where the screenshots cannot be measured reliably.

## Components and responsibilities

### Application shell

- `RootLayout` owns metadata, fonts, global styles, skip link, and page background.
- `PortfolioPage` composes the sections but contains no duplicated project or résumé content.

### Navigation

- `Header` renders the terminal-style mark, `DULAN.` wordmark, desktop navigation, résumé action, and mobile controls.
- `MobileMenu` provides focus management, focus restoration, Escape closing, backdrop/close-button behavior, `aria-expanded`, body scroll locking, and keyboard-safe navigation.
- A section observer updates `aria-current` and the visible active-section treatment.
- Anchor navigation is smooth unless reduced motion is requested.

### Hero and marquee

- `Hero` renders the eyebrow, two-line name, green final period, supporting copy, two actions, availability status, and circular portrait slot.
- The portrait slot uses a neutral editorial placeholder until a real approved portrait asset is supplied.
- Pointer movement is tiny and desktop-pointer-only; it is disabled for touch and reduced-motion users.
- `TechnologyMarquee` uses technologies sourced from the résumé and pauses/disables continuous movement for reduced motion.

### About

- `About` contains the exact supplied biography, University of Moratuwa degree, dates, CGPA, and coursework.
- Academic details appear here once; the Journey section does not repeat dates or GPA.

### Selected work

- `ProjectList` maps typed project data to six `ProjectCard` components.
- Desktop cards alternate image/content alignment. Mobile cards stack image, type/number, title, summary, stack, and actions.
- Clicking the project image or title opens its case-study dialog.
- Live Site and Repository actions are separate links with event behavior that never opens the case-study dialog.
- Until verified URLs are supplied, those values remain `null` and the external-link controls are omitted rather than linked to placeholders.
- Pacman Live always has `liveUrl: null` and `repositoryUrl: null` and renders no deployment actions.

### Project case study

- `ProjectDialog` displays only data justified by the résumé: title, type, overview, stack, factual key features, available screenshots, and verified external actions.
- It uses the native dialog behavior or an equivalently accessible implementation with an accessible name, focus trap, Escape close, backdrop close, scroll lock, and focus restoration.
- Desktop uses a large centered panel. Mobile uses a near-full-screen panel with a persistent, reachable close action.

### Toolkit and approach

- `Toolkit` groups résumé technologies under Languages, Frontend, Backend & Real-time, Data & Infrastructure, and DevOps & Practices. It contains no percentages, proficiency bars, experience durations, or unsupported qualifiers.
- `Approach` renders the four exact numbered principles and supplied descriptions.

### Journey

- `Journey` uses an ordered, typed education list in this exact order: St. Joseph's College, B/Darmashoka MMV, Bandarawela Central College, University of Moratuwa.
- Only the university item includes `BSc. in Information Technology (Hons)`.
- School years, exam results, secondary-education labels, university dates, and GPA are excluded.

### Recognition and lightbox

- `Recognition` renders the two supplied achievements with exact organizations, team names, and dates.
- Neutral media placeholders are used until real competition photographs are supplied.
- If real photos are added, `ImageLightbox` opens them with accessible dialog semantics, focus trapping, Escape/backdrop close, scroll lock, and focus restoration.
- Placeholder artwork itself will not pretend to be an event photograph.

### Beyond Code, contact, and footer

- `BeyondCode` uses the supplied reference copy, “Curious about where software, intelligent systems and physical computing intersect.”, followed by the three reference tags: Web Systems, AI, and Embedded. It will not claim hobbies or activities not provided by the user.
- `Contact` exposes email, LinkedIn, GitHub, and Bandarawela, Sri Lanka with appropriate link semantics.
- `Footer` contains the terminal mark, `DULAN.`, “Designed & built with care.”, `© 2026 Dulan Prabashwara`, and a functional Back to Top control.

## Typed content model

Content is separated from presentation in focused data modules:

- `projects.ts` for the six project records and nullable external URLs.
- `skills.ts` for grouped résumé technologies.
- `journey.ts` for ordered education entries.
- `achievements.ts` for the two recognition records and optional images.
- `socials.ts` for email, LinkedIn, GitHub, and location.

Type definitions make unsupported states difficult to render. In particular, external project links are nullable, and achievement/project images are optional. Components respond to missing data with omission or neutral presentation rather than fabricated content.

## Asset handling

- Copy the supplied résumé PDF into `public` under a stable, URL-safe filename and use it for all résumé links.
- Use `next/image` for raster media, prioritize only the hero asset, and lazy-load below-the-fold assets.
- Supplied Stitch image URLs are visual references, not automatically trusted as real documentary or project assets.
- Missing project imagery receives quiet neutral UI placeholders derived from layout and typography, not fabricated product screenshots.
- Standard controls use the Material Symbols Outlined family shown in the reference rather than handcrafted SVGs or text-glyph substitutes.
- When the user later supplies real assets, typed optional image fields allow replacement without changing section structure.

## Interaction and state flow

- Navigation state is derived from scroll position and explicit anchor activation.
- Only one overlay—mobile menu, project dialog, or lightbox—may own focus and scroll locking at a time.
- Opening an overlay records its trigger; closing returns focus to that trigger.
- Dialog data is selected by project/achievement identifier. Closing clears selection after the exit state finishes.
- External links use normal link behavior and never mutate modal state.
- Reduced-motion preference disables scroll reveals, marquee movement, pointer parallax, and nonessential smooth transitions.

## Accessibility

- Use semantic landmarks and heading order.
- Provide a visible-on-focus skip link.
- Use visible focus rings that meet contrast requirements.
- Mark the active navigation entry with `aria-current`.
- Connect menu controls with `aria-expanded` and `aria-controls`.
- Give every dialog an accessible name and description where useful.
- Support complete keyboard operation, focus trapping, Escape handling, backdrop close, and trigger-focus restoration.
- Ensure link purpose and external-link behavior are understandable without visual context.
- Provide meaningful alternative text for real content images and empty alternative text for purely decorative imagery.

## Motion and performance

- Implement subtle section reveals, small button lift, a slow technology marquee, and tiny desktop portrait movement.
- Prefer CSS transitions and a small intersection-observer utility rather than an animation library.
- Disable inappropriate motion for touch and `prefers-reduced-motion`.
- Keep client components narrowly scoped to interactive regions.
- Avoid unnecessary hydration, large media, blocking scripts, and third-party embeds.

## Error and fallback behavior

- Missing external URLs omit their actions.
- Missing imagery shows an intentional neutral treatment without broken-image UI.
- If JavaScript is unavailable, core content and anchor links remain readable and usable; enhanced menus/dialogs may degrade to static content or links without hiding essential information.
- The contact section uses direct, dependable links and does not depend on a form service.

## Testing strategy

Use Vitest and React Testing Library for component/interaction coverage, with accessibility assertions where practical. Add end-to-end browser coverage only where it materially verifies browser focus and responsive overlay behavior.

Required automated checks:

- Header renders required navigation and résumé action.
- Mobile menu opens/closes, reports expanded state, handles Escape, and restores focus.
- Hero contains exact key copy and résumé/work actions.
- Exactly six projects render in the required order.
- Project image/title opens the correct dialog.
- Live/Repository activation does not open the dialog when verified URLs are present in test fixtures.
- Missing URLs produce no fake links.
- Pacman Live renders no Live Site or Repository action.
- Journey renders the four institutions in the required order and university-only degree text.
- Recognition renders both exact achievements.
- Project and lightbox dialogs support keyboard close and focus restoration.
- Reduced-motion behavior and basic landmark/accessible-name expectations are covered.

## Visual verification and acceptance criteria

Before handoff:

- Compare rendered desktop and mobile captures with their supplied references at matching viewports.
- Record the comparison and fixes in `design-qa.md`.
- Resolve all P0, P1, and P2 fidelity/accessibility issues; final QA must say `final result: passed`.
- Confirm no horizontal overflow at representative narrow and wide widths.
- Confirm all sections and projects preserve their required order.
- Confirm external project actions never open the project dialog.
- Confirm Pacman has no Live/Repository controls.
- Confirm no fake URLs, imagery, technologies, metrics, or personal claims were introduced.
- Confirm mobile menu, project dialogs, and lightbox behavior with keyboard controls.
- Confirm reduced-motion mode removes continuous and reveal motion.
- Confirm every résumé action opens/downloads the supplied PDF.
- Run lint, type checking, unit tests, production build, and relevant browser checks successfully.

## Deliverable boundary

The deliverable is a local, production-buildable portfolio application and its tests. Deployment is not included unless the user separately asks to publish or share it. Real project links and real imagery remain easy follow-up data additions when the user supplies them.

# Dulan Prabashwara Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-quality, accessible, responsive Next.js portfolio that faithfully follows the supplied desktop/mobile references and factual brief.

**Architecture:** A statically rendered App Router page composes focused server components for content and small client components for navigation, dialogs, lightbox behavior, motion, and scroll state. Typed data modules are the sole source for projects, skills, education, achievements, and contacts; a shared overlay hook centralizes focus restoration, Escape handling, focus trapping, and scroll locking.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, `next/font`, Material Symbols, Vitest, React Testing Library, jsdom, and Playwright.

**Spec:** `docs/superpowers/specs/2026-09-23-personal-portfolio-design.md`

## Global Constraints

- Use Node.js 20.9 or newer, matching the current Next.js minimum.
- Build one responsive App Router site with TypeScript, React, Tailwind CSS, Space Grotesk headings, and Inter body text.
- Resolve conflicts in this order: written brief, screenshots, Stitch export, résumé.
- Keep the fixed page order and all six consecutive projects in the specified order.
- Never invent URLs, technologies, metrics, architecture, images, history, or qualifications.
- Unknown project links are `null` and their controls are omitted. Pacman Live always has no Live Site or Repository controls.
- Use the supplied résumé PDF for every résumé action; do not prominently expose the phone number.
- Do not generate portraits or competition photos. Use restrained neutral missing-media treatments.
- Use `next/image` for real raster media and lazy-load below-the-fold images.
- Use lightweight CSS/native motion with touch and `prefers-reduced-motion` safeguards.
- Do not add WebGL, particles, autoplay video, 3D, backend, CMS, analytics, authentication, or persistence.
- Use Material Symbols rather than handcrafted SVGs, emoji, CSS drawings, or text symbols as icon substitutes.
- Every overlay must provide accessible naming, focus trapping, Escape/backdrop close, scroll lock, and trigger-focus restoration.

## Review Focus

- Sequential overlays must never leave two traps or a stale body scroll lock; `use-modal-behavior.test.tsx` pins cleanup.
- A missing, empty, or whitespace-only URL must render no link; `project-actions.test.tsx` pins omission.
- Missing `IntersectionObserver` must not crash navigation or hide reveal content; header/reveal tests pin fallbacks.
- Long modal content at 320px must remain reachable without overflow or an off-screen close control; `portfolio.spec.ts` pins both.
- Reduced-motion and coarse-pointer users must receive no continuous marquee, reveal, or pointer-parallax motion; `portfolio.spec.ts` pins media-query behavior.

---

## File map

```text
app/{globals.css,layout.tsx,page.tsx}
public/dulan-prabashwara-resume.pdf
public/images/projects/*.webp
src/components/
  about/{about,beyond-code}.tsx
  approach/approach.tsx
  contact/contact.tsx
  footer/footer.tsx
  hero/hero.tsx
  journey/journey.tsx
  marquee/technology-marquee.tsx
  media/neutral-media.tsx
  navigation/{header,mobile-menu}.tsx
  projects/{project-actions,project-card,project-dialog,project-list}.tsx
  recognition/{image-lightbox,recognition}.tsx
  reveal/reveal.tsx
  toolkit/toolkit.tsx
src/data/{achievements,journey,projects,skills,socials}.ts
src/hooks/{use-active-section,use-modal-behavior,use-reduced-motion}.ts
src/{test/setup.ts,types/content.ts}
tests/portfolio.spec.ts
playwright.config.ts
vitest.config.ts
design-qa.md
```

Tests are co-located with the component or hook they exercise.

### Task 1: Application foundation and test harness

**Files:**
- Create: `package.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`
- Create: `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`
- Create: `src/test/setup.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/page.test.tsx`
- Create: `public/dulan-prabashwara-resume.pdf`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: the approved spec and `C:\Users\User\OneDrive\Desktop\Dulan prabashwara.pdf`.
- Produces: `RootLayout`, global font/tokens, `@/*` alias, and npm scripts `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `test:run`, `test:e2e`.

- [ ] **Step 1: Write the failing page smoke test**

```tsx
import { render, screen } from '@testing-library/react'
import Page from './page'

it('renders the portfolio main landmark and owner name', () => {
  render(<Page />)
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 1, name: /Dulan Prabashwara/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Create package/test configuration and prove the UI is absent**

Use this script contract:

```json
{
  "name": "dulan-prabashwara-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:run": "vitest run",
    "test:e2e": "playwright test"
  }
}
```

Run:

```powershell
npm install next@latest react@latest react-dom@latest material-symbols
npm install --save-dev typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss eslint eslint-config-next vitest jsdom @vitejs/plugin-react vite-tsconfig-paths @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test
npm run test:run -- app/page.test.tsx
```

Expected: FAIL because the page module is absent.

- [ ] **Step 3: Add the minimal shell, fonts, and tokens**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import 'material-symbols/outlined.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })
export const metadata: Metadata = {
  title: 'Dulan Prabashwara — Software Engineering Undergraduate',
  description: 'Portfolio of Dulan Prabashwara, a software engineering undergraduate building full-stack, AI, real-time, and embedded systems.',
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
    <body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
  </html>
}
```

```tsx
// app/page.tsx — replaced in Task 8
export default function Page() {
  return <main id="main-content"><h1>Dulan Prabashwara</h1></main>
}
```

```css
@import "tailwindcss";
:root {
  --pearl:#f7f4fa; --mist:#f0ebf4; --white:#fff; --plum:#231d2b;
  --muted-plum:#655d6f; --lavender-gray:#8b8295; --border:#ddd6e3;
  --green:#2fae63; --green-hover:#258c50; --soft-green:#e8f8ee;
  --coral:#e85f8e; --soft-coral:#fff0f4;
}
html { scroll-behavior:smooth; }
body { margin:0; background:var(--pearl); color:var(--plum); font-family:var(--font-body),sans-serif; }
h1,h2,h3 { font-family:var(--font-heading),sans-serif; }
.skip-link { position:fixed; left:1rem; top:-4rem; z-index:100; }
.skip-link:focus { top:1rem; }
:focus-visible { outline:3px solid var(--green); outline-offset:3px; }
```

Configure Vitest with React, `vite-tsconfig-paths`, `environment: 'jsdom'`, and `setupFiles: ['./src/test/setup.ts']`. Setup imports `@testing-library/jest-dom/vitest` and calls Testing Library cleanup after each test.

- [ ] **Step 4: Copy the exact résumé and verify**

```powershell
Copy-Item -LiteralPath 'C:\Users\User\OneDrive\Desktop\Dulan prabashwara.pdf' -Destination 'D:\portofolio\public\dulan-prabashwara-resume.pdf'
npm run test:run -- app/page.test.tsx
npm run typecheck
npm run lint
```

Expected: PASS; source/destination PDF hashes match with `Get-FileHash`.

- [ ] **Step 5: Commit**

```powershell
git add package.json package-lock.json tsconfig.json next-env.d.ts next.config.ts postcss.config.mjs eslint.config.mjs vitest.config.ts src/test app public .gitignore
git commit -m "chore: scaffold portfolio application"
```

### Task 2: Typed factual content

**Files:**
- Create: `src/types/content.ts`
- Create: `src/data/projects.ts`, `skills.ts`, `journey.ts`, `achievements.ts`, `socials.ts`
- Create: `src/data/content.test.ts`

**Interfaces:**
- Consumes: facts from the brief, résumé, and approved Beyond Code reference copy.
- Produces: `projects`, `skillGroups`, `journey`, `achievements`, `socials` as readonly typed arrays.

- [ ] **Step 1: Write failing invariants**

```ts
import { achievements } from './achievements'
import { journey } from './journey'
import { projects } from './projects'

it('keeps six projects ordered and unknown links null', () => {
  expect(projects.map(({ title }) => title)).toEqual([
    'EasyBlogger','MediSync','Ceylon News','FoundIt','BotNexus','Pacman Live',
  ])
  expect(projects).toHaveLength(6)
  expect(projects.every(({ liveUrl, repositoryUrl }) => liveUrl === null && repositoryUrl === null)).toBe(true)
})
it('excludes forbidden technologies', () => {
  expect(projects.find((p) => p.slug === 'ceylon-news')!.stack).not.toContain('FastAPI')
  expect(projects.find((p) => p.slug === 'found-it')!.stack).not.toEqual(expect.arrayContaining(['Cloudinary','PostGIS']))
})
it('keeps education and recognition order', () => {
  expect(journey.map(({ institution }) => institution)).toEqual([
    "St. Joseph's College",'B/Darmashoka MMV','Bandarawela Central College','University of Moratuwa',
  ])
  expect(journey.slice(0,3).every(({ detail }) => detail === null)).toBe(true)
  expect(achievements.map(({ result }) => result)).toEqual(['CHAMPIONS','1ST RUNNERS-UP'])
})
```

- [ ] **Step 2: Run the failing test**

Run: `npm run test:run -- src/data/content.test.ts`

Expected: FAIL with unresolved modules.

- [ ] **Step 3: Define exact types**

```ts
export type Project = {
  number:'01'|'02'|'03'|'04'|'05'|'06'; slug:string; title:string; type:string
  overview:string; stack:readonly string[]; features:readonly string[]
  image:string|null; imageAlt:string; liveUrl:string|null; repositoryUrl:string|null
}
export type SkillGroup = { title:string; items:readonly string[] }
export type JourneyEntry = { institution:string; detail:string|null }
export type Achievement = {
  result:'CHAMPIONS'|'1ST RUNNERS-UP'; event:string; description:string; organizer:string
  institution:string; team:string; date:string; image:string|null
}
export type SocialLink = { label:string; value:string; href:string|null }
```

- [ ] **Step 4: Implement all factual records**

Create six project objects in required order. Copy every résumé feature bullet after fixing PDF line wrapping, without adding claims. Use exactly these stacks:

```ts
const stacks = {
  easyblogger:['Next.js','Node.js','Express.js','PostgreSQL','Prisma ORM','Socket.IO','Firebase','Stripe','Heroku'],
  medisync:['Next.js','TypeScript','Spring Boot','Java','PostgreSQL','Supabase','WebSocket/STOMP','LiveKit','Tailwind CSS'],
  ceylonNews:['Next.js','TypeScript','Spring Boot','Java','Python','MongoDB','Redis','Supabase','Gemini','OpenRouter','Azure Translator'],
  foundIt:['Next.js','TypeScript','Node.js','Express.js','PostgreSQL','Prisma ORM','Firebase','Leaflet','Google Cloud Run'],
  botNexus:['Next.js','React.js','Firebase','Firestore','Tailwind CSS','OpenRouter API'],
  pacmanLive:['Arduino Nano','ESP32','ESP-NOW','Serial Communication','16x16 LED Matrix','WS2812B LED Strip','Servo Motor','A4988'],
} as const
```

Every project starts with `image`, `liveUrl`, and `repositoryUrl` set to `null`. Add:

Use these exact feature records, preserving each project boundary:

- EasyBlogger: Firebase Authentication/PostgreSQL synchronization APIs; Socket.IO/REST messaging with delivery, presence, and persistent storage; Stripe payments, webhooks, premium roles, and separate Heroku services.
- MediSync: four-role authentication, verification, appointments, and access control; WebSocket/STOMP and LiveKit messaging/video with notifications, persistent chat, and short-lived tokens; prescriptions/pharmacy with payment verification, QR generation/validation, concurrency protection, and reuse prevention.
- Ceylon News: RSS and publisher-specific Python ingestion/normalization; Sinhala/Tamil translation, AI enrichment, embeddings, story clustering, For You feeds, trends, and grounded Ask This Story; Redis Streams supervision/recovery/idempotency with Gemini/OpenRouter/Azure fallbacks.
- FoundIt: REST create/search/update/resolve reports; Firebase Authentication, PostgreSQL, Prisma, image uploads, comments, and user report management; Leaflet maps, geolocation search, filters, nearby notifications, and Google Cloud Run deployment.
- BotNexus: customizable AI personality creation and conversation; Firebase Authentication/Firestore accounts, bot management, persistent history, and real-time synchronization; server API routes for OpenRouter responses, model fallback, and reliable message processing.
- Pacman Live: multi-level logic, 2D-array maze navigation, ESP-NOW, and serial communication; 16x16/8x8 matrices, WS2812B life indicators, servo level display, buzzer, stepper motor, and vibration feedback.

```ts
export const skillGroups = [
  { title:'Languages', items:['JavaScript','TypeScript','Python','Java','C','HTML','CSS'] },
  { title:'Frontend', items:['React.js','Next.js','Tailwind CSS','UI/UX'] },
  { title:'Backend & Real-time', items:['Node.js','Express.js','Spring Boot','REST APIs','Socket.IO','WebSocket/STOMP'] },
  { title:'Data & Infrastructure', items:['PostgreSQL','Firebase Firestore','Supabase','Neon','Prisma ORM','MongoDB','Git','GitHub','GitLab','Docker','Jenkins','Heroku','Google Cloud Run'] },
  { title:'Practices', items:['Agile Development','Software Architecture','Debugging','REST API Design'] },
] as const
export const journey = [
  { institution:"St. Joseph's College", detail:null },
  { institution:'B/Darmashoka MMV', detail:null },
  { institution:'Bandarawela Central College', detail:null },
  { institution:'University of Moratuwa', detail:'BSc. in Information Technology (Hons)' },
] as const
export const achievements = [
  { result:'CHAMPIONS', event:'GenZipher Hackathon', description:'Hackathon', organizer:'CSSL GenZ Chapter', institution:'University of Colombo School of Computing', team:'Team CodeStormers', date:'Feb 2026', image:null },
  { result:'1ST RUNNERS-UP', event:'MoraXtreme 10.0', description:'Algorithmic Coding Competition', organizer:'IEEE Student Branch & IEEE Computer Society', institution:'University of Moratuwa', team:'Team Hexa 404', date:'Jan 2026', image:null },
] as const
export const socials = [
  { label:'Email', value:'dulanprabashwara@gmail.com', href:'mailto:dulanprabashwara@gmail.com' },
  { label:'LinkedIn', value:'linkedin.com/in/dulan-prabashwara/', href:'https://linkedin.com/in/dulan-prabashwara/' },
  { label:'GitHub', value:'github.com/dulanprabashwara', href:'https://github.com/dulanprabashwara' },
  { label:'Location', value:'Bandarawela, Sri Lanka', href:null },
] as const
```

- [ ] **Step 5: Verify and commit**

```powershell
npm run test:run -- src/data/content.test.ts
git add src/types src/data
git commit -m "feat: add typed portfolio content"
```

### Task 3: Overlay behavior and responsive navigation

**Files:**
- Create: `src/hooks/use-modal-behavior.ts`, `use-modal-behavior.test.tsx`, `use-active-section.ts`
- Create: `src/components/navigation/header.tsx`, `mobile-menu.tsx`, `header.test.tsx`

**Interfaces:**
- Consumes: section IDs `about`, `projects`, `toolkit`, `approach`, `journey`, `recognition`, `contact`.
- Produces: `useModalBehavior({open,onClose,containerRef,triggerRef})`, `useActiveSection(ids)`, and `Header`.

- [ ] **Step 1: Write failing interactions**

```tsx
it('closes navigation on Escape and restores trigger focus', async () => {
  const user = userEvent.setup()
  render(<Header />)
  const trigger = screen.getByRole('button', { name:/open navigation/i })
  await user.click(trigger)
  expect(trigger).toHaveAttribute('aria-expanded','true')
  expect(screen.getByRole('dialog', { name:/navigation/i })).toBeInTheDocument()
  await user.keyboard('{Escape}')
  expect(screen.queryByRole('dialog', { name:/navigation/i })).not.toBeInTheDocument()
  expect(trigger).toHaveFocus()
})
it('retains anchors without IntersectionObserver', () => {
  vi.stubGlobal('IntersectionObserver', undefined)
  render(<Header />)
  expect(screen.getByRole('link', { name:'Projects' })).toHaveAttribute('href','#projects')
})
```

Hook tests open/close two harness overlays sequentially and assert body overflow returns to its original value after each close.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:run -- src/components/navigation src/hooks/use-modal-behavior.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implement shared modal behavior**

```ts
export type ModalBehaviorOptions = {
  open:boolean; onClose:()=>void
  containerRef:React.RefObject<HTMLElement|null>
  triggerRef:React.RefObject<HTMLElement|null>
}
```

When open: save body overflow, set `hidden`, focus the first `a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])`, cycle Tab/Shift+Tab, close on Escape, remove listeners, restore overflow, then restore trigger focus. Callers memoize `onClose`.

- [ ] **Step 4: Implement header and drawer**

Use exact desktop labels `ABOUT / PROJECTS / SKILLS / APPROACH / JOURNEY / RECOGNITION / CONTACT / RESUME ↗`. Mobile renders Material Symbol `terminal`, `DULAN.`, résumé, and menu button. Drawer uses `role="dialog"`, `aria-modal`, `aria-label="Navigation"`, and closes from close button, own backdrop, Escape, or anchor. `useActiveSection` uses `rootMargin: '-35% 0px -55%'`; unavailable observer returns `null`; active links get `aria-current="location"`.

- [ ] **Step 5: Verify and commit**

```powershell
npm run test:run -- src/components/navigation src/hooks/use-modal-behavior.test.tsx
git add src/hooks src/components/navigation
git commit -m "feat: add accessible portfolio navigation"
```

### Task 4: Hero, marquee, About, and Beyond Code

**Files:**
- Create: `src/hooks/use-reduced-motion.ts`
- Create: `src/components/media/neutral-media.tsx`
- Create: `src/components/hero/hero.tsx`, `hero.test.tsx`
- Create: `src/components/marquee/technology-marquee.tsx`
- Create: `src/components/about/about.tsx`, `about.test.tsx`, `beyond-code.tsx`

**Interfaces:**
- Consumes: `skillGroups` and fixed brief copy.
- Produces: `Hero`, `TechnologyMarquee`, `About`, `BeyondCode`, `NeutralMedia`, `useReducedMotion`.

- [ ] **Step 1: Write failing content tests**

```tsx
it('renders exact hero content and destinations', () => {
  render(<Hero />)
  expect(screen.getByText('SOFTWARE ENGINEERING • FULL-STACK • AI')).toBeInTheDocument()
  expect(screen.getByRole('heading', { level:1 })).toHaveTextContent('Dulan Prabashwara.')
  expect(screen.getByRole('link', { name:/Explore my work/i })).toHaveAttribute('href','#projects')
  expect(screen.getByRole('link', { name:/View résumé/i })).toHaveAttribute('href','/dulan-prabashwara-resume.pdf')
  expect(screen.getByText('Open to Software Engineering opportunities')).toBeInTheDocument()
})
it('keeps academic detail in About', () => {
  render(<About />)
  expect(screen.getByText('BSc. in Information Technology (Hons)')).toBeInTheDocument()
  expect(screen.getByText('Apr 2024 — Present')).toBeInTheDocument()
  expect(screen.getByText('CGPA 3.70 / 4.00')).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(7)
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:run -- src/components/hero src/components/about`

Expected: FAIL.

- [ ] **Step 3: Implement exact content**

Hero uses semantic name text, colors only the final period green, uses exact supporting copy/actions/status, and renders `NeutralMedia label="Portrait not supplied" aspect="circle"`. Pointer movement runs only for fine hover and no reduced motion.

Marquee flattens/de-duplicates skills, duplicates only its visual track with `aria-hidden`, and disables animation under reduced motion.

About uses the two exact supplied paragraphs, university, degree, `Apr 2024 — Present`, `CGPA 3.70 / 4.00`, and seven courses. Beyond Code uses `INTERSECTION & PHILOSOPHY`, “Curious about where software, intelligent systems and physical computing intersect.”, and `WEB SYSTEMS`, `AI`, `EMBEDDED`.

- [ ] **Step 4: Verify and commit**

```powershell
npm run test:run -- src/components/hero src/components/about
git add src/hooks/use-reduced-motion.ts src/components/media src/components/hero src/components/marquee src/components/about
git commit -m "feat: build portfolio introduction sections"
```

### Task 5: Projects and case-study dialog

**Files:**
- Create: `public/images/projects/*.webp` only for retrieved supplied project visuals
- Create: `src/components/projects/project-actions.tsx`, `project-actions.test.tsx`
- Create: `src/components/projects/project-card.tsx`, `project-dialog.tsx`, `project-list.tsx`, `project-list.test.tsx`
- Modify: `src/data/projects.ts` only to assign verified local images

**Interfaces:**
- Consumes: `projects`, `Project`, `NeutralMedia`, `useModalBehavior`.
- Produces: `ProjectList`, `ProjectDialog`, `ProjectActions`.

- [ ] **Step 1: Write failing behavior tests**

```tsx
it('renders six projects in order and opens a case study', async () => {
  const user = userEvent.setup()
  render(<ProjectList />)
  expect(screen.getAllByRole('heading', { level:3 }).map((n) => n.textContent)).toEqual([
    'EasyBlogger','MediSync','Ceylon News','FoundIt','BotNexus','Pacman Live',
  ])
  await user.click(screen.getByRole('button', { name:/Open EasyBlogger case study/i }))
  expect(screen.getByRole('dialog', { name:'EasyBlogger' })).toBeInTheDocument()
})
it('never renders Pacman deployment actions', () => {
  render(<ProjectActions project={projects[5]} />)
  expect(screen.queryByRole('link', { name:/live site|repository/i })).not.toBeInTheDocument()
})
it.each([null,'','   '])('omits invalid URL %p', (liveUrl) => {
  render(<ProjectActions project={{ ...projects[0], liveUrl }} />)
  expect(screen.queryByRole('link', { name:/live site/i })).not.toBeInTheDocument()
})
it('external action does not open the case study', async () => {
  const onOpen = vi.fn()
  const user = userEvent.setup()
  render(<ProjectCard project={{...projects[0],liveUrl:'https://example.com'}} index={0} onOpen={onOpen} />)
  await user.click(screen.getByRole('link', { name:/live site/i }))
  expect(onOpen).not.toHaveBeenCalled()
})
```

Add dialog cases for Tab/Shift+Tab wrap, Escape, own-backdrop close, inner click staying open, and focus restoration.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:run -- src/components/projects`

Expected: FAIL.

- [ ] **Step 3: Retrieve only supplied project visuals**

Read six project image URLs from the supplied Stitch HTML, download those exact sources, convert to high-quality WebP, and inspect each. Do not download its portrait URL or create event imagery. If unavailable/unrelated, retain `image: null`; do not substitute search or AI imagery.

Check: `Get-ChildItem public/images/projects/*.webp | Select-Object Name,Length` shows non-empty files for every assigned path.

- [ ] **Step 4: Implement actions, cards, and dialog**

```tsx
const validUrl = (value:string|null) => value?.trim() || null
export function ProjectActions({ project }:{ project:Project }) {
  const live = validUrl(project.liveUrl)
  const repository = validUrl(project.repositoryUrl)
  if (!live && !repository) return null
  return <div aria-label={`${project.title} links`}>
    {live && <a href={live} target="_blank" rel="noreferrer">LIVE SITE <span className="material-symbols-outlined" aria-hidden>open_in_new</span></a>}
    {repository && <a href={repository} target="_blank" rel="noreferrer">REPOSITORY <span className="material-symbols-outlined" aria-hidden>open_in_new</span></a>}
  </div>
}
```

Image/title triggers are buttons; external anchors are siblings. Dialog shows only type, overview, stack, factual features, optional image, and verified actions. It uses `role="dialog"`, `aria-modal`, `aria-labelledby`, shared modal behavior, visible close, and closes on backdrop only when `event.target === event.currentTarget`.

- [ ] **Step 5: Verify and commit**

```powershell
npm run test:run -- src/components/projects
git add public/images/projects src/data/projects.ts src/components/projects
git commit -m "feat: add project showcase and case studies"
```

### Task 6: Toolkit, approach, and journey

**Files:**
- Create: `src/components/toolkit/toolkit.tsx`, `toolkit.test.tsx`
- Create: `src/components/approach/approach.tsx`, `approach.test.tsx`
- Create: `src/components/journey/journey.tsx`, `journey.test.tsx`

**Interfaces:**
- Consumes: `skillGroups`, `journey`, exact approach copy.
- Produces: `Toolkit`, `Approach`, `Journey`.

- [ ] **Step 1: Write failing constraints**

```tsx
it('renders skills without proficiency claims', () => {
  render(<Toolkit />)
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
  expect(screen.getByText('WebSocket/STOMP')).toBeInTheDocument()
  expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  expect(screen.queryByText(/%|years? of experience/i)).not.toBeInTheDocument()
})
it('keeps journey order and university-only detail', () => {
  render(<Journey />)
  expect(screen.getAllByRole('listitem').map((i) => i.querySelector('h3')?.textContent)).toEqual([
    "St. Joseph's College",'B/Darmashoka MMV','Bandarawela Central College','University of Moratuwa',
  ])
  expect(screen.getAllByText('BSc. in Information Technology (Hons)')).toHaveLength(1)
  expect(screen.queryByText(/CGPA|Apr 2024|Secondary Education/i)).not.toBeInTheDocument()
})
```

Approach test asserts all four headings and exact descriptions in order.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:run -- src/components/toolkit src/components/approach src/components/journey`

Expected: FAIL.

- [ ] **Step 3: Implement semantic sections**

Toolkit maps groups into titled lists of text chips. Approach maps an immutable four-record array containing exact brief copy. Journey is an ordered list whose timeline uses normal borders/pseudo-elements. Render `entry.detail` only when non-null.

- [ ] **Step 4: Verify and commit**

```powershell
npm run test:run -- src/components/toolkit src/components/approach src/components/journey
git add src/components/toolkit src/components/approach src/components/journey
git commit -m "feat: add skills approach and education sections"
```

### Task 7: Recognition, optional lightbox, contact, and footer

**Files:**
- Create: `src/components/recognition/image-lightbox.tsx`, `recognition.tsx`, `recognition.test.tsx`
- Create: `src/components/contact/contact.tsx`, `contact.test.tsx`
- Create: `src/components/footer/footer.tsx`

**Interfaces:**
- Consumes: `achievements`, `socials`, `NeutralMedia`, `useModalBehavior`.
- Produces: `Recognition`, `ImageLightbox`, `Contact`, `Footer`.

- [ ] **Step 1: Write failing tests**

```tsx
it('renders achievements without invented photo controls', () => {
  render(<Recognition />)
  for (const value of ['CHAMPIONS','GenZipher Hackathon','Team CodeStormers','1ST RUNNERS-UP','MoraXtreme 10.0','Team Hexa 404']) {
    expect(screen.getByText(value)).toBeInTheDocument()
  }
  expect(screen.queryByRole('button', { name:/open .* photo/i })).not.toBeInTheDocument()
})
it('renders approved contact details but no phone', () => {
  render(<Contact />)
  expect(screen.getByRole('link', { name:/dulanprabashwara@gmail.com/i })).toHaveAttribute('href','mailto:dulanprabashwara@gmail.com')
  expect(screen.getByRole('link', { name:/linkedin.com/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name:/github.com/i })).toBeInTheDocument()
  expect(screen.getByText('Bandarawela, Sri Lanka')).toBeInTheDocument()
  expect(screen.queryByText(/\+94|0776277320/)).not.toBeInTheDocument()
})
```

Add a lightbox fixture test with `{ ...achievements[0], image:'/images/achievement.webp' }`: render `ImageLightbox` with an open trigger ref, assert `role="dialog"` is named `GenZipher Hackathon`, press Escape, assert `onClose` fires, unmount, and assert focus returns to the trigger.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:run -- src/components/recognition src/components/contact`

Expected: FAIL.

- [ ] **Step 3: Implement components**

Recognition cards use neutral missing-media treatment while image is null. Render a lightbox trigger only for a real image. Lightbox reuses the dialog/backdrop/focus contract. Contact links email/LinkedIn/GitHub and shows plain location. Footer contains Material Symbol `terminal`, `DULAN.`, “Designed & built with care.”, `© 2026 Dulan Prabashwara`, and `<a href="#top">BACK TO TOP ↑</a>`.

- [ ] **Step 4: Verify and commit**

```powershell
npm run test:run -- src/components/recognition src/components/contact
git add src/components/recognition src/components/contact src/components/footer
git commit -m "feat: add recognition contact and footer"
```

### Task 8: Page composition, responsive styling, and motion

**Files:**
- Create: `src/components/reveal/reveal.tsx`, `reveal.test.tsx`
- Modify: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `app/page.test.tsx`

**Interfaces:**
- Consumes: all section components.
- Produces: complete ordered `/` and final metadata.

- [ ] **Step 1: Write failing order/fallback tests**

```tsx
it('composes sections in required order', () => {
  const { container } = render(<Page />)
  expect(Array.from(container.querySelectorAll('main > section[id]')).map((n) => n.id)).toEqual([
    'hero','technology','about','projects','toolkit','approach','journey','recognition','beyond-code','contact',
  ])
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})
it('reveals immediately without IntersectionObserver', () => {
  vi.stubGlobal('IntersectionObserver', undefined)
  render(<Reveal><p>Visible content</p></Reveal>)
  expect(screen.getByText('Visible content').parentElement).toHaveAttribute('data-visible','true')
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:run -- app/page.test.tsx src/components/reveal`

Expected: FAIL.

- [ ] **Step 3: Compose exact order**

```tsx
export default function Page() {
  return <div id="top">
    <Header />
    <main id="main-content">
      <section id="hero" aria-labelledby="hero-title"><Hero /></section>
      <section id="technology" aria-label="Technology overview"><TechnologyMarquee /></section>
      <section id="about" aria-labelledby="about-title"><Reveal><About /></Reveal></section>
      <section id="projects" aria-labelledby="projects-title"><Reveal><ProjectList /></Reveal></section>
      <section id="toolkit" aria-labelledby="toolkit-title"><Reveal><Toolkit /></Reveal></section>
      <section id="approach" aria-labelledby="approach-title"><Reveal><Approach /></Reveal></section>
      <section id="journey" aria-labelledby="journey-title"><Reveal><Journey /></Reveal></section>
      <section id="recognition" aria-labelledby="recognition-title"><Reveal><Recognition /></Reveal></section>
      <section id="beyond-code" aria-labelledby="beyond-code-title"><Reveal><BeyondCode /></Reveal></section>
      <section id="contact" aria-labelledby="contact-title"><Reveal><Contact /></Reveal></section>
    </main><Footer />
  </div>
}
```

- [ ] **Step 4: Implement responsive design and motion**

Use centered max width, 24px mobile/~64px desktop gutters, thin lavender rules, 4.75–5.25rem desktop hero title, circular hero media, alternating desktop project rows, stacked mobile cards, white/lavender surfaces, and green/coral accents. Ensure 44px mobile targets.

`Reveal` uses one observer, stays visible after intersection, shows immediately without API, and bypasses motion under reduced motion. Include:

```css
@media (prefers-reduced-motion:reduce) {
  *,*::before,*::after {
    animation-duration:.01ms!important; animation-iteration-count:1!important;
    scroll-behavior:auto!important; transition-duration:.01ms!important;
  }
  .marquee-track,[data-reveal] { transform:none!important; opacity:1!important; }
}
@media (hover:none),(pointer:coarse) {
  .portrait-motion { transform:none!important; }
}
```

Complete grounded metadata without inventing a social image.

- [ ] **Step 5: Verify and commit**

```powershell
npm run test:run
npm run typecheck
npm run lint
git add app src/components/reveal
git commit -m "feat: compose responsive portfolio experience"
```

### Task 9: Browser acceptance, design QA, and production verification

**Files:**
- Create: `playwright.config.ts`, `tests/portfolio.spec.ts`, `design-qa.md`
- Modify: owning source/test files only when a check exposes a defect.

**Interfaces:**
- Consumes: complete `/`, supplied desktop/mobile references, prior contracts.
- Produces: browser checks, comparison captures, and `design-qa.md` ending `final result: passed`.

- [ ] **Step 1: Write browser tests**

```ts
import { expect, test } from '@playwright/test'

test('mobile overlays restore keyboard focus', async ({ page }) => {
  await page.setViewportSize({ width:390, height:844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name:/open navigation/i })
  await menu.click()
  await expect(page.getByRole('dialog', { name:/navigation/i })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(menu).toBeFocused()
  const project = page.getByRole('button', { name:/open EasyBlogger case study/i })
  await project.click()
  await expect(page.getByRole('dialog', { name:'EasyBlogger' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(project).toBeFocused()
})
test('320px layout fits and Pacman has no external actions', async ({ page }) => {
  await page.setViewportSize({ width:320, height:720 })
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.scrollWidth-document.documentElement.clientWidth)).toBeLessThanOrEqual(1)
  const pacman = page.locator('article', { hasText:'Pacman Live' })
  await expect(pacman.getByRole('link', { name:/live site|repository/i })).toHaveCount(0)
})
test('reduced motion disables movement', async ({ page }) => {
  await page.emulateMedia({ reducedMotion:'reduce' })
  await page.goto('/')
  await expect(page.locator('.marquee-track').first()).toHaveCSS('animation-duration','0.01s')
  await expect(page.locator('[data-reveal]').first()).toHaveCSS('transform','none')
})
```

Add assertions for maximum one active `[aria-modal="true"]` and viewport-visible close control after scrolling long dialog content.

- [ ] **Step 2: Run browser checks**

If direct Playwright use requires permission in the active environment, obtain it before the CLI. Install its Chromium runtime with `npx playwright install chromium`, run the dev server on port 4173, then run `npm run test:e2e`. Record genuine failures; never weaken assertions.

- [ ] **Step 3: Capture and compare desktop/mobile states**

Capture implementation/source at matched proportions. Compare typography, rhythm, gutters, borders, color, media crop, alternating rows, mobile stacking, close reachability, and overflow. Write:

```md
# Design QA
## Compared states
- Desktop: source reference vs implementation at 1440 × 1000
- Mobile: source reference vs implementation at 390 × 844
## Findings
- P0: none
- P1: none
- P2: none
- P3: none or optional polish only
## Verification
- Navigation, project dialog, and lightbox/fallback behavior checked
- Keyboard, focus restoration, reduced motion, and overflow checked
- Factual and project-order constraints checked
final result: passed
```

Use those fixed viewports for repeatable comparison. If comparison is impossible, record `final result: blocked` and do not claim completion.

- [ ] **Step 4: Fix all P0/P1/P2 findings and repeat**

First add/tighten the owning test, make the smallest correction, recapture identical state, and update the report. Stop iterating on optional P3 polish after required checks pass.

- [ ] **Step 5: Run final verification**

```powershell
npm run test:run
npm run test:e2e
npm run typecheck
npm run lint
npm run build
Get-FileHash 'C:\Users\User\OneDrive\Desktop\Dulan prabashwara.pdf','D:\portofolio\public\dulan-prabashwara-resume.pdf'
rg -n "example\.com|href=\"#\"|FastAPI|Cloudinary|PostGIS" app src public --glob "!*.test.*"
```

Expected: all commands exit 0; PDF hashes match; scan finds no fake URL or forbidden technology. The `example.com` fixture remains only in excluded test files.

- [ ] **Step 6: Commit verified results**

```powershell
git add playwright.config.ts tests design-qa.md app src public
git commit -m "test: verify portfolio experience"
```

The branch enters the finishing workflow only after `design-qa.md` says `final result: passed` and verification is current.

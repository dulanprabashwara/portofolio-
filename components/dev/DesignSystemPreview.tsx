import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonLink } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";

export function DesignSystemPreview() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Header / Intro Banner */}
      <header className="border-b border-border-light pb-8">
        <Container>
          <div className="flex flex-col gap-2">
            <span className="font-display text-emerald-dark font-bold tracking-wider text-sm uppercase">
              Phase 2 Visual Foundation
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink">
              Dulan Prabashwara
            </h2>
            <p className="font-body text-base text-text-muted">
              Design System Preview — Colors, Typography &amp; UI Primitives
            </p>
          </div>
        </Container>
      </header>

      {/* SECTION 1: LIGHT SYSTEM PREVIEW */}
      <section className="space-y-12">
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              theme="light"
              eyebrow="01 / ABOUT"
              title="Engineering software beyond the interface."
              description="I build full-stack applications that combine clean interfaces, reliable backend systems, real-time experiences, and thoughtful engineering."
            />

            {/* Typography Scale Preview */}
            <div className="bg-surface-light border border-border-light rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-ink uppercase tracking-wider border-b border-border-light pb-3">
                Typography Scale (Light System)
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-text-muted font-mono block mb-1">
                    Display Hero (Genos 700)
                  </span>
                  <div className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-ink leading-none">
                    DULAN PRABASHWARA.
                  </div>
                </div>

                <div>
                  <span className="text-xs text-text-muted font-mono block mb-1">
                    Section Heading (Genos 600)
                  </span>
                  <div className="font-display text-2xl sm:text-4xl font-semibold text-ink">
                    Engineering software beyond the interface.
                  </div>
                </div>

                <div>
                  <span className="text-xs text-text-muted font-mono block mb-1">
                    Body Large (Poppins 500)
                  </span>
                  <p className="font-body text-lg text-ink font-medium">
                    Full-stack developer with focus on scalable backend
                    architecture and responsive systems.
                  </p>
                </div>

                <div>
                  <span className="text-xs text-text-muted font-mono block mb-1">
                    Body Regular &amp; Muted (Poppins 400)
                  </span>
                  <p className="font-body text-base text-ink max-w-2xl leading-relaxed">
                    Undergraduate at University of Moratuwa pursuing BSc in
                    Information Technology (Hons) with a CGPA of 3.70 / 4.00.
                  </p>
                  <p className="font-body text-sm text-text-muted mt-1">
                    Currently seeking Software Engineering Internship
                    opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons Preview */}
            <div className="bg-surface-light border border-border-light rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-ink uppercase tracking-wider border-b border-border-light pb-3">
                Buttons &amp; Links (Light System)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Explore Projects ↗</Button>
                <ButtonLink variant="secondary-light" href="#cv">
                  Download CV ↓
                </ButtonLink>
                <Button variant="ghost">Ghost Action</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Badges Preview */}
            <div className="bg-surface-light border border-border-light rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-display text-lg font-semibold text-ink uppercase tracking-wider border-b border-border-light pb-3">
                Tech Badges (Light System)
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <TechBadge tone="light">Next.js</TechBadge>
                <TechBadge tone="light">TypeScript</TechBadge>
                <TechBadge tone="light">React.js</TechBadge>
                <TechBadge tone="light">Spring Boot</TechBadge>
                <TechBadge tone="light">PostgreSQL</TechBadge>
                <TechBadge tone="light">Docker</TechBadge>
                <TechBadge tone="light" size="sm">
                  REST APIs
                </TechBadge>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: DARK SYSTEM PREVIEW */}
      <section className="bg-bg-deep text-text-dark-primary py-16 border-t border-border-dark">
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              theme="dark"
              eyebrow="02 / PROJECTS"
              title="Architected for scale and resilience."
              description="Engineering evidence across relational data, distributed real-time messaging, and embedded logic."
            />

            {/* Dark Typography Preview */}
            <div className="bg-surface-dark border border-border-dark rounded-md p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-lg font-semibold text-emerald-bright uppercase tracking-wider border-b border-border-dark pb-3">
                Typography Scale (Dark System)
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-text-dark-secondary font-mono block mb-1">
                    Display Hero (Genos 700)
                  </span>
                  <div className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-text-dark-primary leading-none">
                    DULAN PRABASHWARA.
                  </div>
                </div>

                <div>
                  <span className="text-xs text-text-dark-secondary font-mono block mb-1">
                    Section Heading (Genos 600)
                  </span>
                  <div className="font-display text-2xl sm:text-4xl font-semibold text-text-dark-primary">
                    Architected for scale and resilience.
                  </div>
                </div>

                <div>
                  <span className="text-xs text-text-dark-secondary font-mono block mb-1">
                    Body Dark Primary &amp; Secondary (Poppins 400)
                  </span>
                  <p className="font-body text-base text-text-dark-primary max-w-2xl leading-relaxed">
                    Production systems featuring Firebase sync, STOMP
                    WebSockets, Redis Streams, and automated deployment.
                  </p>
                  <p className="font-body text-sm text-text-dark-secondary mt-1">
                    Balanced engineering aesthetic with emerald accents and
                    accessible contrast ratios.
                  </p>
                </div>
              </div>
            </div>

            {/* Dark Buttons Preview */}
            <div className="bg-surface-dark border border-border-dark rounded-md p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-lg font-semibold text-emerald-bright uppercase tracking-wider border-b border-border-dark pb-3">
                Buttons &amp; Links (Dark System)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Explore Projects ↗</Button>
                <ButtonLink variant="secondary-dark" href="#github">
                  View GitHub ↗
                </ButtonLink>
                <Button variant="ghost">Ghost Action</Button>
                <Button variant="secondary-dark" disabled>
                  Disabled Action
                </Button>
              </div>
            </div>

            {/* Dark Badges Preview */}
            <div className="bg-surface-dark border border-border-dark rounded-md p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-lg font-semibold text-emerald-bright uppercase tracking-wider border-b border-border-dark pb-3">
                Tech Badges (Dark System)
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <TechBadge tone="dark">Next.js</TechBadge>
                <TechBadge tone="dark">Spring Boot</TechBadge>
                <TechBadge tone="dark">WebSocket/STOMP</TechBadge>
                <TechBadge tone="dark">PostgreSQL</TechBadge>
                <TechBadge tone="dark">Redis Streams</TechBadge>
                <TechBadge tone="dark">LiveKit</TechBadge>
                <TechBadge tone="dark" size="sm">
                  ESP-NOW
                </TechBadge>
              </div>
            </div>

            {/* Surface Elevations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-dark border border-border-dark rounded-md p-6">
                <span className="font-mono text-xs text-emerald-bright block mb-2">
                  Surface Dark (--surface-dark: #0D2E27)
                </span>
                <p className="font-body text-sm text-text-dark-secondary">
                  Base surface for project cards, bento grids, and dark modals.
                </p>
              </div>
              <div className="bg-surface-raised border border-border-dark rounded-md p-6 shadow-dark-soft">
                <span className="font-mono text-xs text-mint block mb-2">
                  Surface Raised (--surface-raised: #123A32)
                </span>
                <p className="font-body text-sm text-text-dark-secondary">
                  Raised surface for interactive states, dropdowns, and floating
                  pills.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

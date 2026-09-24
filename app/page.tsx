import { CursorGlow } from "@/components/ui/cursor-glow";
import { About } from "@/components/about/about";
import { BeyondCode } from "@/components/about/beyond-code";
import { Approach } from "@/components/approach/approach";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Journey } from "@/components/journey/journey";
import { TechnologyMarquee } from "@/components/marquee/technology-marquee";
import { Header } from "@/components/navigation/header";
import { ProjectList } from "@/components/projects/project-list";
import { Recognition } from "@/components/recognition/recognition";
import { Reveal } from "@/components/reveal/reveal";
import { Toolkit } from "@/components/toolkit/toolkit";

export default function Page() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[var(--bg-main)] text-[var(--plum)] relative transition-colors duration-300 overflow-x-clip"
    >
      <CursorGlow />
      <Header />
      <main id="main-content">
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="bg-[var(--pearl)] dark:bg-[#0A0A0A] overflow-x-clip"
        >
          <Hero />
        </section>
        <section
          id="technology"
          aria-label="Technology overview"
          className="bg-[var(--mist)] dark:bg-[#0D0D0D]"
        >
          <TechnologyMarquee />
        </section>
        <section
          id="about"
          aria-labelledby="about-title"
          className="bg-[var(--pearl)] dark:bg-[#101010]"
        >
          <Reveal>
            <About />
          </Reveal>
        </section>
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="bg-[var(--mist)]/40 dark:bg-[#0A0A0A]"
        >
          <Reveal>
            <ProjectList />
          </Reveal>
        </section>
        <section
          id="toolkit"
          aria-labelledby="toolkit-title"
          className="bg-[var(--pearl)] dark:bg-[#111111]"
        >
          <Reveal>
            <Toolkit />
          </Reveal>
        </section>
        <section
          id="approach"
          aria-labelledby="approach-title"
          className="bg-[var(--mist)] dark:bg-[#0D0D0D]"
        >
          <Reveal>
            <Approach />
          </Reveal>
        </section>
        <section
          id="journey"
          aria-labelledby="journey-title"
          className="bg-[var(--pearl)] dark:bg-[#101010]"
        >
          <Reveal>
            <Journey />
          </Reveal>
        </section>
        <section
          id="recognition"
          aria-labelledby="recognition-title"
          className="bg-[var(--mist)]/40 dark:bg-[#0A0A0A]"
        >
          <Reveal>
            <Recognition />
          </Reveal>
        </section>
        <section
          id="beyond-code"
          aria-labelledby="beyond-code-title"
          className="bg-[var(--pearl)] dark:bg-[#0D0D0D]"
        >
          <Reveal>
            <BeyondCode />
          </Reveal>
        </section>
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="bg-[var(--mist)] dark:bg-[#121212]"
        >
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

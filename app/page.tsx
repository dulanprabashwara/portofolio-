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
    <div id="top" className="min-h-screen bg-[var(--pearl,#f7f4fa)]">
      <Header />
      <main id="main-content">
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="bg-[var(--pearl,#f7f4fa)]"
        >
          <Hero />
        </section>
        <section
          id="technology"
          aria-label="Technology overview"
          className="bg-white/60"
        >
          <TechnologyMarquee />
        </section>
        <section id="about" aria-labelledby="about-title" className="bg-white">
          <Reveal>
            <About />
          </Reveal>
        </section>
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="bg-[var(--pearl,#f7f4fa)]"
        >
          <Reveal>
            <ProjectList />
          </Reveal>
        </section>
        <section
          id="toolkit"
          aria-labelledby="toolkit-title"
          className="bg-white"
        >
          <Reveal>
            <Toolkit />
          </Reveal>
        </section>
        <section
          id="approach"
          aria-labelledby="approach-title"
          className="bg-[var(--mist,#f0ebf4)]/35"
        >
          <Reveal>
            <Approach />
          </Reveal>
        </section>
        <section
          id="journey"
          aria-labelledby="journey-title"
          className="bg-white"
        >
          <Reveal>
            <Journey />
          </Reveal>
        </section>
        <section
          id="recognition"
          aria-labelledby="recognition-title"
          className="bg-[var(--pearl,#f7f4fa)]"
        >
          <Reveal>
            <Recognition />
          </Reveal>
        </section>
        <section
          id="beyond-code"
          aria-labelledby="beyond-code-title"
          className="bg-[var(--mist,#f0ebf4)]/30"
        >
          <Reveal>
            <BeyondCode />
          </Reveal>
        </section>
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="bg-white"
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

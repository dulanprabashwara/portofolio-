import { Container } from "@/components/ui/Container";
import { AboutContent } from "./AboutContent";

export function About() {
  return (
    <section id="about" className="relative bg-off-white text-ink scroll-mt-24">
      {/* Dark-to-light architectural transition band bridging TechMarquee into About */}
      <div
        className="w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-bg-dark to-off-white pointer-events-none"
        aria-hidden="true"
      />

      <Container className="pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-28 md:pb-36">
        <AboutContent />
      </Container>
    </section>
  );
}

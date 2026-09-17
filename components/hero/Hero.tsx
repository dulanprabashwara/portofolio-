import { Container } from "@/components/ui/Container";
import { HeroBackground } from "./HeroBackground";
import { HeroContent, HeroSocials } from "./HeroContent";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-bg-deep text-text-dark-primary pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
    >
      {/* 4-Layer Restrained Background */}
      <HeroBackground />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Content (Col 1-7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Visual / Portrait Placeholder (Col 8-12 on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <HeroPortrait />

            {/* Mobile-only social links placed after portrait to follow mobile hierarchy */}
            <div className="lg:hidden w-full max-w-sm mt-4">
              <HeroSocials />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

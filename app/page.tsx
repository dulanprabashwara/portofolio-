import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/hero/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <TechMarquee />
        <About />
      </main>
    </>
  );
}

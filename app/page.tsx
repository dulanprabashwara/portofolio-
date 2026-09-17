import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/hero/Hero";
import { DesignSystemPreview } from "@/components/dev/DesignSystemPreview";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <DesignSystemPreview />
      </main>
    </>
  );
}

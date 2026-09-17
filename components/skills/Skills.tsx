import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBento } from "./SkillBento";
import { TechNetwork } from "./TechNetwork";
import { skillGroups, techNodes, techEdges } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-off-white text-ink scroll-mt-24 pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40 border-t border-mint/15"
    >
      <Container className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="02 / SKILLS"
          title="Tools are temporary. Engineering fundamentals travel."
          description="A stack shaped by full-stack products, real-time systems, cloud deployment, and problem solving."
          theme="light"
        />

        {/* Bento Grid Layer (Categorized Full Skillset) */}
        <SkillBento groups={skillGroups} />

        {/* Technology Network Layer (Interactive Core Stack Relationships) */}
        <TechNetwork nodes={techNodes} edges={techEdges} />
      </Container>
    </section>
  );
}

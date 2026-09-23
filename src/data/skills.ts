import type { SkillGroup } from "@/types/content";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Backend & Real-time",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Socket.IO",
      "WebSocket/STOMP",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "Firebase Firestore",
      "Supabase",
      "Neon",
      "Prisma ORM",
      "MongoDB",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Jenkins",
      "Heroku",
      "Google Cloud Run",
    ],
  },
  {
    title: "Practices",
    items: [
      "Agile Development",
      "Software Architecture",
      "Debugging",
      "REST API Design",
    ],
  },
] as const;

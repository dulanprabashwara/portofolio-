import type { SkillGroup } from "@/types/content";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "LANGUAGES",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "HTML", "CSS"],
  },
  {
    title: "FRONTEND",
    items: ["React.js", "Next.js", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "BACKEND & REAL-TIME",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Socket.IO",
      "WebSocket / STOMP",
    ],
  },
  {
    title: "DATA & INFRASTRUCTURE",
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
] as const;

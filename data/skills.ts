import type { SkillGroup, TechNode, TechEdge } from "@/types/portfolio";

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "UI/UX",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "WebSocket / STOMP",
    ],
  },
  {
    id: "databases",
    title: "Databases & Data",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firebase Firestore",
      "Supabase",
      "Neon",
      "Prisma ORM",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    skills: [
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
    id: "engineering",
    title: "Engineering",
    skills: [
      "Agile Development",
      "Software Architecture",
      "Debugging",
      "REST API Design",
      "Data Structures & Algorithms",
    ],
  },
] as const satisfies readonly SkillGroup[];

export const techNodes = [
  { id: "nextjs", label: "Next.js", group: "frontend" },
  { id: "react", label: "React", group: "frontend" },
  { id: "typescript", label: "TypeScript", group: "languages" },
  { id: "nodejs", label: "Node.js", group: "backend" },
  { id: "spring-boot", label: "Spring Boot", group: "backend" },
  { id: "rest-api", label: "REST APIs", group: "backend" },
  { id: "postgresql", label: "PostgreSQL", group: "databases" },
  { id: "websocket", label: "WebSocket", group: "backend" },
  { id: "docker", label: "Docker", group: "devops" },
] as const satisfies readonly TechNode[];

export const techEdges = [
  { from: "nextjs", to: "react" },
  { from: "nextjs", to: "typescript" },
  { from: "react", to: "typescript" },
  { from: "spring-boot", to: "rest-api" },
  { from: "nodejs", to: "rest-api" },
  { from: "rest-api", to: "postgresql" },
  { from: "websocket", to: "spring-boot" },
  { from: "websocket", to: "nodejs" },
  { from: "docker", to: "spring-boot" },
  { from: "docker", to: "nodejs" },
] as const satisfies readonly TechEdge[];

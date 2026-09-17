import type { JourneyItem } from "@/types/portfolio";

export const journeyItems = [
  {
    id: "university-start",
    date: "2024",
    title: "Started BSc in Information Technology (Hons)",
    description: "University of Moratuwa",
    type: "education",
    sortOrder: 1,
  },
  {
    id: "moraxtreme-2026",
    date: "JAN 2026",
    title: "MoraXtreme 10.0 — First Runners-Up",
    description: "Algorithmic Coding Competition. Team Hexa 404.",
    type: "achievement",
    sortOrder: 2,
  },
  {
    id: "genzipher-2026",
    date: "FEB 2026",
    title: "GenZipher Hackathon — Champions",
    description:
      "CSSL GenZ Chapter, University of Colombo School of Computing. Team CodeStormers.",
    type: "achievement",
    sortOrder: 3,
  },
  {
    id: "current",
    date: "NOW",
    title: "Building full-stack systems",
    description:
      "Seeking Software Engineering Internship opportunities while continuing to develop full-stack software engineering experience.",
    type: "milestone",
    sortOrder: 4,
  },
] as const satisfies readonly JourneyItem[];

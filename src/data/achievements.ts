import type { Achievement } from "@/types/content";

export const achievements: readonly Achievement[] = [
  {
    result: "CHAMPIONS",
    event: "GenZipher Hackathon",
    description: "Hackathon",
    organizer: "CSSL GenZ Chapter",
    institution: "University of Colombo School of Computing",
    team: "Team CodeStormers",
    date: "Feb 2026",
    image: "/images/achievements/genzipher.jpg",
  },
  {
    result: "1ST RUNNERS-UP",
    event: "MoraXtreme 10.0",
    description: "Algorithmic Coding Competition",
    organizer: "IEEE Student Branch & IEEE Computer Society",
    institution: "University of Moratuwa",
    team: "Team Hexa 404",
    date: "Jan 2026",
    image: "/images/achievements/moraxtreme.jpg",
  },
] as const;

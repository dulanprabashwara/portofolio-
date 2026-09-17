import type { Achievement } from "@/types/portfolio";

export const achievements = [
  {
    id: "genzipher-2026",
    placement: "Champions",
    event: "GenZipher Hackathon",
    organizer: "CSSL GenZ Chapter, University of Colombo School of Computing",
    team: "Team CodeStormers",
    date: "February 2026",
  },
  {
    id: "moraxtreme-2026",
    placement: "First Runners-Up",
    event: "MoraXtreme 10.0",
    organizer:
      "IEEE Student Branch & IEEE Computer Society, University of Moratuwa",
    team: "Team Hexa 404",
    date: "January 2026",
  },
] as const satisfies readonly Achievement[];

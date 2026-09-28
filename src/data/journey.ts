import type { JourneyEntry } from "@/types/content";

export const journey: readonly JourneyEntry[] = [
  { institution: "St. Joseph's College", detail: null, period: "2009 – 2016" },
  { institution: "B/Darmashoka MMV", detail: null, period: "2016 – 2019" },
  { institution: "Bandarawela Central College", detail: null, period: "2020 – 2022" },
  {
    institution: "University of Moratuwa",
    detail: "BSc. in Information Technology (Hons)",
  },
] as const;

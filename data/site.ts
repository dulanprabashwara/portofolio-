import type { SiteConfig } from "@/types/portfolio";

export const siteConfig = {
  name: "Dulan Prabashwara",
  role: "Full-Stack Developer",
  secondaryRole: "Software Engineering Undergraduate",
  email: "dulanprabashwara@gmail.com",
  university: "University of Moratuwa",
  degree: "BSc in Information Technology (Hons)",
  cgpa: "3.70 / 4.00",
  studyPeriod: "2024 — Present",
  availability: "Available for Software Engineering Internships",
  resumePath: "/resume/Dulan-Prabashwara-CV.pdf",
  foundations: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Software Engineering",
    "Object-Oriented Analysis & Design",
    "Database Management Systems",
    "Operating Systems",
  ],
} as const satisfies SiteConfig;

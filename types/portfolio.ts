export interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  screenshots: string[];
  stack: string[];
  description: string;
  features: string[];
  github?: string;
  live?: string;
  teamProject?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface TechNode {
  id: string;
  label: string;
  group: string;
}

export interface TechEdge {
  from: string;
  to: string;
}

export type JourneyType = "education" | "achievement" | "milestone";

export interface JourneyItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: JourneyType;
  sortOrder: number;
}

export interface Achievement {
  id: string;
  placement: string;
  event: string;
  organizer: string;
  team?: string;
  date: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  external: boolean;
}

export interface SiteConfig {
  name: string;
  role: string;
  secondaryRole: string;
  email: string;
  university: string;
  degree: string;
  cgpa: string;
  studyPeriod: string;
  availability: string;
  resumePath: string;
}

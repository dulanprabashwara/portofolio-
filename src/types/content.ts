export type Project = {
  number: "01" | "02" | "03" | "04" | "05" | "06";
  slug: string;
  title: string;
  type: string;
  overview: string;
  stack: readonly string[];
  features: readonly string[];
  image: string | null;
  imageAlt: string;
  liveUrl: string | null;
  repositoryUrl: string | null;
};

export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export type JourneyEntry = {
  institution: string;
  detail: string | null;
};

export type Achievement = {
  result: "CHAMPIONS" | "1ST RUNNERS-UP";
  event: string;
  description: string;
  organizer: string;
  institution: string;
  team: string;
  date: string;
  image: string | null;
};

export type SocialLink = {
  label: string;
  value: string;
  href: string | null;
};

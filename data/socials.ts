import type { SocialLink } from "@/types/portfolio";

export const socialLinks = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/dulanprabashwara",
    external: true,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dulan-prabashwara/",
    external: true,
  },
  {
    platform: "email",
    label: "Email",
    href: "mailto:dulanprabashwara@gmail.com",
    external: false,
  },
] as const satisfies readonly SocialLink[];

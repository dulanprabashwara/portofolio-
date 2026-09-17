import type { NavItem } from "@/types/portfolio";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Recognition", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavItem[];

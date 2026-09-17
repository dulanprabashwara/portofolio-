import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechBadge } from "@/components/ui/TechBadge";

describe("TechBadge Component", () => {
  it("renders technology label correctly", () => {
    render(<TechBadge>TypeScript</TechBadge>);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("applies light tone styles by default", () => {
    const { container } = render(<TechBadge>Next.js</TechBadge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.className).toContain("bg-surface-light");
    expect(badge.className).toContain("text-ink");
  });

  it("applies dark tone styles when tone is dark", () => {
    const { container } = render(<TechBadge tone="dark">PostgreSQL</TechBadge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.className).toContain("bg-surface-dark");
    expect(badge.className).toContain("text-mint");
  });

  it("applies small size styling when size is sm", () => {
    const { container } = render(<TechBadge size="sm">Docker</TechBadge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.className).toContain("text-[11px]");
  });
});

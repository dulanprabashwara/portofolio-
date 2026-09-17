import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechMarquee } from "@/components/TechMarquee";
import { featuredTechnologies } from "@/data/skills";

describe("TechMarquee Component", () => {
  it("renders a semantic section with accessible heading", () => {
    render(<TechMarquee />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /featured technologies/i,
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("sr-only");
  });

  it("renders the canonical technology list with all 12 items for screen readers", () => {
    render(<TechMarquee />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("sr-only");

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(12);

    for (const tech of featuredTechnologies) {
      expect(screen.getByText(tech, { selector: "li" })).toBeInTheDocument();
    }
  });

  it("marks moving visual tracks with aria-hidden true", () => {
    const { container } = render(<TechMarquee />);
    const ariaHiddenTrack = container.querySelector('[aria-hidden="true"]');

    expect(ariaHiddenTrack).toBeInTheDocument();
    // Ensure no deprecated <marquee> element exists
    expect(container.querySelector("marquee")).toBeNull();
  });

  it("contains zero phone numbers or unrelated contact metrics", () => {
    const { container } = render(<TechMarquee />);
    expect(container.innerHTML).not.toMatch(/(\+94|07\d|\bphone\b|tel:)/i);
  });
});

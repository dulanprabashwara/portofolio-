import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skills } from "@/components/skills/Skills";
import { skillGroups } from "@/data/skills";

describe("Skills Component", () => {
  it("renders section with id='skills' for active navigation targeting", () => {
    const { container } = render(<Skills />);
    const section = container.querySelector("section#skills");
    expect(section).toBeInTheDocument();
  });

  it("renders correct eyebrow '02 / SKILLS' and H2 heading", () => {
    render(<Skills />);

    expect(screen.getByText("02 / SKILLS")).toBeInTheDocument();

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /tools are temporary\. engineering fundamentals travel\./i,
    });
    expect(heading).toBeInTheDocument();

    expect(
      screen.getByText(/a stack shaped by full-stack products, real-time systems/i),
    ).toBeInTheDocument();
  });

  it("renders all six skill category groups and representative skills", () => {
    render(<Skills />);

    for (const group of skillGroups) {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: new RegExp(`^${group.title}$`, "i"),
        }),
      ).toBeInTheDocument();

      // Check that at least the first skill from each group is present
      expect(screen.getAllByText(group.skills[0])[0]).toBeInTheDocument();
    }
  });

  it("does NOT contain subjective skill percentages, ratings, or fake metrics", () => {
    const { container } = render(<Skills />);
    const text = container.textContent || "";

    expect(text).not.toMatch(/\b(beginner|intermediate|advanced|expert)\b/i);
    expect(text).not.toMatch(/\b\d{1,3}%\b/);
  });

  it("contains zero phone numbers anywhere in rendered markup", () => {
    const { container } = render(<Skills />);
    expect(container.innerHTML).not.toMatch(/(\+94|07\d|\bphone\b|tel:)/i);
  });
});

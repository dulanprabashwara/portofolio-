import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SectionHeading } from "@/components/ui/SectionHeading";

describe("SectionHeading Component", () => {
  it("renders title as heading element", () => {
    render(<SectionHeading title="About Engineering" />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "About Engineering",
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders eyebrow and description when provided", () => {
    render(
      <SectionHeading
        eyebrow="01 / ABOUT"
        title="About Engineering"
        description="Engineering beyond the interface."
      />,
    );
    expect(screen.getByText("01 / ABOUT")).toBeInTheDocument();
    expect(
      screen.getByText("Engineering beyond the interface."),
    ).toBeInTheDocument();
  });

  it("supports custom heading levels", () => {
    render(<SectionHeading headingLevel="h3" title="Custom Level Heading" />);
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Custom Level Heading",
    });
    expect(heading).toBeInTheDocument();
  });

  it("applies dark theme styles when theme is dark", () => {
    render(
      <SectionHeading
        theme="dark"
        eyebrow="02 / PROJECTS"
        title="Dark Projects"
      />,
    );
    const eyebrow = screen.getByText("02 / PROJECTS");
    expect(eyebrow.className).toContain("text-emerald-bright");
  });
});

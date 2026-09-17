import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Design System Preview Page", () => {
  it("renders the developer name and design system preview banner", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /dulan prabashwara/i,
    });
    expect(heading).toBeInTheDocument();

    const banner = screen.getByText(/phase 2 visual foundation/i);
    expect(banner).toBeInTheDocument();

    expect(screen.getByText(/design system preview/i)).toBeInTheDocument();
  });

  it("renders light and dark preview sections", () => {
    render(<Home />);

    expect(screen.getByText("01 / ABOUT")).toBeInTheDocument();
    const aboutHeadings = screen.getAllByText(
      "Engineering software beyond the interface.",
    );
    expect(aboutHeadings.length).toBeGreaterThan(0);

    expect(screen.getByText("02 / PROJECTS")).toBeInTheDocument();
    const projectsHeadings = screen.getAllByText(
      "Architected for scale and resilience.",
    );
    expect(projectsHeadings.length).toBeGreaterThan(0);
  });
});

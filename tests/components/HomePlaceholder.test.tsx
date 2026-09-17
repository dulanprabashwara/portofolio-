import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Production Homepage Composition", () => {
  it("renders the developer name in Hero heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /dulan prabashwara/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders TechMarquee section", () => {
    render(<Home />);

    const marqueeTitle = screen.getByRole("heading", {
      level: 2,
      name: /featured technologies/i,
    });
    expect(marqueeTitle).toBeInTheDocument();
  });

  it("renders About section with heading and narrative", () => {
    render(<Home />);

    expect(screen.getByText("01 / ABOUT")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /engineering software beyond the interface/i,
      }),
    ).toBeInTheDocument();
  });

  it("does NOT render the dev preview banner on the production page", () => {
    render(<Home />);

    expect(
      screen.queryByText(/phase 2 visual foundation/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/design system preview/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("02 / PROJECTS")).not.toBeInTheDocument();
  });
});

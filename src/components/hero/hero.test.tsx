import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./hero";

describe("Hero component", () => {
  it("renders exact hero content and destinations", () => {
    render(<Hero />);
    expect(
      screen.getByText("SOFTWARE ENGINEERING • FULL-STACK • AI"),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Dulan Prabashwara.",
    );
    expect(
      screen.getByRole("link", { name: /Explore my work/i }),
    ).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /View résumé/i })).toHaveAttribute(
      "href",
      "/dulan-prabashwara-resume.pdf",
    );
    expect(
      screen.getByText("Open to Software Engineering opportunities"),
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./about";

describe("About component", () => {
  it("keeps academic detail in About", () => {
    render(<About />);
    expect(
      screen.getByText("BSc. in Information Technology (Hons)"),
    ).toBeInTheDocument();
    expect(screen.getByText("Apr 2024 — Present")).toBeInTheDocument();
    expect(screen.getByText("CGPA 3.70 / 4.00")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(7);
  });
});

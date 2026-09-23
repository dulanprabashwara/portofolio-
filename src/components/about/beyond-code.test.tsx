import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BeyondCode } from "./beyond-code";

describe("BeyondCode component", () => {
  it("renders approved quote and the three focus tags without invented claims", () => {
    render(<BeyondCode />);
    expect(
      screen.getByText(
        /“Curious about where software, intelligent systems and physical computing intersect\.”|Curious about where software, intelligent systems and physical computing intersect\./i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByText("WEB SYSTEMS")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("EMBEDDED")).toBeInTheDocument();

    expect(
      screen.queryByText(
        /mentorship|community involvement|technical reading|open-source contributions/i,
      ),
    ).not.toBeInTheDocument();
  });
});

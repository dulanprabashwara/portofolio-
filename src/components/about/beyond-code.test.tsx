import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BeyondCode } from "./beyond-code";

describe("BeyondCode component", () => {
  it("renders approved quote without invented claims or removed tags", () => {
    render(<BeyondCode />);
    expect(
      screen.getByText(
        /“Curious about where software, intelligent systems and physical computing intersect\.”|Curious about where software, intelligent systems and physical computing intersect\./i,
      ),
    ).toBeInTheDocument();

    expect(screen.queryByText("WEB SYSTEMS")).not.toBeInTheDocument();
    expect(screen.queryByText("AI")).not.toBeInTheDocument();
    expect(screen.queryByText("EMBEDDED")).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        /mentorship|community involvement|technical reading|open-source contributions/i,
      ),
    ).not.toBeInTheDocument();
  });
});

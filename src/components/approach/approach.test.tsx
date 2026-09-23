import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Approach } from "./approach";

describe("Approach component", () => {
  it("asserts all four headings and exact descriptions in order", () => {
    render(<Approach />);
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent),
    ).toEqual([
      "Understand the system",
      "Build end-to-end",
      "Make it reliable",
      "Keep improving",
    ]);
    expect(
      screen.getByText(
        "Think about the users, requirements, data and architecture before implementation.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Work across frontend, backend, databases and APIs to create complete solutions.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Pay attention to authentication, persistence, error handling and system behavior.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Debug, test, iterate and refine rather than stopping when something simply works.",
      ),
    ).toBeInTheDocument();
  });
});

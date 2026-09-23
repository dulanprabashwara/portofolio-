import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toolkit } from "./toolkit";

describe("Toolkit component", () => {
  it("renders exactly four skill groups without proficiency claims", () => {
    render(<Toolkit />);
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent),
    ).toEqual([
      "LANGUAGES",
      "FRONTEND",
      "BACKEND & REAL-TIME",
      "DATA & INFRASTRUCTURE",
    ]);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("WebSocket / STOMP")).toBeInTheDocument();
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    expect(
      screen.queryByText(/%|years? of experience/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Practices/i)).not.toBeInTheDocument();
  });
});

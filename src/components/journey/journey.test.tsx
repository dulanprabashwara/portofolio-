import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Journey } from "./journey";

describe("Journey component", () => {
  it("keeps journey order and university-only detail", () => {
    render(<Journey />);
    expect(
      screen
        .getAllByRole("listitem")
        .map((i) => i.querySelector("h3")?.textContent),
    ).toEqual([
      "St. Joseph's College",
      "B/Darmashoka MMV",
      "Bandarawela Central College",
      "University of Moratuwa",
    ]);
    expect(
      screen.getAllByText("BSc. in Information Technology (Hons)"),
    ).toHaveLength(1);
    expect(
      screen.queryByText(
        /CGPA|Apr 2024|Secondary Education|CHAMPIONS|RUNNERS-UP/i,
      ),
    ).not.toBeInTheDocument();
  });
});

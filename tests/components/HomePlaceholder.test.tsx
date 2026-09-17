import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home Placeholder Page", () => {
  it("renders the developer name and engineering portfolio title", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /dulan prabashwara/i,
    });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByText(/software engineering portfolio/i);
    expect(subtitle).toBeInTheDocument();

    const status = screen.getByText(/foundation initialized successfully/i);
    expect(status).toBeInTheDocument();
  });
});

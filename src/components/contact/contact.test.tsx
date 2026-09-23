import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./contact";

describe("Contact component", () => {
  it("renders approved contact details but no phone", () => {
    render(<Contact />);
    expect(
      screen.getByRole("link", { name: /dulanprabashwara@gmail.com/i }),
    ).toHaveAttribute("href", "mailto:dulanprabashwara@gmail.com");
    expect(
      screen.getByRole("link", { name: /linkedin.com/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /github.com/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Bandarawela, Sri Lanka")).toBeInTheDocument();
    expect(screen.queryByText(/\+94|0776277320/)).not.toBeInTheDocument();
  });
});

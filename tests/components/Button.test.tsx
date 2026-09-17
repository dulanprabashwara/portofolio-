import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button, ButtonLink } from "@/components/ui/Button";

describe("Button and ButtonLink Components", () => {
  it("renders a native button with primary variant by default", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("bg-emerald");
  });

  it("handles disabled state correctly", () => {
    render(<Button disabled>Disabled Action</Button>);
    const button = screen.getByRole("button", { name: "Disabled Action" });
    expect(button).toBeDisabled();
  });

  it("renders ButtonLink as a semantic anchor with correct href", () => {
    render(
      <ButtonLink href="/resume.pdf" variant="secondary-dark">
        Download CV
      </ButtonLink>,
    );
    const link = screen.getByRole("link", { name: "Download CV" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/resume.pdf");
    expect(link.className).toContain("bg-surface-dark");
  });

  it("applies ghost variant styles correctly", () => {
    render(<Button variant="ghost">Ghost Button</Button>);
    const button = screen.getByRole("button", { name: "Ghost Button" });
    expect(button.className).toContain("bg-transparent");
  });
});

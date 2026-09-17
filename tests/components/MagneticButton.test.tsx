import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MagneticButton } from "@/components/ui/MagneticButton";

describe("MagneticButton Component", () => {
  it("renders children without altering anchor or button semantics", () => {
    render(
      <MagneticButton>
        <a href="#projects">Explore Projects ↗</a>
      </MagneticButton>,
    );

    const link = screen.getByRole("link", { name: "Explore Projects ↗" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#projects");
    // Ensure wrapper did not inject redundant button or dialog roles
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MotionGrid } from "@/components/ui/MotionGrid";

describe("MotionGrid Component", () => {
  it("renders a decorative container with aria-hidden true", () => {
    const { container } = render(<MotionGrid className="test-grid-class" />);
    const gridContainer = container.querySelector('[aria-hidden="true"]');

    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass("pointer-events-none");
    expect(gridContainer).toHaveClass("test-grid-class");
  });
});

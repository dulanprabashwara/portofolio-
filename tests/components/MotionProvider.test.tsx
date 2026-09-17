import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MotionProvider } from "@/components/providers/MotionProvider";

describe("MotionProvider Component", () => {
  it("renders child content properly under MotionConfig", () => {
    render(
      <MotionProvider>
        <div data-testid="child-element">Animated Content Container</div>
      </MotionProvider>,
    );

    const child = screen.getByTestId("child-element");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Animated Content Container");
  });
});

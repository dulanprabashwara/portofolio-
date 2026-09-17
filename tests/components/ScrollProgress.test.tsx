import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

describe("ScrollProgress Component", () => {
  it("renders a decorative progress bar with aria-hidden true", () => {
    const { container } = render(<ScrollProgress />);
    const progressBar = container.querySelector('[aria-hidden="true"]');

    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass("fixed");
    expect(progressBar).toHaveClass("bg-emerald");
    expect(progressBar).toHaveClass("pointer-events-none");
  });
});

import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Reveal } from "./reveal";

describe("Reveal component", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("reveals immediately without IntersectionObserver", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(
      <Reveal>
        <p>Visible content</p>
      </Reveal>,
    );
    expect(screen.getByText("Visible content").parentElement).toHaveAttribute(
      "data-visible",
      "true",
    );
  });
});

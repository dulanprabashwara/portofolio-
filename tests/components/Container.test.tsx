import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "@/components/ui/Container";

describe("Container Component", () => {
  it("renders children properly", () => {
    render(<Container>Test Container Content</Container>);
    expect(screen.getByText("Test Container Content")).toBeInTheDocument();
  });

  it("applies max-width and responsive padding classes", () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("max-w-[1280px]");
    expect(div.className).toContain("mx-auto");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>,
    );
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("custom-class");
  });

  it("renders with custom HTML tag when 'as' is provided", () => {
    render(
      <Container as="section" data-testid="container-section">
        Section Content
      </Container>,
    );
    const element = screen.getByTestId("container-section");
    expect(element.tagName).toBe("SECTION");
  });
});

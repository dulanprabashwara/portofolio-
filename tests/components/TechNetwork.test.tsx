import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechNetwork } from "@/components/skills/TechNetwork";
import { techNodes, techEdges } from "@/data/skills";

describe("TechNetwork Component", () => {
  it("renders all nine technology nodes as interactive buttons", () => {
    render(<TechNetwork nodes={techNodes} edges={techEdges} />);

    for (const node of techNodes) {
      const button = screen.getByRole("button", {
        name: new RegExp(node.label, "i"),
      });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    }
  });

  it("renders SVG connection layer marked aria-hidden='true'", () => {
    const { container } = render(
      <TechNetwork nodes={techNodes} edges={techEdges} />,
    );

    const svgElements = container.querySelectorAll("svg");
    expect(svgElements.length).toBeGreaterThan(0);
    for (const svg of svgElements) {
      expect(svg).toHaveAttribute("aria-hidden", "true");
    }
  });

  it("updates relationship summary when a node is clicked", () => {
    render(<TechNetwork nodes={techNodes} edges={techEdges} />);

    // Initially shows default prompt
    expect(
      screen.getByText(/select a technology to explore its connections/i),
    ).toBeInTheDocument();

    // Click Next.js
    const nextjsButton = screen.getByRole("button", {
      name: /next\.js/i,
    });
    fireEvent.click(nextjsButton);

    // Connected labels for Next.js are React and TypeScript
    expect(screen.getByText(/react • typescript/i)).toBeInTheDocument();

    // Unrelated nodes remain in the document
    expect(
      screen.getByRole("button", { name: /spring boot/i }),
    ).toBeInTheDocument();
  });

  it("updates relationship summary on keyboard focus", () => {
    render(<TechNetwork nodes={techNodes} edges={techEdges} />);

    const springBootButton = screen.getByRole("button", {
      name: /spring boot/i,
    });
    fireEvent.focus(springBootButton);

    // Spring Boot connects with REST APIs, WebSocket, Docker
    const summary = screen.getByText(/connects with:/i);
    expect(summary).toBeInTheDocument();
    expect(summary.textContent).toMatch(/rest apis/i);
    expect(summary.textContent).toMatch(/websocket/i);
    expect(summary.textContent).toMatch(/docker/i);
  });

  it("does NOT render project data or screenshot elements in Phase 9", () => {
    const { container } = render(
      <TechNetwork nodes={techNodes} edges={techEdges} />,
    );
    expect(container.textContent).not.toMatch(/medisync|careflow|pulse/i);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { ProjectActions } from "./project-actions";

describe("ProjectActions component", () => {
  it("never renders Pacman deployment actions or placeholders", () => {
    render(<ProjectActions project={projects[5]} />);
    expect(
      screen.queryByRole("link", { name: /live site|repository/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/live site|repository/i),
    ).not.toBeInTheDocument();
  });

  it("renders disabled visual placeholders for software projects with null URLs", () => {
    render(<ProjectActions project={projects[0]} />);
    expect(
      screen.queryByRole("link", { name: /live site|repository/i }),
    ).not.toBeInTheDocument();
    const livePlaceholder = screen.getByText("LIVE SITE").closest("span[aria-disabled='true']");
    const repoPlaceholder = screen.getByText("REPOSITORY").closest("span[aria-disabled='true']");
    expect(livePlaceholder).toBeInTheDocument();
    expect(repoPlaceholder).toBeInTheDocument();
  });

  it.each([null, "", "   "])("omits invalid URL %p as active link", (liveUrl) => {
    render(<ProjectActions project={{ ...projects[0], liveUrl }} />);
    expect(
      screen.queryByRole("link", { name: /live site/i }),
    ).not.toBeInTheDocument();
  });

  it("renders valid live site and repository links", () => {
    render(
      <ProjectActions
        project={{
          ...projects[0],
          liveUrl: "https://demo.example.org",
          repositoryUrl: "https://github.com/example/repo",
        }}
      />,
    );
    expect(screen.getByRole("link", { name: /live site/i })).toHaveAttribute(
      "href",
      "https://demo.example.org",
    );
    expect(screen.getByRole("link", { name: /repository/i })).toHaveAttribute(
      "href",
      "https://github.com/example/repo",
    );
  });
});

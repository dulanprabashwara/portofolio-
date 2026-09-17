import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "@/components/hero/Hero";

describe("Hero Component", () => {
  it("renders a single semantic H1 with accessible name Dulan Prabashwara", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Dulan Prabashwara",
    });

    expect(heading).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders availability indicator with approved copy", () => {
    render(<Hero />);
    const badge = screen.getByText(
      /available for software engineering internships/i
    );
    expect(badge).toBeInTheDocument();
  });

  it("renders role and approved description", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /software engineering undergraduate & full-stack developer/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /I build full-stack applications that combine clean interfaces, reliable backend systems, real-time experiences, and thoughtful engineering\./i
      )
    ).toBeInTheDocument();
  });

  it("renders primary CTA pointing to #projects", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: "Explore Projects ↗" });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#projects");
  });

  it("omits Download CV CTA button when CV asset is absent", () => {
    render(<Hero />);
    expect(
      screen.queryByRole("link", { name: /download cv/i })
    ).not.toBeInTheDocument();
  });

  it("renders verified social links without telephone or fax numbers", () => {
    const { container } = render(<Hero />);

    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    expect(githubLinks.length).toBeGreaterThan(0);
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/dulanprabashwara"
    );

    const linkedinLinks = screen.getAllByRole("link", { name: /linkedin/i });
    expect(linkedinLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks[0]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/dulan-prabashwara/"
    );

    const emailLinks = screen.getAllByRole("link", { name: /email/i });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute(
      "href",
      "mailto:dulanprabashwara@gmail.com"
    );

    // Verify no phone numbers anywhere
    expect(container.innerHTML).not.toMatch(/(\+94|07\d|\bphone\b|tel:)/i);
  });
});

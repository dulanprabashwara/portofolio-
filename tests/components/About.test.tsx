import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { About } from "@/components/about/About";
import { siteConfig } from "@/data/site";

describe("About Component", () => {
  it("renders section with id='about' for navigation targeting", () => {
    const { container } = render(<About />);
    const section = container.querySelector("section#about");
    expect(section).toBeInTheDocument();
  });

  it("renders correct eyebrow label '01 / ABOUT' and H2 heading", () => {
    render(<About />);

    expect(screen.getByText("01 / ABOUT")).toBeInTheDocument();

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /engineering software beyond the interface/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders verified narrative paragraphs without fabricating work experience", () => {
    render(<About />);

    expect(
      screen.getByText(
        /information technology undergraduate at the university of moratuwa/i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByText(/complete application stack/i)).toBeInTheDocument();

    expect(
      screen.getByText(/healthcare systems, community platforms/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/currently looking for opportunities/i),
    ).toBeInTheDocument();
  });

  it("renders academic credentials using semantic definition list", () => {
    const { container } = render(<About />);

    const dl = container.querySelector("dl");
    expect(dl).toBeInTheDocument();

    expect(screen.getByText(/^university$/i)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.university)).toBeInTheDocument();

    expect(screen.getByText(/^cgpa$/i)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.cgpa)).toBeInTheDocument();

    expect(screen.getByText(/^degree$/i)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.degree)).toBeInTheDocument();

    expect(screen.getByText(/^period$/i)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.studyPeriod)).toBeInTheDocument();
  });

  it("renders verified coursework foundations in a semantic list", () => {
    render(<About />);

    const list = screen.getByRole("list", { name: /academic foundations/i });
    expect(list).toBeInTheDocument();

    for (const foundation of siteConfig.foundations) {
      expect(screen.getByText(foundation)).toBeInTheDocument();
    }
  });

  it("does NOT render a Download CV button in Phase 8", () => {
    render(<About />);
    const cvButton = screen.queryByRole("link", { name: /download cv/i });
    expect(cvButton).not.toBeInTheDocument();
  });

  it("contains zero phone numbers anywhere in rendered markup", () => {
    const { container } = render(<About />);
    expect(container.innerHTML).not.toMatch(/(\+94|07\d|\bphone\b|tel:)/i);
  });
});

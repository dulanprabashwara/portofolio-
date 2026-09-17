import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Navbar } from "@/components/layout/Navbar";
import { navItems } from "@/data/navigation";
import * as activeSectionHook from "@/components/layout/useActiveSection";

describe("Navbar Component", () => {
  it("renders skip-to-content accessibility link targeting #main-content", () => {
    render(<Navbar />);
    const skipLink = screen.getByRole("link", { name: /skip to content/i });

    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders brand logo link", () => {
    render(<Navbar />);
    const brandLink = screen.getByRole("link", {
      name: /dulan prabashwara home/i,
    });

    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveTextContent(/dulan/i);
  });

  it("renders all navigation items from navigation dataset", () => {
    render(<Navbar />);

    for (const item of navItems) {
      const link = screen.getAllByRole("link", {
        name: new RegExp(`^${item.label}$`, "i"),
      })[0];
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", item.href);
    }
  });

  it("renders desktop CTA action button targeting #contact", () => {
    render(<Navbar />);
    const ctaLink = screen.getByRole("link", { name: /contact ↗/i });

    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute("href", "#contact");
  });

  it("renders mobile menu trigger", () => {
    render(<Navbar />);
    const mobileTrigger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    expect(mobileTrigger).toBeInTheDocument();
  });

  it("contains zero phone numbers anywhere in rendered markup", () => {
    const { container } = render(<Navbar />);
    expect(container.innerHTML).not.toMatch(/(\+94|07\d|\bphone\b|tel:)/i);
  });

  it("does not set aria-current on navigation links when no section is active", () => {
    render(<Navbar />);
    for (const item of navItems) {
      const link = screen.getAllByRole("link", {
        name: new RegExp(`^${item.label}$`, "i"),
      })[0];
      expect(link).not.toHaveAttribute("aria-current");
    }
  });

  it("sets aria-current='location' on the active navigation link", () => {
    const spy = vi
      .spyOn(activeSectionHook, "useActiveSection")
      .mockReturnValue("about");
    render(<Navbar />);

    const aboutLink = screen.getAllByRole("link", {
      name: /^about$/i,
    })[0];
    expect(aboutLink).toHaveAttribute("aria-current", "location");

    const projectsLink = screen.getAllByRole("link", {
      name: /^projects$/i,
    })[0];
    expect(projectsLink).not.toHaveAttribute("aria-current");

    spy.mockRestore();
  });
});

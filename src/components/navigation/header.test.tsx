import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Header } from "./header";

describe("Header component", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("closes navigation on Escape and restores trigger focus", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const trigger = screen.getByRole("button", { name: /open navigation/i });
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("dialog", { name: /navigation/i }),
    ).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("dialog", { name: /navigation/i }),
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("retains anchors without IntersectionObserver", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(<Header />);
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "#projects",
    );
  });

  it("renders brand and resume links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /dulan/i })).toHaveAttribute(
      "href",
      "#",
    );
    const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThanOrEqual(1);
    expect(resumeLinks[0]).toHaveAttribute(
      "href",
      "/dulan-prabashwara-resume.pdf",
    );
  });

  it("closes navigation when an anchor inside the drawer is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const trigger = screen.getByRole("button", { name: /open navigation/i });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: /navigation/i });
    expect(dialog).toBeInTheDocument();

    const aboutLinks = screen.getAllByRole("link", { name: "About" });
    const drawerAboutLink = aboutLinks[aboutLinks.length - 1];
    await user.click(drawerAboutLink);

    expect(
      screen.queryByRole("dialog", { name: /navigation/i }),
    ).not.toBeInTheDocument();
  });
});

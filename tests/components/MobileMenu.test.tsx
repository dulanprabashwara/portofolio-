import { render, screen, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/data/navigation";

describe("MobileMenu Component", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("renders hamburger trigger button initially in closed state", () => {
    render(<MobileMenu />);
    const trigger = screen.getByRole("button", { name: /open navigation menu/i });

    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveAttribute("aria-controls", "mobile-nav-panel");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens drawer panel on click and locks body scroll", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    const trigger = screen.getByRole("button", { name: /open navigation menu/i });
    await user.click(trigger);

    const dialog = screen.getByRole("dialog", { name: /mobile navigation/i });
    expect(dialog).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");

    // Check that all nav items are rendered
    for (const item of navItems) {
      const link = screen.getByRole("link", { name: new RegExp(item.label, "i") });
      expect(link).toHaveAttribute("href", item.href);
    }

    // Check social links
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/dulanprabashwara"
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/dulan-prabashwara/"
    );
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:dulanprabashwara@gmail.com"
    );
  });

  it("closes when close button is clicked and restores body scroll", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    const trigger = screen.getByRole("button", { name: /open navigation menu/i });
    await user.click(trigger);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /close navigation menu/i });
    await user.click(closeBtn);

    await waitForElementToBeRemoved(() => screen.queryByRole("dialog"));
    expect(document.body.style.overflow).toBe("");
  });

  it("closes when Escape key is pressed", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    const trigger = screen.getByRole("button", { name: /open navigation menu/i });
    await user.click(trigger);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    await waitForElementToBeRemoved(() => screen.queryByRole("dialog"));
    expect(document.body.style.overflow).toBe("");
  });

  it("closes when a navigation link is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    const trigger = screen.getByRole("button", { name: /open navigation menu/i });
    await user.click(trigger);

    const aboutLink = screen.getByRole("link", { name: /about/i });
    await user.click(aboutLink);

    await waitForElementToBeRemoved(() => screen.queryByRole("dialog"));
  });
});

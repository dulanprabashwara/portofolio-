import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage Design System Preview", () => {
  test("loads successfully and displays design system preview elements", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1, name: "Dulan Prabashwara" });
    await expect(heading).toBeVisible();

    await expect(page.getByText("Design System Preview")).toBeVisible();
    await expect(page.getByText("01 / ABOUT")).toBeVisible();
    await expect(page.getByText("02 / PROJECTS")).toBeVisible();

    // Verify buttons are rendered and visible
    const exploreButtons = page.getByRole("button", { name: "Explore Projects ↗" });
    await expect(exploreButtons.first()).toBeVisible();
  });

  test("displays desktop navbar, brand, and navigation links", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const brand = page.getByRole("link", { name: "Dulan Prabashwara Home" });
    await expect(brand).toBeVisible();

    const skipLink = page.getByRole("link", { name: "Skip to content" });
    expect(skipLink).toBeAttached();

    const contactCta = page.getByRole("link", { name: "Contact ↗" });
    await expect(contactCta).toBeVisible();

    const aboutLink = page.getByRole("link", { name: "About" }).first();
    await expect(aboutLink).toBeVisible();
  });

  test("opens mobile navigation menu, traps focus, and closes with escape", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const openBtn = page.getByRole("button", { name: /open navigation menu/i });
    await expect(openBtn).toBeVisible();

    await openBtn.click();

    const dialog = page.getByRole("dialog", { name: /mobile navigation/i });
    await expect(dialog).toBeVisible();

    // Verify nav links inside mobile menu
    const aboutMobileLink = dialog.getByRole("link", { name: /about/i });
    await expect(aboutMobileLink).toBeVisible();

    // Test accessibility with mobile menu open
    const axeResults = await new AxeBuilder({ page }).analyze();
    const criticalViolations = axeResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(criticalViolations).toEqual([]);

    // Press Escape to close
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  });

  test("passes accessibility smoke test with no critical violations", async ({ page }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalViolations).toEqual([]);
  });

  const viewports = [
    { name: "mobile-360", width: 360, height: 640 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "desktop-1440", width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    test(`renders cleanly without horizontal overflow at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasHorizontalScroll).toBe(false);
    });
  }
});

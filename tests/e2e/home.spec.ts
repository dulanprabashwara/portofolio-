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

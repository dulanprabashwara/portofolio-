import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage", () => {
  test("loads successfully and displays developer portfolio foundation", async ({
    page,
  }) => {
    await page.goto("/");

    const heading = page.getByRole("heading", {
      level: 1,
      name: "Dulan Prabashwara",
    });
    await expect(heading).toBeVisible();

    await expect(
      page.getByText("Software Engineering Portfolio"),
    ).toBeVisible();
    await expect(
      page.getByText("Foundation initialized successfully."),
    ).toBeVisible();
  });

  test("passes basic accessibility smoke test with no critical violations", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    );

    expect(criticalViolations).toEqual([]);
  });
});

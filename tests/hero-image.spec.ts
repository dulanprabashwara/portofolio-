import { expect, test } from "@playwright/test";
import path from "node:path";

const artifactDir =
  "C:/Users/User/.gemini/antigravity/brain/b256d505-3f0f-48ff-a80b-dccb17392666";

test("hero image renders with proper attributes and no overflow across viewports", async ({
  page,
}) => {
  const viewports = [
    { name: "320px", width: 320, height: 720 },
    { name: "390px", width: 390, height: 844 },
    { name: "430px", width: 430, height: 932 },
    { name: "768px", width: 768, height: 1024 },
    { name: "1024px", width: 1024, height: 768 },
    { name: "1440px", width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Check no horizontal overflow
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);

    // Verify hero image is visible and has correct alt text
    const heroImage = page.getByRole("img", {
      name: "Dulan Prabashwara working on a laptop at a desk",
    });
    await expect(heroImage).toBeVisible();

    // Verify chips are present
    await expect(page.getByText("Sri Lanka", { exact: true })).toBeVisible();
    await expect(page.getByText("Full-Stack • AI", { exact: true })).toBeVisible();

    // Capture screenshot on 1440px (desktop) and 390px (mobile)
    if (vp.name === "1440px") {
      await page.screenshot({
        path: path.join(artifactDir, "hero-image-desktop-1440.png"),
      });

      // Also switch to light mode and capture desktop light mode
      const lampToggle = page.getByRole("button", {
        name: /switch to light mode/i,
      });
      await lampToggle.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(artifactDir, "hero-image-desktop-light.png"),
      });

      // Switch back
      const darkToggle = page.getByRole("button", {
        name: /switch to dark mode/i,
      });
      await darkToggle.click();
    }

    if (vp.name === "390px") {
      await page.screenshot({
        path: path.join(artifactDir, "hero-image-mobile-390.png"),
      });
      await page.locator("#hero").screenshot({
        path: path.join(artifactDir, "hero-image-mobile-section.png"),
      });
    }
  }
});

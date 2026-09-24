import { expect, test } from "@playwright/test";
import path from "node:path";

const artifactDir =
  "C:/Users/User/.gemini/antigravity/brain/b256d505-3f0f-48ff-a80b-dccb17392666";

test("navbar remains fixed and displays glass effect when scrolling down", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const header = page.locator("header");
  await expect(header).toBeVisible();

  // 1. Initial at top of page (scrollY = 0)
  const isFixed = await header.evaluate((el) => {
    const style = window.getComputedStyle(el);
    return style.position === "fixed" && style.top === "0px";
  });
  expect(isFixed).toBe(true);

  // Capture header at top
  await page.screenshot({
    path: path.join(artifactDir, "navbar-top-desktop.png"),
  });

  // 2. Scroll down to projects section (scrollY > 500)
  await page.evaluate(() => window.scrollTo({ top: 750, behavior: "instant" }));
  await page.waitForTimeout(300);

  // Verify header is STILL visible at top of viewport
  await expect(header).toBeVisible();
  const headerBox = await header.boundingBox();
  expect(headerBox).not.toBeNull();
  expect(headerBox!.y).toBe(0);

  // Verify glass effect (backdrop-filter contains blur)
  const backdropFilter = await header.evaluate((el) => {
    return window.getComputedStyle(el).backdropFilter || (el as HTMLElement).style.backdropFilter;
  });
  expect(backdropFilter).toContain("blur");

  // Capture glass navbar over content in dark mode
  await page.screenshot({
    path: path.join(artifactDir, "navbar-glass-scrolled-dark.png"),
  });

  // 3. Switch to light mode and capture glass navbar in light mode
  const lampToggle = page.getByRole("button", {
    name: /switch to light mode/i,
  });
  await lampToggle.click();
  await page.waitForTimeout(300);

  await page.screenshot({
    path: path.join(artifactDir, "navbar-glass-scrolled-light.png"),
  });

  // 4. Mobile test (390x844)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: "instant" }));
  await page.waitForTimeout(300);

  await expect(header).toBeVisible();
  const mobileHeaderBox = await header.boundingBox();
  expect(mobileHeaderBox!.y).toBe(0);

  await page.screenshot({
    path: path.join(artifactDir, "navbar-glass-scrolled-mobile.png"),
  });
});

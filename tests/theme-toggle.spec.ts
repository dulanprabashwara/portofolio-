import { expect, test } from "@playwright/test";
import path from "node:path";

test("lamp toggles between dark mode and light mode cleanly", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const artifactDir =
    "C:/Users/User/.gemini/antigravity/brain/b256d505-3f0f-48ff-a80b-dccb17392666";

  // 1. Initial load should be dark mode
  await expect(page.locator("html")).toHaveClass(/dark/);
  const darkBodyBg = await page.evaluate(
    () => window.getComputedStyle(document.body).backgroundColor,
  );
  expect(darkBodyBg).toBe("rgb(10, 10, 10)");

  // Capture dark mode screenshot
  await page.screenshot({
    path: path.join(artifactDir, "theme-dark-hero.png"),
  });

  // 2. Click lamp pull toggle
  const lampToggle = page.getByRole("button", {
    name: /switch to light mode/i,
  });
  await expect(lampToggle).toBeVisible();
  await lampToggle.click();

  // 3. Verify HTML class updated to light
  await expect(page.locator("html")).toHaveClass(/light/);
  await expect(page.locator("html")).not.toHaveClass(/dark/);

  // Verify body background is light pearl
  const lightBodyBg = await page.evaluate(
    () => window.getComputedStyle(document.body).backgroundColor,
  );
  expect(lightBodyBg).toBe("rgb(247, 244, 250)");

  // Capture light mode hero screenshot
  await page.screenshot({
    path: path.join(artifactDir, "theme-light-hero.png"),
  });

  // Scroll to projects and capture light mode projects
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(artifactDir, "theme-light-projects.png"),
  });

  // Scroll to toolkit and capture light mode toolkit
  await page.locator("#toolkit").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(artifactDir, "theme-light-toolkit.png"),
  });

  // Scroll to contact and capture light mode contact
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(artifactDir, "theme-light-contact.png"),
  });

  // 4. Toggle back to dark mode
  const darkLampToggle = page.getByRole("button", {
    name: /switch to dark mode/i,
  });
  await expect(darkLampToggle).toBeVisible();
  await darkLampToggle.click();

  await expect(page.locator("html")).toHaveClass(/dark/);
  const restoredDarkBg = await page.evaluate(
    () => window.getComputedStyle(document.body).backgroundColor,
  );
  expect(restoredDarkBg).toBe("rgb(10, 10, 10)");
});

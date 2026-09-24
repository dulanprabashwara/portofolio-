import { expect, test } from "@playwright/test";
import path from "node:path";

const artifactDir =
  "C:/Users/User/.gemini/antigravity/brain/b256d505-3f0f-48ff-a80b-dccb17392666";

test("animated old book decoration renders in about section and adapts to themes", async ({
  page,
}) => {
  // Test desktop 1440px Dark Mode
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#about");
  await page.waitForLoadState("networkidle");

  const aboutSection = page.locator("#about");
  await expect(aboutSection).toBeVisible();

  // Verify book is present in About section
  const book = page.locator("#about div[role='presentation'][aria-hidden='true'] svg");
  await expect(book.first()).toBeVisible();

  // Hover over book to verify hover interaction
  await book.first().hover({ force: true });
  await page.waitForTimeout(300);

  // Capture desktop dark mode about section
  await page.screenshot({
    path: path.join(artifactDir, "about-book-desktop-dark.png"),
  });

  // Switch to light mode
  const lampToggle = page.getByRole("button", {
    name: /switch to light mode/i,
  });
  await lampToggle.click();
  await page.waitForTimeout(400);

  // Capture desktop light mode about section
  await page.screenshot({
    path: path.join(artifactDir, "about-book-desktop-light.png"),
  });

  // Test tablet 768px
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(artifactDir, "about-book-tablet-768.png"),
  });

  // Test mobile 390px (hidden on very small screens to avoid crowding)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  const bookMobile = page.locator("#about .group\\/book");
  await expect(bookMobile).toBeHidden();
  await page.screenshot({
    path: path.join(artifactDir, "about-book-mobile-390.png"),
  });

  // Verify no horizontal overflow across viewports
  for (const w of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width: w, height: 800 });
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  }
});

import { expect, test } from "@playwright/test";
import path from "node:path";

const artifactDir =
  "C:/Users/User/.gemini/antigravity/brain/b256d505-3f0f-48ff-a80b-dccb17392666";

test("case study opens in 3d card modal and responds to mouse hover perspective", async ({
  page,
}) => {
  // Desktop 1440x900
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // Open Ceylon News case study
  const ceylonBtn = page
    .getByRole("button", {
      name: /open Ceylon News case study/i,
    })
    .first();
  await ceylonBtn.click();

  const dialog = page.getByRole("dialog", { name: "Ceylon News" });
  await expect(dialog).toBeVisible();

  // Move mouse to top-right of the 3D card body to trigger 3D perspective
  const cardBody = page.locator(".group\\/card");
  await expect(cardBody).toBeVisible();
  const box = await cardBody.boundingBox();
  if (box) {
    await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.25);
    await page.waitForTimeout(400);
  }

  // Capture desktop dark mode with 3D tilt
  await page.screenshot({
    path: path.join(artifactDir, "case-study-3d-card-desktop-dark.png"),
  });

  // Close dialog using Escape
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();

  // Switch to light mode
  const lampToggle = page.getByRole("button", {
    name: /switch to light mode/i,
  });
  await lampToggle.click();
  await page.waitForTimeout(300);

  // Open EasyBlogger case study in light mode
  const easyBtn = page
    .getByRole("button", {
      name: /open EasyBlogger case study/i,
    })
    .first();
  await easyBtn.click();

  const easyDialog = page.getByRole("dialog", { name: "EasyBlogger" });
  await expect(easyDialog).toBeVisible();

  // Move mouse to bottom-left to tilt opposite direction
  const box2 = await page.locator(".group\\/card").boundingBox();
  if (box2) {
    await page.mouse.move(
      box2.x + box2.width * 0.2,
      box2.y + box2.height * 0.75,
    );
    await page.waitForTimeout(400);
  }

  await page.screenshot({
    path: path.join(artifactDir, "case-study-3d-card-desktop-light.png"),
  });

  // Switch back to dark mode
  await page.keyboard.press("Escape");
  const darkToggle = page.getByRole("button", {
    name: /switch to dark mode/i,
  });
  await darkToggle.click();

  // Mobile 390x844
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const mobileBtn = page
    .getByRole("button", {
      name: /open Ceylon News case study/i,
    })
    .first();
  await mobileBtn.click();
  await expect(page.getByRole("dialog", { name: "Ceylon News" })).toBeVisible();

  // Check no horizontal overflow on mobile
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);

  await page.screenshot({
    path: path.join(artifactDir, "case-study-3d-card-mobile.png"),
  });
});

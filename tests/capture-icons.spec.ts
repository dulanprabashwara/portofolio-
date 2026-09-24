import { test } from "@playwright/test";

const ARTIFACT_DIR =
  "C:/Users/User/.gemini/antigravity/brain/b256d505-3f0f-48ff-a80b-dccb17392666";

test("capture sections with icons", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 850 });
  await page.goto("/");
  await page.waitForTimeout(600);

  // Capture Contact section with icons
  const contact = page.locator("#contact");
  await contact.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/contact-section-icons.png` });

  // Capture Toolkit section with icons
  const toolkit = page.locator("#toolkit");
  await toolkit.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/toolkit-section-icons.png` });

  // Capture Project Card with stack icons
  const projects = page.locator("#projects");
  await projects.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/projects-section-icons.png` });

  // Capture EasyBlogger project card specifically
  const easyBloggerCard = page.locator("article").filter({ hasText: "EasyBlogger" });
  await easyBloggerCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/easyblogger-card.png` });
});

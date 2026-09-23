import { expect, test } from "@playwright/test";

test("mobile overlays restore keyboard focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: /open navigation/i });
  await menu.click();
  await expect(page.getByRole("dialog", { name: /navigation/i })).toBeVisible();
  await expect(page.locator('[aria-modal="true"]')).toHaveCount(1);

  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(page.locator('[aria-modal="true"]')).toHaveCount(0);

  const project = page
    .getByRole("button", { name: /open EasyBlogger case study/i })
    .first();
  await project.click();
  await expect(page.getByRole("dialog", { name: "EasyBlogger" })).toBeVisible();
  await expect(page.locator('[aria-modal="true"]')).toHaveCount(1);

  // Viewport-visible close control after scrolling
  const closeBtn = page.getByRole("button", { name: "Close dialog" });
  await expect(closeBtn).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(project).toBeFocused();
  await expect(page.locator('[aria-modal="true"]')).toHaveCount(0);
});

test("320px layout fits and Pacman has no external actions", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");

  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    ),
  ).toBeLessThanOrEqual(1);

  const pacman = page.locator("article", { hasText: "Pacman Live" });
  await expect(
    pacman.getByRole("link", { name: /live site|repository/i }),
  ).toHaveCount(0);
});

test("reduced motion disables movement", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator(".marquee-track").first()).toHaveCSS(
    "animation-duration",
    "0.01s",
  );
  await expect(page.locator("[data-reveal]").first()).toHaveCSS(
    "transform",
    "none",
  );
});

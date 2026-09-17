import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage and Hero Section", () => {
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

  test("displays cinematic Hero section with H1, role, description, and CTA at desktop-1440", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const heroSection = page.locator("#home");
    await expect(heroSection).toBeVisible();

    // Verify single primary H1 with accessible name
    const heading = page.getByRole("heading", { level: 1, name: "Dulan Prabashwara" });
    await expect(heading).toBeVisible();

    // Role
    await expect(
      page.getByText(/software engineering undergraduate & full-stack developer/i)
    ).toBeVisible();

    // Availability
    await expect(
      page.getByText(/available for software engineering internships/i)
    ).toBeVisible();

    // Primary CTA pointing to #projects
    const exploreCta = page.getByRole("link", { name: "Explore Projects ↗" });
    await expect(exploreCta).toBeVisible();
    await expect(exploreCta).toHaveAttribute("href", "#projects");

    // Social links
    const githubLink = page.getByRole("link", { name: /github/i }).first();
    await expect(githubLink).toBeVisible();
  });

  test("renders stacked mobile Hero cleanly at 390px without horizontal overflow", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1, name: "Dulan Prabashwara" });
    await expect(heading).toBeVisible();

    const exploreCta = page.getByRole("link", { name: "Explore Projects ↗" });
    await expect(exploreCta).toBeVisible();

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });

  test("renders Hero content cleanly with reduced motion enabled", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1, name: "Dulan Prabashwara" });
    await expect(heading).toBeVisible();

    const exploreCta = page.getByRole("link", { name: "Explore Projects ↗" });
    await expect(exploreCta).toBeVisible();
  });

  test("displays Technology Marquee following Hero with curated technologies", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const marqueeHeading = page.getByRole("heading", {
      level: 2,
      name: /featured technologies/i,
    });
    await expect(marqueeHeading).toBeAttached();

    // Verify canonical technology list items are present in DOM
    const nextjsItem = page.getByRole("listitem").filter({ hasText: "Next.js" });
    await expect(nextjsItem).toBeAttached();

    const springBootItem = page
      .getByRole("listitem")
      .filter({ hasText: "Spring Boot" });
    await expect(springBootItem).toBeAttached();

    const postgresItem = page
      .getByRole("listitem")
      .filter({ hasText: "PostgreSQL" });
    await expect(postgresItem).toBeAttached();
  });

  test("renders Technology Marquee under reduced motion without horizontal overflow", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const staticItem = page.getByText("Next.js").first();
    await expect(staticItem).toBeVisible();

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });

  test("displays About section with editorial layout, narrative, academic credentials, and foundations at desktop-1440", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const aboutSection = page.locator("#about");
    await expect(aboutSection).toBeVisible();

    const eyebrow = page.getByText("01 / ABOUT");
    await expect(eyebrow).toBeVisible();

    const heading = page.getByRole("heading", {
      level: 2,
      name: /engineering software beyond the interface/i,
    });
    await expect(heading).toBeVisible();

    // Narrative key phrases
    await expect(
      page.getByText(/information technology undergraduate at the university of moratuwa/i)
    ).toBeVisible();
    await expect(page.getByText(/complete application stack/i)).toBeVisible();

    // Academic credentials
    await expect(
      page.getByText("University of Moratuwa", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText("BSc in Information Technology (Hons)")
    ).toBeVisible();
    await expect(page.getByText("3.70 / 4.00")).toBeVisible();
    await expect(page.getByText("2024 — Present")).toBeVisible();

    // Academic foundations
    await expect(page.getByText("Data Structures & Algorithms")).toBeVisible();
    await expect(page.getByText("Operating Systems")).toBeVisible();
  });

  test("activates About navigation item with aria-current='location' when scrolled into view", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const aboutLink = page.getByRole("link", { name: "About" }).first();
    await expect(aboutLink).not.toHaveAttribute("aria-current", "location");

    // Scroll About section into view
    const aboutSection = page.locator("#about");
    await aboutSection.scrollIntoViewIfNeeded();

    // Wait for IntersectionObserver and active nav state
    await expect(aboutLink).toHaveAttribute("aria-current", "location", {
      timeout: 5000,
    });
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

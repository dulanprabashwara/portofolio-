import { describe, it, expect } from "vitest";
import { navItems } from "@/data/navigation";

describe("Navigation Data Integrity", () => {
  it("contains all 6 expected section navigation anchors", () => {
    expect(navItems).toHaveLength(6);

    const hrefs = navItems.map((item) => item.href);
    expect(hrefs).toEqual([
      "#about",
      "#skills",
      "#projects",
      "#journey",
      "#achievements",
      "#contact",
    ]);
  });

  it("ensures every nav item has non-empty label and valid hash href", () => {
    for (const item of navItems) {
      expect(item.label.trim()).not.toBe("");
      expect(item.href).toMatch(/^#[a-z]+$/);
    }
  });
});

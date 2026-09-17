import { describe, it, expect } from "vitest";
import { achievements } from "@/data/achievements";

describe("Achievements Data Integrity", () => {
  it("contains exactly 2 achievements", () => {
    expect(achievements).toHaveLength(2);
  });

  it("contains unique IDs", () => {
    const ids = achievements.map((a) => a.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(achievements.length);
  });

  it("contains verified competition placements and details", () => {
    const genzipher = achievements.find((a) => a.id === "genzipher-2026");
    expect(genzipher).toBeDefined();
    expect(genzipher?.placement).toBe("Champions");
    expect(genzipher?.team).toBe("Team CodeStormers");
    expect(genzipher?.date).toBe("February 2026");

    const moraxtreme = achievements.find((a) => a.id === "moraxtreme-2026");
    expect(moraxtreme).toBeDefined();
    expect(moraxtreme?.placement).toBe("First Runners-Up");
    expect(moraxtreme?.team).toBe("Team Hexa 404");
    expect(moraxtreme?.date).toBe("January 2026");
  });
});

import { describe, it, expect } from "vitest";
import { journeyItems } from "@/data/journey";
import type { JourneyType } from "@/types/portfolio";

describe("Journey Data Integrity", () => {
  it("contains unique item IDs", () => {
    const ids = journeyItems.map((j) => j.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(journeyItems.length);
  });

  it("is sorted in ascending chronological order", () => {
    const orders = journeyItems.map((j) => j.sortOrder);
    const sorted = [...orders].sort((a, b) => a - b);
    expect(orders).toEqual(sorted);
  });

  it("uses valid JourneyType values and non-empty strings", () => {
    const validTypes: JourneyType[] = ["education", "achievement", "milestone"];

    for (const item of journeyItems) {
      expect(validTypes).toContain(item.type);
      expect(item.id.trim()).not.toBe("");
      expect(item.date.trim()).not.toBe("");
      expect(item.title.trim()).not.toBe("");
      expect(item.description.trim()).not.toBe("");
    }
  });
});

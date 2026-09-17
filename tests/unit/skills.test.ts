import { describe, it, expect } from "vitest";
import { skillGroups, techNodes, techEdges } from "@/data/skills";

describe("Skills Data Integrity", () => {
  it("contains unique group IDs", () => {
    const ids = skillGroups.map((g) => g.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(skillGroups.length);
  });

  it("contains non-empty titles and skills in each group", () => {
    for (const group of skillGroups) {
      expect(group.id.trim()).not.toBe("");
      expect(group.title.trim()).not.toBe("");
      expect(group.skills.length).toBeGreaterThan(0);
      for (const skill of group.skills) {
        expect(skill.trim()).not.toBe("");
      }
    }
  });

  it("contains valid tech network nodes and edges", () => {
    const nodeIds = new Set(techNodes.map((n) => n.id));
    expect(nodeIds.size).toBe(techNodes.length);

    for (const edge of techEdges) {
      expect(nodeIds.has(edge.from)).toBe(true);
      expect(nodeIds.has(edge.to)).toBe(true);
    }
  });
});

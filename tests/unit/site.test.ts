import { describe, it, expect } from "vitest";
import { siteConfig } from "@/data/site";

describe("Site Configuration Integrity", () => {
  it("contains verified owner identity and academic credentials", () => {
    expect(siteConfig.name).toBe("Dulan Prabashwara");
    expect(siteConfig.university).toBe("University of Moratuwa");
    expect(siteConfig.degree).toBe("BSc in Information Technology (Hons)");
    expect(siteConfig.cgpa).toBe("3.70 / 4.00");
    expect(siteConfig.studyPeriod).toBe("2024 — Present");
    expect(siteConfig.email).toBe("dulanprabashwara@gmail.com");
    expect(siteConfig.resumePath).toBe("/resume/Dulan-Prabashwara-CV.pdf");
  });

  it("contains verified academic foundations without duplicates or empty values", () => {
    expect(siteConfig.foundations).toBeDefined();
    expect(siteConfig.foundations.length).toBeGreaterThanOrEqual(6);
    expect(new Set(siteConfig.foundations).size).toBe(
      siteConfig.foundations.length,
    );
    for (const f of siteConfig.foundations) {
      expect(typeof f).toBe("string");
      expect(f.trim().length).toBeGreaterThan(0);
    }
    expect(siteConfig.foundations).toContain("Data Structures & Algorithms");
    expect(siteConfig.foundations).toContain("Object-Oriented Programming");
    expect(siteConfig.foundations).toContain("Software Engineering");
    expect(siteConfig.foundations).toContain(
      "Object-Oriented Analysis & Design",
    );
    expect(siteConfig.foundations).toContain("Database Management Systems");
    expect(siteConfig.foundations).toContain("Operating Systems");
  });
});

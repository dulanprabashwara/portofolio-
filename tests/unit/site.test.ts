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
});

import { describe, it, expect } from "vitest";
import { socialLinks } from "@/data/socials";

describe("Social and Contact Links Integrity", () => {
  it("contains GitHub, LinkedIn, and Email", () => {
    const platforms = socialLinks.map((s) => s.platform);
    expect(platforms).toEqual(["github", "linkedin", "email"]);
  });

  it("points to verified profile URLs", () => {
    const github = socialLinks.find((s) => s.platform === "github");
    expect(github?.href).toBe("https://github.com/dulanprabashwara");
    expect(github?.external).toBe(true);

    const linkedin = socialLinks.find((s) => s.platform === "linkedin");
    expect(linkedin?.href).toBe(
      "https://www.linkedin.com/in/dulan-prabashwara/",
    );
    expect(linkedin?.external).toBe(true);

    const email = socialLinks.find((s) => s.platform === "email");
    expect(email?.href).toBe("mailto:dulanprabashwara@gmail.com");
    expect(email?.external).toBe(false);
  });

  it("strictly contains NO phone number entry", () => {
    for (const item of socialLinks) {
      expect(item.platform as string).not.toBe("phone");
      expect(item.href).not.toContain("tel:");
    }
  });
});

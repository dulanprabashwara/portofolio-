import { describe, expect, it } from "vitest";
import { achievements } from "./achievements";
import { journey } from "./journey";
import { projects } from "./projects";
import { skillGroups } from "./skills";
import { socials } from "./socials";

describe("factual content invariants", () => {
  it("keeps six projects ordered and unknown links null", () => {
    expect(projects.map(({ title }) => title)).toEqual([
      "EasyBlogger",
      "MediSync",
      "Ceylon News",
      "FoundIt",
      "BotNexus",
      "Pacman Live",
    ]);
    expect(projects).toHaveLength(6);
    expect(
      projects.every(
        ({ liveUrl, repositoryUrl }) =>
          liveUrl === null && repositoryUrl === null,
      ),
    ).toBe(true);
  });

  it("excludes forbidden technologies", () => {
    expect(projects.find((p) => p.slug === "ceylon-news")!.stack).not.toContain(
      "FastAPI",
    );
    expect(projects.find((p) => p.slug === "found-it")!.stack).not.toEqual(
      expect.arrayContaining(["Cloudinary", "PostGIS"]),
    );
  });

  it("keeps education and recognition order", () => {
    expect(journey.map(({ institution }) => institution)).toEqual([
      "St. Joseph's College",
      "B/Darmashoka MMV",
      "Bandarawela Central College",
      "University of Moratuwa",
    ]);
    expect(journey.slice(0, 3).every(({ detail }) => detail === null)).toBe(
      true,
    );
    expect(journey[3].detail).toBe("BSc. in Information Technology (Hons)");
    expect(achievements.map(({ result }) => result)).toEqual([
      "CHAMPIONS",
      "1ST RUNNERS-UP",
    ]);
  });

  it("has valid skill groups and social links", () => {
    expect(skillGroups.map(({ title }) => title)).toEqual([
      "Languages",
      "Frontend",
      "Backend & Real-time",
      "Data & Infrastructure",
      "Practices",
    ]);
    expect(socials.map(({ label }) => label)).toEqual([
      "Email",
      "LinkedIn",
      "GitHub",
      "Location",
    ]);
  });
});

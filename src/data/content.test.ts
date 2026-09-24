import { describe, expect, it } from "vitest";
import { achievements } from "./achievements";
import { journey } from "./journey";
import { projects } from "./projects";
import { skillGroups } from "./skills";
import { socials } from "./socials";

describe("factual content invariants", () => {
  it("keeps six projects ordered and links accurate", () => {
    expect(projects.map(({ title }) => title)).toEqual([
      "EasyBlogger",
      "MediSync",
      "Ceylon News",
      "FoundIt",
      "BotNexus",
      "Pacman Live",
    ]);
    expect(projects).toHaveLength(6);
    expect(projects[0].liveUrl).toBe(
      "https://easyblogger-7835cbde30d8.herokuapp.com/",
    );
    expect(projects[0].repositoryUrl).toBe(
      "https://github.com/dulanprabashwara/EasyBlogger-frontend",
    );
    expect(projects[0].image).toBe("/images/projects/easyblogger.png");
    expect(
      projects.slice(1).every(
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
      "LANGUAGES",
      "FRONTEND",
      "BACKEND & REAL-TIME",
      "DATA & INFRASTRUCTURE",
    ]);
    expect(socials.map(({ label }) => label)).toEqual([
      "Email",
      "LinkedIn",
      "GitHub",
      "Location",
    ]);
  });

  it("verifies Pacman Live hardware details and invariants", () => {
    const pacman = projects.find((p) => p.slug === "pacman-live")!;
    expect(pacman.title).toBe("Pacman Live");
    expect(pacman.type).toBe("Interactive Embedded LED Matrix Game");
    expect(pacman.overview).toBe(
      "Physical Pac-Man-inspired interactive embedded game combining microcontrollers, LED displays, wireless communication and physical actuators.",
    );
    expect(pacman.stack).toEqual([
      "Arduino Nano",
      "ESP32",
      "ESP-NOW",
      "Serial communication",
      "16x16 LED Matrix",
      "WS2812B",
      "Servo",
      "A4988",
    ]);
    expect(pacman.features).toEqual([
      "Multi-level game logic",
      "Physical maze interaction",
      "Wireless communication",
      "Serial communication",
      "Life indicators",
      "Servo control",
      "Buzzer feedback",
      "Stepper motor control",
      "Vibration feedback",
    ]);
    expect(pacman.liveUrl).toBeNull();
    expect(pacman.repositoryUrl).toBeNull();
  });
});

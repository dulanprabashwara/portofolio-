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
    expect(projects[1].liveUrl).toBe(
      "https://medisync-frontend-57b1cdd293eb.herokuapp.com/",
    );
    expect(projects[1].repositoryUrl).toBe(
      "https://github.com/dulanprabashwara/Medisync-frontend",
    );
    expect(projects[1].image).toBe("/images/projects/medisync.png");
    expect(projects[2].liveUrl).toBe("https://ceylonnews.live/");
    expect(projects[2].repositoryUrl).toBe(
      "https://github.com/dulanprabashwara/sri-lanka-news-frontend",
    );
    expect(projects[2].image).toBe("/images/projects/ceylon-news.png");
    expect(projects[3].liveUrl).toBe(
      "https://foundit-frontend-917715127151.us-central1.run.app/",
    );
    expect(projects[3].repositoryUrl).toBe(
      "https://github.com/dulanprabashwara/foundit",
    );
    expect(projects[3].image).toBe("/images/projects/foundit.png");
    expect(projects[4].liveUrl).toBe("https://chat-bot-oh94.vercel.app/");
    expect(projects[4].repositoryUrl).toBe(
      "https://github.com/dulanprabashwara/BotNexus",
    );
    expect(projects[4].image).toBe("/images/projects/botnexus.png");
    expect(projects[5].image).toBe("/images/projects/pacman-live.jpg");
    expect(
      projects.slice(5).every(
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

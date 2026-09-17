import { describe, it, expect } from "vitest";
import { projects, getProjectById } from "@/data/projects";

describe("Projects Data Integrity", () => {
  it("contains exactly 6 projects", () => {
    expect(projects).toHaveLength(6);
  });

  it("has unique IDs for all projects", () => {
    const ids = projects.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(projects.length);
  });

  it("contains required non-empty fields for each project", () => {
    for (const project of projects) {
      expect(project.id.trim()).not.toBe("");
      expect(project.title.trim()).not.toBe("");
      expect(project.subtitle.trim()).not.toBe("");
      expect(project.description.trim()).not.toBe("");
      expect(project.coverImage).toMatch(
        /^\/images\/projects\/[a-z0-9-]+\/cover\.webp$/,
      );
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.features.length).toBeGreaterThan(0);

      // Verify no empty string URLs
      if (project.github !== undefined) {
        expect(project.github.trim()).not.toBe("");
      }
      if (project.live !== undefined) {
        expect(project.live.trim()).not.toBe("");
      }
    }
  });

  it("getProjectById retrieves correct project", () => {
    const medisync = getProjectById("medisync");
    expect(medisync).toBeDefined();
    expect(medisync?.title).toBe("MediSync");

    const unknown = getProjectById("non-existent");
    expect(unknown).toBeUndefined();
  });

  it("contains accurate verified tech stack signatures for key projects", () => {
    const easyblogger = getProjectById("easyblogger");
    expect(easyblogger?.stack).toContain("Socket.IO");
    expect(easyblogger?.stack).toContain("Stripe");
    expect(easyblogger?.teamProject).toBe(true);

    const medisync = getProjectById("medisync");
    expect(medisync?.stack).toContain("Spring Boot");
    expect(medisync?.stack).toContain("WebSocket/STOMP");
    expect(medisync?.stack).toContain("LiveKit");

    const ceylonNews = getProjectById("ceylon-news");
    expect(ceylonNews?.stack).toContain("Python");
    expect(ceylonNews?.stack).toContain("Redis");
    expect(ceylonNews?.stack).toContain("Azure Translator");

    const foundit = getProjectById("foundit");
    expect(foundit?.stack).toContain("Leaflet");
    expect(foundit?.stack).toContain("Google Cloud Run");

    const botnexus = getProjectById("botnexus");
    expect(botnexus?.stack).toContain("Firestore");
    expect(botnexus?.stack).toContain("OpenRouter API");

    const pacmanLive = getProjectById("pacman-live");
    expect(pacmanLive?.stack).toContain("Arduino Nano");
    expect(pacmanLive?.stack).toContain("ESP32");
    expect(pacmanLive?.stack).toContain("ESP-NOW");
  });
});

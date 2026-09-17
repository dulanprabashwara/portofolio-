import { describe, it, expect } from "vitest";
import {
  DURATIONS,
  EASINGS,
  STAGGER,
  SPRINGS,
  VIEWPORT,
  fadeIn,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

describe("Animation Tokens and Motion Variants", () => {
  it("maintains strictly ordered duration tokens", () => {
    expect(DURATIONS.fast).toBeLessThan(DURATIONS.normal);
    expect(DURATIONS.normal).toBeLessThan(DURATIONS.reveal);
    expect(DURATIONS.reveal).toBeLessThanOrEqual(DURATIONS.cinematic);

    // Verify ranges match approved timing
    expect(DURATIONS.fast).toBe(0.2);
    expect(DURATIONS.normal).toBe(0.4);
    expect(DURATIONS.reveal).toBe(0.65);
    expect(DURATIONS.cinematic).toBe(1.0);
  });

  it("configures the approved smooth easing curve", () => {
    expect(EASINGS.smooth).toHaveLength(4);
    expect(EASINGS.smooth).toEqual([0.22, 1, 0.36, 1]);
  });

  it("configures controlled stagger values", () => {
    expect(STAGGER.fast).toBe(0.06);
    expect(STAGGER.normal).toBe(0.08);
    expect(STAGGER.fast).toBeLessThan(STAGGER.normal);
  });

  it("configures controlled soft spring preset", () => {
    expect(SPRINGS.soft.type).toBe("spring");
    expect(SPRINGS.soft.stiffness).toBeGreaterThan(0);
    expect(SPRINGS.soft.damping).toBeGreaterThan(0);
    expect(SPRINGS.soft.mass).toBeGreaterThan(0);
  });

  it("configures default viewport intersection trigger settings", () => {
    expect(VIEWPORT.once).toBe(true);
    expect(VIEWPORT.amount).toBe(0.2);
  });

  it("defines correct fadeIn variant", () => {
    expect(fadeIn.hidden).toEqual({ opacity: 0 });
    expect((fadeIn.visible as { opacity: number }).opacity).toBe(1);
  });

  it("defines correct fadeUp section reveal variant with 24px translation", () => {
    expect(fadeUp.hidden).toEqual({ opacity: 0, y: 24 });
    const visible = fadeUp.visible as { opacity: number; y: number };
    expect(visible.opacity).toBe(1);
    expect(visible.y).toBe(0);
  });

  it("defines restrained scaleIn variant", () => {
    expect(scaleIn.hidden).toEqual({ opacity: 0, scale: 0.96 });
    const visible = scaleIn.visible as { opacity: number; scale: number };
    expect(visible.opacity).toBe(1);
    expect(visible.scale).toBe(1);
  });

  it("defines staggerContainer and staggerItem variants", () => {
    const containerVisible = staggerContainer.visible as {
      transition: { staggerChildren: number };
    };
    expect(containerVisible.transition.staggerChildren).toBe(STAGGER.normal);

    expect(staggerItem.hidden).toEqual({ opacity: 0, y: 16 });
    const itemVisible = staggerItem.visible as { opacity: number; y: number };
    expect(itemVisible.opacity).toBe(1);
    expect(itemVisible.y).toBe(0);
  });
});

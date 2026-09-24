import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

if (typeof window !== "undefined") {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = "";
    readonly thresholds: ReadonlyArray<number> = [];
    disconnect() {}
    observe() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
    unobserve() {}
  }
  window.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
  global.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;

  class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver =
    MockResizeObserver as unknown as typeof ResizeObserver;
  global.ResizeObserver =
    MockResizeObserver as unknown as typeof ResizeObserver;
}

afterEach(() => cleanup());

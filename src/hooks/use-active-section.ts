"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check hash on mount and hash changes
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", syncFromHash);

    if (typeof IntersectionObserver === "undefined") {
      syncFromHash();
      return () => {
        window.removeEventListener("hashchange", syncFromHash);
      };
    }

    const entriesMap = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entriesMap.set(entry.target.id, entry);
        }

        // Determine which intersecting section is most aligned with the reading position (header height ~64-80px)
        let activeId: string | null = null;
        let minDistance = Infinity;

        for (const [id, entry] of entriesMap.entries()) {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            // Only consider sections whose bottom is below the header
            if (rect.bottom > 80) {
              const distance = Math.max(0, rect.top - 80);
              if (distance < minDistance) {
                minDistance = distance;
                activeId = id;
              }
            }
          }
        }

        if (activeId) {
          setActiveSection(activeId);
        }
      },
      {
        rootMargin: "-80px 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}

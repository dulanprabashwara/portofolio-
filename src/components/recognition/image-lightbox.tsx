"use client";

import Image from "next/image";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useModalBehavior } from "@/hooks/use-modal-behavior";
import type { Achievement } from "@/types/content";

type ImageLightboxProps = {
  achievement: Achievement | null;
  open: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
};

export function ImageLightbox({
  achievement,
  open,
  onClose,
  triggerRef,
}: ImageLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useModalBehavior({
    open,
    onClose,
    containerRef,
    triggerRef,
  });

  if (!open || !achievement || !achievement.image || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={achievement.event}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--plum,#231d2b)]/80 backdrop-blur-md p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative my-auto flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--border,#ddd6e3)] bg-white p-4 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Close button */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border,#ddd6e3)]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--green,#2fae63)]">
              {achievement.result}
            </span>
            <span className="text-sm font-bold text-[var(--plum,#231d2b)]">
              {achievement.event}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border,#ddd6e3)] text-[var(--plum,#231d2b)] hover:bg-[var(--mist,#f0ebf4)] transition-colors"
          >
            <span className="material-symbols-outlined" aria-hidden>
              close
            </span>
          </button>
        </div>

        {/* Image */}
        <div className="relative aspect-video w-full my-4 overflow-hidden rounded-xl bg-black/5">
          <Image
            src={achievement.image}
            alt={achievement.event}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        {/* Caption */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[var(--muted-plum,#655d6f)] font-mono pt-2">
          <span>
            {achievement.organizer} • {achievement.institution}
          </span>
          <span>{achievement.date}</span>
        </div>
      </div>
    </div>,
    document.body
  );
}

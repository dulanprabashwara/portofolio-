"use client";

import Image from "next/image";
import { useRef } from "react";
import { NeutralMedia } from "@/components/media/neutral-media";
import { useModalBehavior } from "@/hooks/use-modal-behavior";
import type { Project } from "@/types/content";
import { ProjectActions } from "./project-actions";

type ProjectDialogProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
};

export function ProjectDialog({
  project,
  open,
  onClose,
  triggerRef,
}: ProjectDialogProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useModalBehavior({
    open,
    onClose,
    containerRef,
    triggerRef,
  });

  if (!open || !project) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--plum,#231d2b)]/60 backdrop-blur-xs p-4 sm:p-6 lg:p-8 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative my-auto w-full max-w-3xl rounded-2xl border border-[var(--border,#ddd6e3)] bg-white p-6 sm:p-8 lg:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with number, type, and close button */}
        <div className="flex items-start justify-between border-b border-[var(--border,#ddd6e3)] pb-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[var(--green,#2fae63)]">
                {project.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                {project.type}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border,#ddd6e3)] text-[var(--plum,#231d2b)] hover:bg-[var(--mist,#f0ebf4)] transition-colors"
          >
            <span className="material-symbols-outlined" aria-hidden>
              close
            </span>
          </button>
        </div>

        {/* Media */}
        <div className="my-6">
          {project.image ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border,#ddd6e3)]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : (
            <NeutralMedia label={`${project.title} preview`} aspect="video" />
          )}
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
              Overview
            </h3>
            <p className="mt-2 text-base text-[var(--muted-plum,#655d6f)] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
              Key Features
            </h3>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--plum,#231d2b)]"
                >
                  <span
                    className="material-symbols-outlined text-[var(--green,#2fae63)] text-lg shrink-0 mt-0.5"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
              Technologies
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border,#ddd6e3)] bg-[var(--pearl,#f7f4fa)] px-3 py-1 font-mono text-xs text-[var(--plum,#231d2b)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions (if available) */}
          <div className="pt-2 border-t border-[var(--border,#ddd6e3)]">
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

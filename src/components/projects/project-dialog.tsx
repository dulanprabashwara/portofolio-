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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--plum,#231d2b)]/60 backdrop-blur-xs p-3 sm:p-6 lg:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl lg:max-w-6xl rounded-2xl border border-[var(--border,#ddd6e3)] bg-white shadow-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="flex items-start justify-between border-b border-[var(--border,#ddd6e3)] p-5 sm:p-6 lg:px-8 bg-white/95 backdrop-blur-xs shrink-0 z-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-[var(--coral,#e85f8e)]">
                {project.number}
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                {project.type}
              </span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border,#ddd6e3)] text-[var(--plum,#231d2b)] hover:bg-[var(--mist,#f0ebf4)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)]"
          >
            <span className="material-symbols-outlined" aria-hidden>
              close
            </span>
          </button>
        </div>

        {/* Scrollable Body: 2 columns on lg+ */}
        <div className="overflow-y-auto p-5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Media ~55-60% */}
            <div className="lg:col-span-7">
              {project.image ? (
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-[var(--border,#ddd6e3)] shadow-xs">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              ) : (
                <NeutralMedia
                  label={`${project.title} preview`}
                  aspect="card"
                />
              )}
            </div>

            {/* Right Column: Content ~40-45% */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Overview */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                  Overview
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[var(--muted-plum,#655d6f)] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                  Technologies
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--border,#ddd6e3)] bg-[var(--pearl,#f7f4fa)] px-2.5 py-1 font-mono text-xs text-[var(--plum,#231d2b)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                  Key Features
                </h3>
                <ul className="mt-2.5 space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[var(--plum,#231d2b)]"
                    >
                      <span
                        className="material-symbols-outlined text-[var(--green,#2fae63)] text-base shrink-0 mt-0.5"
                        aria-hidden
                      >
                        check_circle
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[var(--border,#ddd6e3)] mt-auto">
                <ProjectActions project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { NeutralMedia } from "@/components/media/neutral-media";
import { useModalBehavior } from "@/hooks/use-modal-behavior";
import type { Project } from "@/types/content";
import { ProjectActions } from "./project-actions";
import { TechIcon } from "@/components/ui/tech-icon";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

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

  if (!open || !project || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 lg:p-8 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <CardContainer
        containerClassName="py-2 sm:py-6 w-full flex items-center justify-center max-w-5xl lg:max-w-6xl"
        className="w-full flex items-center justify-center"
        maxTilt={5}
      >
        <CardBody
          className="relative group/card w-full h-auto max-w-5xl lg:max-w-6xl rounded-2xl border border-[var(--border)] dark:border-white/[0.15] bg-white dark:bg-[#121212] p-5 sm:p-7 lg:p-9 shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] transition-shadow duration-300"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-[var(--border)] dark:border-white/10 pb-5 w-full">
            <div>
              <CardItem translateZ="20" className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[var(--coral,#e85f8e)]">
                  {project.number}
                </span>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
                  {project.type}
                </span>
                {project.slug === "ceylon-news" && (
                  <span className="rounded-full bg-[var(--soft-coral,#fff0f4)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-[var(--coral,#e85f8e)] border border-[var(--coral,#e85f8e)]/25">
                    Flagship
                  </span>
                )}
              </CardItem>
              <CardItem
                as="h2"
                translateZ="30"
                className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]"
              >
                {project.title}
              </CardItem>
            </div>

            {/* Stable Close Button: pinned at z-30 with no excessive 3D displacement */}
            <div className="relative z-30">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--plum)] hover:bg-black/5 dark:border-white/10 dark:text-[#F5F5F5] dark:hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)] cursor-pointer"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  close
                </span>
              </button>
            </div>
          </div>

          {/* 2-Column Content on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 items-start w-full">
            {/* Left Column: Media (translateZ=50) + Stack (translateZ=20) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <CardItem translateZ="50" className="w-full">
                {project.image ? (
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-[var(--border)] dark:border-white/15 shadow-md group-hover/card:shadow-2xl transition-shadow">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-xl overflow-hidden border border-[var(--border)] dark:border-white/15 shadow-md group-hover/card:shadow-2xl transition-shadow">
                    <NeutralMedia
                      label={`${project.title} preview`}
                      aspect="card"
                    />
                  </div>
                )}
              </CardItem>

              {/* Technologies */}
              <CardItem translateZ="20" className="w-full">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
                  Technologies
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--mist)] px-2.5 py-1 font-mono text-xs text-[var(--plum)] dark:border-white/10 dark:bg-[#1C1C1C] dark:text-[#F5F5F5]"
                    >
                      <TechIcon name={tech} className="h-3 w-3 shrink-0 opacity-80" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </CardItem>
            </div>

            {/* Right Column: Overview (translateZ=25) + Features (translateZ=20) + Actions (stable z-30) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Overview */}
              <CardItem as="div" translateZ="25" className="w-full">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
                  Overview
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed">
                  {project.overview}
                </p>
              </CardItem>

              {/* Key Features */}
              <CardItem as="div" translateZ="20" className="w-full">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
                  Key Features
                </h3>
                <ul className="mt-2.5 space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[var(--plum)] dark:text-[#F5F5F5]"
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
              </CardItem>

              {/* Actions: Stable hit targets pinned at z-30 with no shifting */}
              <div className="pt-4 border-t border-[var(--border)] dark:border-white/10 mt-auto flex flex-wrap items-center justify-between gap-3 w-full relative z-30">
                <ProjectActions project={project} />
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border)] dark:border-white/15 bg-[var(--mist)] dark:bg-[#1C1C1C] text-xs font-mono font-semibold text-[var(--plum)] dark:text-[#F5F5F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>,
    document.body
  );
}

"use client";

import Image from "next/image";
import { NeutralMedia } from "@/components/media/neutral-media";
import type { Project } from "@/types/content";
import { ProjectActions } from "./project-actions";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project, triggerEl?: HTMLElement) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`group rounded-2xl border ${
        project.slug === "ceylon-news"
          ? "border-[var(--coral,#e85f8e)]/35 ring-1 ring-[var(--coral,#e85f8e)]/15"
          : "border-[var(--border,#ddd6e3)]"
      } bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual / Media Trigger ~7 cols */}
        <div
          className={`lg:col-span-7 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          } overflow-hidden rounded-xl`}
        >
          <button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            aria-label={`Open ${project.title} case study`}
            className="w-full text-left transition-transform duration-300 hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)] rounded-xl"
          >
            {project.image ? (
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-[var(--border,#ddd6e3)]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            ) : (
              <NeutralMedia label={`${project.title} preview`} aspect="card" />
            )}
          </button>
        </div>

        {/* Details Column ~5 cols */}
        <div
          className={`lg:col-span-5 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          } flex flex-col items-start gap-4 sm:gap-5`}
        >
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-bold text-[var(--coral,#e85f8e)]">
              {project.number}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
              {project.type}
            </span>
            {project.slug === "ceylon-news" && (
              <span className="rounded-full bg-[var(--soft-coral,#fff0f4)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-[var(--coral,#e85f8e)] border border-[var(--coral,#e85f8e)]/25">
                Flagship
              </span>
            )}
          </div>

          {/* Title Trigger */}
          <button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            aria-label={`Open ${project.title} case study`}
            className="text-left group-hover:text-[var(--green,#2fae63)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)] rounded"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
              {project.title}
            </h3>
          </button>

          {/* Overview snippet */}
          <p className="text-sm sm:text-base text-[var(--muted-plum,#655d6f)] leading-relaxed line-clamp-3">
            {project.overview}
          </p>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--border,#ddd6e3)] bg-[var(--pearl,#f7f4fa)] px-2.5 py-1 font-mono text-xs text-[var(--plum,#231d2b)]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="rounded-md border border-[var(--border,#ddd6e3)] bg-[var(--pearl,#f7f4fa)] px-2 py-1 font-mono text-xs text-[var(--lavender-gray,#8b8295)]">
                +{project.stack.length - 5}
              </span>
            )}
          </div>

          {/* Actions: Case study button + optional external links */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[var(--border,#ddd6e3)] w-full">
            <button
              type="button"
              onClick={(e) => onOpen(project, e.currentTarget)}
              aria-label={`Open ${project.title} case study`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--green,#2fae63)] hover:bg-[var(--green-hover,#258c50)] text-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold shadow-xs hover:-translate-y-0.5 transition-all min-h-[44px]"
            >
              <span>Case Study</span>
              <span className="material-symbols-outlined text-base" aria-hidden>
                arrow_forward
              </span>
            </button>

            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

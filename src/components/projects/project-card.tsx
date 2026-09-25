"use client";

import Image from "next/image";
import { NeutralMedia } from "@/components/media/neutral-media";
import type { Project } from "@/types/content";
import { ProjectActions } from "./project-actions";
import { MediaCard, MediaCardItem } from "@/components/ui/media-card";
import { StaggerButton } from "@/components/ui/stagger-button";
import { SpotlightCard } from "@/components/ui/spotlightcard";
import { TechIcon } from "@/components/ui/tech-icon";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project, triggerEl?: HTMLElement) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <SpotlightCard
      as="article"
      spotlightColor={
        project.slug === "ceylon-news" ? "232, 95, 142" : "47, 174, 99"
      }
      className={`group rounded-2xl border ${
        project.slug === "ceylon-news"
          ? "border-[var(--coral,#e85f8e)]/40 ring-1 ring-[var(--coral,#e85f8e)]/20"
          : "border-[var(--border)] dark:border-[#2A2A2A]"
      } bg-white dark:bg-[#151515] shadow-xl transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-2xl`}
      contentClassName="p-6 sm:p-8 lg:p-10 w-full h-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual / Media Trigger ~7 cols */}
        <div
          className={`lg:col-span-7 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          } overflow-hidden rounded-xl`}
        >
          <MediaCard>
            <MediaCardItem title="VIEW CASE STUDY →">
              <button
                type="button"
                onClick={(e) => onOpen(project, e.currentTarget)}
                aria-label={`Open ${project.title} case study`}
                className="w-full text-left transition-transform duration-300 hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)] rounded-xl block"
              >
                {project.image ? (
                  <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-[var(--border)] dark:border-[#2A2A2A] bg-white dark:bg-[#151515]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                ) : (
                  <NeutralMedia
                    label={`${project.title} preview`}
                    aspect="card"
                  />
                )}
              </button>
            </MediaCardItem>
          </MediaCard>
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
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5] group-hover:text-[var(--green,#2fae63)] transition-colors">
              {project.title}
            </h3>
          </button>

          {/* Overview snippet */}
          <p className="text-sm sm:text-base text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed line-clamp-3">
            {project.overview}
          </p>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--mist)] px-2.5 py-1 font-mono text-xs text-[var(--plum)] dark:border-[#2A2A2A] dark:bg-[#1C1C1C] dark:text-[#C9C9C9]"
              >
                <TechIcon name={tech} className="h-3 w-3 shrink-0 opacity-70" />
                <span>{tech}</span>
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="rounded-md border border-[var(--border)] bg-[var(--mist)] px-2 py-1 font-mono text-xs text-[var(--muted-plum)] dark:border-[#2A2A2A] dark:bg-[#1C1C1C] dark:text-[#8A8A8A]">
                +{project.stack.length - 5}
              </span>
            )}
          </div>

          {/* Actions: Case study button + optional external links */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[var(--border)] dark:border-[#2A2A2A] w-full">
            <StaggerButton
              type="button"
              text="Case Study"
              onClick={(e) => onOpen(project, e.currentTarget)}
              aria-label={`Open ${project.title} case study`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--green,#2fae63)] hover:bg-[var(--green-hover,#258c50)] text-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold shadow-xs hover:-translate-y-0.5 transition-all min-h-[44px]"
            >
              <span className="material-symbols-outlined text-base" aria-hidden>
                arrow_forward
              </span>
            </StaggerButton>

            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

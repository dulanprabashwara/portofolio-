'use client'

import { useRef, useState } from 'react'
import { projects } from '@/data/projects'
import type { Project } from '@/types/content'
import { ProjectCard } from './project-card'
import { ProjectDialog } from './project-dialog'

export function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)

  const handleOpen = (project: Project, triggerEl?: HTMLElement) => {
    if (triggerEl) {
      triggerRef.current = triggerEl
    }
    setSelectedProject(project)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          02 / SELECTED WORK
        </p>
        <h2
          id="projects-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          Crafted with intent and technical rigor.
        </h2>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10 sm:gap-14">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onOpen={handleOpen}
          />
        ))}
      </div>

      {/* Project Case Study Dialog */}
      <ProjectDialog
        project={selectedProject}
        open={isOpen}
        onClose={handleClose}
        triggerRef={triggerRef}
      />
    </div>
  )
}

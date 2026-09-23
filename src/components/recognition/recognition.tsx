'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { NeutralMedia } from '@/components/media/neutral-media'
import { achievements } from '@/data/achievements'
import type { Achievement } from '@/types/content'
import { ImageLightbox } from './image-lightbox'

export function Recognition() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const handleOpen = (achievement: Achievement, el: HTMLButtonElement) => {
    triggerRef.current = el
    setSelectedAchievement(achievement)
    setIsOpen(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[var(--border,#ddd6e3)]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
          06 / RECOGNITION
        </p>
        <h2
          id="recognition-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)]"
        >
          Awards &amp; Competitions
        </h2>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {achievements.map((achievement) => (
          <div
            key={achievement.event}
            className="flex flex-col justify-between rounded-2xl border border-[var(--border,#ddd6e3)] bg-white p-6 sm:p-8 shadow-xs"
          >
            <div>
              {/* Media Slot */}
              <div className="mb-6 overflow-hidden rounded-xl">
                {achievement.image ? (
                  <button
                    type="button"
                    onClick={(e) => handleOpen(achievement, e.currentTarget)}
                    aria-label={`Open ${achievement.event} photo`}
                    className="w-full text-left transition-transform hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)] rounded-xl"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border,#ddd6e3)] bg-black/5">
                      <Image
                        src={achievement.image}
                        alt={achievement.event}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </button>
                ) : (
                  <NeutralMedia
                    label="COMPETITION PHOTO [To Be Provided]"
                    aspect="video"
                  />
                )}
              </div>

              {/* Badges / Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-full bg-[var(--soft-green,#e8f8ee)] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--green,#2fae63)]">
                  {achievement.result}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                  {achievement.description}
                </span>
              </div>

              {/* Event Title */}
              <h3 className="text-2xl font-bold tracking-tight text-[var(--plum,#231d2b)]">
                {achievement.event}
              </h3>

              {/* Organization & Institution */}
              <p className="mt-3 text-sm text-[var(--muted-plum,#655d6f)] leading-relaxed">
                Organized by {achievement.organizer}, {achievement.institution}
              </p>
            </div>

            {/* Footer meta */}
            <div className="mt-6 flex flex-wrap items-center justify-between border-t border-[var(--border,#ddd6e3)] pt-4 font-mono text-xs text-[var(--lavender-gray,#8b8295)]">
              <span className="font-semibold text-[var(--plum,#231d2b)]">
                {achievement.team}
              </span>
              <span>{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <ImageLightbox
        achievement={selectedAchievement}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={triggerRef}
      />
    </div>
  )
}

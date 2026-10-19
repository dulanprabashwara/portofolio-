'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { NeutralMedia } from '@/components/media/neutral-media'
import { achievements } from '@/data/achievements'
import type { Achievement } from '@/types/content'
import { ImageLightbox } from './image-lightbox'
import { SpotlightCard } from '@/components/ui/spotlightcard'

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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
          06 / RECOGNITION
        </p>
        <h2
          id="recognition-title"
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]"
        >
          A little proof of the progress.
        </h2>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {achievements.map((achievement) => {
          const isChampions = achievement.result === "CHAMPIONS";

          return (
            <SpotlightCard
              key={achievement.event}
              spotlightColor={isChampions ? "47, 174, 99" : "232, 95, 142"}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8 lg:p-10 shadow-xl hover:border-black/20 hover:shadow-2xl dark:border-[#2A2A2A] dark:bg-[#151515] dark:hover:border-white/20 transition-all"
              contentClassName="flex flex-col justify-between h-full"
            >
              <div>
                {/* Media Slot: 16:10 */}
                <div className="mb-6 overflow-hidden rounded-xl">
                  {achievement.image ? (
                    <button
                      type="button"
                      onClick={(e) => handleOpen(achievement, e.currentTarget)}
                      aria-label={`Open ${achievement.event} photo`}
                      className="w-full text-left transition-transform hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-[var(--green,#2fae63)] rounded-xl"
                    >
                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-[var(--border)] dark:border-[#2A2A2A] bg-black/5 dark:bg-black/40">
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
                      label="COMPETITION PHOTO"
                      aspect="card"
                    />
                  )}
                </div>

                {/* Prominent Large Typography for Result */}
                <div className="mt-2">
                  <h3
                    className={`font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                      isChampions
                        ? "text-[var(--green,#2fae63)]"
                        : "text-[var(--plum)] dark:text-[#F5F5F5]"
                    }`}
                  >
                    {achievement.result}
                  </h3>

                  <p className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]">
                    {achievement.event}
                  </p>

                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                    {achievement.description}
                  </p>

                  <p className="mt-3 text-sm text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed">
                    Organized by {achievement.organizer}, {achievement.institution}
                  </p>
                </div>
              </div>

              {/* Footer meta */}
              <div className="mt-8 pt-4 border-t border-[var(--border)] dark:border-[#2A2A2A] flex items-center justify-between font-mono text-xs text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                <span>{achievement.team}</span>
                <span>{achievement.date}</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        achievement={selectedAchievement}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={triggerRef}
      />
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  VIEWPORT,
} from "@/lib/animations";

export function AboutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Left Column (5 cols): Section Heading */}
      <motion.div
        className="lg:col-span-5 lg:sticky lg:top-28"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeUp}
      >
        <SectionHeading
          eyebrow="01 / ABOUT"
          title="Engineering software beyond the interface."
          theme="light"
        />
      </motion.div>

      {/* Right Column (7 cols): Narrative, Academic Facts, and Foundations */}
      <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-12">
        {/* Narrative Paragraphs */}
        <motion.div
          className="space-y-4 sm:space-y-5 text-text-muted font-body text-base sm:text-lg leading-relaxed max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <p>
            I&apos;m Dulan Prabashwara, an Information Technology undergraduate
            at the University of Moratuwa with a strong interest in full-stack
            software engineering.
          </p>
          <p>
            I enjoy working across the{" "}
            <span className="text-ink font-semibold">
              complete application stack
            </span>{" "}
            — from building responsive interfaces with Next.js and React to
            designing backend services, databases, authentication flows,
            real-time communication, and deployment pipelines.
          </p>
          <p>
            My projects have taken me through healthcare systems, community
            platforms, multilingual AI-powered news processing, location-based
            applications, AI chat experiences, and microcontroller-based
            interactive systems.
          </p>
          <p>
            I&apos;m currently looking for opportunities where I can apply that
            experience, learn from strong engineering teams, and continue
            growing as a software engineer.
          </p>
        </motion.div>

        {/* Academic Credentials (Semantic Definition List) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 p-6 sm:p-8 rounded-xl bg-surface-light border border-mint/20 shadow-xs">
            <div>
              <dt className="font-display text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
                University
              </dt>
              <dd className="mt-1 font-display text-lg sm:text-xl font-semibold text-ink">
                {siteConfig.university}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
                CGPA
              </dt>
              <dd className="mt-1 font-display text-lg sm:text-xl font-semibold text-emerald-dark">
                {siteConfig.cgpa}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
                Degree
              </dt>
              <dd className="mt-1 font-display text-lg sm:text-xl font-semibold text-ink">
                {siteConfig.degree}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
                Period
              </dt>
              <dd className="mt-1 font-display text-lg sm:text-xl font-semibold text-ink">
                {siteConfig.studyPeriod}
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* Academic Foundations (Semantic List) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="flex flex-col gap-3.5"
        >
          <h3 className="font-display text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase">
            Academic Foundations
          </h3>
          <ul
            className="flex flex-wrap gap-2 sm:gap-2.5"
            aria-label="Academic Foundations"
          >
            {siteConfig.foundations.map((foundation) => (
              <motion.li
                key={foundation}
                variants={staggerItem}
                className="px-3.5 py-1.5 rounded-md bg-surface-light border border-mint/25 text-ink font-body text-xs sm:text-sm font-medium tracking-normal"
              >
                {foundation}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

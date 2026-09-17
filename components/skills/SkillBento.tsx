"use client";

import { motion } from "motion/react";
import type { SkillGroup } from "@/types/portfolio";
import { SkillCard } from "./SkillCard";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/animations";

interface SkillBentoProps {
  groups: readonly SkillGroup[];
}

function getGridSpanClass(id: string): string {
  switch (id) {
    case "frontend":
      return "lg:col-span-7";
    case "backend":
      return "lg:col-span-5";
    case "databases":
      return "md:col-span-1 lg:col-span-4";
    case "languages":
      return "md:col-span-1 lg:col-span-4";
    case "engineering":
      return "md:col-span-2 lg:col-span-4";
    case "devops":
      return "md:col-span-2 lg:col-span-12";
    default:
      return "col-span-12";
  }
}

export function SkillBento({ groups }: SkillBentoProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer}
    >
      {groups.map((group) => {
        const spanClass = getGridSpanClass(group.id);

        return (
          <motion.div
            key={group.id}
            variants={staggerItem}
            className={`col-span-1 ${spanClass}`}
          >
            <SkillCard group={group} className="h-full" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

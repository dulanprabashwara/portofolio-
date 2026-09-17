import React from "react";
import type { SkillGroup } from "@/types/portfolio";
import { TechBadge } from "@/components/ui/TechBadge";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  group: SkillGroup;
  className?: string;
}

export function SkillCard({ group, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl bg-surface-light border border-mint/20 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-emerald/40 hover:-translate-y-1 select-none",
        className,
      )}
    >
      <div>
        {/* Header with Title and Accent Dot */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-mint/15">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink tracking-tight">
            {group.title}
          </h3>
          <span
            className="w-2 h-2 rounded-full bg-emerald shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* Semantic Skills List */}
        <ul
          className="flex flex-wrap gap-2 sm:gap-2.5"
          aria-label={`${group.title} technologies and methodologies`}
        >
          {group.skills.map((skill) => (
            <li key={skill}>
              <TechBadge tone="light" size="md">
                {skill}
              </TechBadge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

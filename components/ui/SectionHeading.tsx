import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  headingLevel = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = headingLevel;

  const isDark = theme === "dark";
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCentered ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-display text-sm md:text-base font-bold tracking-widest uppercase",
            isDark ? "text-emerald-bright" : "text-emerald-dark"
          )}
        >
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight",
          isDark ? "text-text-dark-primary" : "text-ink"
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={cn(
            "font-body text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-text-dark-secondary" : "text-text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

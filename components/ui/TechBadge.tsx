import React from "react";
import { cn } from "@/lib/utils";

export interface TechBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({
  children,
  tone = "light",
  size = "md",
  className,
  ...props
}: TechBadgeProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn(
        "inline-flex items-center font-body font-medium transition-colors select-none",
        size === "sm"
          ? "text-[11px] px-2.5 py-0.5 rounded"
          : "text-xs px-3 py-1 rounded-md",
        isDark
          ? "bg-surface-dark border border-border-dark text-mint"
          : "bg-surface-light border border-border-light text-ink shadow-2xs",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

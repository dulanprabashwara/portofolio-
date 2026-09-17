import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Container({
  as: Component = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-[1280px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

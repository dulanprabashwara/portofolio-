import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary-dark"
  | "secondary-light"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleProps): string {
  const baseStyles =
    "inline-flex items-center justify-center font-body font-medium transition-all duration-200 ease-out select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-[0.98]";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-emerald hover:bg-emerald-bright text-bg-deep font-semibold shadow-sm hover:shadow-md",
    "secondary-dark":
      "bg-surface-dark hover:bg-surface-raised border border-border-dark text-text-dark-primary hover:border-mint/30",
    "secondary-light":
      "bg-white hover:bg-surface-light border border-border-light text-ink hover:border-ink/25 shadow-xs",
    ghost:
      "bg-transparent text-inherit hover:bg-black/5 dark:hover:bg-white/10 hover:opacity-80",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-1.5 min-h-[36px] rounded-md gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] rounded-md gap-2",
    lg: "text-base px-6 py-3.5 min-h-[48px] rounded-lg gap-2.5",
  };

  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps {
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonStyleProps {
  children: React.ReactNode;
  href: string;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </a>
  );
}

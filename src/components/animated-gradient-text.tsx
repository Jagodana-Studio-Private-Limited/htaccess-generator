"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        `bg-gradient-to-r from-${siteConfig.headerGradient.from} via-${siteConfig.headerGradient.to} to-${siteConfig.headerGradient.from} bg-[size:200%_auto] bg-clip-text text-transparent animate-text-gradient`,
        className
      )}
    >
      {children}
    </span>
  );
}

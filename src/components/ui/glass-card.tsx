"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] bg-white/72 backdrop-blur-xl border border-black/[0.08] p-6",
        "transition-all duration-400",
        hover &&
          "hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

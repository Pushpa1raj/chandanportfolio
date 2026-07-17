"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppleButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetic?: boolean;
}

export default function AppleButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: AppleButtonProps) {
  if (variant === "secondary") {
    const MotionComp = href ? motion.a : motion.button;
    return (
      <MotionComp
        href={href}
        onClick={onClick}
        className={cn(
          "relative inline-flex min-h-11 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
          "border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-white/[0.06] text-[#15171C] dark:text-white shadow-sm hover:border-black/[0.16] dark:hover:border-white/[0.2] hover:bg-white dark:hover:bg-white/[0.1]",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </MotionComp>
    );
  }

  const MotionComp = href ? motion.a : motion.button;

  return (
    <MotionComp
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex min-h-11 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold",
        "bg-transparent text-[#15171C] dark:text-white transition-all duration-300 hover:scale-105",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Glass shadow ring */}
      <div
        aria-hidden
        className={cn(
          "absolute top-0 left-0 z-0 h-full w-full rounded-full",
          "shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]",
          "dark:shadow-[0_0_6px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.4),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.2),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.2),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.8),inset_0_0_6px_6px_rgba(0,0,0,0.4),inset_0_0_2px_2px_rgba(0,0,0,0.2),0_0_12px_rgba(0,0,0,0.5)]",
          "transition-all"
        )}
      />
      {/* Backdrop blur via SVG filter */}
      <div
        aria-hidden
        className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#liquid-glass-filter")' }}
      />
      {/* Content */}
      <span className="pointer-events-none z-10">{children}</span>
      <LiquidGlassFilter />
    </MotionComp>
  );
}

function LiquidGlassFilter() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur
            in="turbulence"
            stdDeviation="2"
            result="blurredNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur
            in="displaced"
            stdDeviation="4"
            result="finalBlur"
          />
          <feComposite
            in="finalBlur"
            in2="finalBlur"
            operator="over"
          />
        </filter>
      </defs>
    </svg>
  );
}

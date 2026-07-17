"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LiquidGlassLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function LiquidGlassLink({
  children,
  href,
  onClick,
  className,
  target,
  rel,
}: LiquidGlassLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={cn(
        "relative inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold",
        "bg-transparent text-[#15171C] dark:text-white transition-all duration-300 hover:scale-105",
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
        style={{ backdropFilter: 'url("#liquid-glass-filter-link")' }}
      />
      {/* Content */}
      <span className="pointer-events-none z-10">{children}</span>
      <LiquidGlassFilterLink />
    </motion.a>
  );
}

function LiquidGlassFilterLink() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter
          id="liquid-glass-filter-link"
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
            seed="2"
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
            scale="60"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur
            in="displaced"
            stdDeviation="3"
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

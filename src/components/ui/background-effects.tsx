"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    // Gradient animation is handled via CSS keyframes — no JS needed
  }, [prefersReducedMotion]);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Blob 1 */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,113,227,0.4) 0%, transparent 70%)",
          animation: prefersReducedMotion
            ? "none"
            : "gradient-shift 20s ease-in-out infinite",
        }}
      />
      {/* Blob 2 */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, rgba(175,82,222,0.3) 0%, transparent 70%)",
          animation: prefersReducedMotion
            ? "none"
            : "gradient-shift 25s ease-in-out infinite reverse",
        }}
      />
      {/* Blob 3 */}
      <div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(circle, rgba(52,199,89,0.3) 0%, transparent 70%)",
          animation: prefersReducedMotion
            ? "none"
            : "gradient-shift 22s ease-in-out infinite 5s",
        }}
      />
    </div>
  );
}

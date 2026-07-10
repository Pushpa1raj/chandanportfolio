"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { Brain } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/use-media-query";
import AppleButton from "@/components/ui/apple-button";

const ORBIT_ICONS = [
  { Icon: FaReact, name: "React", color: "#61DAFB", section: "skills" },
  { Icon: FaGithub, name: "GitHub", color: "#1D1D1F", section: "projects" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", section: "skills" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933", section: "skills" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248", section: "skills" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000", section: "skills" },
  { Icon: FaFigma, name: "Figma", color: "#F24E1E", section: "skills" },
  { Icon: Brain, name: "AI", color: "#FF2D55", section: "skills" },
];

export default function HeroSection() {
  const [phase, setPhase] = useState<"hidden" | "portrait" | "icons" | "orbit" | "text" | "complete">("hidden");
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const mouse = useMousePosition();
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const orbitRef = useRef<HTMLDivElement>(null);
  const breatheRef = useRef(0);

  // Cinematic sequence timing
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setPhase("portrait"), 200));
    timers.push(setTimeout(() => setPhase("icons"), 600));
    timers.push(setTimeout(() => setPhase("orbit"), 1200));
    timers.push(setTimeout(() => setPhase("text"), 1600));
    timers.push(setTimeout(() => setPhase("complete"), 2200));

    return () => timers.forEach(clearTimeout);
  }, []);

  // Orbit breathing effect
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      breatheRef.current = breatheRef.current === 0 ? 1 : 0;
    }, 4000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Scroll lock during loading
  useEffect(() => {
    if (phase !== "complete") {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => document.body.classList.remove("scroll-locked");
  }, [phase]);

  // Mouse tilt (max 6°)
  const tiltX = isMobile || prefersReducedMotion ? 0 : mouse.normalizedY * -6;
  const tiltY = isMobile || prefersReducedMotion ? 0 : mouse.normalizedX * 6;

  const orbitRadius = isMobile ? 120 : 180;

  const getIconPosition = useCallback(
    (index: number) => {
      const angle = (index / ORBIT_ICONS.length) * Math.PI * 2 - Math.PI / 2;
      return {
        x: Math.cos(angle) * orbitRadius,
        y: Math.sin(angle) * orbitRadius,
      };
    },
    [orbitRadius]
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Orbit Container */}
      <div
        className="relative flex items-center justify-center mb-12"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          ref={orbitRef}
          className="relative flex items-center justify-center"
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Portrait */}
          <motion.div
            className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center shadow-xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              phase !== "hidden"
                ? { opacity: 1, scale: 1 }
                : {}
            }
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Placeholder portrait — replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-white/80 select-none">
                CK
              </span>
            </div>
          </motion.div>

          {/* Orbit Ring (visual guide) */}
          <motion.div
            className="absolute rounded-full border border-black/[0.04]"
            style={{
              width: orbitRadius * 2 + 40,
              height: orbitRadius * 2 + 40,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              phase === "orbit" || phase === "text" || phase === "complete"
                ? { opacity: 1, scale: 1 }
                : {}
            }
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Orbiting Icons */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation:
                !prefersReducedMotion &&
                (phase === "orbit" || phase === "text" || phase === "complete")
                  ? "orbit-rotate 15s linear infinite, orbit-breathe 8s ease-in-out infinite"
                  : "none",
            }}
          >
            {ORBIT_ICONS.map((item, i) => {
              const pos = getIconPosition(i);
              const isHovered = hoveredIcon === i;
              const hasHover = hoveredIcon !== null;

              return (
                <motion.div
                  key={item.name}
                  className="absolute cursor-pointer"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={
                    phase === "icons" ||
                    phase === "orbit" ||
                    phase === "text" ||
                    phase === "complete"
                      ? {
                          opacity: hasHover && !isHovered ? 0.3 : 1,
                          x: pos.x - 20,
                          y: pos.y - 20,
                          scale: isHovered ? 1.25 : 1,
                        }
                      : {}
                  }
                  transition={{
                    opacity: { duration: 0.3 },
                    x: { duration: 0.6, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
                    y: { duration: 0.6, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
                    scale: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  onMouseEnter={() => setHoveredIcon(i)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <div
                    className="flex flex-col items-center"
                    style={{
                      // Counter-rotate to keep icons upright
                      animation:
                        !prefersReducedMotion &&
                        (phase === "orbit" || phase === "text" || phase === "complete")
                          ? "orbit-rotate 15s linear infinite reverse"
                          : "none",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-md transition-shadow duration-300"
                      style={{
                        boxShadow: isHovered
                          ? `0 0 20px 4px ${item.color}30, 0 4px 12px rgba(0,0,0,0.1)`
                          : "0 2px 8px rgba(0,0,0,0.08)",
                        filter: hasHover && !isHovered ? "blur(1px)" : "none",
                      }}
                    >
                      <item.Icon
                        size={20}
                        color={item.color}
                      />
                    </div>
                    {/* Tooltip */}
                    <motion.span
                      className="absolute -bottom-6 text-xs font-medium text-[#6E6E73] whitespace-nowrap"
                      initial={{ opacity: 0, y: -4 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          className="text-lg md:text-xl text-[#6E6E73] mb-3 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={
            phase === "text" || phase === "complete"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="text-hero mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={
            phase === "text" || phase === "complete"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Chandan Kumar.
        </motion.h1>

        <motion.p
          className="text-body text-lg md:text-xl max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={
            phase === "text" || phase === "complete"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Building thoughtful digital experiences with code and creativity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={phase === "complete" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AppleButton href="#projects">View Projects</AppleButton>
          <AppleButton variant="secondary" href="/resume.pdf">
            Resume
          </AppleButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={phase === "complete" ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-black/10 flex items-start justify-center p-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-black/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

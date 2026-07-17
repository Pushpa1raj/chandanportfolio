"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, FileText, MapPin, Sparkles } from "lucide-react";
import { FaFigma, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import AppleButton from "@/components/ui/apple-button";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/use-media-query";
import { useMousePosition } from "@/hooks/use-mouse-position";
import profileData from "@/data/profile.json";

const ORBIT_ICONS = [
  { Icon: FaReact, name: "React", color: "#11A8CD" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#15171C", darkColor: "#ffffff" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { Icon: SiMongodb, name: "MongoDB", color: "#008F6B" },
  { Icon: Brain, name: "AI", color: "#E34C7B" },
  { Icon: FaFigma, name: "Figma", color: "#F06D4F" },
  { Icon: FaGithub, name: "GitHub", color: "#15171C", darkColor: "#ffffff" },
];

const heroStats = [
  { value: "3+", label: "Flagship builds" },
  { value: "6", label: "Skill domains" },
  { value: "2026+", label: "Open to internships" },
];

export default function HeroSection() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const mouse = useMousePosition();
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  const tiltX = isMobile || prefersReducedMotion ? 0 : mouse.normalizedY * -4;
  const tiltY = isMobile || prefersReducedMotion ? 0 : mouse.normalizedX * 4;
  const orbitRadius = isMobile ? 104 : 146;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-24 md:pt-28"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-white/[0.06] px-4 py-2 text-sm font-medium text-[#445063] dark:text-[#a1a1aa] shadow-sm backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-[#008F6B]" />
            Available for projects and internships
          </div>

          <h1 className="text-hero max-w-4xl">
            Chandan Kumar builds web, AI, and IoT experiences.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5E6673] dark:text-[#a1a1aa]">
            {profileData.title} at {profileData.education.institution}, focused
            on polished interfaces, AI workflows, and connected systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-[#5E6673] dark:text-[#a1a1aa]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/[0.06] px-3 py-2 shadow-sm ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
              <MapPin size={15} />
              {profileData.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/[0.06] px-3 py-2 shadow-sm ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
              <Sparkles size={15} />
              {profileData.education.degree} {profileData.education.branch}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AppleButton href="#projects">
              View Projects
              <ArrowRight size={16} />
            </AppleButton>
            <AppleButton variant="secondary" href="/resume.pdf">
              <FileText size={16} />
              Resume
            </AppleButton>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-3 divide-x divide-black/[0.08] dark:divide-white/[0.08] overflow-hidden rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/72 dark:bg-white/[0.04] shadow-sm backdrop-blur-xl">
            {heroStats.map((stat) => (
              <div key={stat.label} className="p-4 md:p-5">
                <p className="text-2xl font-bold leading-none text-[#15171C] dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium leading-5 text-[#5E6673] dark:text-[#a1a1aa]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: "transform 160ms ease-out",
          }}
        >
          <div className="absolute inset-0 rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/58 dark:bg-white/[0.04] shadow-[0_24px_80px_rgba(16,24,40,0.12)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl" />
          <div className="absolute inset-6 rounded-lg border border-dashed border-black/[0.08] dark:border-white/[0.06]" />
          <div className="absolute inset-14 rounded-lg border border-black/[0.06] dark:border-white/[0.05]" />

          <motion.div
            className="absolute inset-0"
            animate={prefersReducedMotion ? {} : { rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {ORBIT_ICONS.map((item, index) => {
              const angle = (index / ORBIT_ICONS.length) * Math.PI * 2 - Math.PI / 2;
              const x = Math.cos(angle) * orbitRadius;
              const y = Math.sin(angle) * orbitRadius;
              const isHovered = hoveredIcon === index;
              const hasHover = hoveredIcon !== null;

              return (
                <motion.div
                  key={item.name}
                  className="absolute left-1/2 top-1/2"
                  style={{ x: x - 22, y: y - 22 }}
                  animate={{ scale: isHovered ? 1.12 : 1, opacity: hasHover && !isHovered ? 0.42 : 1 }}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1a1a1f] shadow-[0_10px_24px_rgba(16,24,40,0.10)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
                    animate={prefersReducedMotion ? {} : { rotate: -360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  >
                    <item.Icon size={20} className={`text-[${item.color}] dark:text-[${item.darkColor || item.color}]`} style={{ color: item.color }} />
                    <span className="sr-only">{item.name}</span>
                    <motion.span
                      className="absolute top-12 whitespace-nowrap rounded-md bg-[#15171C] dark:bg-white px-2 py-1 text-xs font-medium text-white dark:text-[#15171C] shadow-sm"
                      initial={false}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -4 }}
                      transition={{ duration: 0.18 }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="relative z-10 w-[58%] rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1a1a1f] p-5 shadow-[0_18px_44px_rgba(16,24,40,0.14)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase text-[#5E6673] dark:text-[#a1a1aa]">
                  Portfolio OS
                </p>
                <p className="mt-1 text-xl font-bold leading-none text-[#15171C] dark:text-white">
                  CK
                </p>
              </div>
              <div className="rounded-full bg-[#E9EEFF] dark:bg-[#2458FF]/20 px-3 py-1 text-xs font-semibold text-[#2458FF]">
                Live
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["AI tools", "92%"],
                ["Web apps", "88%"],
                ["IoT ideas", "76%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-xs font-medium text-[#5E6673] dark:text-[#a1a1aa]">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/[0.06] dark:bg-white/[0.1]">
                    <div
                      className="h-full rounded-full bg-[#2458FF]"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

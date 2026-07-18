"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, FileText, MapPin, Sparkles, Trophy } from "lucide-react";
import { FaReact } from "react-icons/fa";
import AppleButton from "@/components/ui/apple-button";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import profileData from "@/data/profile.json";

const heroStats = [
  { value: "3+", label: "Flagship builds" },
  { value: "6", label: "Skill domains" },
  { value: "2026+", label: "Open to internships" },
];

/* Floating badges for hero image */
const FLOATING_BADGES_MOBILE = [
  {
    icon: <Trophy size={14} className="text-amber-500" />,
    label: "Winner",
    sublabel: "SkillDe Hackathon\n2025",
    position: "top-[8%] right-[4%]",
    delay: 0.3,
  },
  {
    icon: <Sparkles size={14} className="text-[#2458FF]" />,
    label: "AI",
    sublabel: "Enthusiast",
    position: "top-[28%] right-[0%]",
    delay: 0.45,
  },
  {
    icon: <Code2 size={14} className="text-[#2458FF]" />,
    label: "Full Stack",
    sublabel: "Developer",
    position: "left-[0%] top-[38%]",
    delay: 0.5,
  },
  {
    icon: <FaReact size={14} className="text-[#11A8CD]" />,
    label: "React",
    sublabel: "Developer",
    position: "left-[0%] bottom-[22%]",
    delay: 0.6,
  },
  {
    icon: <span className="text-[13px] font-bold text-[#15171C] dark:text-white">N</span>,
    label: "Next.js",
    sublabel: "Developer",
    position: "right-[4%] bottom-[14%]",
    delay: 0.7,
  },
];

const FLOATING_BADGES_DESKTOP = [
  {
    icon: <Trophy size={16} className="text-amber-500" />,
    label: "Winner",
    sublabel: "SkillDe Hackathon 2025",
    position: "top-[6%] right-[-4%]",
    delay: 0.3,
  },
  {
    icon: <Sparkles size={16} className="text-[#2458FF]" />,
    label: "AI",
    sublabel: "Enthusiast",
    position: "top-[30%] right-[-8%]",
    delay: 0.45,
  },
  {
    icon: <Code2 size={16} className="text-[#2458FF]" />,
    label: "Full Stack",
    sublabel: "Developer",
    position: "left-[-6%] top-[22%]",
    delay: 0.5,
  },
  {
    icon: <FaReact size={16} className="text-[#11A8CD]" />,
    label: "React",
    sublabel: "Developer",
    position: "left-[-6%] bottom-[28%]",
    delay: 0.6,
  },
  {
    icon: <span className="text-[15px] font-bold text-[#15171C] dark:text-white">N</span>,
    label: "Next.js",
    sublabel: "Developer",
    position: "right-[-4%] bottom-[16%]",
    delay: 0.7,
  },
];

export default function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-20 md:pt-28"
    >
      {/* ===== MOBILE HERO ===== */}
      <div className="md:hidden">
        <MobileHero prefersReducedMotion={prefersReducedMotion} />
      </div>

      {/* ===== DESKTOP HERO ===== */}
      <div className="mx-auto hidden min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 md:grid lg:grid-cols-[1.02fr_0.98fr]">
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

        {/* Desktop hero image with floating badges */}
        <motion.div
          className="relative mx-auto flex w-full max-w-[480px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Soft radial glow behind image */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[110%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(36,88,255,0.12) 0%, rgba(36,88,255,0.04) 45%, transparent 70%)",
            }}
          />

          {/* Decorative concentric arcs */}
          <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full border border-black/[0.04] dark:border-white/[0.04]" />
            <div className="absolute inset-[36px] rounded-full border border-dashed border-black/[0.05] dark:border-white/[0.05]" />
            <div className="absolute inset-[72px] rounded-full border border-black/[0.03] dark:border-white/[0.03]" />
          </div>

          {/* Person cutout */}
          <div className="relative mx-auto w-[85%]">
            <Image
              src="/Subject.png"
              alt="Chandan Kumar"
              width={600}
              height={750}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Floating skill badges */}
          {FLOATING_BADGES_DESKTOP.map((badge, i) => (
            <motion.div
              key={badge.label + badge.sublabel}
              className={`absolute z-20 ${badge.position}`}
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: badge.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                className="flex items-start gap-2.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white/90 dark:bg-[#1a1a1f]/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md"
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [0, i % 2 === 0 ? -8 : 8, 0],
                      }
                }
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F0F4FF] dark:bg-white/[0.08]">
                  {badge.icon}
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#15171C] dark:text-white">
                    {badge.label}
                  </p>
                  <p className="whitespace-pre-line text-[11px] font-medium text-[#5E6673] dark:text-[#a1a1aa]">
                    {badge.sublabel}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   MOBILE HERO — cutout image + floating badges layout
   ========================================================= */

function MobileHero({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center">
      {/* Image area with floating badges */}
      <motion.div
        className="relative mx-auto w-full max-w-[380px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Soft radial glow behind image */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[110%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(36,88,255,0.12) 0%, rgba(36,88,255,0.04) 45%, transparent 70%)",
          }}
        />

        {/* Decorative concentric arcs */}
        <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full border border-black/[0.04] dark:border-white/[0.04]" />
          <div className="absolute inset-[30px] rounded-full border border-dashed border-black/[0.05] dark:border-white/[0.05]" />
          <div className="absolute inset-[60px] rounded-full border border-black/[0.03] dark:border-white/[0.03]" />
        </div>

        {/* Person cutout */}
        <div className="relative mx-auto w-[88%]">
          <Image
            src="/Subject.png"
            alt="Chandan Kumar"
            width={600}
            height={750}
            priority
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* Floating skill badges */}
        {FLOATING_BADGES_MOBILE.map((badge, i) => (
          <motion.div
            key={badge.label + badge.sublabel}
            className={`absolute z-20 ${badge.position}`}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: badge.delay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.div
              className="flex items-start gap-2 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white/90 dark:bg-[#1a1a1f]/90 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, i % 2 === 0 ? -6 : 6, 0],
                    }
              }
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#F0F4FF] dark:bg-white/[0.08]">
                {badge.icon}
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-bold text-[#15171C] dark:text-white">
                  {badge.label}
                </p>
                <p className="whitespace-pre-line text-[10px] font-medium text-[#5E6673] dark:text-[#a1a1aa]">
                  {badge.sublabel}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Text content */}
      <motion.div
        className="mt-2 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#15171C] dark:text-white">
          Hi, I&apos;m
          <br />
          <span className="text-[2.25rem]">
            Chandan{" "}
            <span className="italic text-[#2458FF]">Kumar</span>
          </span>
        </h1>

        {/* Location */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium text-[#5E6673] dark:text-[#a1a1aa]">
          <MapPin size={14} />
          {profileData.location}
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex w-full flex-col gap-3 px-2">
          <AppleButton href="#projects" className="w-full justify-center">
            View Projects
            <ArrowRight size={16} />
          </AppleButton>
          <AppleButton variant="secondary" href="/resume.pdf" className="w-full justify-center">
            <FileText size={16} />
            Resume
          </AppleButton>
        </div>
      </motion.div>
    </div>
  );
}

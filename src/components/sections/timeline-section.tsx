"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Code2,
  Trophy,
  Rocket,
} from "lucide-react";
import timelineData from "@/data/timeline.json";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  Code2,
  Trophy,
  Rocket,
};

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 py-24 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="mb-3 text-sm font-bold uppercase text-[#2458FF]"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Progress
        </motion.p>
        <motion.h2
          className="text-headline mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Journey
        </motion.h2>
        <motion.p
          className="text-body mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Milestones that shaped the way I learn, build, and collaborate.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:left-8" />

          <div className="space-y-10">
            {timelineData.milestones.map((milestone, i) => (
              <TimelineItem key={milestone.id} milestone={milestone} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  milestone: (typeof timelineData.milestones)[0];
  index: number;
}

function TimelineItem({ milestone, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const IconComponent = iconMap[milestone.icon] || Code2;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Dot on timeline */}
      <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex items-start justify-center pt-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1a1a1f] shadow-sm">
          <IconComponent size={18} className="text-[#2458FF]" />
        </div>
      </div>

      {/* Content */}
      <div className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/82 dark:bg-white/[0.04] p-5 shadow-sm backdrop-blur-xl">
        <span className="text-xs font-bold uppercase text-[#2458FF]">
          {milestone.year}
        </span>
        <h3 className="mt-1 mb-2 text-lg font-bold text-[#15171C] dark:text-white">
          {milestone.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#5E6673] dark:text-[#a1a1aa]">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}

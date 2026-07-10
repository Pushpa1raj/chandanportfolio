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
    <section className="py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
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
          The milestones that have shaped my path so far.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-black/[0.06]" />

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
        <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center shadow-sm">
          <IconComponent size={18} className="text-[#6E6E73]" />
        </div>
      </div>

      {/* Content */}
      <div className="pb-2 pt-0.5">
        <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest">
          {milestone.year}
        </span>
        <h3 className="text-lg font-semibold text-[#1D1D1F] mt-1 mb-2">
          {milestone.title}
        </h3>
        <p className="text-body text-sm leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}

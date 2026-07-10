"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Palette,
  Brain,
  Wrench,
} from "lucide-react";
import skillsData from "@/data/skills.json";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Palette,
  Brain,
  Wrench,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-headline mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-body mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and tools I work with to build modern digital
          experiences.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.categories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: (typeof skillsData.categories)[0];
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[category.icon] || Monitor;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 transition-all duration-400 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 cursor-default"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-400"
        style={{
          background: isHovered ? `${category.color}12` : "#F5F5F7",
          color: isHovered ? category.color : "#6E6E73",
        }}
      >
        <IconComponent size={20} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-[#1D1D1F] mb-3">
        {category.title}
      </h3>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-black/[0.04] text-[#6E6E73] transition-colors duration-300 group-hover:bg-black/[0.08]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

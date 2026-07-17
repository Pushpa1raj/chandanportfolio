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
    <section id="skills" className="scroll-mt-24 px-6 py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <motion.p
              className="mb-3 text-sm font-bold uppercase text-[#008F6B]"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Capabilities
            </motion.p>
            <motion.h2
              className="text-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              A practical toolkit for shipping.
            </motion.h2>
          </div>
          <motion.p
            className="text-body max-w-xl md:text-right"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I pair frontend craft with backend fundamentals, data thinking, and
            motion that supports the product.
          </motion.p>
        </div>

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
      className="group relative rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/86 dark:bg-white/[0.04] p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(16,24,40,0.10)] dark:hover:shadow-[0_16px_42px_rgba(0,0,0,0.3)]"
    >
      {/* Icon */}
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-300"
        style={{
          background: isHovered ? `${category.color}12` : undefined,
          color: isHovered ? category.color : "#6E6E73",
        }}
      >
        <div className={`${!isHovered ? "dark:text-[#a1a1aa]" : ""}`}>
          <IconComponent size={20} />
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-base font-bold text-[#15171C] dark:text-white">
        {category.title}
      </h3>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-black/[0.04] dark:bg-white/[0.06] px-2.5 py-1.5 text-xs font-semibold text-[#5E6673] dark:text-[#a1a1aa] transition-colors duration-300 group-hover:bg-black/[0.07] dark:group-hover:bg-white/[0.1]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

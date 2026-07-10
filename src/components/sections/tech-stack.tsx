"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skillsData from "@/data/skills.json";

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-caption uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {skillsData.techStack.map((tech, i) => (
            <span key={tech} className="flex items-center">
              <span className="text-lg md:text-xl font-medium text-[#1D1D1F]/60 hover:text-[#1D1D1F] transition-colors duration-300 cursor-default">
                {tech}
              </span>
              {i < skillsData.techStack.length - 1 && (
                <span className="text-[#1D1D1F]/20 mx-2 text-lg">•</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

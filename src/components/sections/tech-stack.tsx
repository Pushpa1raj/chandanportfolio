"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skillsData from "@/data/skills.json";

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-14">
      <div className="mx-auto max-w-6xl rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/78 dark:bg-white/[0.04] p-5 shadow-sm backdrop-blur-xl md:p-6">
        <motion.p
          className="mb-4 text-sm font-bold uppercase text-[#2458FF]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Core stack
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {skillsData.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-[#F7F8FB] dark:bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[#15171C] dark:text-[#e4e4e7] transition-colors duration-300 hover:border-[#2458FF]/30 hover:bg-[#E9EEFF] dark:hover:bg-[#2458FF]/15"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

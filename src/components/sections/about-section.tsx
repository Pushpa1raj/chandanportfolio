"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, BookOpen, Calendar } from "lucide-react";
import profileData from "@/data/profile.json";

const infoCards = [
  {
    icon: MapPin,
    label: "Location",
    value: profileData.location,
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: profileData.education.institution,
  },
  {
    icon: BookOpen,
    label: "Branch",
    value: profileData.education.branch,
  },
  {
    icon: Calendar,
    label: "Year",
    value: profileData.education.year,
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:py-32" ref={ref}>
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <motion.p
            className="mb-3 text-sm font-bold uppercase text-[#F06D4F]"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.p>
          <motion.h2
            className="text-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Learning fast, building deliberately.
          </motion.h2>
        </div>

        <div>
          <motion.p
            className="mb-8 text-xl font-semibold leading-9 text-[#15171C] dark:text-[#e4e4e7] md:text-2xl md:leading-10"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {profileData.bio}
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/86 dark:bg-white/[0.04] p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(16,24,40,0.09)] dark:hover:shadow-[0_14px_38px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <card.icon
                size={18}
                className="mb-3 text-[#2458FF]"
              />
              <p className="mb-1 text-xs font-semibold uppercase text-[#5E6673] dark:text-[#a1a1aa]">
                {card.label}
              </p>
              <p className="text-base font-bold text-[#15171C] dark:text-white">
                {card.value}
              </p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

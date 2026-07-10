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
    <section id="about" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-headline mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        {/* Large Bio */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-[2.1rem] font-medium leading-relaxed text-[#1D1D1F] mb-16 max-w-4xl"
          style={{ letterSpacing: "-0.015em", lineHeight: "1.45" }}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {profileData.bio}
        </motion.p>

        {/* Info Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="rounded-2xl bg-white border border-black/[0.06] p-5 transition-all duration-400 hover:shadow-md hover:-translate-y-0.5"
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
                className="text-[#6E6E73] mb-2"
              />
              <p className="text-xs font-medium text-[#6E6E73] mb-1">
                {card.label}
              </p>
              <p className="text-sm font-semibold text-[#1D1D1F]">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

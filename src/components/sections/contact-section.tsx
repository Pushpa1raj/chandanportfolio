"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import AppleButton from "@/components/ui/apple-button";
import profileData from "@/data/profile.json";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${profileData.social.email}`,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: profileData.social.github,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: profileData.social.linkedin,
  },
  {
    icon: FileText,
    label: "Resume",
    href: profileData.social.resume,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-[#15171C] dark:bg-[#1a1a1f] p-8 text-center shadow-[0_24px_80px_rgba(16,24,40,0.18)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)] md:p-12">
        <motion.p
          className="mb-3 text-sm font-bold uppercase text-[#9DB2FF]"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="text-headline mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s build something
          <br />
          meaningful.
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg leading-8 text-white/70"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of something great.
        </motion.p>

        <motion.div
          className="mb-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AppleButton
            href={`mailto:${profileData.social.email}`}
            className="text-white"
          >
            <Mail size={16} />
            Get in Touch
          </AppleButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-white/70 transition-colors duration-300 hover:bg-white/[0.12] hover:text-white"
            >
              <link.icon size={18} />
              <span className="text-sm font-semibold">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

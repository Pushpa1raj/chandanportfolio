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
    <section id="contact" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-headline mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s build something
          <br />
          meaningful.
        </motion.h2>

        <motion.p
          className="text-body text-lg mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of something great.
        </motion.p>

        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AppleButton href={`mailto:${profileData.social.email}`}>
            <Mail size={16} />
            Get in Touch
          </AppleButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
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
              className="group flex flex-col items-center gap-2 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                <link.icon size={20} />
              </div>
              <span className="text-xs font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

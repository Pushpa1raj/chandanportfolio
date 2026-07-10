"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AppleButton from "@/components/ui/apple-button";

interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  color: string;
  link: string;
  github: string;
  image: string;
  featured: boolean;
}

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.a
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/72 backdrop-blur-xl border border-black/[0.06] text-sm font-medium text-[#1D1D1F] hover:bg-white transition-all duration-300 shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.a>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: project.color }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: project.color }}
              />
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            className="text-hero mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-body text-lg md:text-xl max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.longDescription}
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.link && (
              <AppleButton href={project.link}>
                <ExternalLink size={16} />
                View Live
              </AppleButton>
            )}
            {project.github && (
              <AppleButton variant="secondary" href={project.github}>
                <FaGithub size={16} />
                Source Code
              </AppleButton>
            )}
          </motion.div>

          {/* Project Image */}
          <motion.div
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-black/[0.06] shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="w-full h-64 md:h-96 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
              }}
            >
              <span
                className="text-8xl font-bold opacity-10"
                style={{ color: project.color }}
              >
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-title mb-6">Built With</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white border border-black/[0.06] text-[#1D1D1F]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

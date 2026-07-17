"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AppleButton from "@/components/ui/apple-button";
import ProjectVisual from "@/components/projects/project-visual";

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
    <main className="min-h-screen bg-[#F7F8FB]">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.a
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 text-sm font-semibold text-[#15171C] shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.a>
      </div>

      {/* Hero */}
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full bg-white/82 px-3 py-1.5 text-xs font-bold uppercase shadow-sm ring-1 ring-black/[0.08]"
                style={{ color: project.color }}
              >
                <span
                  className="h-2 w-2 rounded-full"
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
              className="mb-9 max-w-2xl text-lg leading-8 text-[#5E6673] md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.longDescription}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
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
          </div>

          <motion.div
            className="min-h-[360px]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <ProjectVisual project={project} />
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-6xl rounded-lg border border-black/[0.08] bg-white/86 p-6 shadow-sm backdrop-blur-xl md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <h2 className="text-title mb-5">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-black/[0.08] bg-[#F7F8FB] px-4 py-2 text-sm font-semibold text-[#15171C]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

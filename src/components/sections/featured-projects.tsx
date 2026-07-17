"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectsData from "@/data/projects.json";
import ProjectVisual from "@/components/projects/project-visual";
import LiquidGlassLink from "@/components/ui/liquid-glass-link";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <motion.p
              className="mb-3 text-sm font-bold uppercase text-[#2458FF]"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Selected work
            </motion.p>
            <motion.h2
              className="text-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Projects with product thinking baked in.
            </motion.h2>
          </div>
          <motion.p
            className="text-body max-w-xl md:text-right"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Focused builds across AI writing, developer productivity, and
            connected campus systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projectsData.projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <article className="group overflow-hidden rounded-lg border border-black/[0.08] bg-white/86 shadow-[0_16px_48px_rgba(16,24,40,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,24,40,0.14)]">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="order-2 flex flex-col justify-center p-7 md:p-10 lg:order-1">
            <div
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1.5 text-xs font-bold uppercase"
              style={{ color: project.color }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: project.color }}
              />
              {project.category}
            </div>
            <h3 className="text-title mb-4 text-[#15171C]">{project.title}</h3>
            <p className="text-body mb-7">{project.description}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs font-semibold text-[#5E6673]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <LiquidGlassLink
                href={`/projects/${project.slug}`}
                className="h-11 px-6 text-sm"
              >
                Case study
                <ArrowUpRight size={16} />
              </LiquidGlassLink>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#445063] transition-colors hover:text-[#15171C]"
                >
                  <FaGithub size={16} />
                  Source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2458FF] transition-colors hover:text-[#1746D8]"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="order-1 min-h-[320px] bg-black/[0.02] p-4 md:p-6 lg:order-2">
            <ProjectVisual project={project} />
          </div>
        </div>
      </article>
    </motion.div>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import projectsData from "@/data/projects.json";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-headline mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-body mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A selection of projects that showcase my approach to problem-solving
          and design.
        </motion.p>

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onClick={() => router.push(`/projects/${project.slug}`)}
        className="group relative rounded-3xl bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 cursor-pointer"
      >
        {/* Moving light reflection */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          }}
        />

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-6xl font-bold opacity-10"
                  style={{ color: project.color }}
                >
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: project.color }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: project.color }}
              />
              {project.category}
            </div>
            <h3 className="text-title mb-3">{project.title}</h3>
            <p className="text-body mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-black/[0.04] text-[#6E6E73]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
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
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0071E3] hover:text-[#0077ED] transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

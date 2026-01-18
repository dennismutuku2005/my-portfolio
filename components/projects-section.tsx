"use client"

import { motion } from "framer-motion"
import { siteData } from "@/lib/site-data"
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-primary font-mono text-sm mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>CASE STUDIES</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Featured <span className="text-glow italic">Engineering</span> Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              A selection of projects that demonstrate my ability to solve complex technical problems
              with elegant, user-centric solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block"
          >
            <a href={siteData.github} target="_blank" className="flex items-center gap-2 text-foreground font-mono text-xs hover:text-primary transition-colors border-b border-primary/20 pb-1">
              SEE_FULL_ARCHIVE_ON_GITHUB <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {siteData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative h-[500px] md:h-[600px] overflow-hidden rounded-[2.5rem] bg-secondary/30 border border-border/50 p-2 transition-all hover:border-primary/30"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-muted/10">
        {/* Project Image */}
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
          <img
            src={project.screenshot}
            alt={project.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:via-background/80 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary scale-90 -ml-2">
            <Code2 className="w-4 h-4" />
            <span className="text-[10px] font-mono tracking-widest uppercase">{project.techStack[0]}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">{project.title}</h3>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-8 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="text-[10px] md:text-[11px] font-mono px-4 py-1.5 bg-background/50 backdrop-blur-md rounded-full border border-border/50 text-foreground/80">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-2 group-hover:translate-y-0">
            <a href={project.live} target="_blank" className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 decoration-2 underline-offset-8">
              VIEW_SYSTEM <ExternalLink className="w-4 h-4" />
            </a>
            <a href={project.github} target="_blank" className="flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-foreground transition-colors">
              <Github className="w-4 h-4" /> ARCHIVE
            </a>
          </div>
        </div>

        {/* Floating ID badge */}
        <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-primary/20 bg-background/50 backdrop-blur-xl flex items-center justify-center text-primary font-mono text-xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  )
}

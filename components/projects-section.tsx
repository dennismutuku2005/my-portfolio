"use client"

import { ScrollWrapper } from "./scroll-wrapper"
import { FlipProjectCard } from "./flip-project-card"
import { siteData } from "@/lib/site-data"

export function ProjectsSection() {
  const projectsWithImages = siteData.projects.map((project, index) => ({
    ...project,
    screenshot:
      [
        "/futuristic-ai-dashboard-dark-theme-blue-neon.jpg",
        "/modern-cms-interface-dark-blue-theme.jpg",
        "/futuristic-ecommerce-platform-dark-cyber-theme.jpg",
        "/chat-application-dark-theme-neon-blue-interface.jpg",
      ][index] || project.screenshot,
  }))

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">PROJECTS</h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground mb-8">{"// Click cards to flip and reveal details"}</p>
        </ScrollWrapper>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {projectsWithImages.map((project, index) => (
            <ScrollWrapper key={project.id}>
              <FlipProjectCard project={project} index={index} />
            </ScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

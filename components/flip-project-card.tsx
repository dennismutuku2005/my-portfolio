"use client"

import type React from "react"

import { useState, useRef } from "react"
import { GithubIcon, ExternalLinkIcon, ChevronDownIcon } from "./icons"
import { techIconMap } from "./tech-icons"

interface Project {
  id: string
  title: string
  description: string
  screenshot: string
  techStack: string[]
  github: string
  live: string
}

export function FlipProjectCard({ project, index }: { project: Project; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped) {
      setIsExpanded(false)
    }
  }

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="perspective-1000">
      <div
        ref={cardRef}
        onClick={handleClick}
        className={`
          relative cursor-pointer transition-all duration-700 transform-style-3d
          ${isFlipped ? "rotate-y-180" : ""}
        `}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="relative bg-card border border-border overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.screenshot || "/placeholder.svg"}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/40" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div className="w-4 h-px bg-primary" />
              </div>
              <h3 className="font-mono text-xl text-foreground">{project.title}</h3>
            </div>

            {/* Flip indicator */}
            <div className="absolute top-4 right-4 text-primary animate-pulse">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 12l6-6M3 12l6 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 bg-card border border-primary overflow-hidden backface-hidden rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-lg text-primary">{project.title}</h3>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-border"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-border"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="font-sans text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

            {/* Tech stack with real icons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => {
                const IconComponent = techIconMap[tech]
                return (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs border border-border"
                  >
                    {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                    {tech}
                  </span>
                )
              })}
            </div>

            {/* Liquid dropdown button */}
            <button
              onClick={handleExpand}
              className="group flex items-center justify-center gap-2 w-full py-2 bg-secondary hover:bg-primary/20 transition-all border border-border text-sm font-mono"
            >
              <span>MORE_INFO</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Liquid expand effect */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-out
          ${isExpanded && isFlipped ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{
          background: "linear-gradient(180deg, var(--primary) 0%, transparent 100%)",
          clipPath: isExpanded ? "ellipse(100% 100% at 50% 0%)" : "ellipse(100% 0% at 50% 0%)",
        }}
      >
        <div className="p-4 bg-card border-x border-b border-primary">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-xs text-primary">SYSTEM_STATUS: OPERATIONAL</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-muted-foreground">COMMITS:</span>
                <span className="text-foreground ml-2">247</span>
              </div>
              <div>
                <span className="text-muted-foreground">STARS:</span>
                <span className="text-foreground ml-2">89</span>
              </div>
              <div>
                <span className="text-muted-foreground">FORKS:</span>
                <span className="text-foreground ml-2">23</span>
              </div>
              <div>
                <span className="text-muted-foreground">ISSUES:</span>
                <span className="text-foreground ml-2">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

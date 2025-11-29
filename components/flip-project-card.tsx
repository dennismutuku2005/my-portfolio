"use client"

import type React from "react"
import { useState, useRef } from "react"
import { GithubIcon, ExternalLinkIcon, ChevronDownIcon, MailIcon } from "./icons"
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
  const [isHovered, setIsHovered] = useState(false)
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateY = ((x - centerX) / centerX) * 5
    const rotateX = ((centerY - y) / centerY) * 5
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    }
  }

  return (
    <div className="perspective-1000 w-full group">
      {/* 3D Card Container */}
      <div
        ref={cardRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-96 cursor-pointer transition-all duration-300 transform-style-3d"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side - FULL SCREENSHOT */}
        <div
          className="absolute inset-0 w-full h-full bg-card border border-border overflow-hidden rounded-lg shadow-lg transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Glow effect on hover */}
          <div className={`absolute inset-0 rounded-lg from-primary/10 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* FULL SCREENSHOT - Takes entire card */}
          <div className="relative w-full h-full bg-gray-200 overflow-hidden">
            <img
              src={project.screenshot || "/placeholder.svg"}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/20" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 from-black/90 via-black/50 to-transparent p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-4 h-px bg-primary" />
                <h3 className="font-mono text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="font-sans text-sm text-gray-300 line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Flip Hint - Top Right */}
            <div className={`absolute top-4 right-4 transition-all duration-300 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
            }`}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/30">
                <span className="font-mono text-xs text-primary">CLICK_TO_FLIP</span>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 12l4-4M3 12l4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - FULL HEIGHT */}
        <div
          className="absolute inset-0 w-full h-full from-card to-card/95 border border-primary overflow-hidden rounded-lg shadow-lg transition-all duration-300"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Back side glow */}
          <div className={`absolute inset-0 rounded-lg from-primary/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          <div className="p-6 h-full flex flex-col relative">
            {/* Header with Links */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-4 h-px bg-primary" />
                <h3 className="font-mono text-lg font-semibold text-primary">
                  {project.title}
                </h3>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-border rounded transform hover:scale-110"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-border rounded transform hover:scale-110"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-muted-foreground mb-4 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">TECH_STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => {
                  const IconComponent = techIconMap[tech]
                  return (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground font-mono text-xs border border-border rounded-lg transform hover:scale-105 transition-transform"
                    >
                      {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Expand Button */}
            <button
              onClick={handleExpand}
              className="flex items-center justify-center gap-2 w-full py-3 bg-secondary hover:bg-primary/20 transition-all border border-border rounded-lg text-sm font-mono transform hover:scale-105 group/button"
            >
              <span>VIEW_DETAILS</span>
              <ChevronDownIcon 
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                } group-hover/button:translate-y-0.5`} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`
          mt-3 overflow-hidden transition-all duration-500 ease-in-out
          ${isExpanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-secondary border border-border rounded-lg p-4">
          <h4 className="font-mono text-sm font-semibold text-primary mb-2">
            PROJECT_DETAILS
          </h4>
          <p className="font-sans text-sm text-muted-foreground">
            Additional project information, features, and implementation details would appear here.
            This section expands smoothly when the VIEW_DETAILS button is clicked.
          </p>
        </div>
      </div>

      {/* Private Projects Notice */}
      <div className="mt-4 p-4 bg-secondary/50 border border-border rounded-lg text-center backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <MailIcon className="w-4 h-4" />
          <span className="font-mono text-xs">
            My projects are private. You can contact me for more info.
          </span>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { ScrollWrapper } from "./scroll-wrapper"
import { siteData } from "@/lib/site-data"

export function AboutSection() {
  const [activeEdu, setActiveEdu] = useState(0)

  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Animated binary background */}
      <BinaryBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">
              ABOUT_ME
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
        </ScrollWrapper>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Bio with Tech Stats */}
          <ScrollWrapper className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/20 p-6 md:p-8 rounded-lg shadow-2xl">
                <div className="space-y-6">
                  <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
                    {siteData.bio}
                  </p>
                  
                  {/* Interactive Tech Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    <TechStat label="CODE_COMMITS" value="2.4K+" />
                    <TechStat label="PROJECTS_SHIPPED" value="47+" />
                    <TechStat label="COFFEE_CUPS" value="∞" />
                    <TechStat label="BUGS_SQUASHED" value="1.2K+" />
                  </div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center gap-3 mt-6 p-4 bg-secondary/50 border border-border rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-75" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150" />
                </div>
                <span className="font-mono text-xs md:text-sm text-muted-foreground">
                  STATUS: FOCUSED_ON_CURRENT_MISSION
                </span>
              </div>
            </div>
          </ScrollWrapper>

          {/* Right Column - Interactive Timeline */}
          <ScrollWrapper className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-sm border border-primary/20 p-6 md:p-8 rounded-lg shadow-2xl">
                <h3 className="font-mono text-base md:text-lg text-primary tracking-wider mb-8">
                  {"// EDUCATION_TIMELINE"}
                </h3>

                {/* Timeline Navigation */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {siteData.education.map((edu, index) => (
                    <button
                      key={edu.id}
                      onClick={() => setActiveEdu(index)}
                      className={`font-mono text-xs px-3 py-1 rounded border transition-all ${
                        activeEdu === index
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
                      }`}
                    >
                      {edu.year}
                    </button>
                  ))}
                </div>

                {/* Animated Timeline Content */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  {siteData.education.map((edu, index) => (
                    <div
                      key={edu.id}
                      className={`relative transition-all duration-500 ${
                        activeEdu === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-40 -translate-x-2 pointer-events-none"
                      }`}
                    >
                      <div className="absolute -left-[33px] top-0 w-6 h-6 bg-background border-4 border-primary rounded-full" />
                      
                      <div className="bg-secondary/50 border border-border p-6 rounded-lg hover:border-primary/50 transition-colors mb-6">
                        <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                          {edu.year}
                        </span>
                        <h4 className="font-sans text-lg md:text-xl text-foreground mt-3 mb-2">
                          {edu.degree}
                        </h4>
                        <p className="font-sans text-sm text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                        <p className="font-sans text-sm text-muted-foreground mt-3 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollWrapper>
        </div>
      </div>
    </section>
  )
}

function BinaryBackground() {
  const [binaryStream, setBinaryStream] = useState<string[]>([])

  useEffect(() => {
    const stream = Array.from({ length: 50 }, () => 
      Math.random() > 0.5 ? "1" : "0"
    )
    setBinaryStream(stream)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="animate-float-slow">
          {binaryStream.map((bit, index) => (
            <span
              key={index}
              className="font-mono text-xs text-foreground mx-1 opacity-70"
              style={{
                animationDelay: `${index * 0.1}s`,
                position: 'absolute',
                left: `${(index * 3) % 100}%`,
                top: `${(index * 2) % 100}%`,
              }}
            >
              {bit}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function TechStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-3 bg-secondary/50 border border-border rounded-lg hover:border-primary/30 transition-colors">
      <div className="font-mono text-2xl md:text-3xl font-bold text-primary mb-1">
        {value}
      </div>
      <div className="font-mono text-xs text-muted-foreground tracking-wide">
        {label}
      </div>
    </div>
  )
}
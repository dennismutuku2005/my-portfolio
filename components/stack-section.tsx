"use client"

import { ScrollWrapper } from "./scroll-wrapper"
import { siteData } from "@/lib/site-data"
import { techIconMap } from "./tech-icons"

export function StackSection() {
  const duplicatedStack = [...siteData.stack, ...siteData.stack]

  return (
    <section id="stack" className="relative py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">TECH_STACK</h2>
          </div>
        </ScrollWrapper>

        <ScrollWrapper>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4 mb-12 md:mb-16">
            {siteData.stack.map((tech) => {
              const IconComponent = techIconMap[tech.name]
              return (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center p-3 md:p-4 bg-card border border-border hover:border-primary transition-all"
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors mb-2">
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                    ) : (
                      <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-mono text-xs">
                        {tech.name.slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <span className="font-mono text-[10px] md:text-xs text-foreground text-center">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </ScrollWrapper>
      </div>

      <div className="relative overflow-hidden py-6 md:py-8 border-y border-border">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {duplicatedStack.map((tech, index) => {
            const IconComponent = techIconMap[tech.name]
            return (
              <div key={`${tech.name}-${index}`} className="flex items-center gap-3 mx-6 md:mx-8">
                {IconComponent ? (
                  <IconComponent className="w-5 h-5 text-primary" />
                ) : (
                  <span className="w-2 h-2 bg-primary rounded-full" />
                )}
                <span className="font-mono text-sm md:text-lg text-primary tracking-wider">{tech.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

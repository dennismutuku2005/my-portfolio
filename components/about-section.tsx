"use client"

import { ScrollWrapper } from "./scroll-wrapper"
import { siteData } from "@/lib/site-data"

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">ABOUT_ME</h2>
          </div>
        </ScrollWrapper>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <ScrollWrapper className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">{siteData.bio}</p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-xs md:text-sm text-muted-foreground">
                  STATUS: AVAILABLE FOR PROJECTS
                </span>
              </div>
            </div>
          </ScrollWrapper>

          <ScrollWrapper className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="font-mono text-base md:text-lg text-primary tracking-wider mb-6">
                {"// EDUCATION_TIMELINE"}
              </h3>

              <div className="relative pl-6 md:pl-8 border-l border-border">
                {siteData.education.map((edu) => (
                  <div key={edu.id} className="relative pb-6 md:pb-8 last:pb-0">
                    <div className="absolute -left-[21px] md:-left-[25px] top-0 w-3 h-3 md:w-4 md:h-4 bg-background border-2 border-primary rounded-full" />

                    <div className="bg-card border border-border p-4 hover:border-primary transition-colors">
                      <span className="font-mono text-xs text-primary">{edu.year}</span>
                      <h4 className="font-sans text-base md:text-lg text-foreground mt-1">{edu.degree}</h4>
                      <p className="font-sans text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="font-sans text-sm text-muted-foreground mt-2">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollWrapper>
        </div>
      </div>
    </section>
  )
}

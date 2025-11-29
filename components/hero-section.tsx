"use client"

import { GlitchText } from "./glitch-text"
import { ScrollWrapper } from "./scroll-wrapper"
import { siteData } from "@/lib/site-data"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollWrapper rotateAmount={8}>
          <div className="mb-8">
            <div className="relative inline-block">
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto"
                style={{
                  boxShadow: "0 0 30px var(--primary), 0 0 60px rgba(0, 191, 255, 0.3)",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
              >
                <img
                  src="/mydp.jpeg"
                  alt={`Portrait of ${siteData.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse" />
            </div>
          </div>

          <div className="mb-4">
            <span className="font-mono text-xs text-primary tracking-widest">{"// SYSTEM INITIALIZED"}</span>
          </div>

          <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <GlitchText text={siteData.name} className="text-foreground" />
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto tracking-wide px-4">
            {siteData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:bg-accent transition-all border border-primary hover:border-accent"
            >
              VIEW_PROJECTS
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">{"->"}</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-transparent text-primary font-mono text-sm tracking-wider border border-primary hover:bg-primary/10 transition-all"
            >
              INIT_CONTACT
            </a>
          </div>
        </ScrollWrapper>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

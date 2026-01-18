"use client"

import { motion } from "framer-motion"
import { siteData } from "@/lib/site-data"
import { ChevronRight, Github, Mail, Cpu, Globe2, Sparkles, Zap } from "lucide-react"
import { techIconMap } from "./tech-icons"

const techLogos = [
  "Python", "Rust", "Tauri", "Go", "React", "Next.js", "TypeScript", "Node.js", "Docker", "AWS", "Flutter"
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-48 pb-20 overflow-hidden bg-background">

      {/* 🌌 High-End Parallax Tech Rain (Background) */}
      <div className="absolute inset-0 z-0 flex justify-between px-[5%] pointer-events-none opacity-20">
        {[1, 2, 3, 4].map((col) => (
          <motion.div
            key={col}
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 15 + col * 5, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-24 h-[200%]"
          >
            {techLogos.concat(techLogos).map((tech, i) => {
              const Icon = techIconMap[tech]
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="p-4 rounded-full border border-primary/20 bg-secondary/10">
                    {Icon && <Icon className="w-6 h-6 text-primary/40" />}
                  </div>
                </div>
              )
            })}
          </motion.div>
        ))}
      </div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] mix-blend-screen animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-10 leading-[0.8] text-foreground"
          >
            Digital <br />
            <span className="text-glow italic text-primary">Architect.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl leading-relaxed font-light"
          >
            Crafting scalable systems and AI-integrated platforms at the intersection of logic and scale.
            Transforming complex problems into high-performance digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-24"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,191,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore archive
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            <div className="flex items-center gap-6">
              <a href={siteData.github} target="_blank" className="p-4 rounded-2xl bg-secondary hover:bg-primary transition-all text-muted-foreground hover:text-primary-foreground border border-border/50">
                <Github className="w-7 h-7" />
              </a>
              <a href={`mailto:${siteData.contactEmail}`} className="p-4 rounded-2xl bg-secondary hover:bg-primary transition-all text-muted-foreground hover:text-primary-foreground border border-border/50">
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </motion.div>

          {/* Integrated High-End Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-12 w-full max-w-5xl backdrop-blur-sm">
            <StatItem label="Systems_Uptime" value="100%" />
            <StatItem label="Response_Time" value="<12ms" />
            <StatItem label="Network_Sync" value="ACTIVE" />
            <StatItem label="Availability" value="HIRE_ME" />
          </div>
        </div>
      </div>

      {/* Static Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
    </section>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-default">
      <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.3em] transition-all group-hover:text-primary group-hover:tracking-[0.5em]">{label}</span>
      <span className="text-2xl font-black transition-transform group-hover:scale-110">{value}</span>
    </div>
  )
}

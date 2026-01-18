"use client"

import { motion } from "framer-motion"
import { siteData } from "@/lib/site-data"
import { Sparkles, GraduationCap, Briefcase, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Section Title - Left Floating */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>The Narrative</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                Driven by <span className="text-glow italic">Curiosity</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-12">
                I don't just write code. I architect experiences that feel intuitive, look stunning, and scale seamlessly.
              </p>

              <div className="space-y-4">
                <AboutCard icon={GraduationCap} title="Education" desc="Currently at Technical University of Kenya" color="text-primary" />
                <AboutCard icon={Briefcase} title="Experience" desc="Full-Stack Engineering & AI Systems" color="text-accent" />
                <AboutCard icon={Heart} title="Passion" desc="Advancing the African Tech Ecosystem" color="text-red-400" />
              </div>
            </motion.div>
          </div>

          {/* Main Content Area - Right Bento Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Big Bio Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:col-span-2 p-8 md:p-12 rounded-[2.5rem] bg-secondary/30 border border-border/50 backdrop-blur-sm"
              >
                <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8 italic">
                  "{siteData.bio}"
                </p>
                <div className="flex flex-wrap gap-4 pt-8 border-t border-border/50">
                  <div className="px-4 py-2 bg-background/50 rounded-xl border border-border text-[10px] font-mono text-muted-foreground">EST: 2023</div>
                  <div className="px-4 py-2 bg-background/50 rounded-xl border border-border text-[10px] font-mono text-muted-foreground">LOC: GLOBAL</div>
                  <div className="px-4 py-2 bg-background/50 rounded-xl border border-border text-[10px] font-mono text-muted-foreground">LANG: EN_SW</div>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <StatCard value="50+" label="Projects Delivered" delay={0.1} />
              <StatCard value="24/7" label="System Monitoring" delay={0.2} />

              {/* Timeline Mini-view */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="md:col-span-2 p-8 rounded-[2.5rem] bg-card border border-border/50 overflow-hidden relative"
              >
                <h3 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-8 px-2 border-l-2 border-primary">Academic Milestone</h3>
                <div className="space-y-8">
                  {siteData.education.slice(0, 2).map((edu, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                        <div className="w-[1px] flex-1 bg-border/50 mt-2" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-muted-foreground mb-1 uppercase tracking-wider">{edu.year}</div>
                        <div className="text-xl font-bold group-hover:text-primary transition-colors">{edu.degree}</div>
                        <div className="text-sm text-muted-foreground font-medium">{edu.institution}</div>
                        <p className="text-xs text-muted-foreground/70 mt-2 max-w-md">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function AboutCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all group">
      <div className={`p-2 rounded-xl bg-background/50 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <div className="text-xs font-bold text-foreground">{title}</div>
        <div className="text-[10px] text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}

function StatCard({ value, label, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-8 rounded-[2.5rem] bg-background border border-border/50 flex flex-col justify-center items-center text-center group hover:border-primary/30 transition-all h-48 md:h-auto"
    >
      <div className="text-4xl md:text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">{value}</div>
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </motion.div>
  )
}
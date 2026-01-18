"use client"

import { motion } from "framer-motion"
import { siteData } from "@/lib/site-data"
import { techIconMap } from "./tech-icons"
import { Layers, HardDrive, Globe2, Cpu, Database, LayoutTemplate } from "lucide-react"

const categoryIcons: Record<string, any> = {
  frontend: LayoutTemplate,
  backend: HardDrive,
  language: Cpu,
  database: Database,
  devops: Globe2,
  cloud: Globe2,
  api: Layers
}

export function StackSection() {
  const categories = Array.from(new Set(siteData.stack.map(s => s.category)))

  return (
    <section id="stack" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4"
          >
            Professional Toolkit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            The <span className="text-glow underline decoration-primary/40 underline-offset-8">Arsenal</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = categoryIcons[category] || Layers
            const items = siteData.stack.filter(s => s.category === category)

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold capitalize tracking-tight">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {items.map(item => {
                    const TechIcon = techIconMap[item.name]
                    return (
                      <div key={item.name} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-xl border border-border/50 hover:bg-secondary transition-colors group/item">
                        {TechIcon && <TechIcon className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors" />}
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 border-b-2 border-r-2 border-primary" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Dynamic Marquee at bottom */}
      <div className="mt-24 border-y border-primary/10 py-10 bg-background/50 backdrop-blur-md overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 px-6"
        >
          {siteData.stack.concat(siteData.stack).map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-2xl font-black text-muted-foreground/20 hover:text-primary/50 transition-colors uppercase tracking-widest font-mono">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

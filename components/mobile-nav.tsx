"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, Rocket, Github } from "lucide-react"
import { siteData } from "@/lib/site-data"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
]

interface MobileNavProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl md:hidden flex flex-col"
        >
          <div className="flex items-center justify-between px-8 py-6 border-b border-border/50">
            <Link href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-black border border-primary/20">
                <img src="/logo.png" alt="M" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold tracking-tighter text-xl">Muuo<span className="text-primary">.</span>dev</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-2xl bg-secondary/50 border border-border/50 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-10 px-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black tracking-tighter hover:text-primary transition-colors uppercase"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="p-10 border-t border-border/50 flex flex-col gap-6 items-center">
            <div className="flex items-center gap-6">
              <a href={siteData.github} target="_blank" className="p-4 rounded-2xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary transition-all">
                <Github className="w-7 h-7" />
              </a>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest text-xs"
              >
                <Rocket className="w-4 h-4" />
                Hire Me
              </Link>
            </div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
              System Status: Active // v2.5
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
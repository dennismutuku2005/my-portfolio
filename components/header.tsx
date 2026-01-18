"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Menu } from "lucide-react"
import { siteData } from "@/lib/site-data"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(95%,1200px)]"
      >
        <div className="bg-background/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between h-10">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-black border border-primary/20 group-hover:rotate-[15deg] transition-all duration-300">
                <img src="/logo.png" alt="M" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold tracking-tighter text-xl hidden sm:block">Muuo<span className="text-primary">.</span>dev</span>
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-primary rounded-full group-hover:w-full transition-all"
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={siteData.github}
                target="_blank"
                className="hidden sm:flex p-2.5 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <Link
                href="#contact"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,191,255,0.2)]"
              >
                Hire Me
              </Link>
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="md:hidden p-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground transition-all active:scale-95"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
    </>
  )
}

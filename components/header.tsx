"use client"

import Link from "next/link"
import { GithubIcon, RocketIcon } from "./icons"
import { siteData } from "@/lib/site-data"

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#stack", label: "STACK" },
  { href: "#contact", label: "CONTACT" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="#home" className="font-mono text-lg font-bold text-primary">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/dev-room"
              className="hidden sm:flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded font-mono text-xs"
            >
              <RocketIcon className="w-4 h-4" />
              <span className="hidden lg:inline">DEV_ROOM</span>
            </Link>
            <Link
              href={siteData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

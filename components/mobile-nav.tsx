"use client"

import { useState } from "react"
import Link from "next/link"
import { CloseIcon, MenuIcon, RocketIcon } from "./icons"

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#stack", label: "STACK" },
  { href: "#contact", label: "CONTACT" },
  { href: "/dev-room", label: "DEV_ROOM", special: true },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Changed from left-3 to right-3 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-3 right-3 z-50 p-2 bg-card border border-border"
        aria-label="Open navigation menu"
      >
        <MenuIcon className="w-5 h-5 text-primary" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-foreground"
            aria-label="Close navigation menu"
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          <nav className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-xl tracking-wider transition-colors ${
                  item.special ? "text-primary flex items-center gap-2" : "text-foreground hover:text-primary"
                }`}
              >
                {item.special && <RocketIcon className="w-5 h-5" />}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
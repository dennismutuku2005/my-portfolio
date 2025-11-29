"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollWrapperProps {
  children: ReactNode
  className?: string
  rotateAmount?: number
}

export function ScrollWrapper({ children, className = "", rotateAmount = 5 }: ScrollWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distance = (elementCenter - viewportCenter) / viewportCenter

      const rotateX = distance * rotateAmount
      const scale = 1 - Math.abs(distance) * 0.05
      const opacity = 1 - Math.abs(distance) * 0.3

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) scale(${Math.max(scale, 0.9)})`
      element.style.opacity = String(Math.max(opacity, 0.7))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [rotateAmount])

  return (
    <div ref={ref} className={`transition-opacity duration-300 ${className}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  )
}

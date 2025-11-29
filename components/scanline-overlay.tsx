"use client"

import { useEffect, useState } from "react"

export function ScanlineOverlay() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setEnabled(!prefersReducedMotion)
  }, [])

  if (!enabled) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 191, 255, 0.02) 2px,
          rgba(0, 191, 255, 0.02) 4px
        )`,
      }}
      aria-hidden="true"
    />
  )
}

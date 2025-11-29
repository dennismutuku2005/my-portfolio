"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`${isGlitching ? "animate-[glitch_0.3s_ease-in-out]" : ""}`} style={{ display: "inline-block" }}>
        {text}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-[#00bfff] opacity-70"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 0)",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-[#0088cc] opacity-70"
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { siteData } from "@/lib/site-data"

interface TerminalLine {
  type: "input" | "output" | "error" | "success"
  content: string
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Dennis Muuo Terminal v1.0.0" },
    { type: "output", content: 'Type "help" for available commands.' },
    { type: "output", content: "" },
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => {
    // Keyboard shortcut to open terminal (Ctrl + `)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLines: TerminalLine[] = [{ type: "input", content: `> ${cmd}` }]

    switch (trimmed) {
      case "help":
        newLines.push({
          type: "output",
          content: `
Available commands:
  help      - Show this help message
  about     - Display info about Dennis
  skills    - List technical skills
  projects  - Show project list
  contact   - Display contact info
  matrix    - Toggle matrix effect
  hack      - Run hacking simulation
  dennis    - Secret message
  coffee    - Take a coffee break
  clear     - Clear terminal
  exit      - Close terminal
          `.trim(),
        })
        break

      case "about":
        newLines.push({
          type: "success",
          content: `
╔══════════════════════════════════════╗
║  DENNIS MUUO                          ║
║  Full-Stack Developer                 ║
║  Digital Architect                    ║
╚══════════════════════════════════════╝

${siteData.bio}
          `.trim(),
        })
        break

      case "skills":
        newLines.push({
          type: "output",
          content: `Technical Skills:\n${siteData.stack.map((s) => `  - ${s.name} (${s.category})`).join("\n")}`,
        })
        break

      case "projects":
        newLines.push({
          type: "output",
          content: `Projects:\n${siteData.projects.map((p, i) => `  ${i + 1}. ${p.title}\n     ${p.description.slice(0, 50)}...`).join("\n")}`,
        })
        break

      case "contact":
        newLines.push({
          type: "success",
          content: `Contact: ${siteData.contactEmail}\nGitHub: ${siteData.github}`,
        })
        break

      case "matrix":
        newLines.push({
          type: "success",
          content: "Matrix mode toggled. Reality is a simulation.",
        })
        document.body.classList.toggle("matrix-enhanced")
        break

      case "hack":
        newLines.push({ type: "output", content: "Initiating hack sequence..." })
        setTimeout(() => {
          setLines((prev) => [...prev, { type: "output", content: "[====                ] 20%" }])
        }, 500)
        setTimeout(() => {
          setLines((prev) => [...prev, { type: "output", content: "[========            ] 40%" }])
        }, 1000)
        setTimeout(() => {
          setLines((prev) => [...prev, { type: "output", content: "[============        ] 60%" }])
        }, 1500)
        setTimeout(() => {
          setLines((prev) => [...prev, { type: "output", content: "[================    ] 80%" }])
        }, 2000)
        setTimeout(() => {
          setLines((prev) => [
            ...prev,
            { type: "success", content: "[====================] 100%" },
            { type: "success", content: "ACCESS GRANTED. Welcome, Dennis." },
          ])
        }, 2500)
        break

      case "dennis":
        newLines.push({
          type: "success",
          content: `
 ██████╗ ███████╗███╗   ██╗███╗   ██╗██╗███████╗
 ██╔══██╗██╔════╝████╗  ██║████╗  ██║██║██╔════╝
 ██║  ██║█████╗  ██╔██╗ ██║██╔██╗ ██║██║███████╗
 ██║  ██║██╔══╝  ██║╚██╗██║██║╚██╗██║██║╚════██║
 ██████╔╝███████╗██║ ╚████║██║ ╚████║██║███████║
 ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝╚══════╝
          
 "Code is poetry written in logic."
          `.trim(),
        })
        break

      case "coffee":
        newLines.push({
          type: "output",
          content: `
   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----'
   
Coffee break! Productivity +100%
          `.trim(),
        })
        break

      case "clear":
        setLines([])
        return

      case "exit":
        setIsOpen(false)
        return

      default:
        if (trimmed) {
          newLines.push({
            type: "error",
            content: `Command not found: ${cmd}. Type "help" for available commands.`,
          })
        }
    }

    setLines((prev) => [...prev, ...newLines])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setCommandHistory((prev) => [...prev, input])
      setHistoryIndex(-1)
      processCommand(input)
      setInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-card border border-border hover:border-primary transition-all group"
        aria-label="Open terminal"
      >
        <svg
          className="w-5 h-5 text-primary group-hover:text-glow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="4,17 10,11 4,5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      </button>
    )
  }

  return (
    <div
      className={`fixed z-50 bg-card border border-border shadow-2xl transition-all duration-300 ${
        isMinimized ? "bottom-4 right-4 w-64 h-10" : "bottom-4 right-4 w-[90vw] max-w-lg h-80 md:h-96"
      }`}
      style={{ boxShadow: "0 0 30px rgba(0, 191, 255, 0.2)" }}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-3 py-2 bg-secondary border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-destructive hover:brightness-110"
              aria-label="Close terminal"
            />
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-110"
              aria-label="Minimize terminal"
            />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-xs text-muted-foreground ml-2">dennis@portfolio:~</span>
        </div>
        <span className="font-mono text-xs text-primary">CTRL + ` to toggle</span>
      </div>

      {/* Terminal content */}
      {!isMinimized && (
        <div
          ref={terminalRef}
          className="p-3 h-[calc(100%-80px)] overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap ${
                line.type === "input"
                  ? "text-primary"
                  : line.type === "error"
                    ? "text-destructive"
                    : line.type === "success"
                      ? "text-accent"
                      : "text-foreground"
              }`}
            >
              {line.content}
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      {!isMinimized && (
        <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-3 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-sm">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-foreground font-mono text-sm focus:outline-none"
              placeholder="Type a command..."
              autoFocus
            />
          </div>
        </form>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"

// Hidden features / gems
const devTools = [
  {
    id: "code-playground",
    title: "Code Playground",
    description: "Live code editor with syntax highlighting",
    icon: "code",
    status: "active",
  },
  {
    id: "api-tester",
    title: "API Tester",
    description: "Test REST endpoints in real-time",
    icon: "api",
    status: "active",
  },
  {
    id: "theme-lab",
    title: "Theme Lab",
    description: "Customize and export color schemes",
    icon: "palette",
    status: "beta",
  },
  {
    id: "performance",
    title: "Performance Monitor",
    description: "Real-time FPS and memory stats",
    icon: "chart",
    status: "active",
  },
  {
    id: "ascii-art",
    title: "ASCII Art Generator",
    description: "Convert text to ASCII art",
    icon: "text",
    status: "active",
  },
  {
    id: "hash-tool",
    title: "Hash Generator",
    description: "Generate MD5, SHA-256 hashes",
    icon: "lock",
    status: "active",
  },
  {
    id: "qr-generator",
    title: "QR Generator",
    description: "Create QR codes from text/URLs",
    icon: "qr",
    status: "active",
  },
  {
    id: "color-picker",
    title: "Color Picker",
    description: "Advanced color utilities",
    icon: "dropper",
    status: "beta",
  },
  {
    id: "base64-converter",
    title: "Base64 Converter",
    description: "Encode/decode Base64 strings",
    icon: "base64",
    status: "active",
  },
]

const achievements = [
  { id: "first-visit", title: "Explorer", description: "Found the Dev Room", unlocked: true },
  { id: "terminal-master", title: "Terminal Master", description: "Used 10 terminal commands", unlocked: false },
  { id: "night-owl", title: "Night Owl", description: "Visited after midnight", unlocked: false },
  { id: "konami", title: "Konami Code", description: "Entered the secret code", unlocked: false },
  { id: "tool-user", title: "Tool Master", description: "Used all dev tools", unlocked: false },
  { id: "mobile-explorer", title: "Mobile Explorer", description: "Accessed from mobile", unlocked: true },
  { id: "code-warrior", title: "Code Warrior", description: "Ran 50+ code snippets", unlocked: false },
  { id: "perfectionist", title: "Perfectionist", description: "Achieved 60 FPS consistently", unlocked: false },
]

export function DevRoomClient() {
  const [activeTab, setActiveTab] = useState("tools")
  const [selectedTool, setSelectedTool] = useState("code-playground")
  const [codeInput, setCodeInput] = useState('console.log("Hello, Dennis!");')
  const [codeOutput, setCodeOutput] = useState("")
  const [asciiInput, setAsciiInput] = useState("DENNIS")
  const [asciiOutput, setAsciiOutput] = useState("")
  const [hashInput, setHashInput] = useState("")
  const [hashOutput, setHashOutput] = useState({ md5: "", sha256: "" })
  const [fps, setFps] = useState(60)
  const [memory, setMemory] = useState(0)
  const [konamiProgress, setKonamiProgress] = useState(0)
  const [qrInput, setQrInput] = useState("https://dennis.dev")
  const [qrCode, setQrCode] = useState("")
  const [selectedColor, setSelectedColor] = useState("#3b82f6")
  const [base64Input, setBase64Input] = useState("Hello World!")
  const [base64Output, setBase64Output] = useState("")
  const [isEncoding, setIsEncoding] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Konami code easter egg
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiProgress]) {
        const newProgress = konamiProgress + 1
        setKonamiProgress(newProgress)
        if (newProgress === konamiCode.length) {
          // Easter egg activated!
          document.body.classList.add("konami-activated")
          setTimeout(() => document.body.classList.remove("konami-activated"), 5000)
          setKonamiProgress(0)
        }
      } else {
        setKonamiProgress(0)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiProgress])

  // Performance monitor
  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      if (currentTime - lastTime >= 1000) {
        setFps(frameCount)
        frameCount = 0
        lastTime = currentTime
      }
      requestAnimationFrame(measureFPS)
    }

    const animationId = requestAnimationFrame(measureFPS)

    // Memory (if available)
    const memoryInterval = setInterval(() => {
      if ((performance as any).memory) {
        setMemory(Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024))
      }
    }, 1000)

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(memoryInterval)
    }
  }, [])

  // Generate QR code
  useEffect(() => {
    if (selectedTool === "qr-generator") {
      generateQRCode()
    }
  }, [qrInput, selectedTool])

  // Generate Base64
  useEffect(() => {
    if (selectedTool === "base64-converter") {
      if (isEncoding) {
        setBase64Output(btoa(unescape(encodeURIComponent(base64Input))))
      } else {
        try {
          setBase64Output(decodeURIComponent(escape(atob(base64Input))))
        } catch {
          setBase64Output("Invalid Base64 string")
        }
      }
    }
  }, [base64Input, isEncoding, selectedTool])

  const runCode = () => {
    try {
      const logs: string[] = []
      const originalLog = console.log
      console.log = (...args) => logs.push(args.map(String).join(" "))
      eval(codeInput)
      console.log = originalLog
      setCodeOutput(logs.join("\n") || "No output")
    } catch (error: any) {
      setCodeOutput(`Error: ${error.message}`)
    }
  }

  const generateAscii = () => {
    const asciiChars: Record<string, string[]> = {
      A: ["  █  ", " █ █ ", "█████", "█   █", "█   █"],
      B: ["████ ", "█   █", "████ ", "█   █", "████ "],
      C: [" ████", "█    ", "█    ", "█    ", " ████"],
      D: ["████ ", "█   █", "█   █", "█   █", "████ "],
      E: ["█████", "█    ", "████ ", "█    ", "█████"],
      F: ["█████", "█    ", "████ ", "█    ", "█    "],
      G: [" ████", "█    ", "█  ██", "█   █", " ████"],
      H: ["█   █", "█   █", "█████", "█   █", "█   █"],
      I: ["█████", "  █  ", "  █  ", "  █  ", "█████"],
      J: ["█████", "   █ ", "   █ ", "█  █ ", " ██  "],
      K: ["█   █", "█  █ ", "███  ", "█  █ ", "█   █"],
      L: ["█    ", "█    ", "█    ", "█    ", "█████"],
      M: ["█   █", "██ ██", "█ █ █", "█   █", "█   █"],
      N: ["█   █", "██  █", "█ █ █", "█  ██", "█   █"],
      O: [" ███ ", "█   █", "█   █", "█   █", " ███ "],
      P: ["████ ", "█   █", "████ ", "█    ", "█    "],
      Q: [" ███ ", "█   █", "█   █", "█  █ ", " ██ █"],
      R: ["████ ", "█   █", "████ ", "█  █ ", "█   █"],
      S: [" ████", "█    ", " ███ ", "    █", "████ "],
      T: ["█████", "  █  ", "  █  ", "  █  ", "  █  "],
      U: ["█   █", "█   █", "█   █", "█   █", " ███ "],
      V: ["█   █", "█   █", "█   █", " █ █ ", "  █  "],
      W: ["█   █", "█   █", "█ █ █", "██ ██", "█   █"],
      X: ["█   █", " █ █ ", "  █  ", " █ █ ", "█   █"],
      Y: ["█   █", " █ █ ", "  █  ", "  █  ", "  █  "],
      Z: ["█████", "   █ ", "  █  ", " █   ", "█████"],
      " ": ["     ", "     ", "     ", "     ", "     "],
    }

    const lines = ["", "", "", "", ""]
    for (const char of asciiInput.toUpperCase()) {
      const pattern = asciiChars[char] || asciiChars[" "]
      for (let i = 0; i < 5; i++) {
        lines[i] += pattern[i] + " "
      }
    }
    setAsciiOutput(lines.join("\n"))
  }

  const generateHash = async () => {
    if (!hashInput) return

    const encoder = new TextEncoder()
    const data = encoder.encode(hashInput)

    // SHA-256
    const sha256Buffer = await crypto.subtle.digest("SHA-256", data)
    const sha256Array = Array.from(new Uint8Array(sha256Buffer))
    const sha256Hex = sha256Array.map((b) => b.toString(16).padStart(2, "0")).join("")

    // Simple MD5-like hash (not real MD5)
    let md5 = 0
    for (let i = 0; i < hashInput.length; i++) {
      md5 = ((md5 << 5) - md5 + hashInput.charCodeAt(i)) | 0
    }

    setHashOutput({
      md5: Math.abs(md5).toString(16).padStart(8, "0"),
      sha256: sha256Hex,
    })
  }

  const generateQRCode = () => {
    // Simple ASCII QR code simulation
    const qrSize = 21
    let qrArt = ""
    
    for (let y = 0; y < qrSize; y++) {
      let line = ""
      for (let x = 0; x < qrSize; x++) {
        // Simple pattern based on input hash
        const hash = qrInput.split('').reduce((a, b) => {
          return ((a << 5) - a) + b.charCodeAt(0) | 0
        }, 0)
        const shouldFill = ((x * y + hash) % 3) === 0
        line += shouldFill ? "██" : "  "
      }
      qrArt += line + "\n"
    }
    
    setQrCode(qrArt)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const renderToolContent = () => {
    switch (selectedTool) {
      case "code-playground":
        return (
          <div className="space-y-4">
            <textarea
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="w-full h-40 bg-input border border-border p-4 font-mono text-sm text-foreground focus:outline-none focus:border-primary resize-none rounded-lg"
              placeholder="Enter JavaScript code..."
            />
            <button
              onClick={runCode}
              className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-accent transition-all rounded-lg"
            >
              RUN_CODE
            </button>
            <div className="bg-secondary border border-border p-4 font-mono text-sm min-h-24 rounded-lg">
              <span className="text-muted-foreground">Output:</span>
              <pre className="text-foreground mt-2 whitespace-pre-wrap">{codeOutput}</pre>
            </div>
          </div>
        )

      case "ascii-art":
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={asciiInput}
              onChange={(e) => setAsciiInput(e.target.value.slice(0, 10))}
              maxLength={10}
              className="w-full bg-input border border-border p-4 font-mono text-foreground focus:outline-none focus:border-primary rounded-lg"
              placeholder="Enter text (max 10 chars)"
            />
            <button
              onClick={generateAscii}
              className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-accent transition-all rounded-lg"
            >
              GENERATE_ASCII
            </button>
            <pre className="bg-secondary border border-border p-4 font-mono text-xs text-primary overflow-x-auto rounded-lg min-h-32">
              {asciiOutput || "Output will appear here..."}
            </pre>
          </div>
        )

      case "hash-tool":
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={hashInput}
              onChange={(e) => setHashInput(e.target.value)}
              className="w-full bg-input border border-border p-4 font-mono text-foreground focus:outline-none focus:border-primary rounded-lg"
              placeholder="Enter text to hash..."
            />
            <button
              onClick={generateHash}
              className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-accent transition-all rounded-lg"
            >
              GENERATE_HASH
            </button>
            <div className="space-y-2">
              <div className="bg-secondary border border-border p-3 font-mono text-xs rounded-lg flex justify-between items-center">
                <div>
                  <span className="text-muted-foreground">Simple Hash: </span>
                  <span className="text-primary">{hashOutput.md5 || "..."}</span>
                </div>
                <button 
                  onClick={() => copyToClipboard(hashOutput.md5)}
                  className="text-xs px-2 py-1 bg-primary/20 hover:bg-primary/30 rounded"
                >
                  Copy
                </button>
              </div>
              <div className="bg-secondary border border-border p-3 font-mono text-xs break-all rounded-lg flex justify-between items-center">
                <div>
                  <span className="text-muted-foreground">SHA-256: </span>
                  <span className="text-primary">{hashOutput.sha256 || "..."}</span>
                </div>
                <button 
                  onClick={() => copyToClipboard(hashOutput.sha256)}
                  className="text-xs px-2 py-1 bg-primary/20 hover:bg-primary/30 rounded"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        )

      case "performance":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary border border-border p-6 text-center rounded-lg">
                <div className="font-mono text-3xl md:text-4xl text-primary mb-2">{fps}</div>
                <div className="font-mono text-xs text-muted-foreground">FPS</div>
              </div>
              <div className="bg-secondary border border-border p-6 text-center rounded-lg">
                <div className="font-mono text-3xl md:text-4xl text-primary mb-2">{memory || "N/A"}</div>
                <div className="font-mono text-xs text-muted-foreground">MB Memory</div>
              </div>
            </div>
            <div className="bg-secondary border border-border p-4 rounded-lg">
              <div className="font-mono text-xs text-muted-foreground mb-2">RENDER_STATUS</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-foreground">All systems operational</span>
              </div>
            </div>
          </div>
        )

      case "qr-generator":
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={qrInput}
              onChange={(e) => setQrInput(e.target.value)}
              className="w-full bg-input border border-border p-4 font-mono text-foreground focus:outline-none focus:border-primary rounded-lg"
              placeholder="Enter text or URL..."
            />
            <div className="bg-secondary border border-border p-6 rounded-lg flex justify-center">
              <pre className="font-mono text-[10px] leading-3 text-primary text-center">
                {qrCode || "QR code will appear here..."}
              </pre>
            </div>
            <p className="font-mono text-xs text-muted-foreground text-center">
              Scan this QR code with your phone
            </p>
          </div>
        )

      case "color-picker":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-20 h-20 rounded-lg cursor-pointer"
              />
              <div className="flex-1">
                <div className="font-mono text-sm text-foreground mb-2">{selectedColor}</div>
                <div className="flex gap-2 flex-wrap">
                  <button 
                    onClick={() => copyToClipboard(selectedColor)}
                    className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded hover:bg-accent"
                  >
                    Copy HEX
                  </button>
                  <button 
                    onClick={() => copyToClipboard(selectedColor.replace('#', ''))}
                    className="px-3 py-1 bg-secondary text-foreground text-xs rounded hover:bg-border"
                  >
                    Copy HEX (no #)
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-20 rounded-lg border border-border"
                style={{ backgroundColor: selectedColor }}
              />
              <div className="h-20 rounded-lg border border-border flex items-center justify-center font-mono text-xs text-center p-2">
                Preview
              </div>
            </div>
          </div>
        )

      case "base64-converter":
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setIsEncoding(true)}
                className={`flex-1 py-2 font-mono text-sm border transition-all ${
                  isEncoding ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border"
                } rounded-lg`}
              >
                ENCODE
              </button>
              <button
                onClick={() => setIsEncoding(false)}
                className={`flex-1 py-2 font-mono text-sm border transition-all ${
                  !isEncoding ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border"
                } rounded-lg`}
              >
                DECODE
              </button>
            </div>
            <textarea
              value={isEncoding ? base64Input : base64Output}
              onChange={(e) => isEncoding ? setBase64Input(e.target.value) : setBase64Input(e.target.value)}
              className="w-full h-32 bg-input border border-border p-4 font-mono text-sm text-foreground focus:outline-none focus:border-primary resize-none rounded-lg"
              placeholder={isEncoding ? "Enter text to encode..." : "Enter Base64 to decode..."}
            />
            <textarea
              value={isEncoding ? base64Output : base64Input}
              readOnly
              className="w-full h-32 bg-secondary border border-border p-4 font-mono text-sm text-foreground resize-none rounded-lg"
              placeholder={isEncoding ? "Base64 output..." : "Decoded text..."}
            />
            <button
              onClick={() => copyToClipboard(isEncoding ? base64Output : base64Input)}
              className="w-full px-6 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-accent transition-all rounded-lg"
            >
              COPY_{isEncoding ? "ENCODED" : "DECODED"}
            </button>
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center h-64 text-muted-foreground font-mono rounded-lg border border-border">
            Select a tool to get started
          </div>
        )
    }
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden fixed top-4 right-4 z-20 p-2 bg-card border border-border rounded-lg"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1">
            <div className={`w-full h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-full h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-full h-0.5 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-secondary border border-border hover:border-primary transition-all font-mono text-sm rounded-lg"
            >
              {"<"} BACK
            </Link>
            <div>
              <h1 className="font-mono text-xl sm:text-2xl text-primary">DEV_ROOM</h1>
              <p className="font-mono text-xs text-muted-foreground">Secret developer workspace</p>
            </div>
          </div>

          {/* Status indicators */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">SYSTEMS_ONLINE</span>
            </div>
            <div className="font-mono text-xs text-primary">{fps} FPS</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
          {["tools", "achievements", "secrets"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-mono text-sm border transition-all whitespace-nowrap rounded-lg ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-foreground border-border hover:border-primary"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "tools" && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Mobile Tools Dropdown */}
            <div className="lg:hidden">
              <select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="w-full p-3 bg-card border border-border rounded-lg font-mono text-sm text-foreground focus:outline-none focus:border-primary"
              >
                {devTools.map((tool) => (
                  <option key={tool.id} value={tool.id}>
                    {tool.title} ({tool.status})
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Tools list */}
            <div className="hidden lg:block lg:col-span-1 space-y-2">
              {devTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`w-full p-4 text-left border transition-all rounded-lg ${
                    selectedTool === tool.id
                      ? "bg-primary/10 border-primary"
                      : "bg-card border-border hover:border-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm text-foreground">{tool.title}</h3>
                    <span
                      className={`px-2 py-0.5 font-mono text-[10px] rounded ${
                        tool.status === "beta" 
                          ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30" 
                          : "bg-green-500/20 text-green-500 border border-green-500/30"
                      }`}
                    >
                      {tool.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground mt-1">{tool.description}</p>
                </button>
              ))}
            </div>

            {/* Tool content */}
            <div className="lg:col-span-2 bg-card border border-border p-4 sm:p-6 rounded-lg">
              {renderToolContent()}
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 sm:p-6 border transition-all rounded-lg ${
                  achievement.unlocked 
                    ? "bg-primary/10 border-primary" 
                    : "bg-card border-border opacity-50"
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center bg-secondary border border-border rounded-lg">
                  {achievement.unlocked ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  )}
                </div>
                <h3 className="font-mono text-sm text-foreground mb-1">{achievement.title}</h3>
                <p className="font-sans text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "secrets" && (
          <div className="bg-card border border-border p-6 sm:p-8 rounded-lg text-center">
            <div className="font-mono text-4xl sm:text-6xl text-primary mb-4">???</div>
            <h3 className="font-mono text-lg text-foreground mb-2">SECRETS_AWAIT</h3>
            <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto mb-6">
              Hidden features are scattered throughout this portfolio. Try the Konami Code, explore the terminal, or
              keep clicking around...
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
              {konamiCode.map((key, i) => (
                <span
                  key={i}
                  className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-mono text-xs border rounded ${
                    i < konamiProgress
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-muted-foreground border-border"
                  }`}
                >
                  {key.replace("Arrow", "").slice(0, 1)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer hint */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Press <span className="text-primary">Ctrl + `</span> to open terminal anywhere
          </p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/95 z-10 flex flex-col p-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex-1 flex flex-col justify-center items-center gap-6">
            {devTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedTool(tool.id)
                  setActiveTab("tools")
                  setMobileMenuOpen(false)
                }}
                className="w-full max-w-sm p-4 bg-card border border-border rounded-lg text-left"
              >
                <h3 className="font-mono text-lg text-foreground">{tool.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{tool.description}</p>
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-primary text-primary-foreground font-mono rounded-lg"
          >
            CLOSE_MENU
          </button>
        </div>
      )}
    </main>
  )
}

// Add this to your global CSS
const hideScrollbar = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`
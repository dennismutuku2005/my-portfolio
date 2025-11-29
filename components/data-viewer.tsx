"use client"

import { useState } from "react"
import { CloseIcon, CodeIcon } from "./icons"
import data from "@/data.json"

export function DataViewer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary text-foreground font-mono text-xs tracking-wider transition-all hover:bg-secondary"
        aria-label="View data source"
      >
        <CodeIcon className="w-4 h-4" />
        DATA.JSON
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl max-h-[80vh] bg-card border border-border overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="font-mono text-sm text-primary">data.json</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close data viewer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto p-6 flex-1">
              <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
                <code>
                  {JSON.stringify(data, null, 2)
                    .split("\n")
                    .map((line, i) => (
                      <div key={i} className="flex">
                        <span className="w-12 text-muted-foreground select-none text-right pr-4">{i + 1}</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: syntaxHighlight(line),
                          }}
                        />
                      </div>
                    ))}
                </code>
              </pre>
            </div>

            <div className="px-6 py-3 border-t border-border bg-secondary">
              <span className="font-mono text-xs text-muted-foreground">
                Edit this file to update portfolio content
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function syntaxHighlight(text: string): string {
  return text
    .replace(/(".*?"):/g, '<span style="color: #00bfff">$1</span>:')
    .replace(/: (".*?")/g, ': <span style="color: #8cb4ff">$1</span>')
    .replace(/: (\d+)/g, ': <span style="color: #00d4ff">$1</span>')
    .replace(/\b(true|false|null)\b/g, '<span style="color: #00d4ff">$1</span>')
}

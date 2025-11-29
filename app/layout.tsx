import type React from "react"
import type { Metadata, Viewport } from "next"
import { Exo_2, Orbitron, Saira } from "next/font/google"
import "./globals.css"

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dennis Muuo | Developer Portfolio",
  description: "Full-Stack Developer & Digital Architect - Building the future, one line of code at a time",
  keywords: ["developer", "portfolio", "full-stack", "Dennis Muuo", "web development", "React", "Next.js"],
  authors: [{ name: "Dennis Muuo" }],
    generator: 'Dennis Muuo',
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${exo2.variable} ${orbitron.variable} ${saira.variable}`}>
      <body
        className="min-h-screen overflow-x-hidden"
        style={{
          backgroundColor: "#000000",
          color: "#e0e8ff",
          fontFamily: 'var(--font-exo2), "Exo 2", system-ui, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  )
}

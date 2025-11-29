"use client"

import type React from "react"
import { useState } from "react"
import { ScrollWrapper } from "./scroll-wrapper"
import { MailIcon, CopyIcon, CheckIcon, SendIcon } from "./icons"
import { siteData } from "@/lib/site-data"

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteData.contactEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${siteData.contactEmail}`
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">CONTACT</h2>
          </div>
        </ScrollWrapper>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <ScrollWrapper>
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-foreground leading-relaxed">
                Ready to collaborate on your next project? Send me a message and I will get back to you as soon as
                possible.
              </p>

              <div className="bg-card border border-border p-4 md:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MailIcon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs md:text-sm text-muted-foreground">DIRECT_LINK</span>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={`mailto:${siteData.contactEmail}`}
                    className="font-sans text-sm md:text-base text-foreground hover:text-primary transition-colors break-all"
                  >
                    {siteData.contactEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-border"
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-xs md:text-sm text-muted-foreground">
                  RESPONSE_TIME: {"<"} 24 HOURS
                </span>
              </div>
            </div>
          </ScrollWrapper>

          <ScrollWrapper>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-primary tracking-wider mb-2">
                  NAME_INPUT
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-input border border-border text-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs text-primary tracking-wider mb-2">
                  EMAIL_INPUT
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-input border border-border text-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-primary tracking-wider mb-2">
                  MESSAGE_INPUT
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border text-foreground font-sans focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={loading || submitted}
                className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    MESSAGE_SENT
                  </>
                ) : loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <SendIcon className="w-5 h-5" />
                    SEND_MESSAGE
                  </>
                )}
              </button>
            </form>
          </ScrollWrapper>
        </div>
      </div>
    </section>
  )
}

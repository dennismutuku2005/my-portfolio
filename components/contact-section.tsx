"use client"

import type React from "react"
import { useState } from "react"
import { ScrollWrapper } from "./scroll-wrapper"
import { PhoneIcon, CopyIcon, CheckIcon, SendIcon } from "./icons"
import { siteData } from "@/lib/site-data"

interface FormData {
  name: string
  mobile: string
  message: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(siteData.contactNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `tel:${siteData.contactNumber}`
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Format the message with user's contact details
      const notificationMessage = `🚀 New Contact Request 🚀

Name: ${formData.name}
Mobile: ${formData.mobile}
Message: ${formData.message}

Sent from your portfolio website.`

      // Send notification
      const response = await fetch("https://whatsapp.quickzingo.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: "254741390949",
          message: notificationMessage
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", mobile: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("Error sending message. Please try again.")
    } finally {
      setLoading(false)
    }
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
                Ready to collaborate on your next project? Send me a message and I'll get back to you immediately.
              </p>

              <div className="bg-card border border-border p-4 md:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs md:text-sm text-muted-foreground">DIRECT_CONTACT</span>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-sans text-sm md:text-base text-foreground break-all">
                    {siteData.contactNumber}
                  </span>
                  <button
                    onClick={handleCopyNumber}
                    className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all border border-border"
                    aria-label="Copy phone number"
                  >
                    {copied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-xs md:text-sm text-muted-foreground">
                  RESPONSE_TIME: INSTANT
                </span>
              </div>
            </div>
          </ScrollWrapper>

          <ScrollWrapper>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-primary tracking-wider mb-2">
                  YOUR_NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-input border border-border text-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block font-mono text-xs text-primary tracking-wider mb-2">
                  MOBILE_NUMBER
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-input border border-border text-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-primary tracking-wider mb-2">
                  YOUR_MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border text-foreground font-sans focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
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
                    SENDING...
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
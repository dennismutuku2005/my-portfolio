"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { siteData } from "@/lib/site-data"
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquareText } from "lucide-react"

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      message: formData.get("message")
    }

    try {
      const response = await fetch("https://api.onenetwork-system.com/portfolio.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: "254741390949",
          message: `🚀 New Web Message\nName: ${data.name}\nMobile: ${data.mobile}\nMsg: ${data.message}`
        })
      })
      if (response.ok) {
        setSuccess(true)
        e.target.reset()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs mb-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <MessageSquareText className="w-3 h-3" />
              <span>LET'S CONNECT</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Ready to <span className="text-glow italic">Innovate</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-12">
              Have a project in mind or just want to chat about AI? My inbox is always open.
              I usually respond within minutes—try me.
            </p>

            <div className="space-y-8">
              <ContactItem icon={Mail} label="Email Address" value={siteData.contactEmail} href={`mailto:${siteData.contactEmail}`} />
              <ContactItem icon={Phone} label="Emergency Direct" value={siteData.contactNumber} href={`tel:${siteData.contactNumber}`} />
              <ContactItem icon={MapPin} label="Operating From" value="Available Globally" />
            </div>

            <div className="mt-16 p-8 rounded-[2rem] bg-background border border-border/50 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest">Active & Available</span>
              </div>
              <div className="text-sm text-muted-foreground">Currently accepting new projects for Q1 2026. Let's make something exceptional.</div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl relative z-10 backdrop-blur-xl">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 block px-1">Initialization Name</label>
                  <input
                    name="name"
                    required
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 block px-1">Secure Mobile</label>
                  <input
                    name="mobile"
                    required
                    placeholder="+254..."
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 block px-1">Transmission Payload</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your vision..."
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || success}
                  className="w-full group relative overflow-hidden bg-primary text-primary-foreground py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {success ? <><CheckCircle2 className="w-5 h-5" /> Transmission Received</> : loading ? "transmitting..." : <><Send className="w-4 h-4" /> Execute Send</>}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </form>

            {/* Background accent for form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value, href }: any) {
  const Content = (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="p-4 rounded-2xl bg-card border border-border transition-all group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  )

  if (href) return <a href={href} className="block">{Content}</a>
  return <div>{Content}</div>
}
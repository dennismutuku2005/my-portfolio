import { siteData } from "@/lib/site-data"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-24 bg-background border-t border-border/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-card rounded-[2rem] border border-border/50 flex items-center justify-center mb-6 shadow-2xl">
            <img src="/logo.png" alt="M" className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-2xl font-black tracking-tighter mb-2">Muuo<span className="text-primary">.</span>dev</h3>
          <p className="text-muted-foreground text-xs font-mono uppercase tracking-[0.4em]">Full-Stack Architect</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
          {['Home', 'About', 'Projects', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-12 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-[11px] font-mono uppercase tracking-widest">
            {siteData.copyright}
          </p>
          <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
            Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500/20 animate-pulse" /> Muuo.dev
          </p>
        </div>
      </div>
    </footer>
  )
}

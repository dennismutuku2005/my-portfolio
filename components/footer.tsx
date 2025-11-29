import Link from "next/link"
import { siteData } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider text-center md:text-left">
            {siteData.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/dev-room"
              className="font-mono text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              DEV_ROOM
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs text-primary">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

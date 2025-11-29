import { MatrixBackground } from "@/components/matrix-background"
import { ScanlineOverlay } from "@/components/scanline-overlay"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { StackSection } from "@/components/stack-section"
import { ContactSection } from "@/components/contact-section"
import { Terminal } from "@/components/terminal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <ScanlineOverlay />
      <Header />
      <MobileNav />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />

      <Terminal />
      <Footer />
    </main>
  )
}

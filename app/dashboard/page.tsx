"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"
import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection /> {/* <-- This is your clickable module grid */}
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  )
}
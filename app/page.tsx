"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TechStackSection } from "@/components/tech-stack-section"

import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-screen bg-background grid-background relative">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TechStackSection />

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

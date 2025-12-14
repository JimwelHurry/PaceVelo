"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const techCategories = [
  {
    category: "Full-Stack Velocity", // Emphasizing speed across the stack
    technologies: [
      { name: "Global-Scale Frontend Architecture", level: 98 },
      { name: "Optimized Backend/API Logic", level: 95 },
      { name: "Clean, Typed Codebase (TS/Go)", level: 97 },
      { name: "Agile, Rapid Prototyping", level: 96 },
    ],
  },
  {
    category: "Cloud & Infrastructure", // Covering the whole deployment cycle
    technologies: [
      { name: "Cloud-Agnostic Deployment (AWS/GCP)", level: 94 },
      { name: "Serverless & Container Strategy", level: 96 },
      { name: "Zero-Downtime Pipeline (CI/CD)", level: 90 },
      { name: "Data Resilience & Backup", level: 92 },
    ],
  },
  {
    category: "Performance & UX", // Highlighting the 'Angas' factor
    technologies: [
      { name: "Sub-second Load Times Guaranteed", level: 99 },
      { name: "GSAP/Framer Motion Mastery", level: 98 }, // Show off your specialty!
      { name: "API Latency Optimization", level: 95 },
      { name: "Cross-Device/Browser Consistency", level: 97 },
    ],
  },
  {
    category: "Technical Standards", // Proving quality and professionalism
    technologies: [
      { name: "Automated QA & Testing", level: 95 },
      { name: "Security First Development", level: 96 },
      { name: "Transparent Code Ownership", level: 94 },
      { name: "Dedicated Technical Documentation", level: 93 },
    ],
  },
]

function TechBar({ name, level, index }: { name: string; level: number; index: number }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barRef.current) return

    gsap.fromTo(
      barRef.current,
      { width: 0 },
      {
        width: `${level}%`,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
        },
        delay: index * 0.1,
      },
    )
  }, [level, index])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div ref={barRef} className="h-full bg-primary glow-effect rounded-full" style={{ width: 0 }} />
      </div>
    </div>
  )
}

export function TechStackSection() {
  return (
    <section id="tech" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Battle-Tested <span className="text-primary glow-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We master the technologies that power the world's most demanding applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 glow-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
              <div>
                {category.technologies.map((tech, techIndex) => (
                  <TechBar key={techIndex} name={tech.name} level={tech.level} index={techIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    category: "Frontend",
    technologies: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 97 },
      { name: "Tailwind CSS", level: 96 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 95 },
      { name: "Python", level: 92 },
      { name: "Go", level: 88 },
      { name: "GraphQL", level: 90 },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", level: 94 },
      { name: "Kubernetes", level: 91 },
      { name: "Docker", level: 96 },
      { name: "Terraform", level: 89 },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", level: 95 },
      { name: "MongoDB", level: 92 },
      { name: "Redis", level: 94 },
      { name: "Elasticsearch", level: 87 },
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

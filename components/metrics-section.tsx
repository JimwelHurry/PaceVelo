"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const metrics = [
  { value: 50, suffix: "+", label: "Projects Shipped", description: "Apps that people actually use" },
  { value: 100, suffix: "%", label: "Happy Clients", description: "They keep coming back" },
  { value: 2, suffix: "x", label: "Faster Delivery", description: "Move at startup speed" },
  { value: 10, suffix: "K+", label: "Commits", description: "Building in public" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-bold text-primary glow-text">
      {count}
      {suffix}
    </span>
  )
}

export function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        pin: false,
        scrub: 1,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-4 relative" id="metrics">
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
            The <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a small team, but we ship fast and our clients stick around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 group-hover:border-primary/50 glow-border">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <h3 className="text-xl font-semibold mt-4 mb-2">{metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

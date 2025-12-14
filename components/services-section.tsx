"use client"

import { Rocket, Shield, Zap, Target, Code, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: Zap,
      title: "Rapid Development",
      description:
        "We move fast. Ship features weekly with agile sprints and continuous deployment. No waterfall, no endless meetings.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Web & Mobile Apps",
      description:
        "Full-stack applications built with modern tech. React, Next.js, Node.js - whatever gets the job done best.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "MVP to Production",
      description:
        "Start with an MVP, iterate based on feedback, scale when ready. We've done it before and we'll do it with you.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Product Strategy",
      description:
        "Not sure what to build? We'll help you figure it out. No jargon, just practical advice from devs who've been there.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Rocket,
      title: "DevOps & Hosting",
      description:
        "Deploy on day one with automated pipelines. We handle the infrastructure so you can focus on features.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Need extra hands? We integrate with your team seamlessly. Think of us as your extended dev team.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll(".service-card")

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,255,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            What we're <span className="text-primary glow-text">good at</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Full-stack development with a focus on getting things done. We use modern tools and best practices, but
            we're not religious about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="service-card group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors glow-border"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <motion.div
                    className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Learn more</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Clock, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "Modern Banking App",
    client: "FinTech Startup",
    description: "Rebuilt their entire frontend in React. Clean, fast, and actually works on mobile.",
    metrics: [
      { label: "Faster Builds", value: "5x", icon: Zap },
      { label: "Load Time", value: "1.2s", icon: Clock },
      { label: "User Growth", value: "+80%", icon: TrendingUp },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/modern-fintech-dashboard.png",
  },
  {
    title: "E-Commerce Platform",
    client: "D2C Fashion Brand",
    description:
      "Built a custom e-commerce platform from scratch. Handles Black Friday traffic without breaking a sweat.",
    metrics: [
      { label: "Orders/day", value: "5K+", icon: TrendingUp },
      { label: "Page Speed", value: "90+", icon: Zap },
      { label: "Uptime", value: "99.9%", icon: Clock },
    ],
    tags: ["Next.js", "Stripe", "Vercel", "Supabase"],
    image: "/e-commerce-platform-ui.jpg",
  },
  {
    title: "Analytics Dashboard",
    client: "SaaS Company",
    description: "Real-time analytics dashboard with beautiful charts. Makes data actually look interesting.",
    metrics: [
      { label: "Data Points", value: "1M+", icon: TrendingUp },
      { label: "Charts", value: "20+", icon: Zap },
      { label: "Query Time", value: "<200ms", icon: Clock },
    ],
    tags: ["TypeScript", "D3.js", "FastAPI", "Redis"],
    image: "/ai-analytics-dashboard.png",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stuff we've <span className="text-primary glow-text">built</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects from real clients. No fake portfolios here.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 glow-border">
                <div className="grid lg:grid-cols-2 gap-8">
                  <motion.div
                    className="relative h-[400px] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </motion.div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-sm text-primary font-mono mb-3 glow-text">{study.client}</div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{study.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.metrics.map((metric, i) => {
                        const Icon = metric.icon
                        return (
                          <div key={i} className="text-center">
                            <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-fit group/btn border-primary/30 hover:bg-primary/10 bg-transparent"
                    >
                      View Full Case Study
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

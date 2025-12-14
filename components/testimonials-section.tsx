"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "These guys are legit. They built our entire platform in 3 months and it actually works. No BS, just solid code.",
    author: "Alex Kim",
    role: "Founder",
    company: "TechFlow",
    rating: 5,
  },
  {
    quote:
      "Finally found a dev team that doesn't overpromise. They're honest about timelines and the code is clean. Will work with them again.",
    author: "Jordan Lee",
    role: "CTO",
    company: "DataViz Inc",
    rating: 5,
  },
  {
    quote: "Fast turnaround, good communication, and they actually understand what we're trying to build. Rare combo.",
    author: "Sam Patel",
    role: "Product Lead",
    company: "ShopNow",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,255,0.1),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What people <span className="text-primary glow-text">say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from founders and teams we've worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10">{testimonial.quote}</p>

              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

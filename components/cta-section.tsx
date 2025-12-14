"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Download } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-background border border-primary/30 glow-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.2),transparent_70%)]" />

          <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Let's build something <span className="text-primary glow-text">awesome</span> together
              </h2>

              <p className="text-xl text-muted-foreground mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
                Got an idea? Need a team to help ship it? Let's chat. No pressure, no sales pitch - just a conversation
                about what we can build.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group glow-effect text-lg px-8 py-6"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Portfolio
                </Button>
              </div>

              <div className="pt-12 border-t border-border/40">
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Trusted by 50+ startups and growing companies
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

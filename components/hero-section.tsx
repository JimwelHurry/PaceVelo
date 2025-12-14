"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (!headingRef.current) return

    const split = new SplitText(headingRef.current, { type: "chars,words" })
    const chars = split.chars

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      split.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center px-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        style={{ y }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_50%)]" />

      <motion.div className="container mx-auto relative z-10" style={{ opacity }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-8 glow-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Code2 className="w-4 h-4" />
            <span>Built by developers, for developers</span>
          </motion.div>

          <h1
            ref={headingRef}
            className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-[1.1] tracking-tight"
          >
            We ship <span className="text-primary glow-text">fast</span> & build cool stuff
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A small team of passionate devs who love building web apps that actually work. Fast iterations, clean code,
            and zero BS.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group glow-effect text-lg px-8 py-6"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
           
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-8 font-mono text-sm md:text-base text-left overflow-hidden glow-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-muted-foreground ml-2">production.ts</span>
                <div className="ml-auto text-xs text-primary">LIVE</div>
              </div>
              <div className="space-y-3">
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <span className="text-primary">const</span> vibe ={" "}
                  <span className="text-accent">&quot;startup energy&quot;</span>;
                </motion.div>
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <span className="text-primary">const</span> quality ={" "}
                  <span className="text-accent">&quot;never compromise&quot;</span>;
                </motion.div>
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <span className="text-primary">const</span> speed ={" "}
                  <span className="text-accent">&quot;lightning fast&quot;</span>;
                </motion.div>
                <motion.div
                  className="text-muted-foreground pt-2 border-t border-border/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <span className="text-green-400">// Ship products people love ✨</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}

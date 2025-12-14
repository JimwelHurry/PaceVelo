"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Services", "Work", "Tech", "About"]

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ opacity }}>
      <motion.div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 ${
          isScrolled ? "bg-card/80 backdrop-blur-xl border border-border glow-border" : ""
        }`}
      >
        <motion.div
          className="text-2xl font-bold font-mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary glow-text">Pace</span>
          <span className="text-foreground">Velo</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">Start Project</Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}

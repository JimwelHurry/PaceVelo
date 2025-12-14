"use client"

import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-16 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,0,255,0.05),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl mb-4 font-mono">
              <span className="text-primary glow-text">Pace</span>
              <span className="text-foreground">Velo</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elite engineering at velocity. Delivering unforgettable digital experiences for modern enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  DevOps & Cloud
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dedicated Teams
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group glow-border"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group glow-border"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group glow-border"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              © 2025 PaceVelo.
              <br />
              Elite Engineering at Velocity.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

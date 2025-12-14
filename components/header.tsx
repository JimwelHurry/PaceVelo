import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-foreground">PaceVelo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link
              href="#case-studies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

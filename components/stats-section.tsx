export function StatsSection() {
  const stats = [
    {
      value: "3x",
      label: "Faster",
      sublabel: "Time to market",
      company: "Fortune 500 Client",
    },
    {
      value: "99.9%",
      label: "Uptime",
      sublabel: "System reliability",
      company: "FinTech Leader",
    },
    {
      value: "200%",
      label: "ROI",
      sublabel: "Average increase",
      company: "E-commerce Platform",
    },
    {
      value: "10k+",
      label: "Deployments",
      sublabel: "Per month delivered",
      company: "SaaS Unicorn",
    },
  ]

  return (
    <section className="py-20 px-4 border-t border-border/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground mb-3">{stat.sublabel}</div>
                <div className="text-xs text-muted-foreground font-mono pt-3 border-t border-border">
                  {stat.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { CheckCircle2 } from "lucide-react"

export function ProcessSection() {
  const phases = [
    {
      phase: "01",
      title: "Discovery & Planning",
      description:
        "Deep dive into your business goals, technical requirements, and success metrics. We map the fastest path to measurable value.",
      deliverables: ["Technical roadmap", "Architecture design", "Sprint planning", "Team allocation"],
    },
    {
      phase: "02",
      title: "Rapid Prototyping",
      description:
        "Build working software in the first sprint. Validate assumptions early, iterate fast, and establish momentum.",
      deliverables: ["Working MVP", "User feedback", "Performance baseline", "CI/CD pipeline"],
    },
    {
      phase: "03",
      title: "Agile Development",
      description:
        "Two-week sprints with continuous delivery. Every iteration adds business value and moves closer to your vision.",
      deliverables: ["Weekly deployments", "Feature releases", "Quality assurance", "Performance optimization"],
    },
    {
      phase: "04",
      title: "Scale & Support",
      description:
        "Launch with confidence and scale without friction. Ongoing optimization, monitoring, and feature enhancement.",
      deliverables: ["Production deployment", "24/7 monitoring", "Performance tuning", "Dedicated support"],
    },
  ]

  return (
    <section id="process" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our proven <span className="text-primary">development process</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            From concept to production in weeks, not months. A systematic approach that eliminates risk and maximizes
            velocity.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{phase.phase}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-secondary/30 border border-border rounded-lg p-6">
                    <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

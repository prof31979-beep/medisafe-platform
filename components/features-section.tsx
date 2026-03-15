"use client"

import { 
  Truck, 
  Thermometer, 
  Snowflake, 
  Shield, 
  Bell, 
  BarChart3,
  type LucideIcon
} from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <div 
      className="group relative glass rounded-xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        {/* Icon glow */}
        <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <h3 className="relative text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="relative text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
        <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
      </div>
    </div>
  )
}

const features = [
  {
    icon: Truck,
    title: "Logistics Monitoring",
    description: "Real-time GPS tracking of medical shipments and vehicles with predictive route optimization and delivery time estimation.",
  },
  {
    icon: Thermometer,
    title: "Container Monitoring",
    description: "IoT sensors continuously tracking temperature, humidity, and vibration to ensure product integrity throughout transit.",
  },
  {
    icon: Snowflake,
    title: "Cooling System Monitoring",
    description: "Ensuring cold-chain compliance for vaccines and temperature-sensitive pharmaceuticals with automated alerts.",
  },
  {
    icon: Shield,
    title: "Security System",
    description: "Detect unauthorized container access and tampering with instant notifications and full audit trail logging.",
  },
  {
    icon: Bell,
    title: "Alert & Notification System",
    description: "Automated multi-channel alerts for abnormal conditions, delays, and compliance breaches to all stakeholders.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive data visualization for supply chain performance, trends analysis, and regulatory reporting.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 mb-6">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">System Modules</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-primary glow-text">Monitoring</span> Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six integrated modules working together to ensure complete visibility and control over your pharmaceutical supply chain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}

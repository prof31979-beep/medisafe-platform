"use client"

import { Lock, Wifi, Eye, ShieldCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Secure IoT Communication",
    description: "End-to-end encrypted communication protocols ensuring all sensor data remains protected from interception.",
    stats: "256-bit AES",
  },
  {
    icon: Eye,
    title: "Real-time Anomaly Detection",
    description: "AI-powered monitoring that instantly identifies unusual patterns, potential breaches, and equipment malfunctions.",
    stats: "99.7% Accuracy",
  },
  {
    icon: Wifi,
    title: "End-to-End Monitoring",
    description: "Complete visibility from warehouse to delivery with zero blind spots in your supply chain tracking.",
    stats: "24/7 Coverage",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="secGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.75 0.18 195)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#secGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 mb-6">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Enterprise Security</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Enterprise-Grade <span className="text-primary glow-text">Security</span> Infrastructure
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Protecting your pharmaceutical supply chain with military-grade security protocols 
              and compliance with international healthcare data regulations.
            </p>

            {/* Security features list */}
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="group flex gap-4 p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:h-[500px]">
            {/* Main shield graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border border-primary/30" />
                <div className="absolute inset-8 rounded-full border border-primary/40" />
                
                {/* Center shield */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/50 flex items-center justify-center glow-border">
                  <ShieldCheck className="w-20 h-20 text-primary" />
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary glow-box" />
                </div>
                <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-accent glow-box" />
                </div>
                <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/80 glow-box" />
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-8 left-4 glass rounded-lg p-4 border border-primary/20 animate-float">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground">Encrypted</div>
            </div>
            
            <div className="absolute bottom-12 right-8 glass rounded-lg p-4 border border-primary/20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-2xl font-bold text-accent">0</div>
              <div className="text-xs text-muted-foreground">Data Breaches</div>
            </div>
            
            <div className="absolute top-1/3 right-4 glass rounded-lg p-4 border border-primary/20 animate-float" style={{ animationDelay: '4s' }}>
              <div className="text-2xl font-bold text-foreground">HIPAA</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground">Trusted by Leading Pharmaceutical Companies</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["ISO 27001", "HIPAA", "SOC 2", "GDPR", "FDA 21 CFR"].map((badge) => (
              <div 
                key={badge} 
                className="px-4 py-2 rounded-lg glass border border-border/50 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

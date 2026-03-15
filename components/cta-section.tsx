"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative glass rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/20 glow-border overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-4 left-4 w-px h-16 bg-gradient-to-b from-primary to-transparent" />
              <div className="absolute top-4 left-4 w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-4 right-4 w-px h-16 bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-4 right-4 w-16 h-px bg-gradient-to-l from-primary to-transparent" />
            </div>

            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/50 mb-8 glow-box">
                <Zap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Ready to Transform Your <span className="text-primary glow-text">Supply Chain</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Join leading pharmaceutical companies using MEDISAFE to ensure product integrity, 
                regulatory compliance, and operational excellence across their entire distribution network.
              </p>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="glow-box bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-semibold group"
              >
                Enter MEDISAFE System
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Additional info */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Free Demo Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "50+", label: "Enterprise Clients", sublabel: "Pharmaceutical & Biotech" },
              { value: "1M+", label: "Shipments Monitored", sublabel: "Annually" },
              { value: "30+", label: "Countries Covered", sublabel: "Global Network" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center p-6 glass rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary glow-text">{stat.value}</div>
                <div className="text-foreground font-medium mt-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

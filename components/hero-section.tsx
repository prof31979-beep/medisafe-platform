"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background visual elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Tech lines decoration */}
        <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.75 0.18 195)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.75 0.18 195)" stopOpacity="1" />
              <stop offset="100%" stopColor="oklch(0.75 0.18 195)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 300 Q300 250 600 280 T1200 250" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
          <path d="M0 350 Q400 300 700 330 T1200 300" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">System Online</span>
            <span className="text-sm text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Real-time Monitoring Active</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">MEDI</span>
            <span className="text-primary glow-text">SAFE</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-4 tracking-wide">
            Smart Pharmaceutical Logistics Ecosystem
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed">
            Intelligent supply chain monitoring system ensuring safe transportation 
            of medicines, vaccines, and medical supplies using IoT sensors and 
            real-time monitoring technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="glow-box bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
            >
              Enter System
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50 w-full max-w-3xl">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "50K+", label: "Shipments Tracked" },
              { value: "<2s", label: "Alert Response" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary glow-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual - Abstract truck/container illustration */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden glass border border-primary/20 glow-border">
            <div className="aspect-[16/9] bg-gradient-to-br from-card via-card to-secondary/30 p-8 flex items-center justify-center">
              {/* Dashboard mockup */}
              <div className="w-full h-full relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-mono text-primary">LIVE MONITORING</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    ))}
                  </div>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-3 gap-4 h-[calc(100%-40px)]">
                  {/* Map area */}
                  <div className="col-span-2 rounded-lg bg-secondary/50 border border-border/50 p-4 relative overflow-hidden">
                    {/* Simulated map with routes */}
                    <svg className="w-full h-full opacity-60" viewBox="0 0 400 200">
                      <defs>
                        <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="oklch(0.75 0.18 195)" />
                          <stop offset="100%" stopColor="oklch(0.65 0.20 200)" />
                        </linearGradient>
                      </defs>
                      {/* Route lines */}
                      <path d="M50 100 Q100 50 200 80 T350 60" stroke="url(#routeGrad)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                      <path d="M30 150 Q150 100 250 130 T380 100" stroke="url(#routeGrad)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                      
                      {/* Location markers */}
                      <circle cx="50" cy="100" r="6" fill="oklch(0.75 0.18 195)" className="animate-pulse" />
                      <circle cx="200" cy="80" r="4" fill="oklch(0.65 0.20 200)" />
                      <circle cx="350" cy="60" r="6" fill="oklch(0.75 0.18 195)" className="animate-pulse" />
                      <circle cx="250" cy="130" r="4" fill="oklch(0.65 0.20 200)" />
                    </svg>
                    
                    {/* Overlay text */}
                    <div className="absolute bottom-3 left-3 text-xs font-mono text-muted-foreground">
                      Active Routes: 12
                    </div>
                  </div>

                  {/* Side panels */}
                  <div className="flex flex-col gap-3">
                    {/* Temperature card */}
                    <div className="flex-1 rounded-lg bg-secondary/50 border border-border/50 p-3">
                      <div className="text-xs text-muted-foreground mb-2">Temperature</div>
                      <div className="text-2xl font-bold text-primary">2.4°C</div>
                      <div className="text-xs text-green-500">Optimal Range</div>
                    </div>
                    
                    {/* Humidity card */}
                    <div className="flex-1 rounded-lg bg-secondary/50 border border-border/50 p-3">
                      <div className="text-xs text-muted-foreground mb-2">Humidity</div>
                      <div className="text-2xl font-bold text-accent">45%</div>
                      <div className="text-xs text-green-500">Within Limits</div>
                    </div>
                    
                    {/* Status card */}
                    <div className="flex-1 rounded-lg bg-secondary/50 border border-border/50 p-3">
                      <div className="text-xs text-muted-foreground mb-2">Shipments</div>
                      <div className="text-2xl font-bold text-foreground">847</div>
                      <div className="text-xs text-primary">In Transit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-primary/20 blur-xl rounded-full" />
        </div>
      </div>
    </section>
  )
}

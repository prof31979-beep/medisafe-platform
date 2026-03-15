"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  type: "circle" | "cross" | "diamond"
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 20,
      type: (["circle", "cross", "diamond"] as const)[Math.floor(Math.random() * 3)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.75 0.18 195 / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.75 0.18 195 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-particle opacity-40"
          style={{
            left: `${particle.x}%`,
            bottom: '-20px',
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type === "circle" && (
            <div 
              className="rounded-full bg-primary/60"
              style={{ width: particle.size, height: particle.size }}
            />
          )}
          {particle.type === "cross" && (
            <svg 
              width={particle.size * 2} 
              height={particle.size * 2} 
              viewBox="0 0 20 20"
              className="text-primary/60"
            >
              <path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          )}
          {particle.type === "diamond" && (
            <svg 
              width={particle.size * 2} 
              height={particle.size * 2} 
              viewBox="0 0 20 20"
              className="text-accent/60"
            >
              <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

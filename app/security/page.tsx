"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Shield, AlertTriangle, Lock, Unlock } from "lucide-react"

// Dynamic import of MapPreview (client-only)
const MapPreview = dynamic(() => import("../logistics/MapPreview"), {
  ssr: false,
})

// Example security units
const securityUnits = [
  { id: "SEC-01", status: "active", lat: 19.076, lng: 72.8777, lastAccess: "10:12 AM" },
  { id: "SEC-02", status: "alert", lat: 28.6139, lng: 77.209, lastAccess: "09:45 AM" },
  { id: "SEC-03", status: "active", lat: 13.0827, lng: 80.2707, lastAccess: "11:00 AM" },
  { id: "SEC-04", status: "idle", lat: 22.5726, lng: 88.3639, lastAccess: "08:30 AM" },
]

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Header */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2 tracking-wide">
          Security System Monitoring
        </h1>
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          Access Control & Intrusion Alerts
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-2">
          Monitor all containers and storage units for unauthorized access or tampering.
        </p>
      </header>

      {/* Security Units Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 relative z-10">
        {securityUnits.map((unit) => (
          <div
            key={unit.id}
            className="glass p-6 rounded-2xl border border-border/50 shadow-lg hover:scale-105 transition-transform duration-300 relative group"
          >
            {/* Unit ID */}
            <h2 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 neon-text">
              <Shield size={18} /> {unit.id}
            </h2>

            {/* Status Badge */}
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold uppercase ${
                unit.status === "active"
                  ? "bg-green-500/30 text-green-400"
                  : unit.status === "alert"
                  ? "bg-red-500/30 text-red-400 animate-pulse"
                  : "bg-gray-500/30 text-gray-300"
              }`}
            >
              {unit.status.toUpperCase()}
            </span>

            {/* Last Access */}
            <p className="mt-2 text-sm text-muted-foreground">
              Last Access: {unit.lastAccess}
            </p>

            {/* Mini-map */}
            <div className="w-full h-40 mt-4 rounded-lg overflow-hidden border border-cyan-500">
              <MapPreview
                lat={unit.lat}
                lng={unit.lng}
                vehicleId={unit.id}
                status={unit.status}
              />
            </div>

            {/* Quick Actions */}
            <div className="flex justify-between mt-4 gap-2">
              <button
                onClick={() => alert(`Acknowledged alert for ${unit.id}`)}
                className="flex-1 px-2 py-1 bg-red-500/20 border border-red-400 rounded-lg hover:bg-red-400/30 transition text-xs"
              >
                Acknowledge
              </button>
              <button
                onClick={() => alert(`Toggled lock for ${unit.id}`)}
                className="flex-1 px-2 py-1 bg-cyan-500/20 border border-cyan-400 rounded-lg hover:bg-cyan-400/30 transition text-xs flex items-center justify-center gap-1"
              >
                {unit.status !== "alert" ? <Lock size={12} /> : <Unlock size={12} />} Lock
              </button>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </section>

      {/* Activity Feed */}
      <section className="container mx-auto px-4 pb-16">
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg">
          <h2 className="text-xl font-semibold neon-text mb-4 flex items-center gap-2">
            <AlertTriangle size={18} /> Recent Security Activity
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✅ SEC-01 access normal</li>
            <li>⚠️ SEC-02 unauthorized access alert</li>
            <li>🔐 SEC-03 locked</li>
            <li>⚠️ SEC-04 tamper detected</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
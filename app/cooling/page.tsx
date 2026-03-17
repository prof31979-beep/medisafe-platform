"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Thermometer, AlertTriangle, Snowflake } from "lucide-react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

// Dynamic import of MapPreview (client-only)
const MapPreview = dynamic(() => import("../logistics/MapPreview"), {
  ssr: false,
})

// Example cooling units data
const coolingUnits = [
  { id: "CU-01", temp: -2, status: "active", lat: 19.076, lng: 72.8777 },
  { id: "CU-02", temp: 0, status: "alert", lat: 28.6139, lng: 77.209 },
  { id: "CU-03", temp: -1, status: "active", lat: 13.0827, lng: 80.2707 },
  { id: "CU-04", temp: 3, status: "idle", lat: 22.5726, lng: 88.3639 },
]

export default function CoolingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Header */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2 tracking-wide">
          Cooling System Monitoring
        </h1>
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          Cold-Chain Compliance
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-2">
          Monitor all refrigeration units for vaccines and temperature-sensitive pharmaceuticals.
        </p>
      </header>

      {/* Cooling Units Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 relative z-10">
        {coolingUnits.map((unit) => (
          <div
            key={unit.id}
            className="glass p-6 rounded-2xl border border-border/50 shadow-lg hover:scale-105 transition-transform duration-300 relative group"
          >
            {/* Unit ID */}
            <h2 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 neon-text">
              <Snowflake size={18} /> {unit.id}
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

            {/* Temperature Gauge */}
            <div className="w-32 h-32 mx-auto mt-4">
              <CircularProgressbar
                value={unit.temp + 10} // scaled for display
                maxValue={20}
                text={`${unit.temp}°C`}
                styles={buildStyles({
                  pathColor:
                    unit.temp > 2
                      ? "#f87171"
                      : unit.temp < -2
                      ? "#3b82f6"
                      : "#34d399",
                  textColor: "#ffffff",
                  trailColor: "rgba(255,255,255,0.1)",
                })}
              />
              <span className="text-sm text-muted-foreground block text-center mt-2">
                Temperature
              </span>
            </div>

            {/* Mini-map */}
            <div className="w-full h-40 mt-4 rounded-lg overflow-hidden border border-cyan-500">
              <MapPreview
                lat={unit.lat}
                lng={unit.lng}
                vehicleId={unit.id}
                status={unit.status}
              />
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 pb-12">
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg">
          <h2 className="text-xl font-semibold neon-text mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => alert("Cooling data refreshed!")}
              className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-lg hover:bg-cyan-400/30 transition"
            >
              Refresh Cooling Data
            </button>
            <button
              onClick={() => alert("Alert acknowledged!")}
              className="px-4 py-2 bg-red-500/20 border border-red-400 rounded-lg hover:bg-red-400/30 transition"
            >
              Acknowledge Alert
            </button>
            <button
              onClick={() => alert("All cooling units highlighted on map!")}
              className="px-4 py-2 bg-green-500/20 border border-green-400 rounded-lg hover:bg-green-400/30 transition"
            >
              Show Units on Map
            </button>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="container mx-auto px-4 pb-16">
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg">
          <h2 className="text-xl font-semibold neon-text mb-4 flex items-center gap-2">
            <AlertTriangle size={18} /> Recent Activity
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✅ CU-01 temperature stable</li>
            <li>⚠️ CU-02 exceeded threshold</li>
            <li>❄️ CU-03 running normal</li>
            <li>⚠️ CU-04 temperature spike detected</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
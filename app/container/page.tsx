"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Thermometer, Droplet, Zap, AlertTriangle } from "lucide-react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

// Dynamic import of MapPreview (client-side only)
const MapPreview = dynamic(() => import("../logistics/MapPreview"), {
  ssr: false,
})

// Example container data
const containers = [
  {
    id: "CNT-01",
    temp: 2.4,
    humidity: 65,
    vibration: 0.02,
    status: "active",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "CNT-02",
    temp: 4.1,
    humidity: 70,
    vibration: 0.05,
    status: "alert",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "CNT-03",
    temp: 1.8,
    humidity: 60,
    vibration: 0.01,
    status: "active",
    lat: 13.0827,
    lng: 80.2707,
  },
  {
    id: "CNT-04",
    temp: 3.5,
    humidity: 68,
    vibration: 0.03,
    status: "idle",
    lat: 22.5726,
    lng: 88.3639,
  },
]

export default function ContainerPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Page Header */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2 tracking-wide">
          Container Monitoring
        </h1>
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          MEDISAFE CONTROL SYSTEM
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-2">
          Monitor temperature, humidity, and vibration of all containers in real-time.
        </p>
      </header>

      {/* Container Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 relative z-10">
        {containers.map((container) => (
          <div
            key={container.id}
            className="glass p-6 rounded-2xl border border-border/50 shadow-lg hover:scale-105 transition-transform duration-300 relative group"
          >
            {/* Container ID */}
            <h2 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 neon-text">
              <Thermometer size={18} /> {container.id}
            </h2>

            {/* Status Badge */}
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold uppercase ${
                container.status === "active"
                  ? "bg-green-500/30 text-green-400"
                  : container.status === "alert"
                  ? "bg-red-500/30 text-red-400 animate-pulse"
                  : "bg-gray-500/30 text-gray-300"
              }`}
            >
              {container.status.toUpperCase()}
            </span>

            {/* Gauges */}
            <div className="flex justify-between mt-4 gap-2">
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={container.temp * 10} // scaling for visual
                  maxValue={50}
                  text={`${container.temp}°C`}
                  styles={buildStyles({
                    pathColor:
                      container.temp > 4
                        ? "#f87171"
                        : container.temp < 2
                        ? "#60a5fa"
                        : "#34d399",
                    textColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.1)",
                  })}
                />
                <span className="text-[10px] text-muted-foreground mt-1 block text-center">
                  Temp
                </span>
              </div>

              <div className="w-16 h-16">
                <CircularProgressbar
                  value={container.humidity}
                  maxValue={100}
                  text={`${container.humidity}%`}
                  styles={buildStyles({
                    pathColor: "#3b82f6",
                    textColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.1)",
                  })}
                />
                <span className="text-[10px] text-muted-foreground mt-1 block text-center">
                  Humidity
                </span>
              </div>

              <div className="w-16 h-16">
                <CircularProgressbar
                  value={container.vibration * 100} // scaling
                  maxValue={5}
                  text={`${container.vibration}g`}
                  styles={buildStyles({
                    pathColor:
                      container.vibration > 0.04
                        ? "#f87171"
                        : "#34d399",
                    textColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.1)",
                  })}
                />
                <span className="text-[10px] text-muted-foreground mt-1 block text-center">
                  Vibration
                </span>
              </div>
            </div>

            {/* Mini-map */}
            <div className="w-full h-40 mt-3 rounded-lg overflow-hidden border border-cyan-500">
              <MapPreview
                lat={container.lat}
                lng={container.lng}
                vehicleId={container.id}
                status={container.status}
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
              onClick={() => alert("Container data refreshed!")}
              className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-lg hover:bg-cyan-400/30 transition"
            >
              Refresh Container Data
            </button>
            <button
              onClick={() => alert("Alert triggered!")}
              className="px-4 py-2 bg-red-500/20 border border-red-400 rounded-lg hover:bg-red-400/30 transition"
            >
              Trigger Alert
            </button>
            <button
              onClick={() => alert("All containers highlighted on map!")}
              className="px-4 py-2 bg-green-500/20 border border-green-400 rounded-lg hover:bg-green-400/30 transition"
            >
              Show Containers on Map
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
            <li>✅ Container #01 temperature stable</li>
            <li>⚠️ Container #02 humidity alert</li>
            <li>🚚 Shipment #45 arrived at checkpoint</li>
            <li>⚠️ Vibration spike detected in CNT-03</li>
            <li>🔐 Unauthorized access attempt blocked</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
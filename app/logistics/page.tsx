"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { Truck, AlertTriangle } from "lucide-react"

// Dynamic import of MapPreview (client-side only)
const MapPreview = dynamic(() => import("./MapPreview"), {
  ssr: false,
})

// Example fleet data
const fleet = [
  { id: "TRK-01", status: "active", route: 76, lat: 19.076, lng: 72.8777 },
  { id: "TRK-02", status: "delayed", route: 42, lat: 28.6139, lng: 77.209 },
  { id: "TRK-03", status: "active", route: 88, lat: 13.0827, lng: 80.2707 },
  { id: "TRK-04", status: "idle", route: 0, lat: 22.5726, lng: 88.3639 },
  { id: "TRK-05", status: "active", route: 55, lat: 12.9716, lng: 77.5946 },
  { id: "TRK-06", status: "active", route: 33, lat: 26.9124, lng: 75.7873 },
  { id: "TRK-07", status: "delayed", route: 21, lat: 17.385, lng: 78.4867 },
  { id: "TRK-08", status: "active", route: 95, lat: 23.0225, lng: 72.5714 },
]

export default function LogisticsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* System Status */}
      <div className="w-full bg-black/30 backdrop-blur-md border-b border-cyan-500/20 px-6 py-2 flex justify-between text-xs md:text-sm text-cyan-300 z-10 relative">
        <span>🟢 System Status: Operational</span>
        <span>📡 Last Sync: Just now</span>
        <span>🔐 Security: Active</span>
      </div>

      {/* Page Header */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2 tracking-wide">
          Logistics Monitoring
        </h1>
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          MEDISAFE CONTROL SYSTEM
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-2">
          Track every truck and container in your fleet with real-time status and route progress.
        </p>
      </header>

      {/* Fleet Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 relative z-10">
        {fleet.map((vehicle) => (
          <div
            key={vehicle.id}
            className="glass p-6 rounded-2xl border border-border/50 shadow-lg hover:scale-105 transition-transform duration-300 relative group"
          >
            {/* Vehicle ID */}
            <h2 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 neon-text">
              <Truck size={18} /> {vehicle.id}
            </h2>

            {/* Status */}
            <span
              className={`text-sm font-medium ${
                vehicle.status === "active"
                  ? "text-green-400"
                  : vehicle.status === "delayed"
                  ? "text-yellow-400"
                  : "text-gray-400"
              }`}
            >
              {vehicle.status.toUpperCase()}
            </span>

            {/* Route Progress */}
            <div className="mt-3 relative w-full h-2 bg-border/30 rounded-full overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ${
                  vehicle.status === "active"
                    ? "bg-green-400"
                    : vehicle.status === "delayed"
                    ? "bg-yellow-400"
                    : "bg-gray-500"
                }`}
                style={{ width: `${vehicle.route}%` }}
              ></div>
            </div>
            <span className="text-xs text-muted-foreground mt-1 block">
              Route Completion: {vehicle.route}%
            </span>

            {/* Embedded Map (client-only) */}
            <div className="w-full h-40 mt-3 rounded-lg overflow-hidden border border-cyan-500">
              <MapPreview
                lat={vehicle.lat}
                lng={vehicle.lng}
                vehicleId={vehicle.id}
                status={vehicle.status}
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
              onClick={() => alert("Fleet data refreshed!")}
              className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-lg hover:bg-cyan-400/30 transition"
            >
              Refresh Fleet Data
            </button>
            <button
              onClick={() => alert("Alert triggered!")}
              className="px-4 py-2 bg-red-500/20 border border-red-400 rounded-lg hover:bg-red-400/30 transition"
            >
              Trigger Alert
            </button>
            <button
              onClick={() => alert("All trucks highlighted on map!")}
              className="px-4 py-2 bg-green-500/20 border border-green-400 rounded-lg hover:bg-green-400/30 transition"
            >
              Show Fleet on Map
            </button>
          </div>
        </div>
      </section>

      {/* System Activity Feed */}
      <section className="container mx-auto px-4 pb-16">
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg">
          <h2 className="text-xl font-semibold neon-text mb-4 flex items-center gap-2">
            <AlertTriangle size={18} /> Recent Activity
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✅ Container #12 temperature stable</li>
            <li>🚚 Shipment #45 reached checkpoint</li>
            <li>⚠️ Delay detected on Truck #02</li>
            <li>🔐 Unauthorized access attempt blocked</li>
            <li>📍 Truck #03 entered checkpoint zone</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
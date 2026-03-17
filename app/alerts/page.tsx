"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { AlertTriangle, CheckCircle, Bell } from "lucide-react"
import { useState } from "react"

interface AlertItem {
  id: string
  type: "temperature" | "humidity" | "vibration" | "security"
  message: string
  severity: "low" | "medium" | "high"
  acknowledged: boolean
}

// Example alert data
const initialAlerts: AlertItem[] = [
  { id: "A01", type: "temperature", message: "Container CNT-02 exceeded temperature threshold", severity: "high", acknowledged: false },
  { id: "A02", type: "humidity", message: "Container CNT-01 humidity slightly high", severity: "medium", acknowledged: false },
  { id: "A03", type: "vibration", message: "Vibration spike detected in CNT-03", severity: "high", acknowledged: false },
  { id: "A04", type: "security", message: "SEC-02 unauthorized access attempt", severity: "high", acknowledged: false },
  { id: "A05", type: "temperature", message: "CU-04 temperature approaching upper limit", severity: "medium", acknowledged: false },
]

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<AlertItem[]>(initialAlerts)
  const [filter, setFilter] = useState<string>("all")

  const filteredAlerts = filter === "all" ? alerts : alerts.filter(a => a.type === filter)

  const acknowledgeAlert = (id: string) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, acknowledged: true } : a))
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Header */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2 tracking-wide">
          Alerts & Notifications
        </h1>
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          Real-Time System Monitoring
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-2">
          Track all alerts from logistics, containers, cooling systems, and security units.
        </p>
      </header>

      {/* Filters */}
      <section className="container mx-auto px-4 py-6 relative z-10 flex flex-wrap gap-3 items-center">
        <span className="text-sm font-semibold text-muted-foreground mr-2">Filter by type:</span>
        {["all", "temperature", "humidity", "vibration", "security"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-lg text-sm border transition ${
              filter === f
                ? "bg-cyan-500/30 border-cyan-400 text-white"
                : "bg-gray-700/20 border-gray-600 text-gray-300 hover:bg-gray-700/30"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </section>

      {/* Alerts List */}
      <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {filteredAlerts.map(alert => (
          <div
            key={alert.id}
            className="glass p-4 rounded-2xl border border-border/50 shadow-lg flex flex-col gap-2 group"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <AlertTriangle
                  size={20}
                  className={`${
                    alert.severity === "high"
                      ? "text-red-500 animate-pulse"
                      : alert.severity === "medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                />
                <span className="text-sm font-semibold">{alert.type.toUpperCase()}</span>
              </div>
              {alert.acknowledged && <CheckCircle size={18} className="text-green-400" />}
            </div>
            <p className="text-sm text-muted-foreground">{alert.message}</p>
            <div className="flex justify-between mt-2">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  alert.severity === "high"
                    ? "bg-red-500/30 text-red-400"
                    : alert.severity === "medium"
                    ? "bg-yellow-500/30 text-yellow-400"
                    : "bg-green-500/30 text-green-400"
                }`}
              >
                {alert.severity.toUpperCase()}
              </span>
              {!alert.acknowledged && (
                <button
                  onClick={() => acknowledgeAlert(alert.id)}
                  className="px-2 py-1 text-xs border border-cyan-400 rounded-lg hover:bg-cyan-400/30 transition"
                >
                  Acknowledge
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 pb-12">
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg flex flex-wrap gap-3">
          <h2 className="text-xl font-semibold neon-text mb-2 flex items-center gap-2">
            <Bell size={18} /> Quick Actions
          </h2>
          <button
            onClick={() => alert("All alerts acknowledged!")}
            className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-lg hover:bg-cyan-400/30 transition"
          >
            Acknowledge All Alerts
          </button>
          <button
            onClick={() => alert("Filters cleared!")}
            className="px-4 py-2 bg-green-500/20 border border-green-400 rounded-lg hover:bg-green-400/30 transition"
          >
            Clear Filters
          </button>
          <button
            onClick={() => alert("Alerts refreshed!")}
            className="px-4 py-2 bg-yellow-500/20 border border-yellow-400 rounded-lg hover:bg-yellow-400/30 transition"
          >
            Refresh Alerts
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
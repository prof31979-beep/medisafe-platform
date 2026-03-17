"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { BarChart3, Thermometer, Droplet, Activity } from "lucide-react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { useState } from "react"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Example telemetry data
const containers = ["CNT-01", "CNT-02", "CNT-03"]
const labels = ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25"]

const telemetryData = {
  "CNT-01": {
    temperature: [2, 1, 3, 2, 2, 1],
    humidity: [45, 47, 46, 44, 45, 46],
    vibration: [0, 1, 0, 0, 0, 1],
  },
  "CNT-02": {
    temperature: [0, 0, 1, 0, -1, 0],
    humidity: [50, 52, 51, 50, 51, 50],
    vibration: [1, 2, 1, 1, 1, 1],
  },
  "CNT-03": {
    temperature: [3, 2, 2, 3, 2, 3],
    humidity: [40, 41, 42, 40, 41, 42],
    vibration: [0, 0, 1, 0, 0, 0],
  },
}

export default function AnalyticsPage() {
  const [selectedContainer, setSelectedContainer] = useState<string>("CNT-01")

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: telemetryData[selectedContainer].temperature,
        borderColor: "#34d399",
        backgroundColor: "#34d39933",
        tension: 0.4,
      },
      {
        label: "Humidity (%)",
        data: telemetryData[selectedContainer].humidity,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f633",
        tension: 0.4,
      },
      {
        label: "Vibration",
        data: telemetryData[selectedContainer].vibration,
        borderColor: "#f87171",
        backgroundColor: "#f8717133",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: `Telemetry for ${selectedContainer}`, color: "#ffffff" },
    },
    scales: {
      x: { ticks: { color: "#ffffff" } },
      y: { ticks: { color: "#ffffff" } },
    },
  }

  // KPI averages
  const avg = (arr: number[]) => (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1)

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Header */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2 tracking-wide">
          Analytics Dashboard
        </h1>
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          Real-Time Telemetry Visualization
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-2">
          Visualize temperature, humidity, and vibration for all containers in real time.
        </p>
      </header>

      {/* Container Selector */}
      <section className="container mx-auto px-4 py-6 relative z-10 flex flex-wrap gap-3 items-center justify-center">
        {containers.map(c => (
          <button
            key={c}
            onClick={() => setSelectedContainer(c)}
            className={`px-4 py-2 rounded-lg text-sm border transition ${
              selectedContainer === c
                ? "bg-cyan-500/30 border-cyan-400 text-white"
                : "bg-gray-700/20 border-gray-600 text-gray-300 hover:bg-gray-700/30"
            }`}
          >
            {c}
          </button>
        ))}
      </section>

      {/* KPI Cards */}
      <section className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg flex flex-col items-center">
          <Thermometer size={24} className="text-green-400 mb-2" />
          <span className="text-sm text-muted-foreground">Avg Temperature</span>
          <span className="text-xl font-bold neon-text">{avg(telemetryData[selectedContainer].temperature)}°C</span>
        </div>
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg flex flex-col items-center">
          <Droplet size={24} className="text-blue-400 mb-2" />
          <span className="text-sm text-muted-foreground">Avg Humidity</span>
          <span className="text-xl font-bold neon-text">{avg(telemetryData[selectedContainer].humidity)}%</span>
        </div>
        <div className="glass p-6 rounded-2xl border border-border/50 shadow-lg flex flex-col items-center">
          <Activity size={24} className="text-red-400 mb-2" />
          <span className="text-sm text-muted-foreground">Avg Vibration</span>
          <span className="text-xl font-bold neon-text">{avg(telemetryData[selectedContainer].vibration)}</span>
        </div>
      </section>

      {/* Combined Telemetry Graph */}
      <section className="container mx-auto px-4 py-12 relative z-10 glass p-6 rounded-2xl border border-border/50 shadow-lg">
        <Line data={data} options={options} />
      </section>

      <Footer />
    </main>
  )
}
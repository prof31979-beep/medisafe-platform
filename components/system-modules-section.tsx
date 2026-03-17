"use client";
import Link from "next/link";

const modules = [
  { name: "Logistics Monitoring", path: "/logistics", icon: "🚚" },
  { name: "Alerts System", path: "/alerts", icon: "🚨" },
  { name: "Cooling System", path: "/cooling", icon: "❄️" },
  { name: "Analytics Dashboard", path: "/analytics", icon: "📊" },
  { name: "Security System", path: "/security", icon: "🔐" },
  { name: "Container Monitoring", path: "/container", icon: "📦" },
];

export function SystemModulesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0a0a2a] to-[#10103f] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center neon-text mb-12">
        System Modules
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {modules.map((mod) => (
          <Link key={mod.name} href={mod.path}>
            <div className="bg-[#111144] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg hover:scale-105 hover:bg-[#0ff] hover:text-[#0a0a2a] transition-all duration-300">
              <span className="text-5xl mb-4">{mod.icon}</span>
              <h3 className="text-xl md:text-2xl font-semibold">{mod.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
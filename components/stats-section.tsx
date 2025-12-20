"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      value: "2,500+",
      label: "Verified Companions",
      color: "text-purple-600",
    },
    {
      value: "29 min",
      label: "Avg Response Time",
      color: "text-pink-600",
    },
    {
      value: "99.2%",
      label: "Satisfaction Rate",
      color: "text-green-600",
    },
    {
      value: "50,000+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
  ]

  return (
    <section className="py-10 bg-white border-b">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-1 ${mounted ? "animate-in fade-in slide-in-from-bottom-4" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

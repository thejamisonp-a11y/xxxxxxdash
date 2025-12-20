"use client"

import { useEffect, useState } from "react"
import { Users, Clock, TrendingUp } from "lucide-react"

export function LiveStats() {
  const [onlineCompanions, setOnlineCompanions] = useState(127)
  const [bookingsLastHour, setBookingsLastHour] = useState(43)
  const [activeUsers, setActiveUsers] = useState(2847)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCompanions((prev) => Math.max(100, prev + Math.floor(Math.random() * 5) - 2))
      setBookingsLastHour((prev) => Math.max(30, prev + Math.floor(Math.random() * 3)))
      setActiveUsers((prev) => Math.max(2500, prev + Math.floor(Math.random() * 20) - 8))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-primary to-pink-600 text-white py-4 px-6 rounded-xl shadow-lg">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center gap-1">
          <Users className="h-5 w-5 opacity-80 hidden sm:block" />
          <div className="font-bold text-xl md:text-2xl">{onlineCompanions}</div>
          <div className="text-white/80 text-xs md:text-sm">companions online</div>
        </div>
        <div className="border-l border-r border-white/20 flex flex-col items-center gap-1">
          <Clock className="h-5 w-5 opacity-80 hidden sm:block" />
          <div className="font-bold text-xl md:text-2xl">{bookingsLastHour}</div>
          <div className="text-white/80 text-xs md:text-sm">bookings/hour</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <TrendingUp className="h-5 w-5 opacity-80 hidden sm:block" />
          <div className="font-bold text-xl md:text-2xl">{activeUsers.toLocaleString()}</div>
          <div className="text-white/80 text-xs md:text-sm">active today</div>
        </div>
      </div>
    </div>
  )
}

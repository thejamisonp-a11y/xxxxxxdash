"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useTheme } from "@/lib/theme-context"

export function HeroSection() {
  const router = useRouter()
  const [address, setAddress] = useState("")
  const { category, setCategory } = useTheme()

  const handleSearch = () => {
    if (address.trim()) {
      router.push(`/browse?location=${encodeURIComponent(address)}`)
    } else {
      router.push("/browse")
    }
  }

  const handleCategoryClick = (cat: "women" | "men" | "trans" | "default") => {
    setCategory(cat)
    if (cat === "default") {
      router.push("/browse")
    } else {
      router.push(`/browse?category=${cat}`)
    }
  }

  const filterButtonBase = `
    px-6 py-3 font-semibold text-base
    rounded-full
    shadow-[0_4px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)]
    hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)]
    hover:translate-y-[2px]
    active:shadow-none active:translate-y-[4px]
    transition-all duration-100
  `

  const filterButtons = [
    { id: "default", label: "All Genders", count: "20,000+" },
    { id: "women", label: "Female", count: "12,000+" },
    { id: "men", label: "Male", count: "5,000+" },
    { id: "trans", label: "Trans", count: "2,500+" },
  ] as const

  return (
    <section className="bg-gradient-primary py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white drop-shadow-lg">
              Connect With Premium
              <br />
              Professionals
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Verified companions available 24/7. Fast, safe, and confidential. Join 50,000+ satisfied clients
              worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => handleCategoryClick(btn.id)}
                className={`
                  ${filterButtonBase}
                  ${
                    category === btn.id
                      ? "bg-white text-primary shadow-[0_2px_0_0_rgba(0,0,0,0.2)] translate-y-[2px]"
                      : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                  }
                `}
              >
                {btn.label}
                <span className="ml-2 text-xs opacity-70">{btn.count}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-white rounded-full shadow-2xl">
              <div className="flex-1 relative flex items-center">
                <MapPin className="absolute left-4 h-5 w-5 text-gray-400 flex-shrink-0" />
                <Input
                  placeholder="Enter your location or city..."
                  className="pl-12 h-14 text-base border-0 focus-visible:ring-0 bg-transparent rounded-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  aria-label="Location"
                />
              </div>
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:opacity-90 h-14 px-8 rounded-full whitespace-nowrap flex-shrink-0 font-semibold text-base shadow-lg"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                Find Now
              </Button>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => router.push("/browse")}
                className="text-white hover:text-white/80 font-semibold text-sm flex items-center gap-1 transition-opacity group"
              >
                Browse all companions
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>127 online now</span>
            </div>
            <div className="flex items-center gap-2">
              <span>★ 4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span>100% Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { useTheme } from "@/lib/theme-context"

export function HeroSection() {
  const router = useRouter()
  const [address, setAddress] = useState("")
  const { setCategory } = useTheme()

  const handleSearch = () => {
    if (address.trim()) {
      router.push(`/browse?location=${encodeURIComponent(address)}`)
    } else {
      router.push("/browse")
    }
  }

  const handleCategoryClick = (category: 'women' | 'men' | 'trans') => {
    setCategory(category)
    router.push(`/browse?category=${category}`)
  }

  return (
    <section className="bg-gradient-primary py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white drop-shadow-lg">
              Discreet Premium Companions
              <br />
              Delivered On-Demand
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow">
              Verified professionals available 24/7. Fast, safe, and confidential. Join 50,000+ satisfied clients.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-6 font-semibold"
              onClick={() => handleCategoryClick('women')}
            >
              Women
              <span className="ml-2 text-xs opacity-70 font-normal">12,000+</span>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-6 font-semibold"
              onClick={() => handleCategoryClick('men')}
            >
              Men
              <span className="ml-2 text-xs opacity-70 font-normal">5,000+</span>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-6 font-semibold"
              onClick={() => handleCategoryClick('trans')}
            >
              Trans
              <span className="ml-2 text-xs opacity-70 font-normal">3,000+</span>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col sm:flex-row gap-2 p-1 bg-white rounded-full shadow-2xl">
              <div className="flex-1 relative flex items-center">
                <MapPin className="absolute left-4 h-5 w-5 text-gray-400 flex-shrink-0" />
                <Input
                  placeholder="Enter your delivery address..."
                  className="pl-12 h-12 text-base border-0 focus-visible:ring-0 bg-transparent"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  aria-label="Delivery address"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white hover:opacity-90 h-12 px-8 rounded-full whitespace-nowrap flex-shrink-0 font-semibold" 
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                Find Now
              </Button>
            </div>

            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => router.push("/browse")}
                className="text-white hover:text-white/80 font-semibold text-sm flex items-center gap-1 transition-opacity"
              >
                Browse all companions <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, X } from "lucide-react"
import { useState } from "react"

export function BrowseFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [gender, setGender] = useState(searchParams.get("category") || "all")
  const [status, setStatus] = useState(searchParams.get("status") || "all")
  const [priceRange, setPriceRange] = useState(searchParams.get("priceRange") || "any")
  const [distance, setDistance] = useState(searchParams.get("distance") || "any")
  const [rating, setRating] = useState(searchParams.get("rating") || "any")

  const handleFilter = () => {
    const params = new URLSearchParams()
    if (gender !== "all") params.set("category", gender)
    if (status !== "all") params.set("status", status)
    if (priceRange !== "any") params.set("priceRange", priceRange)
    if (distance !== "any") params.set("distance", distance)
    if (rating !== "any") params.set("rating", rating)

    router.push(`/browse${params.toString() ? `?${params.toString()}` : ""}`)
  }

  const clearFilters = () => {
    setGender("all")
    setStatus("all")
    setPriceRange("any")
    setDistance("any")
    setRating("any")
    router.push("/browse")
  }

  const hasActiveFilters =
    gender !== "all" || status !== "all" || priceRange !== "any" || distance !== "any" || rating !== "any"

  return (
    <div className="bg-white border-b shadow-sm sticky top-[88px] md:top-[140px] z-40">
      <div className="container px-4 py-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter Icon */}
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filters:</span>
          </div>

          {/* Gender Filter */}
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-[140px] bg-white border-gray-200">
              <SelectValue placeholder="All Genders" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="women">Women</SelectItem>
              <SelectItem value="men">Men</SelectItem>
              <SelectItem value="trans">Trans</SelectItem>
              <SelectItem value="nonbinary">Non-Binary</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[150px] bg-white border-gray-200">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="online">Online Now</SelectItem>
              <SelectItem value="available">Available Today</SelectItem>
            </SelectContent>
          </Select>

          {/* Price Range Filter */}
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-[140px] bg-white border-gray-200">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="0-200">$0 - $200</SelectItem>
              <SelectItem value="200-400">$200 - $400</SelectItem>
              <SelectItem value="400-600">$400 - $600</SelectItem>
              <SelectItem value="600+">$600+</SelectItem>
            </SelectContent>
          </Select>

          {/* Distance Filter */}
          <Select value={distance} onValueChange={setDistance}>
            <SelectTrigger className="w-[150px] bg-white border-gray-200">
              <SelectValue placeholder="Any Distance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Distance</SelectItem>
              <SelectItem value="5">Within 5 miles</SelectItem>
              <SelectItem value="10">Within 10 miles</SelectItem>
              <SelectItem value="25">Within 25 miles</SelectItem>
              <SelectItem value="50">Within 50 miles</SelectItem>
            </SelectContent>
          </Select>

          {/* Rating Filter */}
          <Select value={rating} onValueChange={setRating}>
            <SelectTrigger className="w-[130px] bg-white border-gray-200">
              <SelectValue placeholder="Any Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Rating</SelectItem>
              <SelectItem value="4.5">4.5+ Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3.5">3.5+ Stars</SelectItem>
            </SelectContent>
          </Select>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
            <Button onClick={handleFilter} size="sm" className="bg-gradient-primary text-white">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

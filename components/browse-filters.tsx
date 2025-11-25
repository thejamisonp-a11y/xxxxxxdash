"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from 'lucide-react'
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

  return (
    <div className="bg-white border-b shadow-sm sticky top-16 z-40 text-center p-[auto] m-auto">
      <div className="container leading-5 m-[ay] p-[auto] px-[auto]">
        <div className="flex flex-wrap ml-2.5 px-2.5 gap-[10] justify-evenly items-start leading-6 text-left">
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="All Genders" />
              <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="women">Women</SelectItem>
              <SelectItem value="men">Men</SelectItem>
              <SelectItem value="trans">Trans</SelectItem>
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="All Status" />
              <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="online">Online Now</SelectItem>
              <SelectItem value="available">Available Today</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Price Range" />
              <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="0-200">$0 - $200</SelectItem>
              <SelectItem value="200-400">$200 - $400</SelectItem>
              <SelectItem value="400-600">$400 - $600</SelectItem>
              <SelectItem value="600+">$600+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={distance} onValueChange={setDistance}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Any Distance" />
              <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Distance</SelectItem>
              <SelectItem value="5">Within 5 miles</SelectItem>
              <SelectItem value="10">Within 10 miles</SelectItem>
              <SelectItem value="25">Within 25 miles</SelectItem>
              <SelectItem value="50">Within 50 miles</SelectItem>
            </SelectContent>
          </Select>

          <Select value={rating} onValueChange={setRating}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Any Rating" />
              <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Rating</SelectItem>
              <SelectItem value="4.5">4.5+ Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3.5">3.5+ Stars</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleFilter} className="ml-auto bg-gradient-primary text-white">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  )
}

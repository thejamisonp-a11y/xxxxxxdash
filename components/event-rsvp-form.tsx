"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Check } from "lucide-react"
import { useRouter } from "next/navigation"

interface EventRSVPFormProps {
  eventId: string
  isRegistered: boolean
  isFull: boolean
  existingRSVP?: any
}

export function EventRSVPForm({ eventId, isRegistered, isFull, existingRSVP }: EventRSVPFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [plusOne, setPlusOne] = useState(existingRSVP?.plus_one || false)
  const [dietaryRestrictions, setDietaryRestrictions] = useState(existingRSVP?.dietary_restrictions || "")
  const [specialRequests, setSpecialRequests] = useState(existingRSVP?.special_requests || "")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implement RSVP creation/update
      console.log("[v0] Submitting RSVP:", { eventId, plusOne, dietaryRestrictions, specialRequests })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      router.refresh()
    } catch (error) {
      console.error("[v0] RSVP error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (isRegistered && existingRSVP) {
    return (
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            <CardTitle>You're Registered!</CardTitle>
          </div>
          <CardDescription>We'll send you a reminder before the event</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full bg-transparent" disabled={loading}>
            Cancel Registration
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (isFull) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Event Full</CardTitle>
          <CardDescription>This event has reached maximum capacity</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>RSVP for This Event</CardTitle>
        <CardDescription>Secure your spot at this exclusive event</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="plusOne"
              checked={plusOne}
              onCheckedChange={(checked) => setPlusOne(checked as boolean)}
              disabled={loading}
            />
            <Label htmlFor="plusOne" className="text-sm cursor-pointer">
              Bring a +1
            </Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary">Dietary Restrictions (Optional)</Label>
            <Textarea
              id="dietary"
              placeholder="e.g., Vegetarian, Gluten-free, Nut allergy..."
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              disabled={loading}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requests">Special Requests (Optional)</Label>
            <Textarea
              id="requests"
              placeholder="Any special accommodations or requests..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              disabled={loading}
              rows={2}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirm RSVP
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

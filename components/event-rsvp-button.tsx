"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface EventRSVPButtonProps {
  eventId: string
  isRegistered: boolean
  isFull: boolean
  rsvpId?: string
}

export function EventRSVPButton({ eventId, isRegistered, isFull, rsvpId }: EventRSVPButtonProps) {
  if (isRegistered) {
    return (
      <Button variant="outline" className="flex-1 bg-transparent" disabled>
        <Check className="mr-2 h-4 w-4" />
        Registered
      </Button>
    )
  }

  if (isFull) {
    return (
      <Button variant="outline" className="flex-1 bg-transparent" disabled>
        Event Full
      </Button>
    )
  }

  return <Button className="flex-1">RSVP</Button>
}

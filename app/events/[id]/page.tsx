import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { EventRSVPForm } from "@/components/event-rsvp-form"

async function getEvent(eventId: string) {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from("events")
    .select(`
      *,
      min_tier:membership_tiers(*),
      event_rsvps(count)
    `)
    .eq("id", eventId)
    .single()

  if (error) {
    console.error("[v0] Error fetching event:", error)
    return null
  }

  return {
    ...data,
    rsvp_count: data.event_rsvps?.[0]?.count || 0,
  }
}

async function getUserRSVP(eventId: string) {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data } = await supabase
    .from("event_rsvps")
    .select("*")
    .eq("event_id", eventId)
    .eq("user_id", user.id)
    .single()

  return data || null
}

async function getUserMembership() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data } = await supabase
    .from("user_memberships")
    .select("*, tier:membership_tiers(*)")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single()

  return data || null
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id)
  const userRSVP = await getUserRSVP(params.id)
  const userMembership = await getUserMembership()

  if (!event) {
    notFound()
  }

  const eventDate = new Date(event.date)
  const isFull = event.capacity && event.rsvp_count >= event.capacity
  const isRegistered = !!userRSVP

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {event.image_url && (
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image src={event.image_url || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
            )}

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="text-3xl">{event.title}</CardTitle>
                  <Badge className="flex-shrink-0">{event.event_type}</Badge>
                </div>
                {event.min_tier && (
                  <Badge variant="outline" className="w-fit">
                    {event.min_tier.display_name}+ Members Only
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">About This Event</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {event.description || "No description available."}
                  </p>
                </div>

                {event.venue_details && (
                  <div>
                    <h3 className="font-semibold mb-2">Venue Details</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{event.venue_details}</p>
                  </div>
                )}

                {event.host_name && (
                  <div>
                    <h3 className="font-semibold mb-2">Hosted By</h3>
                    <p className="font-medium">{event.host_name}</p>
                    {event.host_bio && <p className="text-sm text-muted-foreground mt-1">{event.host_bio}</p>}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {eventDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {eventDate.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>

                {event.capacity && (
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        {event.rsvp_count} / {event.capacity} Attending
                      </p>
                      {isFull && <p className="text-sm text-red-600 dark:text-red-400">Event is full</p>}
                    </div>
                  </div>
                )}

                {event.registration_deadline && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Registration closes {new Date(event.registration_deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {userMembership ? (
              <EventRSVPForm eventId={event.id} isRegistered={isRegistered} isFull={isFull} existingRSVP={userRSVP} />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Members Only</CardTitle>
                  <CardDescription>Upgrade to a VIP membership to RSVP to this event</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/membership">View Membership Plans</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

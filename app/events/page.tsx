import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { EventRSVPButton } from "@/components/event-rsvp-button"

export const metadata = {
  title: "Exclusive Events | whoredash",
  description: "Join our members-only events and networking opportunities",
}

async function getEvents() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get all upcoming events with RSVP count
  const { data: events, error } = await supabase
    .from("events")
    .select(`
      *,
      min_tier:membership_tiers(*),
      event_rsvps(count)
    `)
    .eq("status", "upcoming")
    .gte("date", new Date().toISOString())
    .order("date", { ascending: true })

  if (error) {
    console.error("[v0] Error fetching events:", error)
    return []
  }

  // If user is logged in, fetch their RSVPs
  if (user && events) {
    const { data: userRsvps } = await supabase
      .from("event_rsvps")
      .select("*")
      .eq("user_id", user.id)
      .in(
        "event_id",
        events.map((e) => e.id),
      )

    return events.map((event) => ({
      ...event,
      rsvp_count: event.event_rsvps?.[0]?.count || 0,
      user_rsvp: userRsvps?.find((r) => r.event_id === event.id),
    }))
  }

  return events.map((event) => ({
    ...event,
    rsvp_count: event.event_rsvps?.[0]?.count || 0,
  }))
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

const eventTypeColors = {
  networking: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  exclusive: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  wellness: "bg-green-500/10 text-green-700 dark:text-green-400",
  social: "bg-pink-500/10 text-pink-700 dark:text-pink-400",
}

export default async function EventsPage() {
  const events = await getEvents()
  const userMembership = await getUserMembership()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Exclusive Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow members at curated networking events, wellness sessions, and exclusive gatherings
          </p>
        </div>

        {/* Membership CTA */}
        {!userMembership && (
          <Card className="mb-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Unlock Exclusive Events</CardTitle>
              <CardDescription>
                Upgrade to a VIP membership to access members-only events and networking opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/membership">View Membership Plans</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Events Grid */}
        {events.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No Upcoming Events</h2>
              <p className="text-muted-foreground">Check back soon for new events and networking opportunities</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const eventDate = new Date(event.date)
              const isRegistered = !!event.user_rsvp
              const isFull = event.capacity && event.rsvp_count >= event.capacity

              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {event.image_url && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={event.image_url || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={eventTypeColors[event.event_type as keyof typeof eventTypeColors]}>
                          {event.event_type}
                        </Badge>
                      </div>
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                      {event.min_tier && (
                        <Badge variant="outline" className="flex-shrink-0">
                          {event.min_tier.display_name}+
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="line-clamp-3">{event.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {eventDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {eventDate.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>

                    {event.capacity && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>
                          {event.rsvp_count} / {event.capacity} attending
                        </span>
                      </div>
                    )}

                    <div className="pt-4 flex gap-2">
                      <Button asChild variant="outline" className="flex-1 bg-transparent">
                        <Link href={`/events/${event.id}`}>View Details</Link>
                      </Button>

                      {userMembership && (
                        <EventRSVPButton
                          eventId={event.id}
                          isRegistered={isRegistered}
                          isFull={isFull}
                          rsvpId={event.user_rsvp?.id}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

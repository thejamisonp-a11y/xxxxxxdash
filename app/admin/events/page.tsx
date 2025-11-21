import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, Users, Edit } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Manage Events | Admin",
  description: "Manage events and RSVPs",
}

async function getEvents() {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from("events")
    .select(`
      *,
      min_tier:membership_tiers(display_name),
      event_rsvps(count)
    `)
    .order("date", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching events:", error)
    return []
  }

  return data.map((event) => ({
    ...event,
    rsvp_count: event.event_rsvps?.[0]?.count || 0,
  }))
}

export default async function AdminEventsPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?redirect=/admin/events")
  }

  // TODO: Add proper admin role check

  const events = await getEvents()

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Events</h1>
            <p className="text-muted-foreground">Create and manage exclusive member events</p>
          </div>
          <Button asChild>
            <Link href="/admin/events/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      {event.title}
                      <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {event.event_type} • {event.min_tier?.display_name || "All Members"}+
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/events/${event.id}/edit`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{event.rsvp_count} RSVPs</span>
                    {event.capacity && <span className="text-muted-foreground">/ {event.capacity}</span>}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">{event.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {events.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Events Yet</h2>
              <p className="text-muted-foreground mb-4">Create your first event to get started</p>
              <Button asChild>
                <Link href="/admin/events/create">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Event
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

import { createClient } from "@/lib/supabase/server"
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingsList } from "@/components/bookings-list"

export default async function BookingsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: allBookings } = await supabase
    .from("bookings")
    .select("*, companions(*)")
    .eq("client_id", user.id)
    .order("created_at", { ascending: false })

  const pendingBookings = allBookings?.filter((b) => b.status === "pending") || []
  const confirmedBookings = allBookings?.filter((b) => b.status === "confirmed") || []
  const completedBookings = allBookings?.filter((b) => b.status === "completed") || []

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
          <p className="text-muted-foreground">Manage all your companion bookings</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({allBookings?.length || 0})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({pendingBookings.length})</TabsTrigger>
                <TabsTrigger value="confirmed">Confirmed ({confirmedBookings.length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({completedBookings.length})</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <BookingsList bookings={allBookings || []} />
              </TabsContent>
              <TabsContent value="pending">
                <BookingsList bookings={pendingBookings} />
              </TabsContent>
              <TabsContent value="confirmed">
                <BookingsList bookings={confirmedBookings} />
              </TabsContent>
              <TabsContent value="completed">
                <BookingsList bookings={completedBookings} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

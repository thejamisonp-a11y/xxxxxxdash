import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Diamond, Sparkles, Star } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "VIP Membership | whoredash",
  description: "Unlock exclusive benefits with our premium membership tiers",
}

async function getMembershipTiers() {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from("membership_tiers")
    .select("*")
    .order("price_monthly", { ascending: true })

  if (error) {
    console.error("[v0] Error fetching membership tiers:", error)
    return []
  }

  return data || []
}

async function getUserMembership() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data, error } = await supabase
    .from("user_memberships")
    .select("*, tier:membership_tiers(*)")
    .eq("user_id", user.id)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("[v0] Error fetching user membership:", error)
  }

  return data || null
}

const tierIcons = {
  basic: Star,
  gold: Crown,
  platinum: Sparkles,
  diamond: Diamond,
}

const tierColors = {
  basic: "text-gray-500",
  gold: "text-yellow-500",
  platinum: "text-purple-500",
  diamond: "text-cyan-400",
}

export default async function MembershipPage() {
  const tiers = await getMembershipTiers()
  const userMembership = await getUserMembership()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">VIP Membership</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elevate your experience with exclusive benefits, priority access, and premium features
          </p>
        </div>

        {/* Current Membership Status */}
        {userMembership && (
          <Card className="mb-12 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Your Current Membership
                <Badge variant="secondary" className="ml-2">
                  {userMembership.tier?.display_name}
                </Badge>
              </CardTitle>
              <CardDescription>
                Status: <span className="font-semibold capitalize">{userMembership.status}</span>
                {userMembership.current_period_end && (
                  <> • Renews on {new Date(userMembership.current_period_end).toLocaleDateString()}</>
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        {/* Membership Tiers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {tiers.map((tier) => {
            const Icon = tierIcons[tier.name as keyof typeof tierIcons] || Star
            const isCurrentTier = userMembership?.tier?.id === tier.id
            const isPremium = tier.name !== "basic"

            return (
              <Card
                key={tier.id}
                className={`relative ${isPremium ? "border-2 border-primary/30 shadow-lg" : ""} ${isCurrentTier ? "ring-2 ring-primary" : ""}`}
              >
                {isPremium && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
                    POPULAR
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-8 w-8 ${tierColors[tier.name as keyof typeof tierColors]}`} />
                    {isCurrentTier && <Badge variant="default">Current Plan</Badge>}
                  </div>
                  <CardTitle className="text-2xl">{tier.display_name}</CardTitle>
                  <CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      ${(tier.price_monthly / 100).toFixed(0)}
                      <span className="text-base font-normal text-muted-foreground">/month</span>
                    </div>
                    {tier.price_yearly > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ${(tier.price_yearly / 100).toFixed(0)}/year (Save $
                        {((tier.price_monthly * 12 - tier.price_yearly) / 100).toFixed(0)})
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {(tier.features as string[]).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  {isCurrentTier ? (
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/membership/manage">Manage Subscription</Link>
                    </Button>
                  ) : (
                    <Button className="w-full" variant={isPremium ? "default" : "outline"} asChild>
                      <Link href={`/membership/subscribe?tier=${tier.id}`}>
                        {tier.name === "basic" ? "Current Plan" : "Upgrade Now"}
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Benefits Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card>
            <CardHeader>
              <Crown className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Priority Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get first access to the most sought-after companions with guaranteed priority in the booking queue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-primary mb-2" />
              <CardTitle>24/7 Concierge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dedicated support team available around the clock to assist with bookings, special requests, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Diamond className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Exclusive Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access to members-only networking events, wellness sessions, and exclusive social gatherings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

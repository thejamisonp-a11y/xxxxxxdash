import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { redirect } from "next/navigation"
import { Calendar, CreditCard, Crown } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Manage Subscription | whoredash",
  description: "Manage your VIP membership subscription",
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

  if (error) {
    console.error("[v0] Error fetching user membership:", error)
    return null
  }

  return data
}

export default async function ManageMembershipPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?redirect=/membership/manage")
  }

  const membership = await getUserMembership()

  if (!membership) {
    redirect("/membership")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/membership" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Membership Plans
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Manage Subscription</h1>

        {/* Current Plan */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-6 w-6 text-primary" />
                  {membership.tier?.display_name} Membership
                </CardTitle>
                <CardDescription className="mt-2">
                  Status:{" "}
                  <Badge variant={membership.status === "active" ? "default" : "secondary"}>{membership.status}</Badge>
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">
                  $
                  {(
                    (membership.billing_cycle === "yearly"
                      ? membership.tier?.price_yearly
                      : membership.tier?.price_monthly) / 100
                  ).toFixed(0)}
                </p>
                <p className="text-sm text-muted-foreground capitalize">
                  per {membership.billing_cycle === "yearly" ? "year" : "month"}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Billing Details
                </h3>
                {membership.current_period_start && (
                  <p className="text-sm text-muted-foreground">
                    Current period: {new Date(membership.current_period_start).toLocaleDateString()} -{" "}
                    {new Date(membership.current_period_end!).toLocaleDateString()}
                  </p>
                )}
                {membership.current_period_end && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Next billing date: {new Date(membership.current_period_end).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Payment Method
                </h3>
                <p className="text-sm text-muted-foreground">
                  {membership.stripe_customer_id ? "Card ending in ****" : "No payment method on file"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3">
              {(membership.tier?.features as string[]).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Crown className="h-3 w-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Actions</CardTitle>
            <CardDescription>Manage your subscription settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Upgrade Plan</p>
                <p className="text-sm text-muted-foreground">Access more exclusive benefits</p>
              </div>
              <Button asChild>
                <Link href="/membership">View Plans</Link>
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Update Payment Method</p>
                <p className="text-sm text-muted-foreground">Change your billing information</p>
              </div>
              <Button variant="outline">Update</Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/10">
              <div>
                <p className="font-medium text-red-900 dark:text-red-200">Cancel Subscription</p>
                <p className="text-sm text-red-700 dark:text-red-400">
                  You'll continue to have access until{" "}
                  {membership.current_period_end && new Date(membership.current_period_end).toLocaleDateString()}
                </p>
              </div>
              <Button variant="destructive">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

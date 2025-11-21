import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { redirect } from "next/navigation"
import { Check } from "lucide-react"
import Link from "next/link"
import { SubscribeForm } from "@/components/subscribe-form"

export const metadata = {
  title: "Subscribe to VIP Membership | whoredash",
  description: "Complete your VIP membership subscription",
}

async function getMembershipTier(tierId: string) {
  const supabase = await createServerClient()

  const { data, error } = await supabase.from("membership_tiers").select("*").eq("id", tierId).single()

  if (error) {
    console.error("[v0] Error fetching membership tier:", error)
    return null
  }

  return data
}

export default async function SubscribePage({
  searchParams,
}: {
  searchParams: { tier?: string; cycle?: string }
}) {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?redirect=/membership/subscribe")
  }

  const tierId = searchParams.tier
  const billingCycle = searchParams.cycle || "monthly"

  if (!tierId) {
    redirect("/membership")
  }

  const tier = await getMembershipTier(tierId)

  if (!tier) {
    redirect("/membership")
  }

  const price = billingCycle === "yearly" ? tier.price_yearly : tier.price_monthly
  const savings = billingCycle === "yearly" ? (tier.price_monthly * 12 - tier.price_yearly) / 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/membership" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Membership Plans
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your subscription details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{tier.display_name} Membership</span>
                  <Badge>{billingCycle}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Billed {billingCycle === "yearly" ? "annually" : "monthly"}
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Included Features:</h3>
                <ul className="space-y-2">
                  {(tier.features as string[]).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {savings > 0 && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-sm text-green-700 dark:text-green-400 font-semibold">
                    Save ${savings.toFixed(0)} with annual billing!
                  </p>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(price / 100).toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Charged {billingCycle === "yearly" ? "annually" : "monthly"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Secure payment powered by Stripe</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscribeForm
                tierId={tier.id}
                tierName={tier.display_name}
                price={price}
                billingCycle={billingCycle as "monthly" | "yearly"}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

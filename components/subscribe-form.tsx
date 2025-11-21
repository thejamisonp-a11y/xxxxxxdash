"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

interface SubscribeFormProps {
  tierId: string
  tierName: string
  price: number
  billingCycle: "monthly" | "yearly"
}

export function SubscribeForm({ tierId, tierName, price, billingCycle }: SubscribeFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // TODO: Implement Stripe checkout session creation
      // For now, just show a success message
      console.log("[v0] Creating subscription:", { tierId, tierName, price, billingCycle })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to success page
      router.push("/membership?success=true")
    } catch (err) {
      console.error("[v0] Subscription error:", err)
      setError("Failed to process subscription. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input id="cardNumber" placeholder="4242 4242 4242 4242" required disabled={loading} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">Expiry Date</Label>
          <Input id="expiry" placeholder="MM/YY" required disabled={loading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input id="cvc" placeholder="123" required disabled={loading} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Cardholder Name</Label>
        <Input id="name" placeholder="John Doe" required disabled={loading} />
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Subscribe to {tierName}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By subscribing, you agree to our Terms of Service and Privacy Policy. Your subscription will automatically renew{" "}
        {billingCycle === "yearly" ? "annually" : "monthly"}.
      </p>
    </form>
  )
}

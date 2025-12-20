import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingOverview() {
  const benefits = [
    "No hidden fees - just clear, upfront pricing",
    "Flexible Bookings",
    "Secure Payments",
    "Companion Benefits",
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing for Beautiful Companions</h2>
          <p className="text-lg text-gray-600">No hidden fees, no surprises - just clear, upfront pricing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Client Benefits */}
          <Card className="p-8 border-0 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">For Clients</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Transparent Pricing</p>
                  <p className="text-sm text-gray-600">No hidden fees - just clear, upfront pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Flexible Bookings</p>
                  <p className="text-sm text-gray-600">Book by the hour, day, or custom arrangements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Secure Payments</p>
                  <p className="text-sm text-gray-600">All transactions processed securely and discreetly</p>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-primary text-white hover:opacity-90">Browse Now</Button>
          </Card>

          {/* Companion Benefits */}
          <Card className="p-8 border-0 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Companion Benefits</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Average Earnings: $5,000/mo</p>
                  <p className="text-sm text-gray-600">Competitive rates for quality professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">50,000+ Active Clients</p>
                  <p className="text-sm text-gray-600">Large client base to reach</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Flexible Scheduling & Verified</p>
                  <p className="text-sm text-gray-600">Set your own availability with safety protocols</p>
                </div>
              </div>
            </div>
            <Button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Apply to Join
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

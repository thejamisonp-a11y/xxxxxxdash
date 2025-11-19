import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Pricing Guide</h1>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for all our premium companions
            </p>
          </div>

          {/* Hourly Rates by Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Hourly Rates by Experience Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emerging Companions</CardTitle>
                  <CardDescription>0-2 years experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary">$200-250</div>
                  <p className="text-muted-foreground text-sm">per hour</p>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle>Experienced Companions</CardTitle>
                  <CardDescription>2-5 years experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary">$250-300</div>
                  <p className="text-muted-foreground text-sm">per hour</p>
                  <p className="text-sm font-semibold text-primary">Most Popular</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium/Elite</CardTitle>
                  <CardDescription>5+ years experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary">$300-350+</div>
                  <p className="text-muted-foreground text-sm">per hour</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Booking Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Professional companion for full duration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Discreet and confidential service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Flexible date/time arrangements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Travel within agreed locations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Important Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">Minimum Booking:</span>
                      <span>1 hour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">Cancellation:</span>
                      <span>24-hour notice for full refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">Travel:</span>
                      <span>Local bookings included; overnight rates negotiable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">Payment:</span>
                      <span>Secure via platform; held in escrow</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Discount Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Multi-Hour & Package Discounts</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold">2-4 Hour Booking</span>
                    <span className="text-primary">10% Discount</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold">Full Day (8 hours)</span>
                    <span className="text-primary">20% Discount</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold">Overnight (12 hours)</span>
                    <span className="text-primary">25% Discount</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Weekend Rate Surcharge</span>
                    <span className="text-primary">+15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Costs */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-3">Additional Costs</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>• Travel/transportation outside agreed zone: $50-100/hour</li>
              <li>• Overnight accommodations: Typically covered by client</li>
              <li>• Special events or experiences: Negotiable per companion</li>
              <li>• Platform service fee: Included in quoted price</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

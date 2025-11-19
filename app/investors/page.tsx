import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Shield, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Investor Information</h1>
            <p className="text-xl text-muted-foreground">
              Join us in revolutionizing the companion booking industry
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">340%</div>
                <p className="text-sm text-muted-foreground">YoY Growth Rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BarChart3 className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">$8.5M</div>
                <p className="text-sm text-muted-foreground">Annual Revenue</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
                <p className="text-sm text-muted-foreground">User Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          {/* Market Opportunity */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Market Opportunity</h2>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Global Market</h3>
                  <p className="text-muted-foreground">
                    The global companion booking market is valued at $23.4B and growing at 18% annually. Whoredash 
                    operates in 12 major metropolitan areas with plans to expand to 25 by 2026.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Advantage</h3>
                  <p className="text-muted-foreground">
                    Our proprietary verification system, premium user experience, and comprehensive safety protocols 
                    position us as the industry leader. We've captured 34% of the high-value market segment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Revenue Model</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Commission: 20% per transaction (average $280 booking)</li>
                    <li>Premium memberships: $29.99/month for priority access</li>
                    <li>VIP companion listings: $99/month for enhanced visibility</li>
                    <li>Corporate partnerships: Custom rates for group bookings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Use of Funds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Use of Funds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technology & Infrastructure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>AI matching algorithm</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security & verification</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobile app development</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cloud infrastructure</span>
                    <span className="font-semibold">20%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth & Operations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Geographic expansion</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing & acquisition</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team scaling</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal & compliance</span>
                    <span className="font-semibold">10%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Investment Inquiry</h2>
            <p className="text-muted-foreground mb-6">
              Interested in investing in the future of the companion booking industry?
            </p>
            <Button size="lg">
              <Link href="mailto:investors@whoredash.com">Contact Our Investment Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

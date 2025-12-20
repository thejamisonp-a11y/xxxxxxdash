import { HeroSection } from "@/components/hero-section"
import { CompanionGrid } from "@/components/companion-grid"
import { createClient } from "@/lib/supabase/server"
import { HowItWorks } from "@/components/how-it-works"
import { SecurityFeatures } from "@/components/security-features"
import { CategoryBrowse } from "@/components/category-browse"
import { LiveStats } from "@/components/live-stats"
import { PricingOverview } from "@/components/pricing-overview"
import { StatsSection } from "@/components/stats-section"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: companions, error } = await supabase
    .from("companions")
    .select("*")
    .eq("available", true)
    .order("rating", { ascending: false })
    .limit(12)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Live Statistics */}
        <div className="bg-gray-50 px-4 py-4">
          <div className="container max-w-6xl mx-auto">
            <LiveStats />
          </div>
        </div>

        {/* Featured Companions */}
        <section className="bg-white py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Trending Companions Near You</h2>
              <p className="text-muted-foreground text-lg">Most booked this week - Available now</p>
            </div>
            {companions && companions.length > 0 ? (
              <>
                <CompanionGrid companions={companions.slice(0, 12)} />
                <div className="mt-10 text-center">
                  <a
                    href="/browse"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                  >
                    View All 2,500+ Companions →
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {error
                    ? "Unable to load companions at this time."
                    : "No companions available at the moment. Check back soon!"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Category Browse */}
        <CategoryBrowse />

        {/* How It Works */}
        <HowItWorks />

        {/* Security Features */}
        <SecurityFeatures />

        {/* Pricing Overview */}
        <PricingOverview />

        {/* Join CTA */}
        <section className="bg-gradient-primary py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join as a Companion?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Earn on your own terms. Set your own rates, choose your clients, and enjoy industry-leading safety
              features. Join 2,500+ verified professionals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth/sign-up?type=companion"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

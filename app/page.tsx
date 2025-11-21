import { HeroSection } from "@/components/hero-section"
import { BrowseFilters } from "@/components/browse-filters"
import { CompanionGrid } from "@/components/companion-grid"
import { createClient } from "@/lib/supabase/server"

export default async function HomePage() {
  const supabase = await createClient()

  console.log("[v0] Fetching companions from database...")

  const { data: companions, error } = await supabase
    .from("companions")
    .select("*")
    .eq("available", true)
    .order("rating", { ascending: false })
    .limit(12)

  if (error) {
    console.error("[v0] Error fetching companions:", error)
  } else {
    console.log("[v0] Successfully fetched", companions?.length || 0, "companions")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <BrowseFilters />

        <section className="bg-gray-50 text-center p-12">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Featured Companions</h2>
              <p className="text-muted-foreground">Most popular and highly-rated companions available now</p>
            </div>
            {error ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border p-8 max-w-md mx-auto">
                <p className="text-red-500 mb-2">Unable to load companions</p>
                <p className="text-sm text-muted-foreground">Please try again later or contact support.</p>
              </div>
            ) : companions && companions.length > 0 ? (
              <CompanionGrid companions={companions} />
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border p-8 max-w-md mx-auto">
                <p className="text-muted-foreground">No companions available at the moment. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

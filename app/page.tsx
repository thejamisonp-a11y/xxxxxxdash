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
            {companions && companions.length > 0 ? (
              <CompanionGrid companions={companions} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {error ? "Unable to load companions at this time." : "No companions available at the moment. Check back soon!"}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

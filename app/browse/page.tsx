import { createClient } from "@/lib/supabase/server"
import { CompanionGrid } from "@/components/companion-grid"
import { BrowseFilters } from "@/components/browse-filters"
import type { Companion } from "@/lib/types"

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; location?: string; minRate?: string; maxRate?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()

  let query = supabase.from("companions").select("*").eq("available", true).order("rating", { ascending: false })

  if (params.category) {
    query = query.eq("category", params.category)
  }

  if (params.location) {
    query = query.ilike("location", `%${params.location}%`)
  }

  if (params.minRate) {
    query = query.gte("rate_per_hour", Number.parseInt(params.minRate))
  }

  if (params.maxRate) {
    query = query.lte("rate_per_hour", Number.parseInt(params.maxRate))
  }

  const { data: companions, error } = await query

  if (error) {
    console.error("[v0] Error fetching companions:", error)
  }

  return (
    <div className="min-h-screen bg-background text-center text-centerlder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit justify-between gap-2 rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 items-startr ml-2.5 px-2.5 justify-start gap-[10]">
      <div className="container mx-auto px-4 shadow-sm shadow-xl rounded-md rounded-sm rounded-lg shadow-xl py-[auto]a] pt-[auto]auto]a]">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Companions</h1>
          <p className="text-muted-foreground">Find your perfect match from our verified companions</p>
        </div>

        <BrowseFilters />

        <div className="mt-8">
          {companions && companions.length > 0 ? (
            <CompanionGrid companions={companions as Companion[]} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No companions found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

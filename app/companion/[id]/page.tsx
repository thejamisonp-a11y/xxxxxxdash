import { createClient } from "@/lib/supabase/server"
import { notFound } from 'next/navigation'
import { CompanionProfile } from "@/components/companion-profile"
import { CompanionReviews } from "@/components/companion-reviews"
import type { Companion } from "@/lib/types"

export default async function CompanionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: companion, error } = await supabase.from("companions").select("*").eq("id", id).single()

  if (error || !companion) {
    notFound()
  }

  const { data: reviewsData } = await supabase
    .from("reviews")
    .select("*")
    .eq("companion_id", id)
    .order("created_at", { ascending: false })

  // Get unique client IDs from reviews
  const clientIds = [...new Set(reviewsData?.map((r) => r.client_id).filter(Boolean) || [])]

  // Fetch profiles for these clients
  const { data: profiles } =
    clientIds.length > 0 ? await supabase.from("profiles").select("id, full_name").in("id", clientIds) : { data: [] }

  // Map profiles to reviews
  const reviews =
    reviewsData?.map((review) => ({
      ...review,
      profiles: profiles?.find((p) => p.id === review.client_id) || { full_name: "Anonymous" },
    })) || []

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <CompanionProfile companion={companion as Companion} />
        <div className="mt-12">
          <CompanionReviews reviews={reviews} />
        </div>
      </div>
    </div>
  )
}

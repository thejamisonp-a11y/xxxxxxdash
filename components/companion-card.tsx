import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react'
import type { Companion } from "@/lib/types"

interface CompanionCardProps {
  companion: Companion
}

export function CompanionCard({ companion }: CompanionCardProps) {
  const isPopular = companion.rating >= 4.8 && companion.total_reviews >= 10

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-md group h-full flex flex-col">
      <Link href={`/companion/${companion.id}`} className="flex-1 flex flex-col">
        <div className="aspect-[3/4] relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
          {companion.avatar_url ? (
            <Image
              src={companion.avatar_url || "/placeholder.svg"}
              alt={companion.display_name}
              fill
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <span className="text-5xl font-bold text-gray-300">{companion.display_name[0]}</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {companion.available && (
              <Badge className="bg-green-500 text-white border-0 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse" />
                Online
              </Badge>
            )}
          </div>

          {companion.verified && (
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-blue-500 text-white border-0 shadow-lg">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 space-y-3 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg truncate leading-tight">{companion.display_name}, {companion.age}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{companion.location}</span>
              </div>
            </div>
            <div className="text-right ml-2 flex-shrink-0">
              <p className="text-xl font-bold text-primary">${companion.rate_per_hour}</p>
              <p className="text-xs text-muted-foreground whitespace-nowrap">per hour</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm border-t border-b py-2">
            {companion.rating > 0 && (
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{companion.rating.toFixed(1)}</span>
                <span className="text-muted-foreground text-xs">({companion.total_reviews} reviews)</span>
              </div>
            )}
            {!companion.rating && (
              <span className="text-xs text-muted-foreground">New companion</span>
            )}
            <div className="flex items-center gap-1 text-muted-foreground ml-auto">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs whitespace-nowrap">~15 min</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
            {companion.bio || "Professional companion offering premium experiences. Available for dinner dates, events, and private encounters."}
          </p>

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="text-xs">GFE</Badge>
            <Badge variant="secondary" className="text-xs">Outcall</Badge>
            <Badge variant="secondary" className="text-xs">Dinner Dates</Badge>
          </div>

          {isPopular && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-md p-2.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-amber-900">Most Popular</span>
            </div>
          )}

          <Button className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity mt-auto" size="sm">
            View Profile
          </Button>
        </CardContent>
      </Link>
    </Card>
  )
}

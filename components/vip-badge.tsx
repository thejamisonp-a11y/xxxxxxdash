import { Badge } from "@/components/ui/badge"
import { Crown, Diamond, Sparkles } from "lucide-react"

interface VIPBadgeProps {
  tier: "gold" | "platinum" | "diamond"
  className?: string
}

const tierConfig = {
  gold: {
    icon: Crown,
    label: "Gold",
    className: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-0",
  },
  platinum: {
    icon: Sparkles,
    label: "Platinum",
    className: "bg-gradient-to-r from-purple-400 to-purple-600 text-white border-0",
  },
  diamond: {
    icon: Diamond,
    label: "Diamond",
    className: "bg-gradient-to-r from-cyan-400 to-cyan-600 text-white border-0",
  },
}

export function VIPBadge({ tier, className }: VIPBadgeProps) {
  const config = tierConfig[tier]
  const Icon = config.icon

  return (
    <Badge className={`${config.className} ${className} shadow-lg`}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label} VIP
    </Badge>
  )
}

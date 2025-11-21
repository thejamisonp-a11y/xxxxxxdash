export interface Companion {
  id: string
  user_id: string
  display_name: string
  category: "women" | "men" | "trans"
  age: number
  location: string
  bio: string | null
  rate_per_hour: number
  avatar_url: string | null
  images: string[] | null
  verified: boolean
  available: boolean
  rating: number
  total_reviews: number
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  client_id: string
  companion_id: string
  booking_date: string
  duration_hours: number
  total_amount: number
  delivery_address: string
  special_requests: string | null
  status: "pending" | "confirmed" | "completed" | "cancelled"
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  booking_id: string
  client_id: string
  companion_id: string
  rating: number
  comment: string | null
  created_at: string
}

export interface Profile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  created_at: string
}

export interface MembershipTier {
  id: string
  name: "basic" | "gold" | "platinum" | "diamond"
  display_name: string
  price_monthly: number
  price_yearly: number
  features: string[]
  max_priority_bookings: number
  concierge_access: boolean
  enhanced_privacy: boolean
  event_access_level: "none" | "standard" | "vip" | "exclusive"
  created_at: string
  updated_at: string
}

export interface UserMembership {
  id: string
  user_id: string
  tier_id: string
  tier?: MembershipTier
  stripe_subscription_id?: string
  stripe_customer_id?: string
  status: "active" | "canceled" | "past_due" | "paused"
  billing_cycle: "monthly" | "yearly"
  current_period_start?: string
  current_period_end?: string
  created_at: string
  updated_at: string
  canceled_at?: string
}

export interface Event {
  id: string
  title: string
  description?: string
  event_type: "networking" | "exclusive" | "wellness" | "social"
  date: string
  end_date?: string
  location: string
  venue_details?: string
  capacity?: number
  min_tier_required?: string
  min_tier?: MembershipTier
  image_url?: string
  host_name?: string
  host_bio?: string
  registration_deadline?: string
  status: "upcoming" | "ongoing" | "completed" | "canceled"
  created_at: string
  updated_at: string
  rsvp_count?: number
  user_rsvp?: EventRSVP
}

export interface EventRSVP {
  id: string
  event_id: string
  user_id: string
  status: "registered" | "attended" | "no_show" | "canceled"
  plus_one: boolean
  dietary_restrictions?: string
  special_requests?: string
  checked_in_at?: string
  created_at: string
  updated_at: string
}

export interface PriorityBooking {
  id: string
  user_id: string
  booking_id: string
  priority_level: number
  created_at: string
}

-- Create membership tiers table
CREATE TABLE IF NOT EXISTS public.membership_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE, -- 'basic', 'gold', 'platinum', 'diamond'
  display_name TEXT NOT NULL,
  price_monthly INTEGER NOT NULL, -- in cents
  price_yearly INTEGER NOT NULL, -- in cents
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  max_priority_bookings INTEGER,
  concierge_access BOOLEAN DEFAULT false,
  enhanced_privacy BOOLEAN DEFAULT false,
  event_access_level TEXT DEFAULT 'none', -- 'none', 'standard', 'vip', 'exclusive'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create user memberships table
CREATE TABLE IF NOT EXISTS public.user_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tier_id UUID NOT NULL REFERENCES public.membership_tiers(id),
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'canceled', 'past_due', 'paused'
  billing_cycle TEXT NOT NULL DEFAULT 'monthly', -- 'monthly', 'yearly'
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  canceled_at TIMESTAMPTZ,
  UNIQUE(user_id)
);

-- Create events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_type TEXT NOT NULL, -- 'networking', 'exclusive', 'wellness', 'social'
  date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ,
  location TEXT NOT NULL,
  venue_details TEXT,
  capacity INTEGER,
  min_tier_required UUID REFERENCES public.membership_tiers(id),
  image_url TEXT,
  host_name TEXT,
  host_bio TEXT,
  registration_deadline TIMESTAMPTZ,
  status TEXT DEFAULT 'upcoming', -- 'upcoming', 'ongoing', 'completed', 'canceled'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create event RSVPs table
CREATE TABLE IF NOT EXISTS public.event_rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'registered', -- 'registered', 'attended', 'no_show', 'canceled'
  plus_one BOOLEAN DEFAULT false,
  dietary_restrictions TEXT,
  special_requests TEXT,
  checked_in_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(event_id, user_id)
);

-- Create priority bookings tracking table
CREATE TABLE IF NOT EXISTS public.priority_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  priority_level INTEGER NOT NULL DEFAULT 1, -- Higher tier = higher priority
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default membership tiers
INSERT INTO public.membership_tiers (name, display_name, price_monthly, price_yearly, features, max_priority_bookings, concierge_access, enhanced_privacy, event_access_level) VALUES
('basic', 'Basic', 0, 0, '["Browse companions", "Standard booking", "Basic profile"]'::jsonb, 0, false, false, 'none'),
('gold', 'Gold', 4900, 49900, '["Priority booking", "24/7 concierge", "Enhanced privacy", "Standard events access", "Verified badge", "Booking history", "Favorites list"]'::jsonb, 5, true, true, 'standard'),
('platinum', 'Platinum', 9900, 99900, '["Top priority booking", "Dedicated concierge", "Maximum privacy", "VIP events access", "Premium verified badge", "Advanced booking history", "Unlimited favorites", "Exclusive perks"]'::jsonb, 10, true, true, 'vip'),
('diamond', 'Diamond', 19900, 199900, '["Ultimate priority", "Personal account manager", "Complete anonymity", "Exclusive events access", "Diamond badge", "Lifetime booking history", "Unlimited everything", "White-glove service", "Custom experiences"]'::jsonb, 999, true, true, 'exclusive');

-- Enable RLS
ALTER TABLE public.membership_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.priority_bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for membership_tiers (public read)
CREATE POLICY "membership_tiers_select_all" ON public.membership_tiers FOR SELECT USING (true);

-- RLS Policies for user_memberships (users can read their own)
CREATE POLICY "user_memberships_select_own" ON public.user_memberships FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_memberships_insert_own" ON public.user_memberships FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "user_memberships_update_own" ON public.user_memberships FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for events (public read for events matching user tier)
CREATE POLICY "events_select_all" ON public.events FOR SELECT USING (true);

-- RLS Policies for event_rsvps (users can manage their own RSVPs)
CREATE POLICY "event_rsvps_select_own" ON public.event_rsvps FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "event_rsvps_insert_own" ON public.event_rsvps FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "event_rsvps_update_own" ON public.event_rsvps FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "event_rsvps_delete_own" ON public.event_rsvps FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for priority_bookings
CREATE POLICY "priority_bookings_select_own" ON public.priority_bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "priority_bookings_insert_own" ON public.priority_bookings FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX idx_user_memberships_user_id ON public.user_memberships(user_id);
CREATE INDEX idx_user_memberships_status ON public.user_memberships(status);
CREATE INDEX idx_events_date ON public.events(date);
CREATE INDEX idx_events_status ON public.events(status);
CREATE INDEX idx_event_rsvps_event_id ON public.event_rsvps(event_id);
CREATE INDEX idx_event_rsvps_user_id ON public.event_rsvps(user_id);
CREATE INDEX idx_priority_bookings_user_id ON public.priority_bookings(user_id);

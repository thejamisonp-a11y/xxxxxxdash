-- Seed sample events for VIP members
INSERT INTO public.events (title, description, event_type, date, end_date, location, venue_details, capacity, min_tier_required, image_url, host_name, host_bio, registration_deadline, status)
SELECT
  'VIP Networking Mixer',
  'Join fellow VIP members for an evening of networking, cocktails, and meaningful connections. This exclusive event brings together successful professionals in an intimate setting designed for genuine relationship building.',
  'networking',
  (NOW() + INTERVAL '2 weeks'),
  (NOW() + INTERVAL '2 weeks' + INTERVAL '3 hours'),
  'The Metropolitan Club, New York',
  'Private rooftop venue with panoramic city views. Business casual attire requested.',
  50,
  (SELECT id FROM public.membership_tiers WHERE name = 'gold'),
  '/placeholder.svg?height=600&width=800',
  'Sarah Chen',
  'Event Director & VIP Relations',
  (NOW() + INTERVAL '1 week'),
  'upcoming'
UNION ALL
SELECT
  'Wellness & Mindfulness Retreat',
  'A transformative full-day wellness experience featuring guided meditation, yoga sessions, nutritional consultations, and spa treatments. Reconnect with your inner self in a serene, supportive environment.',
  'wellness',
  (NOW() + INTERVAL '3 weeks'),
  (NOW() + INTERVAL '3 weeks' + INTERVAL '8 hours'),
  'Serenity Spa & Retreat, Los Angeles',
  'Exclusive spa facility with private treatment rooms, meditation gardens, and organic cuisine.',
  30,
  (SELECT id FROM public.membership_tiers WHERE name = 'platinum'),
  '/placeholder.svg?height=600&width=800',
  'Dr. Michael Rodriguez',
  'Wellness Coach & Mindfulness Expert',
  (NOW() + INTERVAL '2 weeks'),
  'upcoming'
UNION ALL
SELECT
  'Diamond Members Exclusive Gala',
  'Our most prestigious event of the year. An elegant black-tie gala featuring live entertainment, gourmet dining, and exclusive networking with industry leaders. Limited to Diamond members only.',
  'exclusive',
  (NOW() + INTERVAL '1 month'),
  (NOW() + INTERVAL '1 month' + INTERVAL '5 hours'),
  'Grand Ballroom, Four Seasons',
  'Black tie required. Valet parking included. Private VIP lounge access.',
  20,
  (SELECT id FROM public.membership_tiers WHERE name = 'diamond'),
  '/placeholder.svg?height=600&width=800',
  'Alexandra Sterling',
  'Events Director',
  (NOW() + INTERVAL '3 weeks'),
  'upcoming'
UNION ALL
SELECT
  'Social Cocktail Evening',
  'Unwind with fellow members at this relaxed social gathering. Enjoy craft cocktails, light bites, and engaging conversation in a sophisticated setting. Perfect for making new connections.',
  'social',
  (NOW() + INTERVAL '10 days'),
  (NOW() + INTERVAL '10 days' + INTERVAL '3 hours'),
  'The Rooftop Bar, Miami',
  'Outdoor terrace with ocean views. Smart casual attire.',
  40,
  (SELECT id FROM public.membership_tiers WHERE name = 'gold'),
  '/placeholder.svg?height=600&width=800',
  'James Parker',
  'Member Relations',
  (NOW() + INTERVAL '7 days'),
  'upcoming'
UNION ALL
SELECT
  'Executive Leadership Summit',
  'An exclusive full-day summit featuring keynote speakers, panel discussions, and workshops focused on leadership, innovation, and personal growth. Network with C-suite executives and industry pioneers.',
  'networking',
  (NOW() + INTERVAL '5 weeks'),
  (NOW() + INTERVAL '5 weeks' + INTERVAL '9 hours'),
  'Conference Center, San Francisco',
  'State-of-the-art conference facility with breakout rooms. Business formal attire.',
  60,
  (SELECT id FROM public.membership_tiers WHERE name = 'platinum'),
  '/placeholder.svg?height=600&width=800',
  'Rebecca Thompson',
  'Summit Director',
  (NOW() + INTERVAL '4 weeks'),
  'upcoming';

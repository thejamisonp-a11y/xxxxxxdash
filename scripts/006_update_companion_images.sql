-- Update companions with placeholder images based on category
UPDATE public.companions
SET avatar_url = CASE 
  WHEN category = 'women' THEN '/images/companion-woman-' || (FLOOR(RANDOM() * 3) + 1)::text || '.jpg'
  WHEN category = 'men' THEN '/images/companion-man-' || (FLOOR(RANDOM() * 3) + 1)::text || '.jpg'
  WHEN category = 'trans' THEN '/images/companion-trans-' || (FLOOR(RANDOM() * 3) + 1)::text || '.jpg'
END,
images = CASE 
  WHEN category = 'women' THEN ARRAY[
    '/images/companion-woman-1.jpg',
    '/images/companion-woman-2.jpg',
    '/images/companion-woman-3.jpg'
  ]
  WHEN category = 'men' THEN ARRAY[
    '/images/companion-man-1.jpg',
    '/images/companion-man-2.jpg',
    '/images/companion-man-3.jpg'
  ]
  WHEN category = 'trans' THEN ARRAY[
    '/images/companion-trans-1.jpg',
    '/images/companion-trans-2.jpg',
    '/images/companion-trans-3.jpg'
  ]
END
WHERE avatar_url IS NULL OR avatar_url = '';

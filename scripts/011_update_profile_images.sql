-- Update companions table to use the correct profile images that exist in public/images/

-- Update women companions to use existing images
UPDATE public.companions
SET 
  avatar_url = CASE 
    WHEN category = 'women' THEN '/images/companion-woman-' || (FLOOR(RANDOM() * 3) + 1)::text || '.jpg'
    ELSE avatar_url
  END,
  images = CASE 
    WHEN category = 'women' THEN ARRAY[
      '/images/companion-woman-1.jpg',
      '/images/companion-woman-2.jpg',
      '/images/companion-woman-3.jpg'
    ]
    ELSE images
  END
WHERE category = 'women';

-- Update men companions to use existing images
UPDATE public.companions
SET 
  avatar_url = CASE 
    WHEN category = 'men' THEN '/images/companion-man-' || (FLOOR(RANDOM() * 3) + 1)::text || '.jpg'
    ELSE avatar_url
  END,
  images = CASE 
    WHEN category = 'men' THEN ARRAY[
      '/images/companion-man-1.jpg',
      '/images/companion-man-2.jpg',
      '/images/companion-man-3.jpg'
    ]
    ELSE images
  END
WHERE category = 'men';

-- Update trans companions to use existing images
UPDATE public.companions
SET 
  avatar_url = CASE 
    WHEN category = 'trans' THEN '/images/companion-trans-' || (FLOOR(RANDOM() * 3) + 1)::text || '.jpg'
    ELSE avatar_url
  END,
  images = CASE 
    WHEN category = 'trans' THEN ARRAY[
      '/images/companion-trans-1.jpg',
      '/images/companion-trans-2.jpg',
      '/images/companion-trans-3.jpg'
    ]
    ELSE images
  END
WHERE category = 'trans';

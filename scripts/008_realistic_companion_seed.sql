-- Comprehensive seed data with realistic pricing and wellness credentials

-- Clear existing data
DELETE FROM public.companions;

-- Women companions (pricing: $200-$350/hour)
INSERT INTO public.companions (display_name, category, age, location, bio, rate_per_hour, verified, available, rating, total_reviews, avatar_url, images) VALUES
('Sophia', 'women', 24, 'New York, NY', 'Empathetic listener with passion for meaningful connections. Trained in active listening and emotional intelligence. Available for companionship, dining, and events.', 250, true, true, 4.9, 127, '/images/women-profile-1.jpg', ARRAY['/images/women-profile-1.jpg', '/images/women-profile-2.jpg']),
('Isabella', 'women', 26, 'Los Angeles, CA', 'Sophisticated companion with background in hospitality. Fluent in Spanish and French. Perfect for business events and cultural outings.', 300, true, true, 4.8, 98, '/images/women-profile-2.jpg', ARRAY['/images/women-profile-2.jpg', '/images/women-profile-3.jpg']),
('Aria', 'women', 23, 'Miami, FL', 'Vivacious and energetic. Certified wellness coach. Passionate about fitness, travel, and personal development. Great conversationalist.', 220, true, true, 4.9, 156, '/images/women-profile-3.jpg', ARRAY['/images/women-profile-3.jpg', '/images/women-profile-4.jpg']),
('Victoria', 'women', 28, 'Chicago, IL', 'Educated professional with psychology background. Excellent listener. Specializes in travel companionship and event attendance.', 280, true, true, 4.7, 82, '/images/women-profile-4.jpg', ARRAY['/images/women-profile-4.jpg', '/images/women-profile-5.jpg']),
('Elena', 'women', 25, 'Boston, MA', 'Artistic soul with interest in culture and philanthropy. Trained in conflict resolution. Exceptional at making clients feel valued.', 260, true, true, 4.8, 104, '/images/women-profile-5.jpg', ARRAY['/images/women-profile-5.jpg', '/images/women-profile-6.jpg']),
('Jasmine', 'women', 27, 'Washington, DC', 'Political analyst and cultural enthusiast. Intelligent conversation specialist. Perfect for diplomatic events and business dinners.', 320, true, true, 4.9, 67, '/images/women-profile-6.jpg', ARRAY['/images/women-profile-6.jpg', '/images/women-profile-1.jpg']),

-- Men companions (pricing: $200-$350/hour)
('Marcus', 'men', 26, 'New York, NY', 'Athletic and charming. Background in personal training and fitness coaching. Great for gym sessions, sports events, and outdoor adventures.', 240, true, true, 4.8, 91, '/images/men-profile-1.jpg', ARRAY['/images/men-profile-1.jpg', '/images/men-profile-2.jpg']),
('David', 'men', 29, 'Los Angeles, CA', 'Professional actor and conversationalist. Multilingual (English, Spanish, Italian). Excellent at making any event memorable.', 310, true, true, 4.9, 76, '/images/men-profile-2.jpg', ARRAY['/images/men-profile-2.jpg', '/images/men-profile-3.jpg']),
('James', 'men', 25, 'Miami, FL', 'Adventurous and spontaneous. Licensed tour guide. Expert in nightlife and entertainment recommendations. Full of energy and enthusiasm.', 200, true, true, 4.7, 143, '/images/men-profile-3.jpg', ARRAY['/images/men-profile-3.jpg', '/images/men-profile-4.jpg']),
('Alexander', 'men', 31, 'Chicago, IL', 'Successful entrepreneur and mentor. Business coaching experience. Excellent for professional networking and business dinners.', 340, true, true, 4.9, 54, '/images/men-profile-4.jpg', ARRAY['/images/men-profile-4.jpg', '/images/men-profile-5.jpg']),
('Benjamin', 'men', 24, 'Boston, MA', 'Artist and creative thinker. Background in graphic design. Perfect for cultural events, galleries, and creative projects.', 230, true, true, 4.6, 88, '/images/men-profile-5.jpg', ARRAY['/images/men-profile-5.jpg', '/images/men-profile-6.jpg']),
('Christopher', 'men', 28, 'Washington, DC', 'Certified life coach and motivational speaker. Expert communicator. Great for personal development discussions and mentoring.', 290, true, true, 4.8, 79, '/images/men-profile-6.jpg', ARRAY['/images/men-profile-6.jpg', '/images/men-profile-1.jpg']),

-- Trans companions (pricing: $200-$350/hour)
('Aurora', 'trans', 26, 'New York, NY', 'Creative and compassionate. Background in counseling and support services. Passionate about inclusion and authentic connections.', 260, true, true, 4.9, 112, '/images/trans-profile-1.jpg', ARRAY['/images/trans-profile-1.jpg', '/images/trans-profile-2.jpg']),
('Phoenix', 'trans', 24, 'Los Angeles, CA', 'Performer and entertainer. Experienced in helping others feel comfortable. Great communication skills and positive energy.', 240, true, true, 4.8, 95, '/images/trans-profile-2.jpg', ARRAY['/images/trans-profile-2.jpg', '/images/trans-profile-3.jpg']),
('River', 'trans', 28, 'San Francisco, CA', 'Wellness advocate and certified yoga instructor. Specializes in therapeutic companionship and mindfulness. Calm and grounding presence.', 280, true, true, 4.9, 67, '/images/trans-profile-3.jpg', ARRAY['/images/trans-profile-3.jpg', '/images/trans-profile-1.jpg']);

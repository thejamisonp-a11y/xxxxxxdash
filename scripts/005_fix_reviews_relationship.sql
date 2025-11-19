-- Add foreign key relationship between reviews and profiles to allow joining
alter table public.reviews
add constraint reviews_client_id_fkey_profiles
foreign key (client_id)
references public.profiles(id)
on delete cascade;

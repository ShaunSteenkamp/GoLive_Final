-- Wedding RSVP Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Create the rsvps table
create table if not exists public.rsvps (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  attending boolean default true not null,
  message text,
  
  -- Optional: Add email field if you want to collect emails
  -- email text,
  
  -- Optional: Add phone field
  -- phone text,
  
  -- Optional: Add dietary requirements
  dietary_requirements text,
  
  -- Optional: Add plus one information
  -- plus_one boolean default false,
  -- plus_one_name text
);

-- Enable Row Level Security
alter table public.rsvps enable row level security;

-- Create a policy to allow anyone to insert RSVPs
-- This allows guests to submit their RSVP without authentication
create policy "Anyone can insert RSVPs"
  on public.rsvps for insert
  to anon
  with check (true);

-- Create a policy to allow reading RSVPs
-- You may want to restrict this to authenticated users only
create policy "Anyone can view RSVPs"
  on public.rsvps for select
  to anon
  using (true);

-- Optional: Create an index on created_at for faster queries
create index if not exists rsvps_created_at_idx on public.rsvps(created_at desc);

-- Optional: Create an index on attending for filtering
create index if not exists rsvps_attending_idx on public.rsvps(attending);

-- View all RSVPs (for testing)
-- select * from public.rsvps order by created_at desc;

-- Count attending vs not attending
-- select 
--   attending,
--   count(*) as count
-- from public.rsvps
-- group by attending;

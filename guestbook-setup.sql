-- Guestbook, Song Request, & Guess Who Database Setup
-- Run this SQL in your Supabase SQL Editor

-- =========================================================================
-- 1. Create the song_requests table
-- =========================================================================
create table if not exists public.song_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  artist text not null
);

-- Enable Row Level Security (RLS)
alter table public.song_requests enable row level security;

-- Create insert policy (allows guests to request songs)
create policy "Anyone can insert song requests"
  on public.song_requests for insert
  to anon
  with check (true);

-- Create select policy (allows reading requested songs)
create policy "Anyone can view song requests"
  on public.song_requests for select
  to anon
  using (true);

-- =========================================================================
-- 2. Create the guestbook_messages table
-- =========================================================================
create table if not exists public.guestbook_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  guest_name text not null,
  message text not null
);

-- Enable Row Level Security (RLS)
alter table public.guestbook_messages enable row level security;

-- Create insert policy (allows guests to submit messages)
create policy "Anyone can insert guestbook messages"
  on public.guestbook_messages for insert
  to anon
  with check (true);

-- Create select policy (allows viewing the guestbook messages)
create policy "Anyone can view guestbook messages"
  on public.guestbook_messages for select
  to anon
  using (true);

-- =========================================================================
-- 3. Create the guess_who_votes table (to capture Guess Who game responses)
-- =========================================================================
create table if not exists public.guess_who_votes (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  question text not null,
  vote text not null -- 'SHAUN' or 'ALEXANDRA'
);

-- Enable Row Level Security (RLS)
alter table public.guess_who_votes enable row level security;

-- Create insert policy (allows guests to vote)
create policy "Anyone can insert guess who votes"
  on public.guess_who_votes for insert
  to anon
  with check (true);

-- Create select policy (allows reading votes to calculate percentages)
create policy "Anyone can view guess who votes"
  on public.guess_who_votes for select
  to anon
  using (true);

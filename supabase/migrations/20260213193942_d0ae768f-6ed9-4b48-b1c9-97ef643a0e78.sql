
-- Create RSVP table for wedding guest responses
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  attending BOOLEAN NOT NULL DEFAULT true,
  message TEXT,
  dietary_requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (no auth needed for wedding guests)
CREATE POLICY "Anyone can submit RSVP"
  ON public.rsvps FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read (for potential guest list display)
CREATE POLICY "Anyone can read RSVPs"
  ON public.rsvps FOR SELECT
  USING (true);

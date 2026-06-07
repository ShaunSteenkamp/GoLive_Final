# 💍 Shaun & Alexandra's Wedding Website

A beautiful, fynbos-themed wedding RSVP website built with React, TypeScript, and Tailwind CSS.

## 🌸 Features

- **Elegant Design**: Cape Fynbos-inspired aesthetic with custom colors (Sage, Blush, Gold, Magenta)
- **RSVP System**: Integrated with Supabase for guest responses
- **Interactive Gallery**: Photo gallery with parallax effects
- **Accommodation Guide**: Curated list of hotels in Stellenbosch
- **Ceremony Details**: Information about the wedding day schedule
- **Guestbook**: Interactive guestbook for guests to leave messages
- **Responsive Design**: Beautiful on all devices
- **Smooth Animations**: Framer Motion animations throughout

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account (for RSVP functionality)

### Installation

1. **Clone the repository** (if not already done)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   
   Create a `.env.local` file in the root directory with your Supabase credentials:
   
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```
   
   To get these credentials:
   - Go to [Supabase](https://app.supabase.com)
   - Create a new project or select your existing one
   - Go to Settings → API
   - Copy the Project URL and anon/public key

4. **Set up the Supabase database**:
   
   In your Supabase project, run this SQL to create the `rsvps` table:
   
   ```sql
   create table public.rsvps (
     id uuid default gen_random_uuid() primary key,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     full_name text not null,
     attending boolean default true not null,
     message text
   );

   -- Enable Row Level Security
   alter table public.rsvps enable row level security;

   -- Create a policy to allow anyone to insert RSVPs
   create policy "Anyone can insert RSVPs"
     on public.rsvps for insert
     to anon
     with check (true);

   -- Create a policy to allow reading RSVPs (optional, for admin viewing)
   create policy "Anyone can view RSVPs"
     on public.rsvps for select
     to anon
     using (true);
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:8080` (or the next available port)

## 📁 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── ui/         # shadcn/ui components
│   ├── Navigation.tsx
│   ├── FloralDivider.tsx
│   ├── Gallery.tsx
│   └── ...
├── pages/          # Page components
│   ├── Index.tsx        # Home page
│   ├── Rsvp.tsx         # RSVP form
│   ├── Accommodation.tsx
│   ├── Ceremony.tsx
│   └── Guestbook.tsx
├── integrations/   # External service integrations
│   └── supabase/   # Supabase client and types
├── hooks/          # Custom React hooks
└── lib/            # Utility functions
```

## 🎨 Design System

### Colors
- **Sage**: `#8FA88E` - Primary fynbos green
- **Blush**: `#F4E4DC` - Soft pink/cream
- **Gold**: `#C9A961` - Elegant gold accents
- **Magenta**: `#D4A5A5` - Warm pink
- **Cream**: `#FAF7F2` - Background cream

### Typography
- **Script**: Great Vibes (for names and romantic text)
- **Display**: Marcellus (for headings)
- **Body**: Cormorant Garamond (for body text)

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Backend**: Supabase
- **Form Validation**: Zod + React Hook Form
- **Routing**: React Router v6

## 📝 Customization

### Adding Photos

Replace the placeholder images in `src/assets/` with your own:
- `engagement-1.jpg` through `engagement-6.jpg` for the gallery
- Update venue photos as needed

### Updating Content

- **Wedding Details**: Edit `src/pages/Index.tsx`
- **Accommodation**: Update the hotels array in `src/pages/Accommodation.tsx`
- **Ceremony Timeline**: Edit `src/pages/Ceremony.tsx`

### Changing Colors

Update the Tailwind theme in `tailwind.config.ts`:

```typescript
colors: {
  'wedding-sage': '#8FA88E',
  'wedding-blush': '#F4E4DC',
  'wedding-gold': '#C9A961',
  'wedding-magenta': '#D4A5A5',
  'wedding-cream': '#FAF7F2',
}
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
4. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add environment variables in the Vercel dashboard.

## 📊 Viewing RSVPs

To view RSVP responses:

1. Log into your Supabase dashboard
2. Go to Table Editor → rsvps
3. View all submissions with names, attendance status, and messages

Or create an admin page with authentication to view RSVPs directly on the site.

## 🐛 Troubleshooting

### PowerShell Execution Policy Error

If you get an execution policy error when running npm commands:

```bash
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Supabase Connection Issues

- Verify your `.env.local` file has the correct credentials
- Check that RLS policies are set up correctly
- Ensure the `rsvps` table exists in your Supabase project

### Port Already in Use

Vite will automatically try the next available port if 8080 is taken.

## 📄 License

This is a personal wedding website. Feel free to use it as inspiration for your own!

## 💝 Credits

Built with love by Shaun for Alexandra 💕

**#RotsVas** - 5 September 2026

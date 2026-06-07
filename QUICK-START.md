# 🚀 Quick Start Guide

## What You Have

Your wedding website is **fully built** and ready to go! Here's what's included:

✅ **5 Beautiful Pages**:
- Home page with countdown, timeline, and gallery
- RSVP form with database integration
- Accommodation recommendations
- Ceremony details and schedule
- Interactive guestbook

✅ **Professional Features**:
- Responsive design (works on all devices)
- Smooth animations
- Form validation
- Database integration ready
- Beautiful fynbos theme

## What You Need to Do

### Step 1: Set Up Supabase (15 minutes)

Supabase is the free database that will store your RSVPs.

1. **Create Account**:
   - Go to [supabase.com](https://supabase.com)
   - Sign up with GitHub or email
   - Create a new project (choose a name like "wedding-rsvp")
   - Choose a region close to South Africa
   - Wait 2-3 minutes for project to initialize

2. **Set Up Database**:
   - In your Supabase dashboard, click "SQL Editor" in the left menu
   - Click "New Query"
   - Open the `supabase-setup.sql` file in this project
   - Copy ALL the SQL code
   - Paste it into the Supabase SQL Editor
   - Click "Run" (bottom right)
   - You should see "Success. No rows returned"

3. **Get Your Credentials**:
   - Click "Settings" (gear icon) in the left menu
   - Click "API" 
   - You'll see two important values:
     - **Project URL** (looks like: `https://xxxxx.supabase.co`)
     - **anon public** key (long string of characters)
   - Keep this tab open!

4. **Add Credentials to Your Project**:
   - Open the `.env.local` file in this project
   - Replace `your_supabase_project_url` with your Project URL
   - Replace `your_supabase_anon_key` with your anon public key
   - Save the file
   - **IMPORTANT**: Restart your dev server:
     - Stop the current server (Ctrl+C in terminal)
     - Run: `powershell -ExecutionPolicy Bypass -Command "npm run dev"`

### Step 2: Add Your Photos (10 minutes)

1. **Prepare 6 engagement photos**:
   - Choose your favorite photos
   - Rename them: `engagement-1.jpg`, `engagement-2.jpg`, etc.
   - Recommended size: 1200px wide (for web performance)

2. **Add to project**:
   - Navigate to `src/assets/` folder
   - Replace the existing `engagement-X.jpg` files with yours
   - Keep the same filenames!

3. **Optional - Update venue photos**:
   - Replace `old-church-stellenbosch.jpg` with actual ceremony venue
   - Replace `mulderbosch-vineyards.jpg` with actual reception venue

### Step 3: Review Content (5 minutes)

Open these files and verify all details are correct:

- `src/pages/Index.tsx` - Check date, time, venue names
- `src/pages/Ceremony.tsx` - Verify timeline and details
- `src/pages/Accommodation.tsx` - Confirm hotel recommendations
- `index.html` - Update the `<title>` tag

### Step 4: Test Everything (5 minutes)

1. **Open the website**: `http://localhost:8085`
2. **Test navigation**: Click all menu items
3. **Test RSVP form**:
   - Go to RSVP page
   - Fill out the form
   - Submit it
   - Check Supabase dashboard → Table Editor → rsvps
   - You should see your test entry!
4. **Test on mobile**: Open on your phone using the Network URL shown in terminal

### Step 5: Deploy to the Internet (10 minutes)

**Option A: Netlify (Recommended - Easiest)**

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Wedding website ready"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings should auto-detect (Vite)
   - **IMPORTANT**: Add environment variables:
     - Click "Show advanced"
     - Add `VITE_SUPABASE_URL` = your Supabase URL
     - Add `VITE_SUPABASE_PUBLISHABLE_KEY` = your anon key
   - Click "Deploy site"
   - Wait 2-3 minutes
   - Your site is live! 🎉

3. **Custom Domain** (Optional):
   - In Netlify, go to "Domain settings"
   - Click "Add custom domain"
   - Follow instructions to point your domain to Netlify

**Option B: Vercel**

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variables in Vercel dashboard

## Viewing RSVPs

### In Supabase Dashboard:
1. Go to your Supabase project
2. Click "Table Editor" in left menu
3. Click "rsvps" table
4. See all submissions with names, attendance, and messages

### Quick Stats Query:
In SQL Editor, run:
```sql
SELECT 
  attending,
  COUNT(*) as count
FROM rsvps
GROUP BY attending;
```

## Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### RSVP form doesn't submit
- Check `.env.local` has correct Supabase credentials
- Restart dev server after adding credentials
- Check browser console for errors (F12)

### Images don't show
- Verify image filenames match exactly
- Check images are in `src/assets/` folder
- Clear browser cache (Ctrl+Shift+R)

### PowerShell execution policy error
Always run with:
```bash
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

## Need Help?

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)

## Timeline Estimate

- ⏱️ Supabase setup: 15 minutes
- ⏱️ Add photos: 10 minutes  
- ⏱️ Review content: 5 minutes
- ⏱️ Test: 5 minutes
- ⏱️ Deploy: 10 minutes

**Total: ~45 minutes to go live!** 🚀

## What's Next?

After deployment:
1. Share the URL with a few friends to test
2. Monitor RSVPs in Supabase
3. Send the link to all your guests
4. Celebrate! 🎉💍

---

**Built with ❤️ for Shaun & Alexandra**

**#RotsVas - 5 September 2026**

# ✅ Wedding Website Launch Checklist

Use this checklist to track your progress from development to launch!

## 🔧 Initial Setup

- [ ] Install dependencies (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Website loads at `http://localhost:8085`

## 🗄️ Database Setup

- [ ] Create Supabase account at [supabase.com](https://supabase.com)
- [ ] Create new project (name: "wedding-rsvp" or similar)
- [ ] Wait for project initialization (~2 min)
- [ ] Open SQL Editor
- [ ] Copy contents of `supabase-setup.sql`
- [ ] Paste and run in SQL Editor
- [ ] Verify "rsvps" table exists in Table Editor
- [ ] Copy Project URL from Settings → API
- [ ] Copy anon/public key from Settings → API
- [ ] Paste both into `.env.local` file
- [ ] Restart dev server
- [ ] Test RSVP form submission
- [ ] Verify entry appears in Supabase Table Editor

## 📸 Content & Assets

### Photos
- [ ] Prepare 6 engagement photos
- [ ] Resize/optimize for web (recommended: 1200px wide)
- [ ] Rename as `engagement-1.jpg` through `engagement-6.jpg`
- [ ] Place in `src/assets/` folder
- [ ] Optional: Replace ceremony venue photo (`old-church-stellenbosch.jpg`)
- [ ] Optional: Replace reception venue photo (`mulderbosch-vineyards.jpg`)

### Content Review
- [ ] Verify wedding date in `src/pages/Index.tsx`
- [ ] Verify ceremony time in `src/pages/Index.tsx`
- [ ] Verify reception time in `src/pages/Index.tsx`
- [ ] Verify venue names in `src/pages/Index.tsx`
- [ ] Review timeline in `src/pages/Ceremony.tsx`
- [ ] Review accommodation list in `src/pages/Accommodation.tsx`
- [ ] Update page title in `index.html`
- [ ] Update meta description in `index.html`

## 🧪 Testing

### Functionality
- [ ] All navigation links work
- [ ] RSVP form accepts valid input
- [ ] RSVP form rejects invalid input (empty name, etc.)
- [ ] RSVP form submits successfully
- [ ] Success message appears after submission
- [ ] RSVP appears in Supabase dashboard
- [ ] All images load correctly
- [ ] Gallery displays all 6 photos
- [ ] Countdown timer shows correct date

### Responsive Design
- [ ] Test on desktop (1920px)
- [ ] Test on laptop (1366px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Test on actual phone
- [ ] Mobile menu works
- [ ] All text is readable on mobile
- [ ] Images scale properly
- [ ] Forms are usable on mobile

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

## 🚀 Deployment

### Pre-Deployment
- [ ] All tests passing
- [ ] No console errors (press F12 to check)
- [ ] All content reviewed and approved
- [ ] Photos finalized
- [ ] Supabase working correctly

### GitHub Setup
- [ ] Create GitHub repository
- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Wedding website ready"`
- [ ] Add remote: `git remote add origin YOUR_REPO_URL`
- [ ] Push: `git push -u origin main`

### Netlify Deployment
- [ ] Sign up/login at [netlify.com](https://netlify.com)
- [ ] Click "Add new site"
- [ ] Connect to GitHub
- [ ] Select repository
- [ ] Add environment variable: `VITE_SUPABASE_URL`
- [ ] Add environment variable: `VITE_SUPABASE_PUBLISHABLE_KEY`
- [ ] Click "Deploy site"
- [ ] Wait for deployment (~2-3 min)
- [ ] Visit deployed URL
- [ ] Test RSVP on live site
- [ ] Verify RSVP reaches Supabase

### Custom Domain (Optional)
- [ ] Purchase domain (e.g., shaunandalexa.com)
- [ ] In Netlify, go to Domain settings
- [ ] Click "Add custom domain"
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (~24 hours)
- [ ] Enable HTTPS (automatic in Netlify)
- [ ] Test site on custom domain

## 📢 Launch

### Soft Launch
- [ ] Share with 3-5 close friends/family
- [ ] Ask them to test RSVP
- [ ] Collect feedback
- [ ] Fix any issues
- [ ] Verify all RSVPs are being saved

### Full Launch
- [ ] Create announcement message
- [ ] Share URL via WhatsApp groups
- [ ] Share URL via email
- [ ] Share URL via social media
- [ ] Include hashtag: #RotsVas
- [ ] Monitor RSVP submissions
- [ ] Respond to any questions

## 📊 Post-Launch

### Monitoring
- [ ] Check Supabase daily for new RSVPs
- [ ] Keep track of attendance count
- [ ] Note any dietary requirements (if added to form)
- [ ] Follow up with guests who haven't RSVP'd

### Optional Enhancements
- [ ] Set up email notifications for new RSVPs
- [ ] Create admin dashboard to view all RSVPs
- [ ] Add dietary requirements field
- [ ] Add plus-one support
- [ ] Add gift registry links
- [ ] Create "Day Of" page with live updates

## 🎉 Final Checks (Week Before Wedding)

- [ ] Final RSVP count
- [ ] Share final details with venue
- [ ] Update website with any last-minute changes
- [ ] Test all links one more time
- [ ] Ensure site is still live and working
- [ ] Prepare to share photos after the wedding!

---

## Quick Reference

**Dev Server**: `powershell -ExecutionPolicy Bypass -Command "npm run dev"`

**Local URL**: http://localhost:8085

**Supabase Dashboard**: https://app.supabase.com

**Netlify Dashboard**: https://app.netlify.com

**View RSVPs**: Supabase → Table Editor → rsvps

---

**Progress Tracker**:
- Setup: __ / 3
- Database: __ / 13
- Content: __ / 14
- Testing: __ / 18
- Deployment: __ / 15
- Launch: __ / 11
- Post-Launch: __ / 4
- Final: __ / 6

**Total: __ / 84 tasks**

---

💍 **Shaun & Alexandra - 5 September 2026** 💍

**#RotsVas**

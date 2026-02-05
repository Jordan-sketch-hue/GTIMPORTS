# 🚀 GT Imports - Deployment Checklist

## Pre-Deployment Checklist

### 1. Content Updates ✅

- [ ] Replace phone number `1876XXXXXXX` with real number
- [ ] Replace email `info@gtimports.com` with real email
- [ ] Update WhatsApp number in all components
- [ ] Update business address in Footer and Contact page
- [ ] Update business hours if different
- [ ] Add real company description/bio

### 2. Visual Assets 🎨

- [ ] Add hero background image (`public/hero-bg.jpg`)
- [ ] Add company logo (`public/logo.png`, `public/favicon.ico`)
- [ ] Add vehicle images to `public/imports/`
- [ ] Replace emoji placeholders with real images
- [ ] Add Instagram post images (or keep placeholders)

### 3. SEO & Metadata 📊

- [ ] Update site title in `app/layout.tsx`
- [ ] Add proper meta descriptions
- [ ] Add keywords for each page
- [ ] Create `public/robots.txt`
- [ ] Create `public/sitemap.xml`
- [ ] Add Open Graph images

### 4. Functionality Testing 🧪

- [ ] Test all forms (Contact, Quote Request)
- [ ] Test scheduling widget
- [ ] Test chatbot FAQ
- [ ] Test WhatsApp button
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Safari, Firefox)

### 5. Performance 🚀

- [ ] Optimize images (use WebP format)
- [ ] Check Lighthouse score (aim for 90+)
- [ ] Enable compression
- [ ] Add analytics (Google Analytics, etc.)

### 6. Security 🔐

- [ ] Set up environment variables
- [ ] Add `.env.local` to `.gitignore`
- [ ] Enable HTTPS
- [ ] Add rate limiting to forms
- [ ] Set up spam protection

---

## Deployment Steps

### Option 1: Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
cd c:\Users\jader\newgitimports
vercel

# 4. Follow prompts:
#    - Set up and deploy? Yes
#    - Which scope? Your account
#    - Link to existing project? No
#    - Project name: gtimports
#    - Directory: ./
#    - Override settings? No

# 5. Deploy to production
vercel --prod
```

**Result:** Your site will be live at `https://gtimports.vercel.app`

### Option 2: Netlify

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Initialize
netlify init

# 4. Deploy
netlify deploy --prod
```

### Option 3: GitHub + Vercel (Automatic Deployments)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - GT Imports website"
   git branch -M main
   git remote add origin https://github.com/yourusername/gtimports.git
   git push -u origin main
   ```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select repository
   - Click "Deploy"

3. Every push to `main` branch auto-deploys!

---

## Post-Deployment

### 1. Custom Domain Setup

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `gtimports.com`)
3. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5 min - 48 hours)

### 2. SSL Certificate
- Automatically provided by Vercel/Netlify
- Verify HTTPS is working

### 3. Environment Variables
Add in deployment platform:
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_WHATSAPP`
- (See `.env.example` for full list)

### 4. Analytics Setup
- Google Analytics
- Facebook Pixel
- Hotjar (optional)

### 5. Social Media Integration
- Instagram: Add real API token
- Facebook: Link page
- Update social media links in Footer

### 6. SEO Tools
- Submit to Google Search Console
- Submit to Bing Webmaster Tools
- Create Google My Business listing
- Add structured data

---

## Monitoring & Maintenance

### Weekly
- [ ] Check form submissions
- [ ] Respond to quote requests
- [ ] Update featured imports
- [ ] Check analytics

### Monthly
- [ ] Review performance metrics
- [ ] Update inventory
- [ ] Add new blog posts (if applicable)
- [ ] Check for broken links

### As Needed
- [ ] Update contact information
- [ ] Add new import categories
- [ ] Update pricing
- [ ] Add customer testimonials

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check for errors
npm run lint
```

### Image Issues
- Use optimized formats (WebP, AVIF)
- Max size: 1MB per image
- Use Next.js Image component

### Form Not Working
- Check email service configuration
- Verify environment variables
- Test with real email addresses

---

## Rollback Plan

If something goes wrong:

**Vercel:**
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

**Or use Vercel Dashboard:**
1. Go to Deployments
2. Find working version
3. Click "Promote to Production"

---

## Success Criteria ✨

Before marking as "complete":
- [ ] Site loads on all devices
- [ ] All forms work and send notifications
- [ ] WhatsApp button opens correctly
- [ ] Chatbot functions properly
- [ ] Navigation is smooth
- [ ] No console errors
- [ ] Lighthouse score > 85
- [ ] Custom domain working (if applicable)
- [ ] SSL certificate active
- [ ] Analytics tracking

---

## Launch Announcement

Once live:
1. Update Instagram bio with website link
2. Post announcement on social media
3. Send email to existing customers
4. Update business cards/marketing materials
5. Add to Google My Business
6. Submit to local directories

---

## Support Contacts

**Hosting Issues:**
- Vercel: support@vercel.com
- Netlify: support@netlify.com

**Technical Support:**
- Check documentation: README.md
- Review code comments
- Browser console (F12)

---

## 🎉 You're Ready to Launch!

Follow this checklist step by step, and your GT Imports website will be live and professional!

**Estimated Time:** 2-4 hours for full deployment
**Difficulty:** Easy with Vercel/Netlify
**Cost:** FREE on Vercel/Netlify hobby plan

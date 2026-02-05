# GT Imports Consultants Website

Premium, modern, fully functional website for GT Imports Consultants - Your trusted partner for international vehicle and equipment sourcing from Japan, USA, UK, and Canada.

## Features

### Core Functionality
- **Dynamic Homepage** with Hero, Categories, How It Works, Featured Imports, Why Choose Us, Instagram Feed, and CTA sections
- **Import Categories** - Browse vehicles and equipment by category (Pickups, Buses, Machinery, etc.)
- **Quote Request System** - Dynamic form with email notifications
- **Scheduling System** - Book consultations with calendar integration
- **Chatbot FAQ** - Interactive FAQ system for common questions
- **WhatsApp Integration** - Direct messaging for instant support
- **Mobile-First Design** - Fully responsive across all devices

### Design & Branding
- **Brand Colors**: Jet Black (#111111), GT Red (#D71920), Steel Gray (#8E8E8E)
- **Typography**: Montserrat (headings), Inter (body), Oswald (numbers/accents)
- **Modern UI/UX**: Dark theme, smooth animations, clean spacing
- **Premium Feel**: Automotive luxury meets logistics professionalism

### Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Heroicons** - Professional icon library
- **React Hot Toast** - Elegant notifications

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
newgitimports/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact & scheduling page
│   ├── imports/        # Import categories
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── home/           # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── WhatWeImport.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FeaturedImports.tsx
│   │   ├── WhyGTImports.tsx
│   │   ├── InstagramFeed.tsx
│   │   └── CTASection.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Chatbot.tsx
│   ├── WhatsAppButton.tsx
│   ├── ContactForm.tsx
│   └── SchedulingWidget.tsx
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## Key Pages

### Homepage (`/`)
- Hero section with country flags and stats
- Import categories grid
- How It Works process
- Featured imports showcase
- Why Choose GT section
- Instagram feed integration
- CTA section

### Imports Page (`/imports`)
- All import categories
- Detailed descriptions
- Popular models
- Direct links to category pages

### Contact Page (`/contact`)
- Quote request form
- Contact information
- Scheduling widget
- WhatsApp integration

### About Page (`/about`)
- Company mission
- Our story
- Core values
- Statistics

## Customization

### Update Contact Information

1. **Phone Number**: Search for `1876XXXXXXX` and replace with actual number
2. **Email**: Search for `info@gtimports.com` and replace
3. **Location**: Update address in Footer and Contact page

### Update Instagram Integration

In `components/home/InstagramFeed.tsx`:
- Replace placeholder posts with Instagram API integration
- Update Instagram handle if needed

### Add Real Images

Replace emoji placeholders with actual images in:
- `public/hero-bg.jpg` - Hero background
- `public/imports/` - Vehicle images

### Brand Colors

Edit in `tailwind.config.ts`:
```typescript
colors: {
  'gt-black': '#111111',
  'gt-red': '#D71920',
  'gt-steel': '#8E8E8E',
  // ... add more
}
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

- **Netlify**: Connect GitHub repo, deploy automatically
- **AWS Amplify**: Use the Amplify Console
- **Self-hosted**: Build and serve with Node.js

## Future Enhancements

- [ ] Admin dashboard for inventory management
- [ ] Real Instagram API integration
- [ ] Vehicle comparison tool
- [ ] Import cost calculator
- [ ] Client portal with status tracking
- [ ] Blog for import tips
- [ ] Multi-language support
- [ ] Payment integration

## Environment Variables

Create `.env.local` for sensitive data:

```env
# Email Service
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Instagram
INSTAGRAM_TOKEN=
INSTAGRAM_USER_ID=

# Database (future)
DATABASE_URL=

# Admin
ADMIN_SECRET=
```

## Support

For issues or questions:
- Email: info@gtimports.com
- Phone: +1 (876) XXX-XXXX
- WhatsApp: [Link](https://wa.me/1876XXXXXXX)
- Instagram: [@gtimportsconsultants](https://instagram.com/gtimportsconsultants)

## License

© 2026 GT Imports Consultants. All rights reserved.

---

Built with Next.js, TypeScript, and Tailwind CSS

# GT Imports - Custom Domain Setup Guide

## You Own gt-imports.com? Perfect!

Here's how to connect your custom domain to Vercel (Takes ~5 minutes):

---

## Step 1: Add Domain to Vercel Project

1. Go to **vercel.com** → Log in
2. Click your **GT Imports project**
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `gt-imports.com`
6. Click **Add**

---

## Step 2: Update DNS Records at Your Domain Registrar

Vercel will give you **nameservers**. You need to update these at wherever you bought the domain.

### Common registrars:
- **Namecheap**
- **GoDaddy**
- **Google Domains**
- **Domain.com**
- **BlueHost**

### How to update DNS:

1. Log into your domain registrar account
2. Find **DNS Settings** or **Nameservers**
3. Replace current nameservers with Vercel's:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```

4. **Save changes**
5. Wait **24-48 hours** for DNS propagation (can be faster)

---

## Step 3: Verify in Vercel

Once DNS updates propagate:
- Vercel will automatically show **"Active"** next to your domain
- SSL certificate is automatically issued
- Your site is live at `https://gt-imports.com` ✅

---

## Alternative: Using A Records (Faster)

If you want faster setup without changing nameservers:

1. In your domain registrar, find **DNS A Records**
2. Add these records:
   ```
   A Record: @ → 76.76.19.124
   A Record: www → 76.76.19.124
   CNAME: www → cname.vercel-dns.com
   ```

3. Propagation: **~15 minutes**

---

## Troubleshooting

**Domain shows "Pending"?**
- Wait 24-48 hours for DNS propagation
- Check if nameservers updated correctly at registrar
- Click "Refresh" in Vercel settings

**Getting certificate errors?**
- Wait for SSL cert generation (automatic)
- Clear browser cache and hard refresh (Ctrl+F5)

**Still issues?**
- Contact Vercel support at support@vercel.com
- Include: domain name, project name, and error message

---

## What You Get

✅ Free HTTPS/SSL (automatic)
✅ Unlimited bandwidth
✅ Global CDN (fast everywhere)
✅ Email forwarding (optional, via registrar)
✅ Subdomains (admin.gt-imports.com, etc.)

---

## Total Cost

- Domain: Already owned ✅ (typically $10-15/year)
- Hosting: **FREE** on Vercel forever
- SSL: **FREE** (automatic)

**Total = $0 additional cost if you already own the domain!**

---

## Once Domain is Live

Your site will be accessible at:
- `https://gt-imports.com` ✅
- `https://www.gt-imports.com` ✅
- `https://gtimports.vercel.app` ✅ (still works as fallback)

All three work, but gt-imports.com is your primary!

---

**Need help? Reply with your registrar name and I can provide step-by-step screenshots!**

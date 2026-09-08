# Migration Notes — GoDaddy to New Site

## Existing URL Structure (GoDaddy)

The current cohen-global.com site runs on GoDaddy Website Builder with these publicly accessible pages:

| Old URL | Title |
|---|---|
| `/` | Home |
| `/the-company` | The Company |
| `/projects-portfolio` | Projects Portfolio |
| `/contact-us` | Contact Us |

---

## New URL Structure

| New URL | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/projects` | Projects |
| `/projects/[slug]` | Individual Project |
| `/what-we-do` | What We Do |
| `/acquisitions` | Acquisitions |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

---

## Required 301 Redirects

Add these redirects in `next.config.ts` to preserve any existing Google indexing:

```ts
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/the-company",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/projects-portfolio",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  // ... rest of config
};
```

> **Important:** Add these redirects before going live to prevent losing Google rankings for any indexed old URLs.

---

## DNS Cutover Steps

1. Build and deploy the new site to Vercel.
2. Add the custom domain `cohen-global.com` in Vercel → Domains.
3. Copy the Vercel nameservers or A/CNAME records.
4. In GoDaddy DNS settings, update the DNS records to point to Vercel.
5. DNS propagation typically takes 15 minutes to 48 hours.
6. After propagation, verify redirects are working (e.g., `cohen-global.com/the-company` → `cohen-global.com/about`).
7. Submit the new sitemap to Google Search Console: `https://cohen-global.com/sitemap.xml`.
8. Request indexing for the new homepage in Search Console.

---

## Pre-Launch Checklist

- [ ] Replace all Unsplash placeholder images with actual Cohen Global photography
- [ ] Set up contact form delivery (email or CRM) in `app/api/contact/route.ts`
- [ ] Set up acquisition form delivery in `app/api/acquisition/route.ts`
- [ ] Configure GA4 measurement ID in environment variables
- [ ] Add 301 redirects in `next.config.ts`
- [ ] Set canonical domain in `app/layout.tsx` metadata (update `metadataBase`)
- [ ] Verify all phone numbers are clickable on mobile
- [ ] Test forms end-to-end
- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Run Lighthouse audit targeting 90+ on all metrics

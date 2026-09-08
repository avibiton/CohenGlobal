# Cohen Global Properties — Website

Production-ready Next.js website for **Cohen Global Properties Inc.**, a New York City real estate development company.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first configuration)
- **Framer Motion** (animations)
- **React Hook Form + Zod** (form validation)
- **Lucide React** (icons)
- **Vercel** (deployment target)

---

## Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.
4. Set environment variables (see below) before deploying.
5. Set your custom domain to `cohen-global.com` in Vercel's Domain settings.

---

## Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics (optional — set before going live)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX

# Form delivery (set when integrating a CRM or email service)
# CONTACT_WEBHOOK_URL=https://...
# ACQUISITION_WEBHOOK_URL=https://...
# RESEND_API_KEY=re_...
# HUBSPOT_API_KEY=hs_...
```

Add the same variables in Vercel → Project → Settings → Environment Variables.

---

## Analytics

GA4 and Meta Pixel IDs are read from environment variables. To activate:

1. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and/or `NEXT_PUBLIC_META_PIXEL_ID`.
2. Add the analytics script to `app/layout.tsx` using the Next.js `Script` component.

Conversion events to track (add in the form submission handlers):
- `contact_form_submit`
- `property_submission`
- `project_view`
- `phone_click`
- `cta_click`

---

## Contact Form Integration

Form submissions currently log to the server console. To deliver them:

1. Open `app/api/contact/route.ts` — the TODO block is clearly marked.
2. Choose your delivery method:
   - **Email (Resend):** `npm install resend`, then call `resend.emails.send(...)`.
   - **HubSpot CRM:** Use the HubSpot Forms API.
   - **Webhook:** `fetch(process.env.CONTACT_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) })`.

Same pattern applies for `app/api/acquisition/route.ts`.

---

## Adding or Editing Projects

Projects live in [`data/projects.ts`](data/projects.ts).

To add a project:

```ts
{
  slug: "your-project-slug",          // URL: /projects/your-project-slug
  name: "123 Example Street",
  address: "123 Example Street",
  neighborhood: "Crown Heights",
  borough: "Brooklyn",
  propertyType: "Residential",
  status: "Completed",                // "Completed" | "In Progress" | "Planned"
  year: "2024",
  description: "Project description here.",
  heroImage: "/images/projects/your-image.jpg",
  gallery: ["/images/projects/img1.jpg", "/images/projects/img2.jpg"],
  featured: true,                     // Appears on homepage
}
```

Set `featured: true` for up to 3 projects to appear on the homepage.

---

## Replacing Placeholder Photography

All hero and project images currently use Unsplash placeholder URLs. To replace them:

1. Add Cohen Global project photos to `public/images/projects/`.
2. Update the `heroImage` and `gallery` paths in `data/projects.ts`.
3. Replace hero images in section components by searching for `images.unsplash.com`.

Images use `next/image` with automatic optimization. Provide high-resolution originals (1600px+ wide) and Next.js handles resizing and format conversion.

---

## Editing Company Information

Core company data lives in [`data/company.ts`](data/company.ts):
- Address, phone numbers, business hours → `company` object
- Team bios → `team` array
- Statistics → `stats` array
- Capability descriptions → `capabilities` array

---

## Project Structure

```
app/
  page.tsx                  # Homepage
  about/page.tsx            # About page
  projects/
    page.tsx                # All projects
    [slug]/page.tsx         # Individual project detail
  what-we-do/page.tsx       # Capabilities page
  acquisitions/page.tsx     # Property submission page
  contact/page.tsx          # Contact page
  privacy/page.tsx
  terms/page.tsx
  api/
    contact/route.ts        # Contact form API endpoint
    acquisition/route.ts    # Acquisition form API endpoint
  sitemap.ts                # Auto-generated XML sitemap
  robots.ts                 # robots.txt

components/
  layout/
    Header.tsx              # Sticky navigation
    Footer.tsx              # Footer with CTA
    StructuredData.tsx      # JSON-LD schema markup
  sections/
    Hero.tsx                # Homepage hero
    Stats.tsx               # Metrics bar
    AboutIntro.tsx          # Homepage about section
    FeaturedProjects.tsx    # Homepage projects grid
    Capabilities.tsx        # Homepage what-we-do grid
    CTASection.tsx          # Reusable CTA block
  projects/
    ProjectCard.tsx         # Project grid card
  forms/
    ContactForm.tsx         # Contact form
    AcquisitionForm.tsx     # Property submission form
  ui/
    SectionHeading.tsx      # Animated section headers
    PageHero.tsx            # Inner page hero

data/
  company.ts                # All company content
  projects.ts               # All project data

lib/
  utils.ts                  # cn() helper
  validation.ts             # Zod schemas for forms
```

---

## CMS Migration

The project is architected for a future CMS connection. When you're ready:

1. Replace the static data in `data/projects.ts` with async fetches from your CMS (Sanity, Contentful, Supabase, etc.).
2. Add `revalidate` or dynamic fetch options to pages as needed.
3. Rebuild pages — no component changes required.

---

## DNS / Migration Notes

See [`MIGRATION.md`](MIGRATION.md) for URL redirect mapping from the old GoDaddy site.

---

## Notes

- All statistics ($150M+, 20+ years, 5 boroughs) are sourced from the existing cohen-global.com website and verified company biography.
- Placeholder photography comes from Unsplash and must be replaced with Cohen Global's own project photography before launch.
- Project addresses in `data/projects.ts` are derived from the LLC entity names publicly listed on the company page; verify each address before making them prominent in marketing.

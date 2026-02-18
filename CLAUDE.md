# Jagodana Tool Template

This is the base template for all Jagodana free tool websites. When creating a new tool from this template, follow these instructions exactly.

## Tech Stack (DO NOT CHANGE)

- **Framework**: Next.js 16.x with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with OKLCH color tokens
- **UI Components**: shadcn/ui (new-york style) + Radix UI primitives
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Fonts**: Geist Sans + Geist Mono (Google Fonts)
- **Theme**: next-themes (light/dark/system)
- **Toasts**: sonner
- **Env Validation**: @t3-oss/env-nextjs + zod
- **Analytics**: Google Analytics (via NEXT_PUBLIC_GA_ID env var)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts, providers) - driven by siteConfig
│   ├── page.tsx            # Main page (hero + tool + features + footer)
│   ├── globals.css         # Tailwind v4 theme tokens (OKLCH)
│   ├── robots.ts           # SEO robots.txt
│   ├── sitemap.ts          # SEO sitemap.xml
│   └── api/                # API routes (if needed)
├── components/
│   ├── header.tsx           # Sticky header with gradient logo + theme toggle
│   ├── footer.tsx           # Footer with about + features + copyright
│   ├── theme-provider.tsx   # next-themes wrapper
│   ├── theme-toggle.tsx     # Animated sun/moon toggle
│   ├── google-analytics.tsx # GA4 script loader
│   ├── animated-gradient-text.tsx # Animated gradient text effect
│   ├── seo/
│   │   └── structured-data.tsx    # JSON-LD WebApplication schema
│   └── ui/                  # shadcn/ui components (DO NOT MODIFY)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── skeleton.tsx
│       ├── sonner.tsx
│       └── tabs.tsx
├── config/
│   └── site.ts             # ALL tool-specific config lives here
├── lib/
│   └── utils.ts            # cn() helper
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
└── env.mjs                 # Environment variable validation
```

## How to Create a New Tool

### Step 1: Clone and Rename

```bash
git clone <template-repo-url> <new-tool-name>
cd <new-tool-name>
rm -rf .git
git init
```

### Step 2: Update `src/config/site.ts`

This is the SINGLE SOURCE OF TRUTH for all tool-specific content. Update every `{{PLACEHOLDER}}` value:

- `name` - Display name (e.g., "Favicon Generator")
- `title` - SEO title (e.g., "Favicon Generator - Create All Favicon Sizes + Manifest")
- `description` - SEO description
- `url` - Production URL (e.g., "https://favicon-generator.jagodana.com")
- `headerIcon` - lucide-react icon name for the header
- `headerGradient` - Tailwind color pair (from/to)
- `keywords` - SEO keywords array
- `applicationCategory` - Schema.org category
- `themeColor` - Hex color for manifest/meta
- `hero.*` - All hero section content
- `featureCards` - 3 feature cards with emoji icons
- `footer.*` - Footer content

### Step 3: Update `package.json`

Change the `"name"` field to your tool's slug.

### Step 4: Update `public/site.webmanifest`

Replace all `{{PLACEHOLDER}}` values with your tool's info.

### Step 5: Add Tool-Specific Dependencies

Install any additional packages needed for your tool's functionality.

### Step 6: Build the Tool UI

Replace the placeholder in `src/app/page.tsx` (the `TODO` section) with your tool's main component. Create tool-specific components in `src/components/`.

### Step 7: Add favicon.svg

Create or place a custom `public/favicon.svg` for the tool.

### Step 8: Create og-image.png

Create a 1200x630 Open Graph image at `public/og-image.png`.

### Step 9: Update Environment

Copy `.env.example` to `.env.local` and set values.

## Page Layout Pattern (MUST FOLLOW)

Every tool page follows this exact structure:

1. **Header** - Sticky, blurred backdrop, gradient logo, theme toggle
2. **Hero Section**
   - Animated badge (Sparkles icon + text)
   - Large heading with AnimatedGradientText
   - Subtitle paragraph
3. **Tool Interface** - The main interactive area
4. **Feature Cards** - 3-column grid (shown when no results)
5. **Footer** - About + features list + copyright + "More Tools" link

## Animation Pattern

All sections use framer-motion staggered animations:
- `initial={{ opacity: 0, y: 20 }}`
- `animate={{ opacity: 1, y: 0 }}`
- `transition={{ delay: 0.1 * index }}`

## Color Scheme

Each tool has a unique gradient defined in `siteConfig.headerGradient`. Common choices:
- `emerald-500` / `cyan-500` (favicon-generator, sitemap-checker)
- `blue-500` / `indigo-500` (sitemap-url-extractor)
- `purple-500` / `pink-500` (screenshot-beautifier)
- `orange-500` / `amber-500`
- `rose-500` / `red-500`

**Important**: When using dynamic Tailwind classes from siteConfig, ensure the classes are included in the safelist or use them somewhere statically so Tailwind doesn't purge them.

## SEO Checklist

Every tool MUST have:
- [x] `layout.tsx` metadata (title, description, keywords, OG, Twitter)
- [x] `robots.ts` with sitemap reference
- [x] `sitemap.ts` with all routes
- [x] JSON-LD structured data (WebApplication schema)
- [x] `site.webmanifest` in public/
- [x] `favicon.svg` in public/
- [x] `og-image.png` (1200x630) in public/
- [x] Canonical URL via `alternates.canonical`
- [x] `viewport` export with themeColor

## Security Headers (next.config.ts)

Already configured:
- HSTS
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## Common Patterns

### Client-Side Processing
Most tools process data client-side for privacy. Emphasize "100% client-side" and "No uploads to server" in copy.

### Toast Notifications
```tsx
import { toast } from "sonner";
toast.success("Done!");
toast.error("Something went wrong");
```

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

### API Routes (if needed)
Place in `src/app/api/[route]/route.ts`. Add env vars to `src/env.mjs`.

## DO NOT

- Change the base UI components in `src/components/ui/`
- Remove security headers from `next.config.ts`
- Hardcode secrets or API keys
- Change the font from Geist
- Remove Google Analytics integration
- Skip structured data / JSON-LD
- Use Tailwind v3 patterns (use v4 @theme inline)

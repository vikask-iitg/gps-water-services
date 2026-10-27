# GPS Water Services — Website

Bilingual (English / हिंदी) website for **GPS Water Services**, a chilled RO water supplier in Kusumkasa, Dist. Balod (Chhattisgarh), run by Vinod Thakur. The site turns visitors into WhatsApp and phone orders for 20 L RO jars, GPS Pure Ice slabs, packaged drinking water and water pouches.

**Live:** https://gpswater.vercel.app

## Features

- **English and Hindi** — English by default; the `हिं | EN` switch changes the whole site without a page reload and remembers the choice. `?lang=hi` opens Hindi directly.
- **Order Now popup** — name, phone, address, product, quantity, delivery date and preferred time; sends a pre-filled message to WhatsApp. Closes only with the ✕ button.
- **WhatsApp everywhere** — every order button opens `wa.me/916263450248` with a ready-made message in the visitor's language.
- **Forms** — quick order, weekly jar subscription and wedding/bulk quotation. All send to WhatsApp; nothing is stored on a server. A hidden honeypot field blocks simple spam bots.
- **Mobile first** — sticky bottom bar on phones (Order Now + Call Now), hidden while the home hero is on screen. Layout checked from 360 px phones to 1500 px desktops.
- **Animated hero** — an SVG insulated camper jar with dripping tap, condensation, floating ice and sparkles. Animation stops for users who prefer reduced motion.
- **Local SEO** — `LocalBusiness` and `FAQPage` structured data, `hreflang` links, sitemap, robots.txt.
- **Link preview** — 1200×630 Open Graph / Twitter card image for WhatsApp, Facebook and X.
- **Analytics ready** — GA4 events for WhatsApp clicks, call clicks, popup opens and form sends, switched on by setting a GA4 ID.

## Tech stack

- [Astro 5](https://astro.build) — static site, no client framework
- Plain CSS with design tokens (`src/styles/global.css`)
- Fonts: Poppins + Inter (English), Baloo 2 + Mukta (Hindi) from Google Fonts
- `@astrojs/sitemap`
- Hosted on [Vercel](https://vercel.com)

## Getting started

Requires Node.js 18.20+ (developed on Node 26).

```bash
npm install
npm run dev       # http://localhost:4321 (auto-reloads on save)
npm run build     # outputs static site to dist/
npm run preview   # serve the built site locally
```

## Project structure

```
src/
  data/site.ts            ← all business content: rates, products, areas, FAQs, reviews
  layouts/Base.astro      ← <head>, SEO tags, header/nav, footer, order popup, bottom bar, site scripts
  pages/
    index.astro           ← home
    products/[slug].astro ← one page per product (generated from site.ts)
    subscription.astro    ← weekly jar plans + booking form
    bulk-orders.astro     ← weddings / events / hotels + quotation form
    purity.astro          ← RO + UV process, certificates, plant photos
    about.astro, contact.astro, privacy.astro
  components/
    T.astro               ← bilingual text: <T hi="…" en="…" />
    OrderForm.astro       ← quick order form (inline and popup versions)
    HeroArt.astro         ← animated camper jar SVG
    ProductCard, PageHero, WaButton, Icon, Wave
  styles/global.css       ← all styles
public/                   ← favicon, robots.txt, og-image.jpg
og/og-card.astro          ← source for the link-preview image (not a live page)
```

## Editing content

Almost everything the owner might change lives in **`src/data/site.ts`**:

| What | Where in `site.ts` |
|---|---|
| Phone, WhatsApp, address, hours, email | `business` |
| Product rates and sizes | `products[].sizes[].price` — leave `''` to show "Call for rate" |
| Delivery villages | `deliveryAreas` |
| Subscription plans | `plans` |
| Customer reviews | `reviews` |
| FAQs | `faqs` |
| Google Analytics | `business.ga4Id` (e.g. `'G-XXXXXXX'`) |

Each text value has both languages: `{ hi: 'हिंदी', en: 'English' }`. Save the file and the dev server reloads; push to `main` to publish.

## How it works

### Bilingual text

Both languages are rendered into the HTML; CSS shows one based on `<html data-lang>`:

```astro
<T hi="अभी ऑर्डर करें" en="Order Now" />
<!-- renders: <span class="t-hi">…</span><span class="t-en">…</span> -->
```

For text that can't contain spans (dropdown options, page title), use `data-hi` / `data-en` attributes; the script in `Base.astro` swaps them when the language changes. The default language is set in the inline script at the top of `Base.astro`.

### Forms → WhatsApp

Any `<form data-wa-form>` is handled by the script in `Base.astro`. On submit it reads each field's visible label and value in the current language, builds a message, and opens `https://wa.me/<number>?text=…`. Add a field to a form and it will appear in the message automatically.

### Order popup

Any element with `data-order-open` opens the popup (`<dialog id="order-modal">` in `Base.astro`). Add `data-product="<slug>"` to preselect a product.

## Deployment

The Vercel project `gps-water-services` is connected to this GitHub repo:

- Push to **`main`** → production deploy to https://gpswater.vercel.app
- Push to any other branch → preview deploy with its own URL

Vercel only deploys commits whose author email is linked to a GitHub account. This repo is configured to use the GitHub noreply address; if a deploy shows **Blocked**, check `git config user.email`.

Manual deploy, if ever needed: `npx vercel --prod`.

To move to a custom domain (e.g. `gpswater.in`): add it in Vercel → Project → Domains, then update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.

## Link-preview image

`public/og-image.jpg` is a screenshot of `og/og-card.astro`. To regenerate it:

1. Copy `og/og-card.astro` to `src/pages/og-card.astro`
2. Run `npm run dev` and open http://localhost:4321/og-card at exactly 1200×630
3. Take a screenshot, save it as `public/og-image.jpg` (keep it under ~300 KB)
4. Delete `src/pages/og-card.astro`
5. Bump the `?v=` number on `ogImage` in `src/layouts/Base.astro` so WhatsApp and Facebook fetch the new image

## Still needed from the owner

These are placeholders in the site today:

- Product rates, jar deposit and minimum order (`products` in `site.ts`)
- Confirmed opening hours, delivery villages and delivery charges
- PIN code and exact map location (`business.postalCode`, `business.geo`)
- Real photos: plant, RO machine, ice plant, delivery vehicle, team, Vinod Thakur
- FSSAI and BIS licence numbers; what the ISO/IEC 17025:2017 certificate covers
- 5–10 real customer reviews (current ones are samples)
- Founding year and customer count for the About page
- GA4 measurement ID

## Planned (V2)

- Online payment (UPI / Razorpay)
- Customer accounts with order history and one-tap reorder
- Admin dashboard with the daily delivery list

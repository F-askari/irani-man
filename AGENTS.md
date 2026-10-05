# AGENTS.md

## Stack
- Vite + React 18 + Tailwind CSS 3, single-page Persian (fa, `dir="rtl"`) storefront.
- No backend / no DB — product data is static in `src/data/products.js`.
- Fonts (Vazirmatn + Noto Nastaliq Urdu) load from Google Fonts in `index.html`.
- All imagery is hand-drawn inline SVG (garment flat-lays, hero rack scene, banners) — no external image assets.

## Run
- `docker compose -f docker-compose.base44.yml up -d` → Vite dev server on host port 3000 (binds 0.0.0.0, polling watcher). `npm install` runs on every container start.
- Health: `curl http://localhost:3000/`.
- No credentials or secrets are required.

## Conventions
- All UI text is Persian. NEVER add letter-spacing/tracking classes to Persian text — it breaks Arabic-script letter joining.
- The app is RTL: use logical Tailwind utilities (`ms-/me-/ps-/pe-/start-/end-`), not `ml-/mr-/left/right`.
- Prices and discounts use Persian digits, typed literally in `src/data/products.js`.
- Brand mark «مردِ ایرانی» uses the `.font-nastaliq` class (Nastaliq descends below the baseline — don't shrink its line-height).
- SVG clip-path / gradient ids must be unique per instance — use React's `useId()`.

## Verify
- After frontend edits, check the preview browser console for errors, then click add-to-cart, wishlist heart, and the mobile menu once.

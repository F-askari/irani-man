# نخِ ایرانی — Men's Clothing Storefront

React 18 + Vite 6 + Tailwind SPA, RTL/Persian, no backend (static sample data in `src/data/siteData.js`).

## Running locally
`docker compose -f docker-compose.base44.yml up -d --build` — single `web` service runs `npm install && vite dev` on port 5173, mapped to host 3000. No database, no secrets, no auth.

## Verify it works
`curl http://localhost:3000/` should return the Vite-served HTML. Open the preview — hero, collections, outfit builder, essentials/sets, brand story, testimonials, and footer sections should all render RTL in Persian.

## Notes
- Fonts: Vazirmatn loaded from Google Fonts CDN in `index.html`.
- Hero image is the user-provided reference image hosted on Base44 media CDN (hardcoded URL in `src/components/Hero.jsx`), shown uncropped via `object-contain`.
- All other product/lifestyle imagery uses public Unsplash photo URLs — replace with real product photography when available.
- `vite.config.js` sets `server.allowedHosts: true` so the sandbox's rotating preview host is always accepted.

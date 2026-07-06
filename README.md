# Restaurant Tabla — Website

A bilingual (Français / English), dark-luxury single-page website for **Restaurant Tabla**, fine Indian cuisine in the heart of Montréal's Village since 2004.

> 1329 Rue Sainte-Catherine E, Montréal, QC H2L 2H4 · 514 523-6464 · Apportez votre vin

## ✨ Features

- **Bilingual FR/EN** — one-tap language toggle; every string, date format and label is localized (French by default)
- **Cinematic hero** — tandoor-ember gradients, a slowly rotating gold mandala ring, and a staged page-load reveal
- **Interactive menu grid** — filterable (Tout / Entrées / Plats / Boissons & Douceurs) with dietary tags (Végane, SG, Végé, Épicé), signature badges, and hover micro-interactions
- **Resy-style booking widget** — guest count, 12-day date strip (Mondays disabled — the restaurant is closed), and time slots generated from the real opening hours
- **Sticky mobile bottom bar** — thumb-friendly quick actions: Menu · Réserver · Horaires · Nous trouver
- **Scroll-reveal animations** via `IntersectionObserver`, a pausable marquee, testimonials, and a full `prefers-reduced-motion` fallback
- **Zero backend** — booking state is mocked locally; wire it to your reservation provider when ready

## 🛠 Tech Stack

| | |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 (custom `gold` / `obsidian` theme) |
| Icons | lucide-react |
| Fonts | Cormorant Garamond (display) · Jost (body) via Google Fonts |

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/<your-username>/restaurant-tabla.git
cd restaurant-tabla

# 2. Install
npm install

# 3. Run locally
npm run dev        # → http://localhost:5173

# 4. Production build
npm run build      # output in dist/
npm run preview    # preview the production build
```

## 📁 Project Structure

```
├── index.html                  # Meta tags, fonts, SEO description
├── src/
│   ├── App.jsx                 # Page composition + language state
│   ├── index.css               # Tailwind layers + keyframe animations
│   ├── components/
│   │   ├── atoms.jsx           # Eyebrow, Ornament, dietary Tag
│   │   ├── Header.jsx          # Sticky nav + FR/EN toggle
│   │   ├── Hero.jsx            # Cinematic hero + mandala ornament
│   │   ├── Marquee.jsx         # Scrolling gold tagline strip
│   │   ├── About.jsx           # Story + stats panel
│   │   ├── MenuSection.jsx     # Filterable menu card grid
│   │   ├── Testimonials.jsx    # Review cards
│   │   ├── Booking.jsx         # Guests / date / time reservation widget
│   │   ├── HoursLocation.jsx   # Hours, address, phone cards
│   │   ├── Footer.jsx
│   │   └── BottomNav.jsx       # Mobile sticky quick-action bar
│   ├── data/
│   │   ├── translations.js     # All FR/EN copy in one place
│   │   └── menu.jsx            # Dishes, prices, tags, card art tints
│   ├── hooks/useReveal.js      # Scroll-reveal IntersectionObserver
│   └── lib/utils.js            # Date/slot generation, smooth scroll
├── tailwind.config.js          # Brand colors & font families
└── vite.config.js
```

## 🎨 Customization

- **Copy / translations** → edit `src/data/translations.js`
- **Dishes & prices** → edit `src/data/menu.jsx` (each dish has FR + EN text, tags, a card gradient `tint`, and a watermark `Icon`)
- **Real photos** → in `MenuSection.jsx`, replace the gradient art header `<div>` with an `<img>`; in `Hero.jsx`, replace the gradient backdrop with a `<video>` or image
- **Brand colors & fonts** → `tailwind.config.js` (`gold`, `obsidian`, `ink`, `card`, `cream`)
- **Hours / booking rules** → `src/lib/utils.js` (`buildDates`, `slotsFor`)

## 🌐 Deployment

**Vercel / Netlify (easiest):** import the repo, framework preset *Vite*, build command `npm run build`, output directory `dist`. Done.

**GitHub Pages:**
1. In `vite.config.js`, set `base: "/<repo-name>/"` (e.g. `"/restaurant-tabla/"`)
2. Run `npm run deploy` (uses the included `gh-pages` script)
3. In the repo settings, point Pages to the `gh-pages` branch

## 📝 Notes

- The reservation widget is a **front-end mock** — connect it to a real service (email, SevenRooms, Libro, OpenTable…) before taking live bookings.
- Menu items and prices are illustrative, based on publicly listed dishes; confirm with the restaurant before publishing.

## License

MIT — see [LICENSE](LICENSE).

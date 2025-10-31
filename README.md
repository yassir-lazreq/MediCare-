/
├── index.html
├── dist/
│   ├── index.html
│   └── output.css
├── script/
│   ├── carousel.js
│   ├── dark-mode.js
│   ├── medecins.js
│   ├── nav-bar.js
│   ├── rendez-vous.js
│   └── suivi.js
├── src/
│   └── input.css
├── assets/
│   ├── article1.png
│   ├── article2.png
│   ├── article3.png
│   ├── article4.png
│   ├── card1.png
│   ├── card2.png
│   ├── card3.png
│   ├── card4.png
│   ├── doctor1.png
│   ├── doctor2.png
│   ├── doctor3.png
│   ├── doctor4.png
│   ├── doctor5.png
│   ├── doctor6.png
│   ├── doctor7.png
│   ├── doctor8.png
│   ├── health-1.png
│   ├── health-2.png
│   ├── health-3.png
│   ├── health-4.png
│   ├── health_logo.png
│   ├── hero-image.png
│   ├── location-icone.svg
│   ├── mail-icone.svg
│   ├── moon-icone.svg
│   ├── phone-icone.svg
│   ├── search-icone.svg
│   └── sun-icone.svg
├── pages/
│   ├── Médecins.html
│   ├── Rendez-vous.html
│   └── Suivi.html
└── readme.md

# MediCare — README

A small static front-end project (Tailwind-based) with a hero, carousel, header, and a set of content cards.

This README explains the project layout, how to run the local Tailwind watcher, how to preview `dist/`, and a few recommendations for maintenance.

## Quick facts
- Project root: `C:\Users\pc\Desktop\MediCare`
- Dev build command (Tailwind CLI): `npm run dev` (see `package.json`)
- Built/served output lives in `dist/` (open `dist/index.html` in a browser to preview)

## Project structure (important files)

- `assets/` — image and icon assets used by the site (logo, slides, cards, icons)
- `dist/` — compiled/ready-to-serve site
	- `index.html` — main page served to users
	- `output.css` — Tailwind-generated CSS (built from `src/input.css`)
- `script/` — JavaScript controllers (carousel etc.)
	- `carousel.js` — carousel controller
- `src/` — source CSS (Tailwind input)
	- `input.css` — imports Tailwind directives used by the build
- `package.json` — developer scripts and dependencies

## Setup / local development

1. Install dependencies (if you haven't already):

```powershell
npm install
```

2. Start the Tailwind watcher to rebuild `dist/output.css` on changes:

```powershell
npm run dev
```

3. Preview the site:
- Quick (open file): double-click `dist\index.html` or open it in a browser.
- Local server (recommended for correct relative asset handling):

Option A — Python (if installed):
```powershell
cd dist
python -m http.server 8000
# then open http://localhost:8000
```

Option B — install `http-server` (npm) and run:
```powershell
npm install -g http-server
cd dist
http-server -c-1
# then open the printed URL
```

## Editing notes
- Edit source CSS in `src/input.css` and run `npm run dev` to update `dist/output.css`.
- `dist/index.html` has been edited directly for quick prototyping. If you want to adopt a full build flow, consider moving templates into a `src/` HTML or templating pipeline and then copying/building to `dist/`.
- JavaScript for the carousel lives in `script/carousel.js`. If you change any `data-` attributes (e.g., `data-carousel-item`), update the script accordingly.

## Assets and filenames
- Several asset filenames contain spaces (example: `health 1.png`, `search icone.svg`). Tools and URLs work better with hyphens or underscores.
- Recommended rename pattern (PowerShell examples) — run from the project root:

```powershell
# Example: rename files that contain spaces
Rename-Item -Path ".\assets\health 1.png" -NewName "health-1.png"
Rename-Item -Path ".\assets\search icone.svg" -NewName "search-icone.svg"
```

After renaming, update URLs in `dist/index.html` and the inlined CSS (the file currently references the encoded filenames). I can do this rename + update for you if you want.

## Accessibility and best practices (what I changed)
- The dark/light toggle uses a native `<input type="checkbox">` wrapped in a `<label>` for native semantics. Icons are decorative (empty `alt` and `aria-hidden`) and an `sr-only` label is present.
- Carousel slides are `data-carousel-item` elements and include ARIA attributes; keyboard and touch handlers live in `script/carousel.js`.

## Troubleshooting
- If styles don't appear: ensure `npm run dev` is running and `dist/output.css` is updated.
- If images fail to load: check asset filenames for spaces and URL-encoding; prefer renaming to remove spaces.
- If carousel doesn't move: open developer console for errors and ensure `script/carousel.js` is loaded (check `<script src="../script/carousel.js">` path from `dist/index.html`).

## Next steps / optional improvements
- Rename assets to remove spaces (safer across platforms). I can run this for you.
- Move HTML templates to `src/` and adopt a small build step so `dist/` is produced consistently.
- Add a small `npm start` script that runs Tailwind and a static server together for an improved dev experience.

---
If you want, I can now:
- rename the assets and update references automatically, or
- restore `custom.css` as an external file instead of inlining, or
- add JS to persist the dark-mode choice in localStorage.
Tell me which and I'll apply the change.

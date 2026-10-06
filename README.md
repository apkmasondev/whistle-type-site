# WhistleType — project page

Source of **https://apkmason.dev/whistle-type-site/**, the landing page of
[WhistleType](https://github.com/apkmasondev/whistle-type) — local push-to-talk dictation for Windows.

Plain HTML, CSS and JavaScript: no build step, no frameworks, no external fonts, scripts, analytics or cookies
(enforced by a Content-Security-Policy). English and Polish, light and dark theme.

| File | |
|---|---|
| `index.html` | the page (English text; Polish in `app.js`) |
| `styles.css` | layout and theme tokens |
| `app.js` | language switch and the two benchmark charts (inline SVG) |
| `assets/` | screenshots of the app, icon, social preview image |

When `app.js` or `styles.css` change, bump the `?v=` number on both links in `index.html` (browsers cache them for up to 10 minutes on GitHub Pages).

Preview locally: `python -m http.server 8000` in this folder, then open http://localhost:8000/.

Licence: MIT (see `LICENSE`). Screenshots show WhistleType itself; third-party names are used only for attribution.

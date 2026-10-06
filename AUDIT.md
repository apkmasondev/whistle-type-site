# Pre-publication audit (2026-10-06)

| Area | Check | Result |
|---|---|---|
| Privacy | Requests while loading and using the page (browser network log) | Only the page's own files. No fonts, CDNs, analytics, cookies or embeds. `localStorage` holds only the chosen language |
| Security | Content-Security-Policy (`default-src 'none'`, scripts/styles/images from `'self'` only, no inline script, `base-uri`/`form-action` none) | No CSP violations in the console. GitHub Pages cannot send headers, so `frame-ancestors` is not available (static page, no forms: low risk) |
| Security | Dynamic HTML | `innerHTML` only with the page's own static translation strings; chart tooltip text is set with `textContent` |
| Links | All 16 external URLs (repo, releases, direct downloads, licences, upstream projects) | All reachable (HTTP 200/206); installer, ZIP and SHA256SUMS download from Release v1.1.0. The page's own URL is checked again after deployment |
| Content | Facts match the app and PERFORMANCE.md (versions, sizes, WER/latency numbers, requirements) | Checked against the repository |
| Licences | MIT for WhistleType; Whistle/Needle (Apache-2.0), whisper.cpp (MIT), Whisper (MIT), CUDA (NVIDIA EULA), VC++ runtime, Rust crates; non-affiliation statement | Present, with links to THIRD_PARTY_NOTICES.md |
| Accessibility | One `h1`, ordered headings, landmarks, skip link, `lang` updated on switch, every image has `alt` (translated), all links/buttons named | Pass (automated DOM checks) |
| Accessibility | Text contrast, both themes (WCAG 2.x) | All text/background pairs ≥ 4.5:1 (lowest 4.70); chart bars ≥ 3:1 (validated) |
| Accessibility | Keyboard | Visible focus ring; chart bars reachable with Tab, tooltip follows focus; Esc closes it. Data also available as a table and in `aria-label` |
| Accessibility | Reduced motion / forced colours | Caret animation and smooth scrolling disabled with `prefers-reduced-motion`; chart bars use system colours in forced-colours mode |
| Responsive | 375 px phone, 755 px tablet, 1280 px desktop | No horizontal scroll; charts are redrawn at the real width so their text stays 12–13 px |
| i18n | English and Polish, all 123 translatable strings | Complete; decimal commas in Polish; choice remembered; screenshots switch language |
| Performance | Page weight | 93 KB until first paint (HTML, CSS, JS, icon, two overlay images), 464 KB in total; screenshots lazy-loaded with fixed dimensions (no layout shift) |
| SEO / sharing | Title, description, canonical URL, Open Graph + Twitter card with a 1200×630 preview image | Present |

Fixed during the audit: decimal points in the Polish comparison table; inconsistent chart labels; chart text
shrinking to ~8 px on phones; keyboard focus on a chart bar hiding its own tooltip (scroll handler);
crowded axis ticks on narrow screens; missing note for browsers without JavaScript.

Known and accepted: the overlay pictures in the hero show the English UI in both languages; the screenshots of the
Speech models window show a developer data folder path.

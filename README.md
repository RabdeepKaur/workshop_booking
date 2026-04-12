# FOSSEE Workshop Booking — Python Screening Task : UI/UX Enhancement


> A mobile-first redesign of the [FOSSEE Workshop Booking](https://github.com/FOSSEE/workshop_booking) platform, built with React. The goal was to improve performance, accessibility, SEO, and overall user experience while keeping the core functionality intact.

## Setup Instructions
 
### Prerequisites
- Node.js v18+
- npm v9+
 
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/workshop_booking.git
cd workshop_booking
 
# 2. Install dependencies
npm install
 
# 3. Start the development server
npm run dev
```
 
The app will be available at `http://localhost:5173`

## Reasoning
 
### 1. What design principles guided your improvements?
 
The redesign was guided by four core principles:
 
**Visual hierarchy** — he original website does not provide a visual cue to order the content. A new dark forest green hero card was added at the top of the page, which allowed the lighter content to be placed below it in progressively lighter shades. The result was that all users could identify within seconds where to take action (View Workshops, Propose Workshop).
 
**Mobile-first layout** — Each component was designed with a width of 375px, and all components scaled thereafter. The sidebar collapses into an off-canvas drawer on mobile and is revealed with a hamburger trigger. 
 
**Consistent design language** — A single CSS variable system (`--forest`, `--mint`, `--cream`, `--border`) is shared across all components. This means color, spacing, and typography are predictable across every page — the user always knows they're on the same site.
 
**Accessibility as a baseline, not an afterthought** — All form inputs have visible `<label>` elements (not just placeholders), buttons have `aria-label` attributes, decorative icons use `aria-hidden="true"`, and error messages use `role="alert"` so screen readers announce them.
 
---
 
### 2. How did you ensure responsiveness across devices?
 
Several concrete techniques were used:
 
- **CSS Grid with `auto-fill` and `minmax`** — The workshop cards grid uses `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))` so it naturally reflows from 1 to 2 to 3 columns depending on screen width, with no breakpoint needed.
 
- **Two breakpoints only** — `max-width: 1024px` collapses the sidebar and `max-width: 600px` handles small phones. Keeping breakpoints minimal reduces maintenance overhead and avoids conflicting rules.
 
- **`position: fixed` hamburger** — The hamburger button is `position: fixed`, not `position: relative`, so it never contributes to document flow and doesn't push page content down. This was a specific bug found and fixed during development.
 
- **`box-sizing: border-box` globally** — Applied to `*, *::before, *::after` so padding never causes inputs or containers to overflow their parents on narrow screens.
 
- **Tested at 375×667 (iPhone SE)** — All four pages (Home, Propose, Status, Catalog) were verified at this viewport, which is the minimum supported size.
 
---
 
### 3. What trade-offs did you make between design and performance?
 
**Google Fonts vs. system fonts** — I chose to import `Playfair Display` and `DM Sans` from Google Fonts. This adds ~2 render-blocking requests but significantly improves the visual quality of headings. To mitigate this, the `@import` uses `display=swap` so body text renders immediately in a fallback font while the custom fonts load.
 
**react-snap was evaluated and rejected** — I considered using `react-snap` for static pre-rendering to improve SEO for search engine crawlers. After running `npm audit`, it reported 9 high-severity vulnerabilities with no available fix (the package is unmaintained since 2019). I removed it in favour of `react-helmet-async` for per-route meta tags, which provides most of the SEO benefit without the security risk.
 
**Icon lazy loading** — `react-icons` is a large package. Icons in `HeroCard` and `SuggestionCard` are loaded with `React.lazy()` and wrapped in `<Suspense>` with a dimensioned fallback div. This keeps the main JS bundle smaller at the cost of a small delay on first icon render, which is invisible to the user.
 
**No animation library** — I kept animations to CSS transitions only (`transition: background .2s, transform .15s`) rather than importing a library like Framer Motion. This avoids adding ~30kb to the bundle for effects that are purely cosmetic.
 
---
 
### 4. What was the most challenging part of the task and how did you approach it?
 
The most challenging part was **diagnosing and fixing the excessive top spacing on mobile**.
 
The gap between the top of the viewport and the first content on the Home page was caused by two separate issues stacking on top of each other:
 
1. The hamburger button used `position: relative` instead of `position: fixed`. Because it was in normal document flow, it occupied ~56px of vertical space before the page content even started.
 
2. The `.main-content` container had `padding-top: 80px` on mobile — intended to clear the hamburger — which compounded the first issue instead of being the sole source of spacing.
 
My approach was to inspect the computed layout in DevTools, identify every element contributing to the top offset, and fix the root causes rather than compensating with negative margins. Changing the hamburger to `position: fixed` removed its flow contribution, and reducing `padding-top` to `60px` then provided just enough clearance without the excessive gap.
 
This is a good example of why CSS specificity and layout context matter — the original code had the right intent but the wrong CSS property, and the symptoms (a large visual gap) looked identical to a simple padding issue.
 
---
 
## Pages
 
| Route | Description |
|---|---|
| `/` | Home — hero card, current workshops, trending |
| `/catalog` | All Workshops — filter panel + workshop cards grid |
| `/propose` | Propose a Workshop — validated form |
| `/status` | Workshop Status — proposal history with status badges |
 
---
 
## Tech Stack
 
- **React** (Vite)
- **React Router DOM** — client-side routing
- **react-helmet-async** — per-route SEO meta tags
- **react-icons** — lazy-loaded icon components
- **CSS custom properties** — design token system, no CSS framework
 
---
 
## Submission Checklist
 
- [x] Code is readable and well-structured
- [x] Git history shows progressive work
- [x] README includes reasoning answers and setup instructions
- [x] Screenshots included below
- [x] Code is documented where necessary
 
---
 
## Screenshots
 
> Replace the placeholders below with your actual before/after screenshots.
 
### Before
 

https://github.com/user-attachments/assets/537c573e-1509-4a78-ae76-21ba88f8c9b0


| Home | Catalog |
|---|---|
| ![Before Home](./screenshots/before-home.png) | ![Before Catalog](./screenshots/before-catalog.png) |
 
### After
 
| Home | Propose | Status | Catalog | Navbar |
|------|--------|--------|---------|--------|
| <img src="https://github.com/user-attachments/assets/492d9181-ddc0-46cd-aa85-c1c06086c6da" width="200"/> | <img src="https://github.com/user-attachments/assets/ddfe03e1-0af5-4300-9b71-ca448ce3d563" width="200"/> | <img src="https://github.com/user-attachments/assets/2ffd03b9-ee0f-411d-83ae-4a5359b48fb4" width="200"/> | <img src="https://github.com/user-attachments/assets/6aab1f52-2177-40bc-9c5f-d5fffb6e800a" width="200"/> | <img src="https://github.com/user-attachments/assets/f3d58f8a-89cd-4456-8f78-4ab13a52118c" width="200"/> |

---
 
© FOSSEE, IIT Bombay. All Rights Reserved.

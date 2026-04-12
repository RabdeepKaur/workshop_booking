# FOSSEE Workshop Booking — Python Screening Task : UI/UX Enhancement


> A mobile-first redesign of the [FOSSEE Workshop Booking](https://github.com/FOSSEE/workshop_booking) platform, built with React. The goal was to improve performance, accessibility, SEO, and overall user experience while keeping the core functionality intact.

## Setup Instructions
 
### Prerequisites
- Node.js v18+
- npm v9+
 
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/RabdeepKaur/workshop_booking.git
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
 
**Visual hierarchy** — The original interface didn’t clearly guide users on where to focus first. To fix this, I introduced a dark forest green hero section at the top, with lighter content flowing below it. This creates a natural visual flow, so users can quickly spot key actions like “View Workshops” or “Propose Workshop” without thinking too much.
 
**Mobile-first layout** — I designed everything starting with a 375px width (mobile screen) and then scaled it up for larger devices. The sidebar is replaced with a clean off-canvas menu on smaller screens, accessible through a simple hamburger icon, making navigation smooth and uncluttered. 
 
**Consistent design language** —  I used a shared set of CSS variables (--forest, --mint, --cream, --border) across the entire app. This keeps colors, spacing, and typography consistent, so the interface feels cohesive and familiar no matter which page the user is on.
 
**Accessibility as a baseline, not an afterthought** — Instead of treating accessibility as an afterthought, I built it into the design. All inputs have proper labels (not just placeholders), buttons include aria-labels, decorative icons are hidden from screen readers, and error messages are announced properly using role="alert". This ensures the app works well for all users.
 
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
 
**react-snap was evaluated and rejected** — I considered using `react-snap` for static pre-rendering to improve SEO for search engine crawlers. After running `npm audit`, it reported 9 high-severity vulnerabilities with no available fix . I removed it in favour of `react-helmet-async` for per-route meta tags, which provides most of the SEO benefit without the security risk.
 
**Icon lazy loading** — `react-icons` is a large package. Icons in `HeroCard` and `SuggestionCard` are loaded with `React.lazy()` and wrapped in `<Suspense>` with a dimensioned fallback div. This keeps the main JS bundle smaller at the cost of a small delay on first icon render, which is invisible to the user.
 
**No animation library** — I kept animations to CSS transitions only (`transition: background .2s, transform .15s`) rather than importing a library like Framer Motion. This avoids adding ~30kb to the bundle for effects that are purely cosmetic.
 
---
 
### 4. What was the most challenging part of the task and how did you approach it?
 
The most challenging part was figuring out the overall user experience. The site needs to handle three things at the same time — letting users view their workshops, propose new ones, and also keep them motivated to stay engaged. None of these is more important than the others, so the real challenge was making sure each page gives the right context without making users feel confused or lost.

On the technical side, the main challenge was organizing the component structure so that it supports the user experience instead of complicating it. The sidebar navigation needed to be always accessible but not distracting. So, on desktop, it stays fixed on the left, while the main content has enough space on the right.

Each page is built as its own route with its own set of components. For example, the Home page uses components like HeroCard and SuggestionCard, while the Catalog page uses FilterPanel and a grid of cards. Keeping components small and focused helped ensure that each page only handles what it needs, without unnecessary overlap between different parts of the app.

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
 

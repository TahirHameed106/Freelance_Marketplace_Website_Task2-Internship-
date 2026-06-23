# SkillBridge — Freelance Marketplace Platform

A modern, responsive freelance marketplace web application built with Next.js 15 and Tailwind CSS v4. Inspired by platforms like Fiverr and Upwork.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework + routing |
| React 19 | UI components |
| Tailwind CSS v4 | Styling |
| JavaScript (JSX) | No TypeScript |

---

## Project Status

| Day | Task | Status |
|---|---|---|
| Day 1 | Project setup + Home page | ✅ Done |
| Day 2 | Services page | ✅ Done |
| Day 3 | Seller Profile + Service Details pages | 🔲 Pending |
| Day 4 | About Us + Contact pages | 🔲 Pending |
| Day 5 | Responsiveness, animations, final polish | 🔲 Pending |

---

## Pages Built

### Home (`/`)
- Sticky navbar with mobile drawer
- Hero section with search bar and popular tags
- Trusted companies marquee
- Featured service categories
- Top freelancer cards
- How It Works steps
- Why Choose Us section
- Statistics bar
- Testimonials
- Dual CTA (client + freelancer)
- Footer

### Services (`/services`)
- Live search by title, description, or freelancer name
- Category filter pills (All, Web Dev, Design, Writing, Marketing, Video, Programming)
- Sort by: Most Relevant, Top Rated, Price, Most Reviews
- Responsive card grid (1 → 2 → 3 → 4 columns)
- Active filter chips with individual clear buttons
- Empty state with reset option
- 14 service cards with badge, rating, delivery time, price

---

## Folder Structure

```
skillbridge/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root HTML shell, fonts, metadata
│   │   ├── page.jsx            # Home page route (/)
│   │   ├── globals.css         # Tailwind v4 imports + global styles
│   │   └── services/
│   │       ├── layout.jsx      # Services layout wrapper
│   │       └── page.jsx        # Services page (/services)
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar + mobile drawer
│   │   ├── Hero.jsx            # Hero section
│   │   ├── TrustedBy.jsx       # Company logos marquee
│   │   ├── Categories.jsx      # Service category cards
│   │   ├── TopFreelancers.jsx  # Freelancer profile cards
│   │   ├── HowItWorks.jsx      # Steps + Why Choose Us
│   │   ├── Testimonials.jsx    # Stats bar + reviews
│   │   ├── CTA.jsx             # Dual call-to-action section
│   │   ├── Footer.jsx          # Site footer
│   │   └── ServiceCard.jsx     # Reusable service card (Day 2)
│   └── data/
│       └── services.js         # Mock data for 14 services
├── postcss.config.mjs          # Tailwind v4 PostCSS plugin
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Important: Tailwind v4 Setup

This project uses **Tailwind CSS v4** which is different from v3.

- No `tailwind.config.js` file — it does not exist and is not needed
- Configuration goes inside `globals.css` using `@theme {}`
- Import is `@import "tailwindcss"` not `@tailwind base/components/utilities`
- PostCSS plugin is `@tailwindcss/postcss` not `tailwindcss`

---

## Internship Task

**Company:** SoftGrid Solutions  
**Deadline:** 5 Days  
**Stack:** Next.js + Tailwind CSS (HTML/CSS/JS also accepted per task brief)
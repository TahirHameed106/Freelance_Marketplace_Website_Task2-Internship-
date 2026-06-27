# SkillBridge — Freelance Marketplace

SkillBridge is a modern freelance marketplace web application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. It allows users to browse freelance services, explore seller profiles, and view detailed service information through a clean, responsive, and user-friendly interface inspired by platforms like Fiverr and Upwork.

## Live Demo

🌐 https://skillbridge-2cm7q05fr-leclercs-projects-6739f3e2.vercel.app/

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- JavaScript (JSX)

---

## Features

### Home
- Responsive navigation
- Hero section with search
- Featured categories
- Top freelancers
- Trusted companies
- How It Works
- Statistics
- Testimonials
- Call to Action
- Footer

### Services
- Browse all services
- Live search
- Category filters
- Sorting options
- Responsive service cards

### Seller Profile
- Seller information
- Skills
- Experience
- Education
- Portfolio
- Languages
- Statistics
- Active services

### Service Details
- Service overview
- Image gallery
- Features
- Pricing packages
- Tags
- Customer reviews
- Seller information

### Additional Pages
- About Us
- Contact

---

## Project Structure

```text
src/
├── app/
│   ├── page.jsx
│   ├── services/
│   ├── seller/[id]/
│   ├── service/[id]/
│   ├── about/
│   └── contact/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Categories.jsx
│   ├── ServiceCard.jsx
│   ├── SellerProfilePage.jsx
│   └── ServiceDetailsPage.jsx
│
├── data/
│   ├── services.js
│   └── sellers.js
│
└── globals.css
```

---

## Getting Started

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## Routes

| Route | Description |
|--------|-------------|
| `/` | Home |
| `/services` | Services |
| `/seller/[id]` | Seller Profile |
| `/service/[id]` | Service Details |
| `/about` | About Us |
| `/contact` | Contact |

---

## Mock Data

The project currently uses local mock data stored in the `src/data` folder.

It includes:

- 14 freelance services
- Seller profiles
- Service details
- Pricing packages
- Reviews
- Portfolio items

No backend or database is used.

---

## Project Status

| Day | Task | Status |
|------|------|--------|
| Day 1 | Home Page | ✅ Completed |
| Day 2 | Services Page | ✅ Completed |
| Day 3 | Seller Profile & Service Details | ✅ Completed |
| Day 4 | About & Contact Pages | ✅ Completed |
| Day 5 | Responsive design, animations, deployment & final polish | Completed |

---

## Internship Project

**Project:** SkillBridge – Freelance Marketplace

**Company:** SoftGrid Solutions

**Purpose:** Frontend Internship Assessment

**Built with:** Next.js 16, React 19, Tailwind CSS v4

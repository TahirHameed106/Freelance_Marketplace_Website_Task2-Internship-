# SkillBridge — Freelance Marketplace

SkillBridge is a modern freelance marketplace web application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. It allows users to browse freelance services, explore seller profiles, and view detailed service information through a clean, responsive, and user-friendly interface inspired by platforms like Fiverr and Upwork.

## Live Demo

🔗 https://skillbridge-2cm7q05fr-leclercs-projects-6739f3e2.vercel.app/

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- JavaScript (JSX)

---

## Features

### Home
- Responsive navigation bar
- Hero section with search
- Trusted companies section
- Featured service categories
- Top freelancers
- How It Works section
- Why Choose Us section
- Statistics
- Testimonials
- Call-to-Action
- Responsive footer

### Services
- Browse all services
- Live search
- Category filtering
- Multiple sorting options
- Responsive service cards
- Active filter chips

### Seller Profile
- Seller information
- Skills
- Experience
- Education
- Languages
- Portfolio gallery
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

### About
- Company introduction
- Mission & Vision
- Core values
- Why choose SkillBridge

### Contact
- Contact form
- Company contact information
- Responsive layout

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
│   ├── TopFreelancers.jsx
│   ├── HowItWorks.jsx
│   ├── Testimonials.jsx
│   ├── CTA.jsx
│   ├── ServiceCard.jsx
│   ├── SellerProfilePage.jsx
│   └── ServiceDetailsPage.jsx
│
├── data/
│   ├── services.js
│   └── sellers.js
│
├── public/
│   └── services/
│
└── globals.css
```

---

## Installation

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

Open:

```text
http://localhost:3000
```

---

## Routes

| Route | Description |
|--------|-------------|
| `/` | Home |
| `/services` | Browse all services |
| `/seller/[id]` | Seller profile |
| `/service/[id]` | Service details |
| `/about` | About page |
| `/contact` | Contact page |

---

## Mock Data

The project currently uses local mock data stored inside the `src/data` directory.

Included data:

- 14 freelance services
- Seller profiles
- Service details
- Pricing packages
- Reviews
- Portfolio items

No backend or database is used.

---

## Project Progress

| Day | Task | Status |
|------|------|--------|
| Day 1 | Project setup & Home page | ✅ Completed |
| Day 2 | Services page | ✅ Completed |
| Day 3 | Seller Profile & Service Details | ✅ Completed |
| Day 4 | About & Contact pages | ✅ Completed |
| Day 5 | Responsive design, animations, deployment & final polish | ✅ Completed |

---

## Live Website

https://skillbridge-2cm7q05fr-leclercs-projects-6739f3e2.vercel.app/

---

## Internship Project

**Project:** SkillBridge — Freelance Marketplace

**Company:** SoftGrid Solutions

**Purpose:** Frontend Internship Assessment

**Built With:**
- Next.js 16
- React 19
- Tailwind CSS v4
- JavaScript (JSX)

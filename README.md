# SkillBridge — Freelance Marketplace Platform

A modern, responsive freelance marketplace built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. SkillBridge connects clients with talented freelancers across multiple service categories through a clean, intuitive, and responsive user interface inspired by platforms like Fiverr and Upwork.

---

## 🚀 Tech Stack

| Technology              | Purpose             |
| ----------------------- | ------------------- |
| Next.js 16 (App Router) | Framework & Routing |
| React 19                | UI Components       |
| Tailwind CSS v4         | Styling             |
| JavaScript (JSX)        | Application Logic   |

---

## 📌 Features

### 🏠 Home Page

* Responsive sticky navigation bar
* Mobile navigation drawer
* Hero section with search functionality
* Trusted companies marquee
* Featured service categories
* Top freelancers showcase
* How It Works section
* Why Choose Us section
* Statistics section
* Client testimonials
* Dual Call-to-Action section
* Responsive footer

---

### 💼 Services Page

* 14 mock freelance services
* Live search by title, description, and freelancer
* Category filtering
* Multiple sorting options
* Responsive service grid
* Active filter chips
* Empty state with reset option
* Service badges (Best Seller, Top Rated, Premium)

---

### 👤 Seller Profile Page

* Professional seller information
* Profile avatar and cover
* Ratings and reviews
* Skills section
* Portfolio gallery
* Work experience
* Education
* Languages
* Seller statistics
* Active services

---

### 📄 Service Details Page

* Large banner image
* Service gallery
* Complete service description
* Feature list
* Pricing packages
* Tags
* Customer reviews
* Seller information
* Delivery details
* Revision information

---

## 📁 Project Structure

```text
skillbridge/
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css
│   │   ├── services/
│   │   │   └── page.jsx
│   │   ├── seller/
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   └── service/
│   │       └── [id]/
│   │           └── page.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustedBy.jsx
│   │   ├── Categories.jsx
│   │   ├── TopFreelancers.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── SellerProfilePage.jsx
│   │   └── ServiceDetailsPage.jsx
│   │
│   └── data/
│       ├── services.js
│       └── sellers.js
│
├── public/
│   └── services/
│
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:3000
```

---

## 🎯 Pages

| Route           | Description         |
| --------------- | ------------------- |
| `/`             | Home Page           |
| `/services`     | Browse all services |
| `/seller/[id]`  | Seller Profile      |
| `/service/[id]` | Service Details     |

---

## 🎨 Tailwind CSS v4 Notes

This project uses **Tailwind CSS v4**.

* No `tailwind.config.js`
* Configuration lives inside `globals.css`
* Uses `@import "tailwindcss"`
* Uses `@tailwindcss/postcss`

---

## 📚 Mock Data

The application currently contains:

* 14 freelance services
* Multiple service categories
* Seller profiles
* Service details
* Pricing packages
* Reviews
* Portfolio items

No backend or database is used. All data is stored locally inside the `src/data` directory.

---

## 📅 Project Progress

| Day       | Task                                                                                   | Status         |
| --------- | -------------------------------------------------------------------------------------- | -------------- |
| **Day 1** | Project setup, Home page, Navbar, Footer, Hero, Categories, Testimonials               | ✅ Completed    |
| **Day 2** | Services page with search, filtering, sorting, and responsive service cards            | ✅ Completed    |
| **Day 3** | Seller Profile page, Service Details page, dynamic routing, and mock data integration  | ✅ Completed    |
| **Day 4** | About Us page and Contact page                                                         | ✅ Completed    |
| **Day 5** | Responsive testing, animations, performance optimization, deployment, and final polish | 🚧 In Progress |

---

## 👨‍💻 Internship Project

**Project:** SkillBridge — Freelance Marketplace

**Company:** SoftGrid Solutions

**Purpose:** Internship Assessment Project

**Built With:** Next.js 16, React 19, Tailwind CSS v4

live link 🌐 https://skillbridge-2cm7q05fr-leclercs-projects-6739f3e2.vercel.app/


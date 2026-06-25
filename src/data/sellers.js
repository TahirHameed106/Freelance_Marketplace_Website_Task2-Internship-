// src/data/sellers.js
// Mock data for seller profiles and their services

export const sellers = [
  {
    id: 'alex-rivera',
    name: 'Alex Rivera',
    initials: 'AR',
    gradient: 'from-indigo-400 to-blue-500',
    avatar: 'https://i.pravatar.cc/300?img=11',
    title: 'Full-Stack Developer & React Specialist',
    location: 'New York, USA',
    memberSince: 'March 2021',
    lastActive: '2 hours ago',
    responseTime: 'Under 1 hour',
    completionRate: 98,
    rating: 4.9,
    totalReviews: 214,
    totalEarned: '$45,000+',
    totalJobs: 186,
    languages: ['English (Native)', 'Spanish (Conversational)'],
    about:
      'I\'m a full-stack developer with 6+ years of experience building scalable web applications. I specialize in React, Next.js, Node.js, and PostgreSQL. I\'ve worked with startups and Fortune 500 companies to deliver clean, performant, and maintainable code. I take pride in clear communication and on-time delivery.',
    skills: [
      'React', 'Next.js', 'TypeScript', 'Node.js',
      'PostgreSQL', 'AWS', 'REST APIs', 'GraphQL',
      'Tailwind CSS', 'Docker',
    ],
    experience: [
      { role: 'Senior Frontend Engineer', company: 'TechCorp Inc.', period: '2021 – 2023' },
      { role: 'Full-Stack Developer', company: 'StartupHub', period: '2019 – 2021' },
      { role: 'Junior Developer', company: 'WebAgency Co.', period: '2017 – 2019' },
    ],
    education: [
      { degree: 'B.Sc. Computer Science', institution: 'NYU', year: '2017' },
    ],
    portfolio: [
      { id: 1, title: 'E-Commerce Platform', image: 'https://picsum.photos/seed/port1/600/400', category: 'Web App' },
      { id: 2, title: 'SaaS Dashboard', image: 'https://picsum.photos/seed/port2/600/400', category: 'Dashboard' },
      { id: 3, title: 'Real Estate Portal', image: 'https://picsum.photos/seed/port3/600/400', category: 'Web App' },
      { id: 4, title: 'Mobile Banking UI', image: 'https://picsum.photos/seed/port4/600/400', category: 'UI Design' },
      { id: 5, title: 'Food Delivery App', image: 'https://picsum.photos/seed/port5/600/400', category: 'Web App' },
      { id: 6, title: 'Analytics Platform', image: 'https://picsum.photos/seed/port6/600/400', category: 'Dashboard' },
    ],
    services: [1, 2], // service IDs from services.js
  },
  {
    id: 'maya-patel',
    name: 'Maya Patel',
    initials: 'MP',
    gradient: 'from-amber-400 to-orange-500',
    avatar: 'https://i.pravatar.cc/300?img=47',
    title: 'Brand Designer & UI/UX Specialist',
    location: 'London, UK',
    memberSince: 'January 2020',
    lastActive: '30 minutes ago',
    responseTime: 'Under 2 hours',
    completionRate: 99,
    rating: 4.9,
    totalReviews: 341,
    totalEarned: '$62,000+',
    totalJobs: 298,
    languages: ['English (Native)', 'Hindi (Fluent)'],
    about:
      'Award-winning brand designer with 8+ years of experience helping businesses build memorable identities. From startups to global brands, I craft logos, brand systems, and UI designs that are both beautiful and functional. My process is collaborative, transparent, and always client-focused.',
    skills: [
      'Figma', 'Adobe Illustrator', 'Photoshop',
      'Brand Strategy', 'Logo Design', 'UI/UX', 'Webflow',
      'Motion Design', 'Typography', 'Color Theory',
    ],
    experience: [
      { role: 'Lead Brand Designer', company: 'Creative Studio LDN', period: '2020 – Present' },
      { role: 'UI/UX Designer', company: 'DigitalFirst Agency', period: '2017 – 2020' },
    ],
    education: [
      { degree: 'BA Graphic Design', institution: 'Central Saint Martins', year: '2016' },
    ],
    portfolio: [
      { id: 1, title: 'Fintech Brand Identity', image: 'https://picsum.photos/seed/design1/600/400', category: 'Branding' },
      { id: 2, title: 'Health App UI', image: 'https://picsum.photos/seed/design2/600/400', category: 'UI Design' },
      { id: 3, title: 'Restaurant Rebrand', image: 'https://picsum.photos/seed/design3/600/400', category: 'Branding' },
      { id: 4, title: 'SaaS Product Design', image: 'https://picsum.photos/seed/design4/600/400', category: 'UI Design' },
      { id: 5, title: 'Fashion Brand Kit', image: 'https://picsum.photos/seed/design5/600/400', category: 'Branding' },
      { id: 6, title: 'Mobile App Prototype', image: 'https://picsum.photos/seed/design6/600/400', category: 'UI Design' },
    ],
    services: [4, 5],
  },
];

export const serviceDetails = [
  {
    id: 1,
    sellerId: 'alex-rivera',
    title: 'Full-Stack Web Application Development',
    category: 'Web Development',
    banner: 'https://picsum.photos/seed/service-banner1/1200/500',
    gallery: [
      'https://picsum.photos/seed/sg1/600/400',
      'https://picsum.photos/seed/sg2/600/400',
      'https://picsum.photos/seed/sg3/600/400',
    ],
    description: `I will build you a complete, production-ready full-stack web application using modern technologies. Whether you need a SaaS platform, marketplace, dashboard, or custom web app — I deliver clean, scalable, and well-documented code.

My development process follows industry best practices including component-based architecture, RESTful API design, database normalization, and CI/CD-ready setup. Every project includes thorough testing and detailed handover documentation.`,
    features: [
      'React / Next.js frontend with TypeScript',
      'Node.js + Express or Next.js API routes backend',
      'PostgreSQL or MongoDB database setup',
      'Authentication (JWT / OAuth / Supabase Auth)',
      'Responsive design — mobile, tablet, desktop',
      'Deployment to Vercel / AWS / DigitalOcean',
      'Clean, commented, maintainable codebase',
      'Post-delivery support for 7 days',
    ],
    packages: [
      {
        name: 'Basic',
        price: 299,
        delivery: 7,
        revisions: 2,
        description: 'Simple web app up to 5 pages, basic auth, REST API.',
        includes: ['Frontend (React/Next.js)', 'Basic backend API', 'Database setup', 'Responsive design'],
      },
      {
        name: 'Standard',
        price: 599,
        delivery: 14,
        revisions: 4,
        description: 'Full-featured app up to 15 pages with advanced features.',
        includes: ['Everything in Basic', 'Authentication system', 'Admin dashboard', 'Third-party integrations', 'Testing'],
      },
      {
        name: 'Premium',
        price: 1199,
        delivery: 21,
        revisions: 'Unlimited',
        description: 'Complex enterprise app with full DevOps setup.',
        includes: ['Everything in Standard', 'CI/CD pipeline', 'Cloud deployment', 'Performance optimization', '30-day support'],
      },
    ],
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Full-Stack'],
    reviews: [
      {
        id: 1,
        name: 'Rachel Thompson',
        avatar: 'https://i.pravatar.cc/60?img=32',
        rating: 5,
        date: 'December 2024',
        comment: 'Alex delivered an exceptional full-stack application. The code quality is outstanding — clean, well-documented, and easy to maintain. Communication was clear throughout and he delivered 2 days early. Highly recommend!',
      },
      {
        id: 2,
        name: 'Marcus Johnson',
        avatar: 'https://i.pravatar.cc/60?img=15',
        rating: 5,
        date: 'November 2024',
        comment: 'Second time working with Alex. He understood the requirements immediately and executed perfectly. The authentication system and dashboard he built work flawlessly. Will definitely hire again.',
      },
      {
        id: 3,
        name: 'Priya Sharma',
        avatar: 'https://i.pravatar.cc/60?img=25',
        rating: 4,
        date: 'October 2024',
        comment: 'Great work overall. The app is fast and responsive across all devices. Minor revisions were handled quickly and professionally. Very satisfied with the final result.',
      },
    ],
  },
  {
    id: 4,
    sellerId: 'maya-patel',
    title: 'Brand Identity & Logo Design Package',
    category: 'Graphic Design',
    banner: 'https://picsum.photos/seed/service-banner4/1200/500',
    gallery: [
      'https://picsum.photos/seed/dg1/600/400',
      'https://picsum.photos/seed/dg2/600/400',
      'https://picsum.photos/seed/dg3/600/400',
    ],
    description: `I will create a complete, professional brand identity that makes your business instantly recognizable and trustworthy. A strong brand is your most valuable asset — and I've helped 200+ businesses build theirs.

My process starts with a deep discovery session to understand your brand values, target audience, and competitive landscape. Every design decision is intentional and backed by strategy, not just aesthetics.`,
    features: [
      'Primary logo + alternate versions',
      'Full color palette with usage guidelines',
      'Typography system (heading + body fonts)',
      'Brand style guide (PDF)',
      'Business card design',
      'Social media kit (profile + cover images)',
      'All source files (AI, SVG, PNG, PDF)',
      'Commercial usage rights included',
    ],
    packages: [
      {
        name: 'Starter',
        price: 99,
        delivery: 3,
        revisions: 2,
        description: 'Logo design only — perfect for new businesses.',
        includes: ['1 logo concept', 'Color palette', 'PNG + SVG files', '2 revisions'],
      },
      {
        name: 'Brand Kit',
        price: 199,
        delivery: 5,
        revisions: 4,
        description: 'Complete brand identity package.',
        includes: ['3 logo concepts', 'Full color palette', 'Typography guide', 'Brand style guide', 'Social media kit'],
      },
      {
        name: 'Full Brand',
        price: 399,
        delivery: 10,
        revisions: 'Unlimited',
        description: 'Enterprise-level brand identity with all assets.',
        includes: ['Everything in Brand Kit', 'Business card design', 'Email signature', 'Brand presentation deck', 'Source files (AI/PSD)'],
      },
    ],
    tags: ['Logo Design', 'Branding', 'Figma', 'Adobe Illustrator', 'Brand Strategy'],
    reviews: [
      {
        id: 1,
        name: 'Sofia Chen',
        avatar: 'https://i.pravatar.cc/60?img=44',
        rating: 5,
        date: 'January 2025',
        comment: 'Maya completely transformed our brand. The logo is stunning and the brand guide makes it easy for our whole team to stay consistent. We\'ve received so many compliments from clients. Worth every penny!',
      },
      {
        id: 2,
        name: 'Daniel Brooks',
        avatar: 'https://i.pravatar.cc/60?img=8',
        rating: 5,
        date: 'December 2024',
        comment: 'Incredible designer. She took our vague brief and turned it into a cohesive, professional brand identity. The revisions process was smooth and she nailed the final version on the second round.',
      },
      {
        id: 3,
        name: 'Lena Fischer',
        avatar: 'https://i.pravatar.cc/60?img=39',
        rating: 5,
        date: 'November 2024',
        comment: 'Best design investment we\'ve made. Maya truly understands brand strategy, not just aesthetics. Our conversion rate improved after the rebrand. Highly recommend the Full Brand package.',
      },
    ],
  },
];

export function getSellerById(id) {
  return sellers.find((s) => s.id === id) || null;
}

export function getServiceById(id) {
  return serviceDetails.find((s) => s.id === Number(id)) || null;
}
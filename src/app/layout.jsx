// src/app/layout.jsx
// The root layout wraps every page. Fonts, metadata defaults, and global CSS go here.

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: { default: 'SkillBridge', template: '%s — SkillBridge' },
  description: 'The modern freelance marketplace. Hire verified professionals in web development, design, marketing, AI, and more.',
  keywords: ['freelance', 'hire developers', 'remote work', 'freelancers', 'web development'],
  openGraph: {
    title: 'SkillBridge — Hire Expert Freelancers',
    description: 'Find and hire verified freelance professionals.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Plus Jakarta Sans — used for headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {/* Skip-to-content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:bg-emerald-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
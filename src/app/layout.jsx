// src/app/layout.jsx

import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: {
    default: 'SkillBridge',
    template: '%s — SkillBridge',
  },
  description:
    'The modern freelance marketplace. Hire verified professionals in web development, design, marketing, AI, and more.',
  keywords: [
    'freelance',
    'hire developers',
    'remote work',
    'freelancers',
    'web development',
  ],
  openGraph: {
    title: 'SkillBridge — Hire Expert Freelancers',
    description: 'Find and hire verified freelance professionals.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>

      <body className="bg-white text-slate-900 antialiased">
        {/* Skip Navigation */}
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
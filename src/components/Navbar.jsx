'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'How It Works', href: '/#how-it-works' },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 transition-shadow duration-300
          ${scrolled ? 'shadow-md' : 'shadow-none'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ──────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              aria-label="SkillBridge homepage"
            >
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h5M11 10h5M10 4v5M10 11v5"
                    stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="10" cy="10" r="2.2" fill="white"/>
                </svg>
              </div>
              <span
                className="text-xl font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Skill<span className="text-emerald-500">Bridge</span>
              </span>
            </Link>

            {/* ── Desktop nav ────────────────────────────── */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-150
                    ${pathname === link.href
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop right buttons ───────────────────── */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="/post-project"
                className="px-5 py-2.5 text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-150 shadow-sm hover:shadow-md"
              >
                Post a Project
              </Link>
            </div>

            {/* ── Mobile hamburger ───────────────────────── */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 7h16M3 12h16M3 17h16"/>
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* ── Spacer — stops hero from hiding under fixed navbar ── */}
      <div className="h-16" aria-hidden="true" />

      {/* ── Mobile backdrop ─────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ───────────────────────────────────── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer top */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <span
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Menu
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500"
            aria-label="Close menu"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                ${pathname === link.href
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer action buttons */}
        <div className="px-4 py-5 border-t border-slate-100 flex flex-col gap-3">
          <Link
            href="/login"
            className="block text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-xl py-3 hover:bg-slate-50 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="block text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-xl py-3 hover:bg-slate-50 transition-colors"
          >
            Sign up
          </Link>
          <Link
            href="/post-project"
            className="block text-center text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3 transition-colors"
          >
            Post a Project
          </Link>
        </div>
      </div>
    </>
  );
}
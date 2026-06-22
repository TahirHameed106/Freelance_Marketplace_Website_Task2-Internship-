'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Find Talent',      href: '#' },
  { label: 'Browse Services',  href: '#' },
  { label: 'Categories',       href: '#categories' },
  { label: 'How It Works',     href: '#how-it-works' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
          }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* ── Logo ─────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="SkillBridge home">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h5M10 9h5M9 3v5M9 10v5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-lg text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Skill<span className="text-emerald-500">Bridge</span>
              </span>
            </Link>

            {/* ── Desktop nav ──────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop right ────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-slate-700 border border-slate-200 rounded-xl px-4 py-2 hover:bg-slate-50 transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-4 py-2 transition-all duration-150 shadow-sm hover:shadow-emerald-200 hover:shadow-md"
              >
                Post a Project
              </Link>
            </div>

            {/* ── Hamburger ────────────────────────────── */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all duration-200" style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : '' }} />
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-0.5 bg-current transition-all duration-200" style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : '' }} />
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Drawer panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl transition-transform duration-300 flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <span className="font-bold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/>
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100 flex flex-col gap-3">
            <Link href="#" className="text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-xl px-4 py-2.5 hover:bg-slate-50 transition-colors" onClick={() => setMenuOpen(false)}>Log in</Link>
            <Link href="#" className="text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-xl px-4 py-2.5 hover:bg-slate-50 transition-colors" onClick={() => setMenuOpen(false)}>Sign up</Link>
            <Link href="#" className="text-center text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-4 py-2.5 transition-colors" onClick={() => setMenuOpen(false)}>Post a Project</Link>
          </div>
        </div>
      </div>
    </>
  );
}
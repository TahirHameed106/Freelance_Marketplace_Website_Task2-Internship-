'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Find Talent', href: '#' },
  { label: 'Find Work', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Categories', href: '#categories' },
  { label: 'How It Works', href: '#how-it-works' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div
          className={`
            max-w-7xl mx-auto
            rounded-2xl
            border border-white/20
            bg-white/70
            backdrop-blur-xl
            transition-all duration-300
            ${
              scrolled
                ? 'shadow-xl py-2'
                : 'shadow-lg py-3'
            }
          `}
        >
          <div className="px-6">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    SB
                  </span>
                </div>

                <div>
                  <span
                    className="text-xl font-bold text-slate-900"
                    style={{
                      fontFamily:
                        'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    Skill
                    <span className="text-emerald-500">
                      Bridge
                    </span>
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      px-4 py-2
                      text-sm
                      font-medium
                      text-slate-600
                      hover:text-slate-900
                      hover:bg-slate-100
                      rounded-xl
                      transition-all
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Search */}
              <div className="hidden xl:flex flex-1 max-w-sm mx-8">
                <input
                  type="text"
                  placeholder="Search talent, skills..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2
                    text-sm
                    outline-none
                    focus:border-emerald-500
                  "
                />
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-3">

                <span className="hidden 2xl:flex items-center text-sm text-slate-500">
                  ⭐ 10k+ Freelancers
                </span>

                <Link
                  href="#"
                  className="
                    text-sm
                    font-medium
                    text-slate-600
                    hover:text-slate-900
                  "
                >
                  Log In
                </Link>

                <Link
                  href="#"
                  className="
                    px-4 py-2
                    rounded-xl
                    border
                    border-slate-200
                    text-sm
                    font-medium
                    hover:bg-slate-50
                  "
                >
                  Sign Up
                </Link>

                <Link
                  href="#"
                  className="
                    px-5 py-2.5
                    rounded-xl
                    bg-slate-900
                    text-white
                    text-sm
                    font-semibold
                    hover:bg-slate-800
                    transition-all
                  "
                >
                  Hire Talent
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="
                  lg:hidden
                  p-2
                  rounded-xl
                  hover:bg-slate-100
                "
                aria-label="Open menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          "fixed inset-0 z-60"
          lg:hidden
          transition-all duration-300
          ${
            mobileOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
      >
        <div
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`
            absolute inset-0
            bg-white
            transition-transform duration-300
            ${
              mobileOpen
                ? 'translate-y-0'
                : '-translate-y-full'
            }
          `}
        >
          <div className="flex items-center justify-between p-6 border-b">

            <span
              className="text-xl font-bold"
              style={{
                fontFamily:
                  'Plus Jakarta Sans, sans-serif',
              }}
            >
              Skill
              <span className="text-emerald-500">
                Bridge
              </span>
            </span>

            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
            >
              ✕
            </button>
          </div>

          <nav className="p-6 flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  text-lg
                  font-medium
                  text-slate-700
                  py-3
                  border-b
                  border-slate-100
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 flex flex-col gap-3">
            <Link
              href="#"
              className="
                text-center
                border
                border-slate-200
                rounded-xl
                py-3
              "
            >
              Log In
            </Link>

            <Link
              href="#"
              className="
                text-center
                border
                border-slate-200
                rounded-xl
                py-3
              "
            >
              Sign Up
            </Link>

            <Link
              href="#"
              className="
                text-center
                bg-slate-900
                text-white
                rounded-xl
                py-3
                font-semibold
              "
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
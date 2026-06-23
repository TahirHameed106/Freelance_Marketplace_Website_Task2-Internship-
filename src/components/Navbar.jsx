'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Find Talent', href: '/#categories' },
  { label: 'Browse Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Enterprise', href: '/enterprise' },
];

export default function Navbar() {
  const pathname = usePathname();

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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div
          className={`
            mx-auto
            max-w-7xl
            rounded-2xl
            border
            border-white/20
            bg-white/75
            backdrop-blur-xl
            transition-all
            duration-300
            ${
              scrolled
                ? 'shadow-xl py-2'
                : 'shadow-lg py-3'
            }
          `}
        >
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 shrink-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg">
                  <span className="text-sm font-bold text-white">
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

              {/* Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      rounded-xl
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      ${
                        pathname === item.href
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Search */}
              <div className="hidden xl:block w-full max-w-xs mx-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search freelancers..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      py-2
                      pl-10
                      pr-4
                      text-sm
                      outline-none
                      focus:border-emerald-500
                    "
                  />

                  <svg
                    className="absolute left-3 top-2.5 text-slate-400"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="7" cy="7" r="5" />
                    <line x1="11" y1="11" x2="15" y2="15" />
                  </svg>
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-3">

                <div className="hidden 2xl:flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  ⭐ 10K+ Freelancers
                </div>

                <Link
                  href="/login"
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
                  href="/signup"
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    px-4
                    py-2
                    text-sm
                    font-medium
                    hover:bg-slate-50
                  "
                >
                  Sign Up
                </Link>

                <Link
                  href="/post-project"
                  className="
                    rounded-xl
                    bg-slate-900
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-slate-800
                  "
                >
                  Post a Project
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="
                  rounded-xl
                  p-2
                  text-slate-600
                  hover:bg-slate-100
                  lg:hidden
                "
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

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          inset-0
          z-60
          lg:hidden
          transition-all
          duration-300
          ${
            mobileOpen
              ? 'visible opacity-100'
              : 'invisible opacity-0'
          }
        `}
      >
        <div
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`
            absolute
            inset-y-0
            right-0
            w-full
            max-w-sm
            bg-white
            shadow-2xl
            transition-transform
            duration-300
            ${
              mobileOpen
                ? 'translate-x-0'
                : 'translate-x-full'
            }
          `}
        >
          <div className="flex items-center justify-between border-b p-5">
            <h3
              className="text-lg font-bold"
              style={{
                fontFamily:
                  'Plus Jakarta Sans, sans-serif',
              }}
            >
              Menu
            </h3>

            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              ✕
            </button>
          </div>

          <nav className="p-5 flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-slate-700
                  hover:bg-slate-100
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t p-5 flex flex-col gap-3">
            <Link
              href="/login"
              className="
                rounded-xl
                border
                border-slate-200
                py-3
                text-center
              "
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="
                rounded-xl
                border
                border-slate-200
                py-3
                text-center
              "
            >
              Sign Up
            </Link>

            <Link
              href="/post-project"
              className="
                rounded-xl
                bg-slate-900
                py-3
                text-center
                font-semibold
                text-white
              "
            >
              Post a Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
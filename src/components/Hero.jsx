'use client';

import { useState } from 'react';

const popularTags = ['React Developer', 'UI/UX Design', 'Logo Design', 'WordPress', 'Python', 'Video Editing'];

const stats = [
  { value: '50K+', label: 'Freelancers' },
  { value: '120K+', label: 'Projects Done' },
  { value: '98%', label: 'Satisfaction' },
];

export default function Hero() {
  const [query, setQuery] = useState('');
  const delays = [
    'delay-200',
    'delay-300',
    'delay-400',
  ];
   
  return (
    <section
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50/30"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background blobs */}
      <div className="absolute top-20 right-0 w-125 h-125 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy + search ──────────────────────── */}
            <div className="max-w-xl animate-fade-in-up">            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 text-sm text-emerald-700 font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
              Trusted by 10,000+ businesses worldwide
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-5"
            >
              Find Expert{' '}
              <span className="text-emerald-500">Freelancers</span>{' '}
              For Your Next Project
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              Hire verified professionals in web development, design, marketing, AI, and more. Start in minutes.
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm shadow-slate-100 mb-4 focus-within:border-emerald-400 focus-within:shadow-emerald-100 focus-within:shadow-md transition-all duration-200">
              <div className="flex items-center gap-2 flex-1 px-3">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="search"
                  placeholder="Search for any skill or service…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent py-2"
                  aria-label="Search for skills or services"
                />
              </div>
              <button
                className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-150 shrink-0"
                aria-label="Search"
              >
                Search
              </button>
            </div>

            {/* Popular tags */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs text-slate-400 font-medium">Popular:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="text-xs text-slate-600 bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 rounded-full px-3 py-1 transition-colors duration-150"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                  style={{ color: "#fff" }}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5 text-white no-underline font-semibold text-sm rounded-xl px-6 py-3 transition-all duration-150 shadow-sm hover:shadow-md"

              >
                Hire a Freelancer
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a
                href="#"
                  style={{ color: "#111827" }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 hover:-translate-y-0.5 text-slate-700 font-semibold text-sm rounded-xl px-6 py-3 border border-slate-200 transition-all duration-150"
              >
                Offer Your Skills
              </a>
            </div>
          </div>

          {/* ── Right: illustration card stack ───────────── */}
          <div
            className="relative hidden lg:block animate-fade-in delay-200" aria-hidden="true"
          >

            {/* Main profile card */}
            <div className="relative z-10 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/60 p-6 max-w-sm mx-auto hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shrink-0">SJ</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-slate-900 text-sm">Sarah Johnson</h3>
                    <span className="w-2 h-2 bg-emerald-400 rounded-full" title="Online" />
                  </div>
                  <p className="text-xs text-slate-500">Senior React Developer</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    <span className="text-xs text-slate-500 ml-1">5.0 (128 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['React', 'TypeScript', 'Next.js', 'Node.js'].map((skill) => (
                  <span key={skill} className="text-xs bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">{skill}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                <div>
                  <p className="text-xs text-slate-400">Starting from</p>
                  <p className="font-bold text-slate-900">$85<span className="text-slate-400 font-normal text-xs">/hr</span></p>
                </div>
                <button className="text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white px-4 py-2 rounded-xl transition-all duration-150">View Profile</button>
              </div>
            </div>

            {/* Floating stat cards */}
           <div className="absolute -left-6 top-1/3 bg-white rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 px-4 py-3 flex items-center gap-3 animate-fade-in delay-400">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Project Hired!</p>
                <p className="text-xs text-slate-400">2 minutes ago</p>
              </div>
            </div>

           <div className="absolute -right-4 bottom-12 bg-white rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 px-4 py-3 animate-fade-in delay-500">
              <p className="text-xs text-slate-400 mb-1">Average response</p>
              <p className="text-sm font-bold text-slate-900">Under 1 hour</p>
            </div>

          </div>
        </div>

        {/* ── Stats bar ────────────────────────────────────── */}
       {/* ── Stats bar ────────────────────────────────────── */}
    <div className="mt-16 pt-10 border-t border-slate-100">
     <div className="grid grid-cols-3 gap-6 max-w-lg">
         {stats.map((s, i) => (
       <div
        key={s.label}
        className={`animate-fade-in-up ${delays[i]}`}
         >
        <p className="text-2xl sm:text-3xl font-bold text-slate-900">
          {s.value}
        </p>
        <p className="text-sm text-slate-500 mt-0.5">
          {s.label}
        </p>
      </div>
         ))}
          </div>
         </div>
      </div>
    </section>
  );
}
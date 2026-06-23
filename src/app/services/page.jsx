'use client';
// src/app/services/page.jsx
// Day 2 — Services Page
// Features: Search bar, category filter pills, responsive grid, sort dropdown, empty state

import { useState, useMemo } from 'react';
import { services, categories } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

// ── Sort options ─────────────────────────────────────────────
const sortOptions = [
  { value: 'default',    label: 'Most Relevant' },
  { value: 'rating',     label: 'Top Rated' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'reviews',    label: 'Most Reviews' },
];

export default function ServicesPage() {
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('all');
  const [sort,     setSort]     = useState('default');

  // ── Filter + sort logic (runs only when deps change) ────────
  const filtered = useMemo(() => {
    let result = [...services];

    // 1. Category filter
    if (category !== 'all') {
      result = result.filter((s) => s.category === category);
    }

    // 2. Search filter (title, description, freelancer name)
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.freelancer.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    switch (sort) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return result;
  }, [search, category, sort]);

  const clearAll = () => {
    setSearch('');
    setCategory('all');
    setSort('default');
  };

  const hasActiveFilters = search || category !== 'all' || sort !== 'default';

  return (
    <>
      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 border-b border-slate-100 pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5" aria-label="Breadcrumb">
            <a href="/" className="hover:text-slate-600 transition-colors">Home</a>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-slate-600 font-medium">Services</span>
          </nav>

          <div className="max-w-2xl">
            <h1
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Browse Freelance Services
            </h1>
            <p className="text-slate-500 text-base">
              {services.length} services from verified professionals — find the perfect match for your project.
            </p>
          </div>

          {/* ── Search bar ─────────────────────────────────── */}
          <div className="mt-7 flex items-center gap-3 max-w-2xl">
            <div className="flex-1 flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2.5 shadow-sm focus-within:border-emerald-400 focus-within:shadow-emerald-100 focus-within:shadow-md transition-all duration-200">
              <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="search"
                placeholder="Search services, skills, or freelancers…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
                aria-label="Search services"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              )}
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-150 flex-shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 overflow-x-auto scrollbar-hide">

            {/* Category pills */}
            <div className="flex items-center gap-2 flex-shrink-0" role="tablist" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`flex-shrink-0 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-150
                    ${category === cat.id
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort + count */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xs text-slate-400 whitespace-nowrap hidden sm:block">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs font-medium text-slate-700 border border-slate-200 rounded-xl px-3 py-2 bg-white outline-none hover:border-slate-300 focus:border-emerald-400 transition-colors cursor-pointer"
                aria-label="Sort services"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="text-xs font-medium text-slate-500 hover:text-emerald-600 border border-slate-200 hover:border-emerald-200 rounded-xl px-3 py-2 transition-colors whitespace-nowrap"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Active filter chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-slate-400 font-medium">Active filters:</span>
            {category !== 'all' && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-3 py-1">
                {categories.find((c) => c.id === category)?.label}
                <button onClick={() => setCategory('all')} aria-label="Remove category filter">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </span>
            )}
            {search && (
              <span className="inline-flex items-center gap-1.5 text-xs bg-slate-50 text-slate-700 border border-slate-200 rounded-full px-3 py-1">
                &ldquo;{search}&rdquo;
                <button onClick={() => setSearch('')} aria-label="Remove search filter">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </span>
            )}
          </div>
        )}

        {/* Grid OR empty state */}
        {filtered.length > 0 ? (
          <>
            {/* Result count on mobile */}
            <p className="text-xs text-slate-400 mb-5 sm:hidden">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </p>

            {/* Services grid */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              role="list"
              aria-label="Services list"
            >
              {filtered.map((service) => (
                <li key={service.id}>
                  <ServiceCard service={service} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          // ── Empty state ────────────────────────────────────
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <h3
              className="text-lg font-semibold text-slate-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              No services found
            </h3>
            <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-2 text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="bg-slate-900 py-14" aria-labelledby="services-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="services-cta"
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Can&apos;t find what you need?
          </h2>
          <p className="text-slate-400 text-sm mb-7 max-w-md mx-auto">
            Post a custom request and let the right freelancer come to you.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm rounded-xl px-7 py-3 transition-all duration-150 shadow-lg shadow-emerald-500/20"
          >
            Post a Custom Request
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
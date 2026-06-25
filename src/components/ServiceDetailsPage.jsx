'use client';
// src/components/ServiceDetailsPage.jsx
// Full service details UI — banner, description, packages, features, reviews

import { useState } from 'react';
import Link from 'next/link';

// ── Stars ───────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1,2,3,4,5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ServiceDetailsPage({ service, seller }) {
  const [selectedPkg, setSelectedPkg] = useState(
    service.packages.findIndex((p) => p.popular) ?? 0
  );
  const [lightbox, setLightbox] = useState(null);

  const avgRating = (service.reviews.reduce((a, r) => a + r.rating, 0) / service.reviews.length).toFixed(1);
  const pkg = service.packages[selectedPkg];

  return (
    <main id="main-content" className="bg-slate-50 min-h-screen">

      {/* ── Breadcrumb ─────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/services" className="hover:text-slate-600 transition-colors">Services</Link>
            <span aria-hidden="true">›</span>
            <span className="text-slate-600 font-medium line-clamp-1">{service.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ── LEFT: main content ───────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Title + meta */}
            <div>
              <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 mb-3">
                {service.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {service.title}
              </h1>

              {/* Seller mini-card */}
              {seller && (
                <div className="flex items-center gap-3 mb-4">
                  <img src={seller.avatar} alt={seller.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-100" />
                  <div>
                    <Link href={`/seller/${seller.id}`} className="text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
                      {seller.name}
                    </Link>
                    <p className="text-xs text-slate-400">{seller.title}</p>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <Stars rating={seller.rating} />
                    <span className="text-sm font-semibold text-slate-700">{seller.rating}</span>
                    <span className="text-xs text-slate-400">({seller.totalReviews})</span>
                  </div>
                </div>
              )}
            </div>

            {/* Banner image */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img
                src={service.banner}
                alt={service.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Description */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>About This Service</h2>
              {service.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
              ))}
            </section>

            {/* Gallery */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Project Gallery</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="list">
                {service.gallery.map((img, i) => (
                  <li key={i}>
                    <button
                      className="w-full rounded-xl overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      onClick={() => setLightbox(img)}
                      aria-label={`View gallery image ${i + 1}`}
                    >
                      <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-44 object-cover" loading="lazy" />
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pricing packages */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Pricing Packages</h2>

              {/* Tabs */}
              <div className="flex rounded-xl border border-slate-200 overflow-hidden mb-6" role="tablist">
                {service.packages.map((p, i) => (
                  <button
                    key={p.name}
                    role="tab"
                    aria-selected={selectedPkg === i}
                    onClick={() => setSelectedPkg(i)}
                    className={`flex-1 py-2.5 text-sm font-medium transition-colors relative
                      ${selectedPkg === i
                        ? 'bg-emerald-500 text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                      }`}
                  >
                    {p.name}
                    {p.popular && selectedPkg !== i && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full font-semibold">
                        Popular
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Selected package details */}
              <div className="border border-slate-100 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      ${pkg.price}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{pkg.description}</p>
                  </div>
                  {pkg.popular && (
                    <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2.5 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                    </svg>
                    {pkg.delivery} day delivery
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    {pkg.revisions} revision{pkg.revisions !== 1 ? 's' : ''}
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl py-3 transition-colors">
                  Continue — ${pkg.price}
                </button>
              </div>
            </section>

            {/* Service features */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What's Included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tags */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tags</h2>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{avgRating}</p>
                  <Stars rating={Number(avgRating)} />
                  <p className="text-xs text-slate-400 mt-1">{service.reviews.length} reviews</p>
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4">
                  <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Client Reviews</h2>
                  <p className="text-sm text-slate-500">What clients say about this service</p>
                </div>
              </div>

              <ul className="flex flex-col gap-5" role="list">
                {service.reviews.map((review) => (
                  <li key={review.id} className="border-b border-slate-50 last:border-0 pb-5 last:pb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                          <p className="text-xs text-slate-400">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Stars rating={review.rating} />
                          <span className="text-xs font-semibold text-slate-700">{review.rating}.0</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{review.comment}</p>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* ── RIGHT SIDEBAR: sticky order card ─────────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="text-base font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Order This Service
              </h3>

              {/* Package selector */}
              <div className="flex flex-col gap-2 mb-5">
                {service.packages.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPkg(i)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all
                      ${selectedPkg === i
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="font-bold">${p.price}</span>
                  </button>
                ))}
              </div>

              {/* Selected summary */}
              <div className="bg-slate-50 rounded-xl p-4 mb-4 text-sm text-slate-600">
                <div className="flex justify-between mb-2">
                  <span>Delivery</span>
                  <span className="font-medium text-slate-800">{pkg.delivery} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Revisions</span>
                  <span className="font-medium text-slate-800">{pkg.revisions}</span>
                </div>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl py-3 transition-colors mb-3">
                Order Now — ${pkg.price}
              </button>
              <button className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm rounded-xl py-2.5 transition-colors">
                Contact Seller
              </button>

              {/* Trust signals */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                {[
                  '✓ Secure payment protected',
                  '✓ Money-back guarantee',
                  '✓ On-time delivery',
                ].map((item) => (
                  <p key={item} className="text-xs text-slate-500">{item}</p>
                ))}
              </div>

              {/* Seller mini profile */}
              {seller && (
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link href={`/seller/${seller.id}`} className="flex items-center gap-3 group">
                    <img src={seller.avatar} alt={seller.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors truncate">{seller.name}</p>
                      <p className="text-xs text-slate-400">View full profile →</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </aside>

        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Gallery full size"
            className="max-w-4xl w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
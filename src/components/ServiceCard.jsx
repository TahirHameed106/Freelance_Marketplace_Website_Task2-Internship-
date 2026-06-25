// src/components/ServiceCard.jsx
// Reusable card component used in the Services grid.
// Receives one service object as a prop and renders it.

import Link from 'next/link';

// ── Star rating display ─────────────────────────────────────
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs font-semibold text-slate-700 ml-0.5">{rating}</span>
      <span className="text-xs text-slate-400">({service?.reviews})</span>
    </div>
  );
}

// ── Main card ───────────────────────────────────────────────
export default function ServiceCard({ service }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50/60 transition-all duration-200 flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden h-44 bg-slate-100 shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge */}
        {service.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${service.badgeColor}`}>
            {service.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">

        {/* Freelancer */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`w-7 h-7 rounded-full bg-linear-to-br ${service.freelancerGradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}
            aria-hidden="true"
          >
            {service.freelancerInitials}
          </div>
          <span className="text-xs text-slate-500 font-medium truncate">{service.freelancer}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 flex-1">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
          {service.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-3.5 h-3.5 ${star <= Math.round(service.rating) ? 'text-amber-400' : 'text-slate-200'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs font-semibold text-slate-700 ml-0.5">{service.rating}</span>
          <span className="text-xs text-slate-400">({service.reviews})</span>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-50 pt-3 mt-auto flex items-center justify-between">
          {/* Delivery */}
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
            </svg>
            {service.deliveryDays}d delivery
          </div>

          {/* Price */}
          <div className="text-right">
            <span className="text-xs text-slate-400">From </span>
            <span className="text-sm font-bold text-slate-900">${service.price}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/service/${service.id}`}
          className="mt-3 block text-center text-xs font-semibold text-emerald-600 border border-emerald-200 rounded-xl py-2 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-150"
        >
          View Service
        </Link>

      </div>
    </article>
  );
}
// src/components/SellerProfilePage.jsx
// Full seller profile UI — avatar, stats, about, skills, experience, portfolio, services

import Link from 'next/link';

// ── Reusable star row ───────────────────────────────────────
function Stars({ rating, size = 'sm' }) {
  const s = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1,2,3,4,5].map((i) => (
        <svg key={i} className={`${s} ${i <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

// ── Stat card ───────────────────────────────────────────────
function StatCard({ label, value }) {
  return (
    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
      <p className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{value}</p>
      <p className="text-xs text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}

export default function SellerProfilePage({ seller }) {
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
            <span className="text-slate-600 font-medium">{seller.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ── LEFT SIDEBAR ─────────────────────────────────── */}
          <aside className="lg:col-span-1 flex flex-col gap-5">

            {/* Profile card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-emerald-100 mx-auto"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" title="Online" aria-label="Online" />
              </div>

              <h1 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {seller.name}
              </h1>
              <p className="text-sm text-slate-500 mb-3">{seller.title}</p>

              <div className="flex items-center justify-center gap-2 mb-4">
                <Stars rating={seller.rating} />
                <span className="text-sm font-semibold text-slate-700">{seller.rating}</span>
                <span className="text-xs text-slate-400">({seller.totalReviews} reviews)</span>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl py-3 transition-colors mb-3">
                Contact Me
              </button>
              <button className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm rounded-xl py-2.5 transition-colors">
                View Services
              </button>
            </div>

            {/* Meta info */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h2 className="text-sm font-semibold text-slate-900 mb-4">Profile Info</h2>
              <ul className="flex flex-col gap-3">
                {[
                  { icon: '📍', label: 'From', value: seller.location },
                  { icon: '🕒', label: 'Member since', value: seller.memberSince },
                  { icon: '⚡', label: 'Response time', value: seller.responseTime },
                  { icon: '✅', label: 'Job success', value: `${seller.completionRate}%` },
                  { icon: '💼', label: 'Jobs completed', value: seller.totalJobs },
                  { icon: '🌐', label: 'Languages', value: seller.languages.join(', ') },
                ].map(({ icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3 text-sm">
                    <span className="text-base shrink-0">{icon}</span>
                    <div>
                      <p className="text-slate-400 text-xs">{label}</p>
                      <p className="text-slate-700 font-medium">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Total Earned" value={seller.totalEarned} />
              <StatCard label="Jobs Done"    value={seller.totalJobs} />
              <StatCard label="Rating"       value={`${seller.rating}/5`} />
              <StatCard label="Success Rate" value={`${seller.completionRate}%`} />
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h2 className="text-sm font-semibold text-slate-900 mb-4">Education</h2>
              {seller.education.map((edu, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-slate-800">{edu.degree}</p>
                  <p className="text-xs text-slate-500">{edu.institution} · {edu.year}</p>
                </div>
              ))}
            </div>

          </aside>

          {/* ── MAIN CONTENT ─────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* About */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>About Me</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{seller.about}</p>
            </section>

            {/* Skills */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {seller.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Experience</h2>
              <ol className="relative border-l-2 border-slate-100 pl-5 flex flex-col gap-6">
                {seller.experience.map((exp, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-5.75 top-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" aria-hidden="true" />
                    <p className="text-sm font-semibold text-slate-900">{exp.role}</p>
                    <p className="text-sm text-slate-600">{exp.company}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{exp.period}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Portfolio */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Portfolio</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                {seller.portfolio.map((item) => (
                  <li key={item.id} className="group rounded-xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200">
                    <div className="relative overflow-hidden h-40 bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Services */}
            {seller.serviceIds?.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>My Services</h2>
                <div className="flex flex-wrap gap-3">
                  {seller.serviceIds.map((sid) => (
                    <Link
                      key={sid}
                      href={`/service/${sid}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 border border-emerald-200 bg-emerald-50 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 rounded-xl px-4 py-2.5 transition-all duration-150"
                    >
                      View Service #{sid}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
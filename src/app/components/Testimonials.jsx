// src/components/Testimonials.jsx

const testimonials = [
  {
    quote: "Found an incredible React developer within 2 hours of posting. The quality of talent here is genuinely impressive — way better than what I've tried before.",
    name: 'Rachel Thompson',
    role: 'CTO, NovaTech',
    initials: 'RT',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    quote: "As a freelancer, SkillBridge gets me in front of serious clients. My income doubled in the first 3 months after joining.",
    name: 'Carlos Mendez',
    role: 'Brand Designer',
    initials: 'CM',
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    quote: "The escrow system gave me the confidence to hire for a $15k project on my first try. Everything was delivered on time and to spec.",
    name: 'Priya Kapoor',
    role: 'Founder, LaunchKit',
    initials: 'PK',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

const stats = [
  { value: '50K+',  label: 'Verified Freelancers' },
  { value: '$2.4M', label: 'Paid Out Monthly' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '96%',   label: 'Repeat Hire Rate' },
];

export default function Testimonials() {
  return (
    <>
      {/* ── Stats bar ─────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-slate-100" aria-label="Marketplace statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-xs font-medium text-slate-400 order-2">{s.label}</dt>
                <dd
                  className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-20 bg-slate-50/50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-2">Reviews</p>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              What Our Users Say
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="bg-white border border-slate-100 rounded-2xl p-6 h-full flex flex-col hover:border-emerald-200 hover:shadow-md transition-all duration-200">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-50">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`} aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
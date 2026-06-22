// src/components/CTA.jsx

export default function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Client CTA */}
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative">
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Need to hire talent?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Post your project for free and receive proposals from verified experts within hours.
              </p>
              <ul className="space-y-2 mb-7">
                {['Free to post your project', 'Proposals within 24 hours', 'No commitment required'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm rounded-xl px-6 py-3 transition-all duration-150 shadow-lg shadow-emerald-500/20"
              >
                Post a Project — It's Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

          {/* Freelancer CTA */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative">
              <div className="w-10 h-10 bg-white/15 border border-white/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Ready to earn more?
              </h2>
              <p className="text-emerald-50 text-sm leading-relaxed mb-6">
                Join 50,000+ freelancers earning on SkillBridge. Create your profile and start landing clients today.
              </p>
              <ul className="space-y-2 mb-7">
                {['Set your own rates', 'Work from anywhere', 'Get paid on time, every time'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white">
                    <svg className="w-4 h-4 text-emerald-100 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold text-sm rounded-xl px-6 py-3 transition-all duration-150 shadow-lg shadow-emerald-700/20"
              >
                Create Your Profile
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
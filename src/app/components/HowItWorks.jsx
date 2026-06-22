// src/components/HowItWorks.jsx

const steps = [
  {
    number: '01',
    title: 'Post Your Project',
    description: 'Describe what you need — skills required, budget, and timeline. It takes less than 5 minutes.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Review Proposals',
    description: 'Qualified freelancers submit tailored proposals within hours. Compare profiles, portfolios, and rates.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Hire & Collaborate',
    description: 'Hire with one click. Use our built-in workspace for messaging, milestones, and file sharing.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Pay Securely',
    description: 'Funds are held in escrow and released only when you approve the work. Zero risk.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
];

const reasons = [
  { title: 'Verified Talent Only', desc: 'Every freelancer goes through ID verification and skill assessment.', icon: '✓' },
  { title: 'Escrow Protection', desc: 'Your money stays safe until you approve the final delivery.', icon: '🔒' },
  { title: 'No Upfront Fees', desc: 'Free to post projects. Pay only when you hire.', icon: '$' },
  { title: '24/7 Support', desc: 'Our support team resolves any dispute within 24 hours.', icon: '⚡' },
];

export default function HowItWorks() {
  return (
    <>
      {/* ── How It Works ──────────────────────────────────── */}
      <section id="how-it-works" className="py-20 bg-slate-50/60" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-2">Process</p>
            <h2
              id="how-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              How It Works
            </h2>
            <p className="text-slate-500 text-base">Get your project done in four simple steps.</p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" role="list">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-slate-200" aria-hidden="true" />

            {steps.map((step, i) => (
              <li key={step.number} className="relative flex flex-col">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative z-10 w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-emerald-500">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-300 font-mono">{step.number}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-20 bg-slate-900" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">Advantages</p>
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Why Thousands Choose SkillBridge
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                We built SkillBridge because hiring freelancers online shouldn't feel like a gamble. Every feature is designed around trust, quality, and speed.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
              {reasons.map((r) => (
                <li key={r.title} className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all duration-200">
                  <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-lg mb-3" aria-hidden="true">
                    {r.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{r.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
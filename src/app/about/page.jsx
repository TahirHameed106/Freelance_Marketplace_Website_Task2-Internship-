// src/app/about/page.jsx
// Day 4 — About Us Page (Server Component, no 'use client')

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About Us — SkillBridge',
  description: 'Learn about SkillBridge — our mission, vision, team, and the story behind the platform.',
};

// ── Data ─────────────────────────────────────────────────────
const stats = [
  { value: '50K+',  label: 'Verified Freelancers' },
  { value: '120K+', label: 'Projects Completed' },
  { value: '98%',   label: 'Client Satisfaction' },
  { value: '180+',  label: 'Countries Served' },
];

const values = [
  {
    title: 'Trust First',
    desc: 'Every freelancer is verified. Every payment is protected. We built safety into the platform from day one.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    title: 'Quality Over Quantity',
    desc: 'We curate talent, not just collect it. Our vetting process ensures clients work with genuinely skilled professionals.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
  },
  {
    title: 'Fair for Everyone',
    desc: "Freelancers keep more of what they earn. Clients pay fair market rates. No hidden fees, no surprises.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: 'Built to Scale',
    desc: 'Whether you need one freelancer or a full team, SkillBridge scales with your business. No friction, no ceiling.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
  },
];

const team = [
  { name: 'James Carter',  role: 'CEO & Co-Founder',      avatar: 'https://i.pravatar.cc/200?img=11', bio: 'Former VP at LinkedIn. 15 years building platforms that connect people.' },
  { name: 'Priya Nair',    role: 'CTO & Co-Founder',      avatar: 'https://i.pravatar.cc/200?img=47', bio: 'Ex-Google engineer. Obsessed with developer experience and platform scale.' },
  { name: 'Marcus Wells',  role: 'Head of Product',        avatar: 'https://i.pravatar.cc/200?img=15', bio: 'Previously at Figma and Notion. Believes great products get out of the way.' },
  { name: 'Sofia Park',    role: 'Head of Trust & Safety', avatar: 'https://i.pravatar.cc/200?img=32', bio: 'Built trust systems at Airbnb. Makes SkillBridge safe for everyone.' },
  { name: 'David Okafor',  role: 'Head of Growth',         avatar: 'https://i.pravatar.cc/200?img=8',  bio: 'Growth marketer who scaled two startups from 0 to 1M users.' },
  { name: 'Yuna Kimura',   role: 'Head of Design',         avatar: 'https://i.pravatar.cc/200?img=44', bio: 'Award-winning designer. Shapes every pixel of the SkillBridge experience.' },
];

const milestones = [
  { year: '2019', event: 'SkillBridge founded in a San Francisco co-working space by James and Priya.' },
  { year: '2020', event: 'Launched beta with 500 freelancers. Reached $1M in total payouts within 6 months.' },
  { year: '2021', event: 'Series A funding. Expanded to 50 countries. Crossed 10,000 active freelancers.' },
  { year: '2022', event: 'Introduced escrow payments, dispute resolution, and verified badges.' },
  { year: '2023', event: 'Reached $100M in total payouts. Launched team hiring and enterprise plans.' },
  { year: '2024', event: '50K+ freelancers. 120K+ projects completed. Expanding to 180+ countries.' },
];

// ── Page ─────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="bg-slate-900 pt-20 pb-16" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              About SkillBridge
            </span>
            <h1
              id="about-heading"
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              We&apos;re Rebuilding How the<br className="hidden sm:block" /> World Works Together
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              SkillBridge is a freelance marketplace built on one idea: great work should be accessible to every business, and every talented professional deserves a fair shot.
            </p>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100" aria-label="Platform statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {s.value}
                  </dd>
                  <dt className="text-sm text-slate-500 mt-1">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Company intro ─────────────────────────────────── */}
        <section className="py-20 bg-slate-50" aria-labelledby="intro-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase">Who We Are</span>
                <h2
                  id="intro-heading"
                  className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  A Platform Built by Freelancers, for Everyone
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We started SkillBridge because we were frustrated with existing platforms — high fees, poor matching, and zero trust signals. We set out to build something better.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Today, SkillBridge connects 50,000+ vetted freelancers with businesses in 180+ countries. From solo founders to Fortune 500 teams, companies of every size use SkillBridge to get expert work done fast.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl px-6 py-3 transition-colors"
                >
                  Browse Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/about1/400/300" alt="Team collaboration" className="rounded-2xl w-full h-48 object-cover" />
                <img src="https://picsum.photos/seed/about2/400/300" alt="Remote work" className="rounded-2xl w-full h-48 object-cover mt-6" />
                <img src="https://picsum.photos/seed/about3/400/300" alt="Office meeting" className="rounded-2xl w-full h-48 object-cover -mt-6" />
                <img src="https://picsum.photos/seed/about4/400/300" alt="Design work" className="rounded-2xl w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ──────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="mission-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase">Purpose</span>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Mission &amp; Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" aria-hidden="true" />
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To make world-class talent accessible to every business — and make meaningful, well-paid work available to every skilled professional, regardless of where they live.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-emerald-500 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" aria-hidden="true" />
                <div className="w-10 h-10 bg-white/15 border border-white/20 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our Vision</h3>
                <p className="text-emerald-50 leading-relaxed">
                  A world where talent has no borders. Where the best developer in Lagos, the best designer in Karachi, and the best marketer in Jakarta all have equal access to the global economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ────────────────────────────────────────── */}
        <section className="py-20 bg-slate-50" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase">What Drives Us</span>
              <h2
                id="values-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Our Core Values
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
              {values.map((v) => (
                <li key={v.title} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-emerald-200 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-500 mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="timeline-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase">Our Journey</span>
              <h2
                id="timeline-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Company Story
              </h2>
            </div>
            <ol className="relative border-l-2 border-slate-100 pl-8 flex flex-col gap-8">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-9.25 top-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" aria-hidden="true" />
                  <span className="inline-block text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 mb-2">
                    {m.year}
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">{m.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Team ──────────────────────────────────────────── */}
        <section className="py-20 bg-slate-50" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase">The People</span>
              <h2
                id="team-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Meet the Team
              </h2>
              <p className="text-slate-500 text-base">The people behind SkillBridge — building for the long term.</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {team.map((member) => (
                <li key={member.name} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-emerald-200 hover:shadow-md transition-all duration-200 text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-slate-50"
                  />
                  <h3 className="font-bold text-slate-900 mb-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-600 mb-3">{member.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-16 bg-slate-900" aria-labelledby="about-cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="about-cta"
              className="text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Join 50,000+ freelancers and thousands of businesses already on SkillBridge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm rounded-xl px-7 py-3 transition-colors">
                Browse Services
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white font-semibold text-sm rounded-xl px-7 py-3 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
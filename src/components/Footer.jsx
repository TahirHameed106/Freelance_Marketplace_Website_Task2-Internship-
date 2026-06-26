// src/components/Footer.jsx
import Link from 'next/link';

const links = {
  'For Clients': ['Post a Project', 'Browse Freelancers', 'How to Hire', 'Pricing', 'Enterprise'],
  'For Freelancers': ['Create Profile', 'Browse Projects', 'How to Get Hired', 'Community', 'Freelancer Resources'],
  'Company': ['About Us', 'Careers', 'Press', 'Blog', 'Partnerships'],
  'Support': ['Help Center', 'Trust & Safety', 'Terms of Service', 'Privacy Policy', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="SkillBridge home">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h5M10 9h5M9 3v5M9 10v5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Skill<span className="text-emerald-400">Bridge</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-50">
              The trusted marketplace connecting clients with top freelance talent worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-300 transition-colors"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold tracking-widest text-slate-300 uppercase mb-4">{group}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-xs text-slate-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
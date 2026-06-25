// src/components/TrustedBy.jsx

const companies = [
  'Google', 'Microsoft', 'Spotify', 'Shopify', 'Airbnb', 'Stripe', 'Notion', 'Figma',
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-y border-slate-100" aria-label="Trusted by leading companies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">
          Trusted by teams at
        </p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />

          <div className="flex gap-12 animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...companies, ...companies].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-slate-300 font-bold text-xl tracking-tight shrink-0 hover:text-slate-500 transition-colors cursor-default select-none"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Accessible static list (visually hidden) */}
        <ul className="sr-only">
          {companies.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </section>
  );
}
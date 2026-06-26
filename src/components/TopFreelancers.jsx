// src/components/TopFreelancers.jsx

const freelancers = [
  { initials: 'AR', name: 'Alex Rivera', role: 'Full-Stack Developer', rate: '$95/hr', rating: '5.0', reviews: 214, skills: ['React', 'Node.js', 'AWS'], gradient: 'from-indigo-400 to-blue-500', available: true },
  { initials: 'MP', name: 'Maya Patel', role: 'UI/UX Designer', rate: '$75/hr', rating: '4.9', reviews: 187, skills: ['Figma', 'Webflow', 'Branding'], gradient: 'from-violet-400 to-purple-500', available: true },
  { initials: 'JK', name: 'James Kim', role: 'AI/ML Engineer', rate: '$120/hr', rating: '5.0', reviews: 93, skills: ['Python', 'TensorFlow', 'LLMs'], gradient: 'from-emerald-400 to-teal-500', available: false },
  { initials: 'SC', name: 'Sofia Chen', role: 'Brand Strategist', rate: '$80/hr', rating: '4.8', reviews: 156, skills: ['Strategy', 'Copywriting', 'SEO'], gradient: 'from-rose-400 to-pink-500', available: true },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
      <span className="text-xs font-semibold text-slate-700 ml-0.5">{rating}</span>
    </div>
  );
}

export default function TopFreelancers() {
  return (
    <section className="py-20 bg-white" aria-labelledby="freelancers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-2">Talent</p>
            <h2
              id="freelancers-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Top Freelancers
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group shrink-0">
            Browse all talent
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
          {freelancers.map((f) => (
            <li key={f.name}>
              <article className="group bg-white border border-slate-100 rounded-2xl p-5 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50/60 transition-all duration-200 flex flex-col h-full">

                {/* Avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${f.gradient} flex items-center justify-center text-white font-bold text-base`} aria-hidden="true">
                    {f.initials}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${f.available ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                    {f.available ? 'Available' : 'Busy'}
                  </span>
                </div>

                <h3 className="font-semibold text-slate-900 text-sm mb-0.5 group-hover:text-emerald-600 transition-colors">{f.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{f.role}</p>

                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={f.rating} />
                  <span className="text-xs text-slate-400">({f.reviews})</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                  {f.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-slate-50 border border-slate-100 text-slate-600 px-2 py-0.5 rounded-lg">{skill}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <div>
                    <p className="text-xs text-slate-400">Rate</p>
                    <p className="text-sm font-bold text-slate-900">{f.rate}</p>
                  </div>
                  <button className="text-xs font-semibold text-emerald-600 border border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 px-3 py-1.5 rounded-xl transition-all duration-150">
                    View Profile
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
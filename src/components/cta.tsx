export function Cta() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1.5fr_1fr] md:gap-12 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Help us validate the future of remote rehab
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-[50ch]">
              Your experience helps us improve the precision of digital
              biomarkers. Join our pilot program and contribute to building
              rehabilitation tools that work without expensive equipment.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-7 py-3.5 rounded-lg transition-colors hover:bg-slate-800 active:scale-[0.98]"
            >
              Join the pilot
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

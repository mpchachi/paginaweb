import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 w-full relative pt-24 pb-16">
        <div className="md:grid md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 badge-shimmer pointer-events-none" />
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-white/90 relative">
                Harvard HSIL 2026 Winners
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Recovery happens
              <span className="text-white/60"> every day.</span>
              <br />
              Clinical insight should too.
            </h1>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-[52ch] mb-5">
              After a stroke, the most critical recovery happens at home — but
              clinicians only see patients once every few weeks. SteadyArc
              bridges that gap.
            </p>

            <p className="text-base text-white/35 leading-relaxed max-w-[50ch] mb-10">
              A simple game captures hand kinematics, gaze patterns, and facial
              symmetry through any camera. No wearables. No setup. Just
              continuous, objective data for smarter clinical decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/solution"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-stone-900 font-medium px-7 py-3.5 rounded-lg text-base transition-all active:scale-[0.98] shadow-lg shadow-black/20"
              >
                See how it works
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
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 font-medium px-7 py-3.5 rounded-lg text-base transition-colors hover:bg-white/5 active:scale-[0.98]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="border border-white/15 rounded-2xl p-8 bg-black/30 shadow-xl shadow-black/20">
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-6">
                The monitoring gap
              </p>
              <div className="space-y-5">
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-white/50">
                    Post-stroke patients / clinician
                  </span>
                  <span className="text-2xl font-bold text-white font-mono tabular-nums stat-glow rounded-lg px-2 py-0.5">
                    673
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-white/50">
                    New strokes / year (U.S.)
                  </span>
                  <span className="text-2xl font-bold text-white/90 font-mono tabular-nums">
                    795K
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-white/50">
                    Neurologists in rural areas
                  </span>
                  <span className="text-2xl font-bold text-white/90 font-mono tabular-nums">
                    3.1%
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/50">
                    Hardware we require
                  </span>
                  <span className="text-2xl font-bold text-white font-mono tabular-nums">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section
      id="solution"
      className="min-h-[100dvh] flex items-end md:items-center relative pt-24 pb-16 md:pb-0"
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="md:grid md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-center">
          <div>
            <p className="text-sm font-medium text-brand-700 mb-5 tracking-wide">
              Neurorehabilitation through play
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-6">
              Clinical-grade telemonitoring, zero hardware
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed max-w-[55ch] mb-10">
              Capturamos cinemática de manos, gesticulación facial,
              biomarcadores de voz y seguimiento ocular con la cámara que ya
              tienes. Rehabilitación post-ictus gamificada, accesible desde
              casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-medium px-7 py-3.5 rounded-lg text-base transition-colors active:scale-[0.98]"
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
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-400 text-stone-700 font-medium px-7 py-3.5 rounded-lg text-base transition-colors hover:bg-stone-50 active:scale-[0.98]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="border border-stone-200 rounded-xl p-8 bg-white">
              <div className="space-y-6">
                <div className="flex items-baseline justify-between border-b border-stone-100 pb-4">
                  <span className="text-sm text-stone-500">Hardware needed</span>
                  <span className="text-2xl font-bold text-stone-900 font-mono tabular-nums">
                    0
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-stone-100 pb-4">
                  <span className="text-sm text-stone-500">Biomarkers tracked</span>
                  <span className="text-2xl font-bold text-stone-900 font-mono tabular-nums">
                    4+
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-stone-500">Monitoring</span>
                  <span className="text-2xl font-bold text-stone-900 font-mono tabular-nums">
                    24/7
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

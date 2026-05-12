export function Cta() {
  return (
    <section className="py-20 md:py-24 bg-stone-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1.5fr_1fr] md:gap-12 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Help us build a better solution
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-[50ch]">
              Tu experiencia nos ayuda a mejorar la precisión de los
              biomarcadores digitales. Únete al programa de pruebas y
              contribuye a la investigación.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 font-medium px-7 py-3.5 rounded-lg transition-colors hover:bg-stone-100 active:scale-[0.98]"
            >
              Join the beta
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

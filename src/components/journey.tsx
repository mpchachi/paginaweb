const steps = [
  {
    number: "1",
    title: "The glove era",
    description:
      "We started with a physical sensor glove to telemonitor post-stroke patients. It captured real-time biometric data but required specialized hardware — limiting scalability.",
    accent: false,
  },
  {
    number: "2",
    title: "Harvard HSIL 2026 winners",
    description:
      "We validated the model at Harvard's HSIL 2026 hackathon. Clinical and technological confirmation that gamified telemonitoring addresses a real unmet need in stroke rehabilitation.",
    accent: false,
  },
  {
    number: "3",
    title: "100% software, zero hardware",
    description:
      "Now the model is purely computer vision. Any camera works. We're democratizing access to clinical-grade rehabilitation monitoring — no setup friction, no cost barriers.",
    accent: true,
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-16">
          <div className="mb-12 md:mb-0 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Our journey
            </h2>
            <p className="text-white/50 leading-relaxed">
              From physical sensors to pure computer vision. Three pivots in
              under two years — each one reducing friction and increasing
              accessibility.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className={`animate-on-scroll delay-${i + 1} grid grid-cols-[auto_1fr] gap-5`}>
                <div className="flex flex-col items-center">
                  <span
                    className={`w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-lg ${
                      step.accent
                        ? "bg-amber-500 shadow-brand-200"
                        : "bg-white/10 shadow-black/300"
                    }`}
                  >
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-stone-300 to-stone-100 mt-3" />
                  )}
                </div>
                <div className={`${i < steps.length - 1 ? "pb-10" : ""}`}>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "1",
    title: "The glove era",
    description:
      "Empezamos con un guante físico con sensores para telemonitorizar pacientes con ictus. Capturaba datos biométricos en tiempo real, pero requería hardware especializado.",
    accent: false,
  },
  {
    number: "2",
    title: "Harvard HSIL 2026 winners",
    description:
      "Validamos el modelo en el hackathon HSIL 2026 de Harvard. Confirmación clínica y tecnológica de la solución de telemonitoreo gamificado.",
    accent: false,
  },
  {
    number: "3",
    title: "100% software, zero hardware",
    description:
      "Ahora el modelo es puramente computer vision. Cualquier cámara sirve. Democratizamos el acceso a rehabilitación de grado clínico.",
    accent: true,
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-16">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
              The journey
            </h2>
            <p className="text-stone-500 leading-relaxed">
              From physical sensors to pure computer vision. Three pivots in
              under two years.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-5">
                <div className="flex flex-col items-center">
                  <span
                    className={`w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                      step.accent ? "bg-brand-600" : "bg-stone-900"
                    }`}
                  >
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-stone-200 mt-3" />
                  )}
                </div>
                <div className={i < steps.length - 1 ? "pb-2" : ""}>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed">
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

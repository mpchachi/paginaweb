"use client";

import { useState } from "react";

const questions = [
  {
    q: "¿Necesito comprar hardware o sensores?",
    a: "No. Solo necesitas la cámara y micrófono que ya tiene tu ordenador o tablet. Nuestra tecnología es completamente software.",
  },
  {
    q: "¿Qué métricas clínicas captura?",
    a: "Cinemática de mano (apertura de pinza, rango de movimiento), simetría facial, biomarcadores de voz y atención visual mediante eye-tracking.",
  },
  {
    q: "¿Para clínicas o para casa?",
    a: "Ambos. Los pacientes juegan desde casa mientras los terapeutas monitorizan el progreso en tiempo real desde el dashboard clínico.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Questions
            </h2>
            <p className="text-stone-500">
              Lo que suelen preguntarnos clínicos, pacientes e inversores.
            </p>
          </div>

          <div className="divide-y divide-stone-200">
            {questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between text-left group"
                  >
                    <span className="text-base font-medium text-stone-900 pr-4 group-hover:text-brand-700 transition-colors">
                      {item.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-stone-400 flex-shrink-0 mt-1 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-stone-500 leading-relaxed pt-3">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

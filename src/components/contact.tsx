"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-stone-200 bg-surface-1">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Contact
            </h2>
            <p className="text-stone-500 leading-relaxed max-w-[40ch]">
              Whether you're a clinician, patient, or investor, we'd
              like to hear from you.
            </p>
          </div>

          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Email profesional
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Institución / Hospital
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Rol
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white appearance-none"
                  >
                    <option value="" disabled>
                      Selecciona tu rol
                    </option>
                    <option value="paciente">Paciente</option>
                    <option value="medico">Médico / Terapeuta</option>
                    <option value="inversor">Inversor</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-3.5 rounded-lg transition-colors active:scale-[0.99]"
                >
                  Enviar solicitud
                </button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg font-semibold text-stone-900 mb-1">
                  Mensaje enviado
                </p>
                <p className="text-stone-500 text-sm">
                  Te contactaremos pronto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

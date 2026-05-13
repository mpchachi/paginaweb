"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="mb-12 md:mb-0 animate-on-scroll">
            <p className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Let's talk
            </h2>
            <p className="text-white/50 leading-relaxed max-w-[40ch] mb-8">
              Whether you're a clinician, patient, or investor — we'd like to
              hear from you.
            </p>

            <div className="space-y-4 text-sm text-white/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span>Madrid, Spain</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <span>Expanding to U.S. market</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll delay-1">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 border border-white/10 rounded-2xl p-7 shadow-sm">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Professional email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Institution / Hospital
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white/5 appearance-none"
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option value="patient">Patient</option>
                    <option value="clinician">Clinician / Therapist</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors bg-white/5 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white/10 hover:bg-stone-800 text-white font-medium py-3.5 rounded-lg transition-colors active:scale-[0.99]"
                >
                  Send request
                </button>
              </form>
            ) : (
              <div className="py-16 text-center bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white mb-1">
                  Message sent
                </p>
                <p className="text-white/50 text-sm">
                  We'll get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const questions = [
  {
    q: "Do I need to buy any hardware or sensors?",
    a: "No. SteadyArc uses only the camera and microphone already on your computer, tablet, or smartphone. It's 100% software-based — no wearables, no VR headset, no specialized equipment.",
  },
  {
    q: "What clinical metrics does it capture?",
    a: "Reaction time, eye-hand latency, movement accuracy, coordination score, completion time, error rate, and longitudinal trends. These metrics allow clinicians to assess whether a patient is improving, stable, or deteriorating.",
  },
  {
    q: "Is it for clinics or for home use?",
    a: "Both. Patients play a short game at home while clinicians monitor recovery trends in real-time from their dashboard. It extends care beyond the clinic without adding workload.",
  },
  {
    q: "Who pays for SteadyArc?",
    a: "SteadyArc is B2B SaaS. Hospitals, rehabilitation centers, and clinics subscribe. Patients are users, not payers. Future phases may include value-based contracts with insurers.",
  },
  {
    q: "What conditions does it support?",
    a: "Initially, post-stroke motor rehabilitation. The same monitoring model can later extend to conditions with neurological motor deficits such as Parkinson's disease and multiple sclerosis.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div className="mb-12 md:mb-0 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Questions
            </h2>
            <p className="text-stone-500">
              What clinicians, patients, and investors usually ask us.
            </p>
          </div>

          <div className="divide-y divide-stone-200 animate-on-scroll delay-1">
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
                    <span className={`w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all group-hover:border-brand-300 ${isOpen ? "bg-brand-600 border-brand-600" : ""}`}>
                      <svg
                        className={`w-3 h-3 transition-transform ${
                          isOpen ? "rotate-45 text-white" : "text-stone-400"
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
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-stone-500 leading-relaxed pt-3 text-sm">
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

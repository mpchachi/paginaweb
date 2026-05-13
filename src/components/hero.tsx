"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-between relative overflow-hidden">
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 w-full pt-32 pb-12">
          <div className="inline-flex items-center gap-2 bg-slate-900/[0.04] border border-slate-200 rounded-full px-4 py-1.5 mb-10">
            <svg className="w-3.5 h-3.5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <span className="text-[11px] font-medium text-slate-600 tracking-wide">
              Harvard HSIL 2026
            </span>
          </div>

          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold text-slate-900 tracking-[-0.03em] leading-[0.95] mb-8 max-w-[18ch]">
            Your patients recover at home.
            <span className="block text-slate-400 mt-1">You find out weeks later.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-[1.7] max-w-[48ch] mb-12">
            SteadyArc turns any camera into a continuous window on stroke recovery.
            Hand kinematics, facial symmetry, gaze — captured through a game,
            delivered as clinical data. No wearables. No visits.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/solution"
              className="inline-flex items-center gap-2.5 bg-slate-900 text-white font-medium px-7 py-3.5 rounded-lg text-[15px] transition-all hover:bg-slate-800 active:scale-[0.97]"
            >
              See how it works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium px-4 py-3.5 text-[15px] transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-200/70">
        <div className="max-w-[1100px] mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-200/70">
            <div className="md:pr-8">
              <span className="block text-2xl md:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight">673</span>
              <span className="text-xs text-slate-400 leading-snug mt-1 block">patients per clinician post-stroke</span>
            </div>
            <div className="md:px-8">
              <span className="block text-2xl md:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight">795K</span>
              <span className="text-xs text-slate-400 leading-snug mt-1 block">new strokes per year in the U.S.</span>
            </div>
            <div className="md:px-8">
              <span className="block text-2xl md:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight">3.1%</span>
              <span className="text-xs text-slate-400 leading-snug mt-1 block">of neurologists serve rural areas</span>
            </div>
            <div className="md:pl-8">
              <span className="block text-2xl md:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight">0</span>
              <span className="text-xs text-slate-400 leading-snug mt-1 block">hardware required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

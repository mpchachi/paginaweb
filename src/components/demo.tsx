"use client";

import {
  Carousel,
  Card,
} from "@/components/ui/apple-cards-carousel";

function GloveContent() {
  return (
    <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
        It all started with a <span className="font-semibold text-white">sensor glove</span> — 
        a wearable device packed with flex sensors and an Arduino to capture finger 
        movement data from post-stroke patients.
      </p>
      <p className="text-white/50 text-sm md:text-base max-w-3xl leading-relaxed mb-6">
        The prototype proved the concept: we could quantify rehabilitation progress 
        in real-time. But the hardware dependency — specialized sensors, calibration 
        time, and cost — made it impossible to scale.
      </p>
      <p className="text-white/40 text-sm border-t border-white/10 pt-4 mt-2">
        The data matters, not the device capturing it.
      </p>
    </div>
  );
}

function HarvardContent() {
  return (
    <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
        We brought our vision to <span className="font-semibold text-white">Harvard's Health Systems Innovation Lab</span> in
        Madrid — and won. The judges validated that gamified telemonitoring addresses
        a real unmet clinical need in stroke rehabilitation.
      </p>
      <p className="text-white/50 text-sm md:text-base max-w-3xl leading-relaxed mb-6">
        The prize: $3,000 in AWS credits, entry into the RCC Accelerator program,
        and — most importantly — confirmation from clinicians that this is worth building.
      </p>
      <p className="text-white/40 text-sm border-t border-white/10 pt-4 mt-2">
        Clinical validation comes from the field, not the lab.
      </p>
    </div>
  );
}

function GameContent() {
  return (
    <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
        We built <span className="font-semibold text-white">FisherGame</span> — a pixel-art
        fishing game where the patient controls the rod with real hand movements
        tracked by their device's camera. No controllers, no wearables.
      </p>
      <p className="text-white/50 text-sm md:text-base max-w-3xl leading-relaxed mb-6">
        Behind the scenes, computer vision captures hand aperture, pinch precision,
        and reaction time. The patient plays; we extract clinical metrics.
        Rehabilitation disguised as entertainment.
      </p>
      <p className="text-white/40 text-sm border-t border-white/10 pt-4 mt-2">
        Patients engage more when therapy feels like a game.
      </p>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
        The <span className="font-semibold text-white">Clinical Dashboard</span> brings it all together.
        Real-time hand tracking, facial symmetry analysis, gaze patterns, and a
        composite recovery index — all from a single camera feed.
      </p>
      <p className="text-white/50 text-sm md:text-base max-w-3xl leading-relaxed mb-6">
        Clinicians see longitudinal trends, receive alerts when metrics deteriorate,
        and can prioritize patients who need immediate attention. No hardware setup,
        no patient training, no friction.
      </p>
      <p className="text-white/40 text-sm border-t border-white/10 pt-4 mt-2">
        100% software. Zero hardware. Maximum clinical insight.
      </p>
    </div>
  );
}

const cards = [
  {
    src: "/journey/glove-prototype.jpeg",
    title: "The sensor glove",
    category: "Phase 1 — Hardware prototype",
    content: <GloveContent />,
  },
  {
    src: "/journey/harvard-hsil-win.jpeg",
    title: "Harvard HSIL 2026 Winners",
    category: "Phase 2 — Clinical validation",
    content: <HarvardContent />,
  },
  {
    src: "/journey/fishing-game.jpeg",
    title: "FisherGame — Gamified rehab",
    category: "Phase 3 — Computer vision pivot",
    content: <GameContent />,
  },
  {
    src: "/journey/clinical-dashboard.jpeg",
    title: "Real-time clinical dashboard",
    category: "Phase 4 — Full platform",
    content: <DashboardContent />,
  },
];

export function Demo() {
  const carouselItems = cards.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section id="demo" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-4 animate-on-scroll">
          <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
            Our journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            From hardware to pure computer vision
          </h2>
          <p className="text-white/50 leading-relaxed max-w-[60ch]">
            Three pivots in under two years — each one reducing friction and
            increasing accessibility. Click a card to learn more.
          </p>
        </div>
      </div>
      <Carousel items={carouselItems} />
    </section>
  );
}

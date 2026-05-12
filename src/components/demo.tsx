export function Demo() {
  return (
    <section id="demo" className="py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-16 md:items-start">
          <div className="mb-10 md:mb-0 md:sticky md:top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
              The fishing game
            </h2>
            <p className="text-stone-500 leading-relaxed">
              The patient plays while our system captures hand aperture, facial
              symmetry, and gaze patterns in real-time. No sensors, no
              wearables.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden bg-stone-900 aspect-video relative border border-stone-800">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="BetweenVisits Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <svg
                className="w-12 h-12 text-stone-600 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-stone-500 text-sm">Demo coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

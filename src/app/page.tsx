import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20 md:py-24 bg-white/5 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="md:grid md:grid-cols-[1.5fr_1fr] md:gap-12 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Help us validate the future of remote rehab
              </h2>
              <p className="text-white/50 leading-relaxed max-w-[50ch]">
                We're looking for clinicians, rehabilitation teams, and hospitals
                to join our pilot program. Your expertise helps build tools that
                actually work in real clinical settings.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-stone-900 font-medium px-7 py-3.5 rounded-lg transition-all hover:bg-white/90 active:scale-[0.98] shadow-lg shadow-black/20"
              >
                Join the pilot
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
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}

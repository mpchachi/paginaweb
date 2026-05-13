"use client";

import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const markers: GlobeMarker[] = [
  {
    lat: 40.4168,
    lng: -3.7038,
    src: "https://flagcdn.com/w80/es.png",
    label: "Madrid (HQ)",
  },
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://flagcdn.com/w80/us.png",
    label: "New York",
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    src: "https://flagcdn.com/w80/us.png",
    label: "Los Angeles",
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    src: "https://flagcdn.com/w80/us.png",
    label: "Chicago",
  },
  {
    lat: 25.7617,
    lng: -80.1918,
    src: "https://flagcdn.com/w80/us.png",
    label: "Miami",
  },
  {
    lat: 52.52,
    lng: 13.405,
    src: "https://flagcdn.com/w80/de.png",
    label: "Berlin",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://flagcdn.com/w80/fr.png",
    label: "Paris",
  },
];

export function GlobeSection() {
  return (
    <section className="py-24 md:py-32 border-t border-stone-200 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-8 animate-on-scroll">
          <p className="text-xs font-medium text-brand-600 uppercase tracking-wider mb-3">
            Go-to-market
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-stone-900 tracking-tight">
            From Madrid to the world
          </h2>
          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Starting in Spain, expanding to the U.S., Germany, and France —
            targeting the largest post-stroke rehabilitation markets where remote
            monitoring is most needed.
          </p>
        </div>
      </div>

      <Globe3D
        markers={markers}
        className="h-[450px] md:h-[550px]"
        config={{
          atmosphereColor: "#c45f27",
          atmosphereIntensity: 0.4,
          showAtmosphere: true,
          bumpScale: 3,
          autoRotateSpeed: 0.4,
        }}
        onMarkerClick={(marker) => {
          console.log("Clicked:", marker.label);
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll delay-2">
          {[
            { city: "Madrid", label: "HQ & First Pilots" },
            { city: "New York", label: "U.S. Market Entry" },
            { city: "Berlin", label: "DiGA Pathway" },
            { city: "Paris", label: "EU Expansion" },
          ].map((item) => (
            <div key={item.city} className="text-center p-4 rounded-xl bg-surface-1 border border-stone-100">
              <p className="text-sm font-semibold text-stone-900">{item.city}</p>
              <p className="text-xs text-stone-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

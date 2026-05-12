import Image from "next/image";

function AwsLogo() {
  return (
    <Image
      src="/sponsors/aws.png"
      alt="AWS"
      width={80}
      height={48}
      className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
    />
  );
}

function SaturnoLabsLogo() {
  return (
    <span className="text-lg font-bold tracking-tight" aria-label="SaturnoLabs">
      Saturno<span className="font-normal opacity-60">Labs</span>
    </span>
  );
}

function SanitasLogo() {
  return (
    <span className="text-lg font-bold tracking-tight" aria-label="Sanitas">
      Sanitas
    </span>
  );
}

function OakleyCapitalLogo() {
  return (
    <span className="text-lg font-bold tracking-tight" aria-label="Oakley Capital">
      Oakley <span className="font-normal opacity-60">Capital</span>
    </span>
  );
}

const logos = [AwsLogo, SaturnoLabsLogo, SanitasLogo, OakleyCapitalLogo];

export function Partners() {
  return (
    <section className="py-16 border-t border-stone-200 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-8">
          Backed by
        </p>
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-0 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-0 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track group-hover:[animation-play-state:paused] flex items-center gap-16 md:gap-24 w-max">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-16 md:gap-24 shrink-0">
              {logos.map((Logo, i) => (
                <div
                  key={i}
                  className="text-stone-400 hover:text-stone-700 transition-colors shrink-0"
                >
                  <Logo />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

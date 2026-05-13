const members = [
  { name: "Mateo", role: "Lead Fullstack Engineer", initials: "M" },
  { name: "Luis", role: "Product Strategy & UX", initials: "L" },
  { name: "Marco", role: "Data Science & Business Strategy", initials: "MC" },
  { name: "Álvaro", role: "Lead ML & Computer Vision", initials: "A" },
  { name: "Helene", role: "Biomedical Engineer, Clinical Translation", initials: "H" },
  { name: "José Antonio", role: "Physician & Clinical Advisor", initials: "JA" },
];

export function Team() {
  return (
    <section id="team" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold text-amber-300">
              Harvard HSIL 2026 Winners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            The team
          </h2>
          <p className="text-white/50 max-w-[55ch] leading-relaxed">
            Engineers, clinicians, and researchers. We build rehabilitation tools
            that work without expensive equipment — validated at Harvard's Health
            Systems Innovation Lab.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, i) => (
            <div
              key={member.name}
              className={`animate-on-scroll delay-${Math.min(i + 1, 5)} flex items-center gap-4 border border-white/10 rounded-xl p-5 bg-white/5 hover:shadow-md hover:border-white/20 transition-all`}
            >
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white/60">
                  {member.initials}
                </span>
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  {member.name}
                </p>
                <p className="text-sm text-white/50">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

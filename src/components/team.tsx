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
          <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-6">
            Harvard HSIL 2026 Winners
          </p>
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

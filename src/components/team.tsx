const members = [
  { name: "Mateo", role: "Lead Fullstack Engineer" },
  { name: "Luis", role: "Product Strategy & UX" },
  { name: "Marco", role: "Data Science & Business Strategy" },
  { name: "Álvaro", role: "Lead ML & Computer Vision" },
  { name: "Helene", role: "Biomedical Engineer, Clinical Translation" },
  { name: "José Antonio", role: "Physician & Clinical Advisor" },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            The team
          </h2>
          <p className="text-stone-500 max-w-[45ch]">
            Engineers, clinicians, and researchers building rehabilitation tools
            that work without expensive equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {members.map((member) => (
            <div key={member.name}>
              <p className="text-base font-semibold text-stone-900">
                {member.name}
              </p>
              <p className="text-sm text-stone-500 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

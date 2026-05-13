export function Value() {
  return (
    <section id="value" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 animate-on-scroll">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-3">
            Value proposition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Value for every stakeholder
          </h2>
          <p className="text-white/50 leading-relaxed max-w-[60ch]">
            SteadyArc creates measurable value across the entire care chain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              label: "For clinicians",
              color: "bg-white/10",
              items: [
                "Continuous visibility into recovery between visits",
                "Data-driven decisions instead of patient recall",
                "Earlier detection of deterioration",
                "Better patient prioritization",
              ],
            },
            {
              label: "For patients",
              color: "bg-amber-500",
              items: [
                "Engaging rehabilitation — not repetitive exercises",
                "Feel supported between appointments",
                "Increased motivation and adherence",
                "Awareness of their own progress",
              ],
            },
            {
              label: "For health systems",
              color: "bg-stone-700",
              items: [
                "More patients monitored, same resources",
                "Reduced long-term costs and complications",
                "Fewer unnecessary check-ins",
                "More efficient use of specialist capacity",
              ],
            },
          ].map((group, i) => (
            <div
              key={group.label}
              className={`animate-on-scroll delay-${i + 1} border border-white/10 rounded-2xl p-7 bg-white/5 hover:shadow-lg hover:shadow-black/100/50 transition-shadow`}
            >
              <div className={`w-3 h-3 rounded-full ${group.color} mb-5`} />
              <h3 className="text-lg font-semibold text-white mb-4">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed">
                    <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll delay-4 border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
          <div className="p-8 md:p-10">
            <h3 className="text-lg font-semibold text-white mb-6">
              Health system impact
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Effectiveness", desc: "Earlier detection of recovery changes", icon: "+" },
                { label: "Efficiency", desc: "Monitor more patients with same resources", icon: "+" },
                { label: "Equity", desc: "Accessible without specialized wearables", icon: "+" },
                { label: "Responsiveness", desc: "Timely information between visits", icon: "+" },
                { label: "Health outcomes", desc: "Better rehab adjustments and trajectories", icon: "+" },
                { label: "Financial protection", desc: "Reduced unnecessary visits and costs", icon: "+" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="w-6 h-6 rounded-md bg-white/10 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

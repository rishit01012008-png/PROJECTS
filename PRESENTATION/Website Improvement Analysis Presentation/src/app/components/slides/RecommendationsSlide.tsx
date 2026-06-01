import { AlertTriangle, Clock, Target, CheckCircle2 } from "lucide-react";

export function RecommendationsSlide() {
  const priorities = [
    {
      level: "High Priority",
      timeline: "Phase 1 (Weeks 1-2)",
      icon: AlertTriangle,
      color: "border-red-200 bg-red-50 text-red-800",
      iconColor: "text-red-500",
      items: ["Donation System Integration", "Responsive Mobile Menu", "Sticky Header with CTA"]
    },
    {
      level: "Medium Priority",
      timeline: "Phase 2 (Weeks 3-4)",
      icon: Target,
      color: "border-orange-200 bg-orange-50 text-orange-800",
      iconColor: "text-[#FF6B35]",
      items: ["Interactive Impact Counters", "Dynamic Photo Gallery", "Testimonials Section"]
    },
    {
      level: "Low Priority",
      timeline: "Phase 3 (Weeks 5-6)",
      icon: Clock,
      color: "border-blue-200 bg-blue-50 text-blue-800",
      iconColor: "text-[#16324F]",
      items: ["Team/Staff Section", "Newsletter Signup Flow", "Advanced Event Calendar"]
    }
  ];

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      <div className="mb-8 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">08. Action Plan</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Implementation Priority Matrix</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <p className="text-lg text-gray-600 max-w-3xl">
          To maximize ROI and immediately begin capturing lost donations and volunteer sign-ups, we recommend a phased approach, prioritizing critical structural and conversion issues first.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {priorities.map((col, idx) => (
            <div key={idx} className={`rounded-2xl border-2 ${col.color} p-6 flex flex-col h-full`}>
              <div className="flex items-center gap-3 mb-6 border-b border-black/5 pb-4">
                <col.icon className={`w-8 h-8 ${col.iconColor}`} />
                <div>
                  <h3 className="font-bold text-xl">{col.level}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-70">{col.timeline}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {col.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-white/60 p-4 rounded-xl shadow-sm border border-black/5 flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${col.iconColor}`} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Decorative background element */}
              <div className="mt-auto pt-6 text-center text-sm font-medium opacity-50">
                {idx === 0 ? "Immediate Impact" : idx === 1 ? "Engagement Boost" : "Long-term Value"}
              </div>
            </div>
          ))}
        </div>

        {/* Footer closing remark */}
        <div className="bg-[#16324F] text-white p-6 rounded-xl flex items-center justify-between shadow-lg shadow-[#16324F]/20">
          <div>
            <h4 className="font-bold text-lg mb-1">Ready to transform the digital experience?</h4>
            <p className="text-sm text-blue-200">The proposed changes will transition InAmigos Foundation from a static brochure to an active community platform.</p>
          </div>
          <button className="bg-[#FF6B35] hover:bg-[#FFB703] text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-md">
            Approve Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}
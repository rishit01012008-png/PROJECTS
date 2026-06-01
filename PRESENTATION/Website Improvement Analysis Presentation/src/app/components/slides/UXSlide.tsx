import { MessageSquareQuote, Image, CalendarDays, ClipboardCheck, HelpCircle } from "lucide-react";

export function UXSlide() {
  const newFeatures = [
    { icon: MessageSquareQuote, title: "Testimonials Section", desc: "Builds trust and credibility." },
    { icon: Image, title: "Dynamic Photo Gallery", desc: "Visual proof of NGO impact." },
    { icon: CalendarDays, title: "Event Calendar", desc: "Keeps community engaged." },
    { icon: ClipboardCheck, title: "Volunteer Form", desc: "Streamlines onboarding." },
    { icon: HelpCircle, title: "Interactive FAQ", desc: "Reduces support friction." }
  ];

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      <div className="mb-8 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">06. User Experience Enhancements</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Missing Core Features</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-5 gap-4">
          {newFeatures.map((feat, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center hover:bg-[#16324F] hover:text-white transition-colors group">
              <feat.icon className="w-8 h-8 text-[#FF6B35] mb-3 group-hover:text-[#FFB703] transition-colors" />
              <h4 className="font-bold text-sm mb-1">{feat.title}</h4>
              <p className="text-xs text-gray-500 group-hover:text-gray-300 leading-tight">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Before / After Comparison */}
        <div className="flex-1 grid grid-cols-2 gap-8 mt-4">
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 flex flex-col">
            <h3 className="font-bold text-red-800 text-lg mb-4 text-center border-b border-red-200 pb-2">Before (Current)</h3>
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="w-full max-w-xs bg-white p-4 rounded shadow-sm border border-gray-200 opacity-70 grayscale">
                <div className="w-3/4 h-4 bg-gray-200 rounded mb-2" />
                <div className="w-full h-2 bg-gray-200 rounded mb-1" />
                <div className="w-full h-2 bg-gray-200 rounded mb-1" />
                <div className="w-5/6 h-2 bg-gray-200 rounded" />
              </div>
              <div className="w-full max-w-xs bg-white p-4 rounded shadow-sm border border-gray-200 opacity-70 grayscale">
                <div className="w-1/2 h-4 bg-gray-200 rounded mb-2" />
                <div className="w-full h-12 bg-gray-200 rounded" />
              </div>
              <p className="text-xs text-center text-gray-400 italic">Static, text-heavy, non-interactive pages</p>
            </div>
          </div>

          <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-bl-full opacity-20" />
            <h3 className="font-bold text-green-800 text-lg mb-4 text-center border-b border-green-200 pb-2">After (Proposed)</h3>
            <div className="flex-1 flex flex-col items-center justify-center gap-4 relative z-10">
              {/* Fake Testimonial Card */}
              <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow-md border-l-4 border-[#FFB703] flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
                <div>
                  <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                  <div className="w-4/5 h-2 bg-gray-200 rounded" />
                </div>
              </div>
              
              {/* Fake Gallery/Event Grid */}
              <div className="w-full max-w-sm flex gap-4">
                <div className="flex-1 h-20 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center">
                  <Image className="w-6 h-6 text-blue-300" />
                </div>
                <div className="flex-1 h-20 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-orange-300" />
                </div>
              </div>
              
              <p className="text-xs text-center text-green-700 italic font-medium mt-2">Engaging, modular, and interactive components</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}